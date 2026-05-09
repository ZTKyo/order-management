/**
 * 状态徽章组件
 */

import React, { memo } from 'react';
import { Order } from '../../types';
import { isSettleable } from '../../utils';
import styles from './StatusBadge.module.css';

interface StatusBadgeProps {
  order: Order;
}

const StatusBadge: React.FC<StatusBadgeProps> = memo(({ order }) => {
  if (order.paid) {
    return <span className={styles.paid}>已收款</span>;
  }
  if (order.received) {
    const settleable = isSettleable(order);
    return (
      <div className={styles.container}>
        <span className={styles.received}>已收货</span>
        {settleable && <span className={styles.settleable}>✦ 可结算</span>}
      </div>
    );
  }
  return <span className={styles.pending}>未收货</span>;
});

StatusBadge.displayName = 'StatusBadge';

export default StatusBadge;
