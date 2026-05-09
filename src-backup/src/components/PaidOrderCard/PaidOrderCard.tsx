/**
 * 移动端已收款订单卡片组件
 * 简洁版卡片，展示已收款订单信息
 */

import React, { memo, useCallback } from 'react';
import { Order } from '../../types';
import { formatDate } from '../../utils';
import styles from './PaidOrderCard.module.css';

interface PaidOrderCardProps {
  order: Order;
  onDelete: (id: string) => void;
}

const PaidOrderCard: React.FC<PaidOrderCardProps> = memo(({ order, onDelete }) => {
  const handleDelete = useCallback(() => {
    onDelete(order.id);
  }, [order.id, onDelete]);

  return (
    <div className={styles.card}>
      {/* 顶部：客服名称 + 金额 */}
      <div className={styles.topRow}>
        <div className={styles.agentName}>{order.agent}</div>
        <div className={styles.amount}>¥{order.amount.toLocaleString()}</div>
      </div>

      {/* 订单号 */}
      <div className={styles.orderId}>{order.id}</div>

      {/* 备注 */}
      {order.remark && (
        <div className={styles.remark}>
          <span className={styles.remarkLabel}>备注：</span>
          <span className={styles.remarkText}>{order.remark}</span>
        </div>
      )}

      {/* 日期行 */}
      <div className={styles.metaRow}>
        {order.receiveDate && (
          <span className={styles.date}>收货 {formatDate(order.receiveDate)}</span>
        )}
        {order.paidDate && (
          <span className={styles.paidDate}>收款 {formatDate(order.paidDate)}</span>
        )}
      </div>

      {/* 删除按钮 */}
      <div className={styles.actions}>
        <button className={styles.btnDelete} onClick={handleDelete}>
          删除
        </button>
      </div>
    </div>
  );
});

PaidOrderCard.displayName = 'PaidOrderCard';

export default PaidOrderCard;
