/**
 * 工具函数
 */

import { Order, FilterType } from '../types';

/**
 * 获取本地日期字符串 (YYYY-MM-DD)
 */
export function localToday(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/**
 * 解析本地日期字符串
 */
export function parseLocalDate(str: string): Date {
  if (!str || typeof str !== 'string') {
    return new Date(NaN);
  }
  const parts = str.split('-');
  if (parts.length !== 3) {
    return new Date(NaN);
  }
  const [y, m, d] = parts.map(Number);
  if (isNaN(y) || isNaN(m) || isNaN(d) || m < 1 || m > 12 || d < 1 || d > 31) {
    return new Date(NaN);
  }
  return new Date(y, m - 1, d);
}

/**
 * 获取下一个结算日期
 * - 16日之前：当月16日
 * - 16日及之后：下月1日
 * 返回格式：YYYY-MM-DD
 */
export function nextSettlementDate(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth();
  const d = now.getDate();
  let date: Date;
  if (d < 16) {
    date = new Date(y, m, 16);
  } else {
    date = new Date(y, m + 1, 1);
  }
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

/**
 * 判断订单是否可结算
 * 条件：已收货 + 有收货日期 + 未收款 + 收货日期+7天 <= 下次结算日期
 */
export function isSettleable(order: Order): boolean {
  if (!order.received || !order.receiveDate || order.paid) return false;
  const unlock = new Date(parseLocalDate(order.receiveDate));
  unlock.setDate(unlock.getDate() + 7);
  const nextDate = new Date(parseLocalDate(nextSettlementDate()));
  return unlock <= nextDate;
}

/**
 * 格式化日期显示 (MM月DD日)
 */
export function formatDate(str: string | null): string {
  if (!str || typeof str !== 'string') return '—';
  const parts = str.split('-');
  if (parts.length !== 3) return '—';
  const [, mo, d] = parts;
  if (!mo || !d) return '—';
  return `${mo}月${d}日`;
}

/**
 * 格式化金额显示
 */
export function formatAmount(amount: number): string {
  return `¥${amount.toLocaleString()}`;
}

/**
 * 验证订单号格式
 * 格式：YYMMDD-XXXXXXXXXXXXXXX (15位数字)
 */
export function validateOrderId(id: string): { valid: boolean; message: string } {
  if (!id.trim()) {
    return { valid: false, message: '订单号不能为空' };
  }
  const pattern = /^\d{6}-\d{15}$/;
  if (!pattern.test(id.trim())) {
    return { valid: false, message: '订单号格式应为：YYMMDD-XXXXXXXXXXXXXXX' };
  }
  return { valid: true, message: '' };
}

/**
 * 验证金额
 */
export function validateAmount(amount: string): { valid: boolean; message: string } {
  if (!amount) {
    return { valid: false, message: '金额不能为空' };
  }
  const num = Number(amount);
  if (isNaN(num) || num <= 0) {
    return { valid: false, message: '请输入有效的正数金额' };
  }
  return { valid: true, message: '' };
}

/**
 * 按客服排序订单
 * 排序规则：客服名升序 → 已收货优先 → 收货日期降序
 */
export function sortByAgent(orders: Order[]): Order[] {
  return [...orders].sort((a, b) => {
    if (a.agent < b.agent) return -1;
    if (a.agent > b.agent) return 1;
    if (a.received !== b.received) return a.received ? -1 : 1;
    return (b.receiveDate || '').localeCompare(a.receiveDate || '');
  });
}

/**
 * 筛选订单
 */
export function filterOrders(
  orders: Order[],
  filter: FilterType,
  search: string
): Order[] {
  return orders.filter(o => {
    const matchFilter = filter === 'all' || (filter === 'received' ? o.received : !o.received);
    const searchLower = search.toLowerCase();
    const matchSearch =
      o.id.toLowerCase().includes(searchLower) ||
      o.agent.toLowerCase().includes(searchLower) ||
      (o.remark || '').toLowerCase().includes(searchLower);
    return matchFilter && matchSearch;
  });
}

/**
 * 计算分组首行索引
 */
export function computeAgentFirstIndex(orders: Order[]): Record<string, number> {
  const agentFirstIndex: Record<string, number> = {};
  orders.forEach((o, i) => {
    if (!(o.agent in agentFirstIndex)) {
      agentFirstIndex[o.agent] = i;
    }
  });
  return agentFirstIndex;
}

/**
 * 导出 CSV 文件
 */
export function exportCSV(orders: Order[]): void {
  const header = ['订单号', '金额（¥）', '客服', '收货状态', '收货日期', '收款状态', '收款日期', '录入日期', '备注'];
  const rows = orders.map(o => [
    o.id,
    o.amount.toString(),
    o.agent,
    o.received ? '已收货' : '未收货',
    o.receiveDate || '',
    o.paid ? '已收款' : '未收款',
    o.paidDate || '',
    o.entryDate || '历史',
    o.remark || '',
  ]);

  const csv = [header, ...rows]
    .map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(','))
    .join('\n');

  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `订单台账_${localToday()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * 从 localStorage 加载订单
 */
export function loadOrdersFromStorage(defaultOrders: Order[]): Order[] {
  try {
    const saved = localStorage.getItem('order_records_v2');
    if (saved) {
      return JSON.parse(saved).map((o: Order) => ({
        ...o,
        remark: o.remark ?? '',
        paid: o.paid ?? false,
        paidDate: o.paidDate ?? null,
      }));
    }
  } catch {}

  // 迁移旧版本数据
  try {
    const old = localStorage.getItem('order_records_v1');
    if (old) {
      return JSON.parse(old).map((o: Order) => ({
        ...o,
        remark: o.remark ?? '',
        paid: o.paid ?? false,
        paidDate: o.paidDate ?? null,
      }));
    }
  } catch {}

  return defaultOrders;
}

/**
 * 保存订单到 localStorage
 */
export function saveOrdersToStorage(orders: Order[]): void {
  try {
    localStorage.setItem('order_records_v2', JSON.stringify(orders));
  } catch {}
}
