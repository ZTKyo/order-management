/**
 * 订单类型定义
 */
export interface Order {
  id: string;
  amount: number;
  agent: string;
  received: boolean;
  receiveDate: string | null;
  entryDate: string | null;
  remark: string;
  paid: boolean;
  paidDate: string | null;
}

/**
 * 新增订单表单数据
 */
export interface OrderFormData {
  id: string;
  amount: string;
  agent: string;
  received: boolean;
  receiveDate: string;
  remark: string;
}

/**
 * 统计卡片数据
 */
export interface StatCard {
  label: string;
  value: string;
  color: string;
  bg: string;
  border: string;
}

/**
 * 筛选类型
 */
export type FilterType = 'all' | 'received' | 'pending';

/**
 * 排序后的订单（带分组信息）
 */
export interface GroupedOrder extends Order {
  isGroupStart: boolean;
  agentCount: number;
}
