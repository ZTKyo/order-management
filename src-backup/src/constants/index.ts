/**
 * 常量定义
 */

import { Order, OrderFormData } from '../types';

/** 本地存储键名 */
export const STORAGE_KEY = 'order_records_v2';
export const OLD_STORAGE_KEY = 'order_records_v1';
export const AGENTS_STORAGE_KEY = 'custom_agents_v1';

/** 默认客服列表 */
export const DEFAULT_AGENTS = ['小琪', '小八', '小吕'];

/** 客服列表（兼容旧引用） */
export const AGENTS = DEFAULT_AGENTS;

/** 初始订单数据 */
export const INITIAL_ORDERS: Order[] = [
  { id: '260418-237397644893525', amount: 180, agent: '小琪', received: true, receiveDate: '2025-04-19', entryDate: null, remark: '', paid: false, paidDate: null },
  { id: '260415-530548068762030', amount: 170, agent: '小琪', received: true, receiveDate: '2025-04-30', entryDate: null, remark: '', paid: false, paidDate: null },
  { id: '260414-447962202510422', amount: 170, agent: '小八', received: true, receiveDate: '2025-04-16', entryDate: null, remark: '', paid: false, paidDate: null },
  { id: '260413-479765470812695', amount: 170, agent: '小琪', received: true, receiveDate: '2025-04-22', entryDate: null, remark: '', paid: false, paidDate: null },
  { id: '260421-027367851642947', amount: 170, agent: '小琪', received: true, receiveDate: '2025-04-30', entryDate: null, remark: '', paid: false, paidDate: null },
  { id: '260423-249624082840011', amount: 170, agent: '小吕', received: false, receiveDate: null, entryDate: null, remark: '', paid: false, paidDate: null },
  { id: '260421-133064312331214', amount: 170, agent: '小八', received: false, receiveDate: null, entryDate: null, remark: '', paid: false, paidDate: null },
  { id: '260423-565958469962867', amount: 350, agent: '小琪', received: false, receiveDate: null, entryDate: null, remark: '', paid: false, paidDate: null },
];

/** 初始表单数据 */
export const INITIAL_FORM_DATA: OrderFormData = {
  id: '',
  amount: '',
  agent: AGENTS[0],
  received: false,
  receiveDate: '',
  remark: '',
};

/** 表头配置 */
export const TABLE_HEADERS = ['客服', '订单号', '金额', '备注', '状态', '收货日期', '录入日期', '操作'] as const;
export const PAID_TABLE_HEADERS = ['客服', '订单号', '金额', '备注', '收货日期', '收款日期', '操作'] as const;

/** 筛选选项 */
export const FILTER_OPTIONS = [
  { value: 'all', label: '全部' },
  { value: 'received', label: '已收货' },
  { value: 'pending', label: '未收货' },
] as const;
