/**
 * Firestore 订单数据同步 Hook
 * 实现云端数据存储和实时同步
 */

import { useState, useEffect, useCallback } from 'react';
import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot,
  query, 
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { Order } from '../types';
import { sortByAgent } from '../utils';

interface SyncState {
  syncing: boolean;
  lastSync: Date | null;
  error: string | null;
}

/**
 * 扩展订单类型，包含 Firestore 文档 ID
 */
interface FirestoreOrder extends Order {
  _docId: string;  // Firestore 文档 ID
}

/**
 * Firestore 订单同步 Hook
 */
export function useFirestoreOrders(userId: string | null) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [docIdMap, setDocIdMap] = useState<Record<string, string>>({});
  const [syncState, setSyncState] = useState<SyncState>({
    syncing: false,
    lastSync: null,
    error: null,
  });

  // 实时监听订单数据
  useEffect(() => {
    if (!userId) {
      setOrders([]);
      setDocIdMap({});
      return;
    }

    setSyncState(prev => ({ ...prev, syncing: true }));

    const ordersRef = collection(db, 'users', userId, 'orders');
    const q = query(ordersRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const ordersData: Order[] = [];
        const idMap: Record<string, string> = {};
        
        snapshot.forEach((doc) => {
          const data = doc.data();
          const orderId = data.id || doc.id;
          ordersData.push({
            id: orderId,
            amount: data.amount,
            agent: data.agent,
            received: data.received,
            receiveDate: data.receiveDate,
            entryDate: data.entryDate,
            remark: data.remark || '',
            paid: data.paid || false,
            paidDate: data.paidDate || null,
          });
          // 保存订单号 → Firestore 文档 ID 的映射
          idMap[orderId] = doc.id;
        });
        
        setOrders(sortByAgent(ordersData));
        setDocIdMap(idMap);
        setSyncState({
          syncing: false,
          lastSync: new Date(),
          error: null,
        });
      },
      (error) => {
        console.error('Firestore sync error:', error);
        setSyncState(prev => ({
          ...prev,
          syncing: false,
          error: '同步失败，请检查网络连接',
        }));
      }
    );

    return () => unsubscribe();
  }, [userId]);

  // 获取 Firestore 文档 ID
  const getDocId = useCallback((orderId: string) => {
    return docIdMap[orderId] || orderId;
  }, [docIdMap]);

  // 添加订单
  const addOrder = useCallback(async (orderData: Omit<Order, 'id'>) => {
    if (!userId) throw new Error('请先登录');

    const ordersRef = collection(db, 'users', userId, 'orders');
    await addDoc(ordersRef, {
      ...orderData,
      createdAt: Timestamp.now(),
    });
  }, [userId]);

  // 更新订单
  const updateOrder = useCallback(async (orderId: string, updates: Partial<Order>) => {
    if (!userId) throw new Error('请先登录');

    const firestoreDocId = docIdMap[orderId] || orderId;
    const orderRef = doc(db, 'users', userId, 'orders', firestoreDocId);
    await updateDoc(orderRef, {
      ...updates,
      updatedAt: Timestamp.now(),
    });
  }, [userId, docIdMap]);

  // 删除订单
  const deleteOrder = useCallback(async (orderId: string) => {
    if (!userId) throw new Error('请先登录');

    const firestoreDocId = docIdMap[orderId] || orderId;
    const orderRef = doc(db, 'users', userId, 'orders', firestoreDocId);
    await deleteDoc(orderRef);
  }, [userId, docIdMap]);

  // 批量删除
  const batchDelete = useCallback(async (orderIds: string[]) => {
    if (!userId) throw new Error('请先登录');

    const deletePromises = orderIds.map(id => {
      const firestoreDocId = docIdMap[id] || id;
      const orderRef = doc(db, 'users', userId, 'orders', firestoreDocId);
      return deleteDoc(orderRef);
    });

    await Promise.all(deletePromises);
  }, [userId, docIdMap]);

  // 标记收货
  const markReceived = useCallback(async (orderId: string, receiveDate: string) => {
    await updateOrder(orderId, {
      received: true,
      receiveDate,
    });
  }, [updateOrder]);

  // 标记收款
  const markPaid = useCallback(async (orderId: string, paidDate: string) => {
    await updateOrder(orderId, {
      paid: true,
      paidDate,
    });
  }, [updateOrder]);

  // 更新备注
  const updateRemark = useCallback(async (orderId: string, remark: string) => {
    await updateOrder(orderId, { remark });
  }, [updateOrder]);

  return {
    orders,
    syncState,
    addOrder,
    updateOrder,
    deleteOrder,
    batchDelete,
    markReceived,
    markPaid,
    updateRemark,
  };
}
