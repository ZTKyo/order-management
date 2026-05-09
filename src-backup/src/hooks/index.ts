/**
 * 自定义 Hooks 导出
 */

export { usePWA } from './usePWA';
export { useFirebaseAuth } from './useFirebaseAuth';
export { useFirestoreOrders } from './useFirestoreOrders';

// 保留原有的本地存储 hooks（作为离线备份）
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Order, FilterType } from '../types';
import { INITIAL_ORDERS } from '../constants';
import {
  loadOrdersFromStorage,
  saveOrdersToStorage,
  sortByAgent,
  filterOrders,
  localToday,
  isSettleable,
  nextSettlementDate,
} from '../utils';

/**
 * 本地存储订单管理 Hook（离线模式）
 */
export function useLocalOrders() {
  const [orders, setOrders] = useState<Order[]>(() =>
    loadOrdersFromStorage(INITIAL_ORDERS)
  );

  useEffect(() => {
    saveOrdersToStorage(orders);
  }, [orders]);

  const addOrder = useCallback((orderData: Omit<Order, 'id'> & { id?: string }) => {
    const newOrder: Order = {
      ...orderData,
      id: orderData.id || Date.now().toString(),
    };
    setOrders(prev => sortByAgent([newOrder, ...prev]));
  }, []);

  const markReceived = useCallback((id: string) => {
    setOrders(prev =>
      prev.map(o =>
        o.id === id
          ? { ...o, received: true, receiveDate: o.receiveDate || localToday() }
          : o
      )
    );
  }, []);

  const markPaid = useCallback((id: string) => {
    setOrders(prev =>
      prev.map(o =>
        o.id === id ? { ...o, paid: true, paidDate: localToday() } : o
      )
    );
  }, []);

  const updateRemark = useCallback((id: string, remark: string) => {
    setOrders(prev =>
      prev.map(o => (o.id === id ? { ...o, remark } : o))
    );
  }, []);

  const deleteOrder = useCallback((id: string) => {
    setOrders(prev => prev.filter(o => o.id !== id));
  }, []);

  const batchDelete = useCallback((ids: string[]) => {
    setOrders(prev => prev.filter(o => !ids.includes(o.id)));
  }, []);

  const batchMarkReceived = useCallback((ids: string[]) => {
    setOrders(prev =>
      prev.map(o =>
        ids.includes(o.id)
          ? { ...o, received: true, receiveDate: o.receiveDate || localToday() }
          : o
      )
    );
  }, []);

  const resetOrders = useCallback(() => {
    setOrders(INITIAL_ORDERS);
  }, []);

  return {
    orders,
    addOrder,
    markReceived,
    markPaid,
    updateRemark,
    deleteOrder,
    batchDelete,
    batchMarkReceived,
    resetOrders,
  };
}

/**
 * 订单统计 Hook
 */
export function useOrderStats(orders: Order[], filter: FilterType, search: string) {
  const filteredOrders = useMemo(() => {
    return filterOrders(orders, filter, search);
  }, [orders, filter, search]);

  const filteredUnpaid = useMemo(() => {
    return filteredOrders.filter(o => !o.paid);
  }, [filteredOrders]);

  const filteredPaid = useMemo(() => {
    return filteredOrders.filter(o => o.paid);
  }, [filteredOrders]);

  const stats = useMemo(() => {
    const totalOrders = orders.length;
    const totalAmount = orders.reduce((s, o) => s + o.amount, 0);
    const receivedAmount = orders
      .filter(o => o.received && !o.paid)
      .reduce((s, o) => s + o.amount, 0);
    const paidAmount = orders
      .filter(o => o.paid)
      .reduce((s, o) => s + o.amount, 0);

    const nextDate = nextSettlementDate();
    const settleableAmount = orders
      .filter(o => isSettleable(o))
      .reduce((s, o) => s + o.amount, 0);

    return {
      totalOrders,
      totalAmount,
      receivedAmount,
      paidAmount,
      settleableAmount,
      nextDateStr: nextDate || '-',
    };
  }, [orders]);

  const agentFirstIndex = useMemo(() => {
    const map: Record<string, number> = {};
    filteredUnpaid.forEach((o, i) => {
      if (!(o.agent in map)) {
        map[o.agent] = i;
      }
    });
    return map;
  }, [filteredUnpaid]);

  const paidAgentFirstIndex = useMemo(() => {
    const map: Record<string, number> = {};
    filteredPaid.forEach((o, i) => {
      if (!(o.agent in map)) {
        map[o.agent] = i;
      }
    });
    return map;
  }, [filteredPaid]);

  return {
    filteredOrders,
    filteredUnpaid,
    filteredPaid,
    stats,
    agentFirstIndex,
    paidAgentFirstIndex,
  };
}

/**
 * Toast 提示 Hook
 */
export function useToast() {
  const [toast, setToast] = useState<string | null>(null);

  const notify = useCallback((message: string) => {
    setToast(message);
  }, []);

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  return { toast, notify, hideToast };
}
