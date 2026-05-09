/**
 * 订单行组件
 */

import React, { memo, useCallback } from 'react';
import { Order } from '../../types';
import { formatDate, isSettleable } from '../../utils';
import StatusBadge from '../StatusBadge/StatusBadge';
import RemarkCell from '../RemarkCell/RemarkCell';
import styles from './OrderRow.module.css';

interface OrderRowProps {
  order: Order;
  isGroupStart: boolean;
  agentCount: number;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onMarkReceived: (id: string) => void;
  onMarkPaid: (id: string) => void;
  onUpdateRemark: (id: string, remark: string) => void;
  onDelete: (id: string) => void;
}

const OrderRow: React.FC<OrderRowProps> = memo(
  ({
    order,
    isGroupStart,
    agentCount,
    isSelected,
    onSelect,
    onMarkReceived,
    onMarkPaid,
    onUpdateRemark,
    onDelete,
  }) => {
    const handleSelect = useCallback(() => {
      onSelect(order.id);
    }, [order.id, onSelect]);

    const handleMarkReceived = useCallback(() => {
      onMarkReceived(order.id);
    }, [order.id, onMarkReceived]);

    const handleMarkPaid = useCallback(() => {
      onMarkPaid(order.id);
    }, [order.id, onMarkPaid]);

    const handleUpdateRemark = useCallback(
      (remark: string) => {
        onUpdateRemark(order.id, remark);
      },
      [order.id, onUpdateRemark]
    );

    const handleDelete = useCallback(() => {
      onDelete(order.id);
    }, [order.id, onDelete]);

    return (
      <tr className={`${styles.row} ${isGroupStart ? styles.groupRow : ''}`}>
        {/* 复选框列 */}
        <td className={styles.cell}>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={handleSelect}
            className={styles.checkbox}
          />
        </td>
        {/* 客服列 */}
        <td className={styles.cell}>
          {isGroupStart ? (
            <div>
              <div className={styles.agentName}>{order.agent}</div>
              <div className={styles.agentCount}>{agentCount} 单</div>
            </div>
          ) : (
            <span className={styles.indent}>↓</span>
          )}
        </td>
        {/* 订单号列 */}
        <td className={styles.orderId}>{order.id}</td>
        {/* 金额列 */}
        <td className={styles.amount}>¥{order.amount}</td>
        {/* 备注列 */}
        <td className={styles.cell}>
          <RemarkCell value={order.remark} onSave={handleUpdateRemark} />
        </td>
        {/* 状态列 */}
        <td className={styles.cell}>
          <StatusBadge order={order} />
        </td>
        {/* 收货日期列 */}
        <td className={styles.date}>
          {order.receiveDate ? formatDate(order.receiveDate) : '—'}
        </td>
        {/* 录入日期列 */}
        <td className={styles.date}>
          {order.entryDate ? (
            <span className={styles.entryDate}>{formatDate(order.entryDate)}</span>
          ) : (
            <span className={styles.history}>历史</span>
          )}
        </td>
        {/* 操作列 */}
        <td className={styles.cell}>
          <div className={styles.actions}>
            {!order.received && (
              <button className={styles.btnGhost} onClick={handleMarkReceived}>
                确认收货
              </button>
            )}
            {order.received && !order.paid && (
              <button className={styles.btnPaid} onClick={handleMarkPaid}>
                确认收款
              </button>
            )}
            <button className={styles.btnDanger} onClick={handleDelete}>
              删除
            </button>
          </div>
        </td>
      </tr>
    );
  }
);

OrderRow.displayName = 'OrderRow';

export default OrderRow;
