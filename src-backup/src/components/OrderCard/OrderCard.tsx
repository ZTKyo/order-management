/**
 * 移动端订单卡片组件
 * 替代桌面端的表格行，以竖向卡片形式展示订单信息
 */

import React, { memo, useCallback } from 'react';
import { Order } from '../../types';
import { formatDate, isSettleable } from '../../utils';
import styles from './OrderCard.module.css';

interface OrderCardProps {
  order: Order;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onMarkReceived: (id: string) => void;
  onMarkPaid: (id: string) => void;
  onUpdateRemark: (id: string, remark: string) => void;
  onDelete: (id: string) => void;
}

const OrderCard: React.FC<OrderCardProps> = memo(
  ({
    order,
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

    // 状态判断
    const getStatusInfo = () => {
      if (order.paid) {
        return { label: '已收款', className: styles.statusPaid };
      }
      if (order.received) {
        const settleable = isSettleable(order);
        if (settleable) {
          return { label: '可结算', className: styles.statusSettleable };
        }
        return { label: '已收货', className: styles.statusReceived };
      }
      return { label: '未收货', className: styles.statusPending };
    };

    const status = getStatusInfo();

    return (
      <div
        className={`${styles.card} ${isSelected ? styles.selected : ''}`}
        onClick={handleSelect}
      >
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

        {/* 状态 + 日期 */}
        <div className={styles.metaRow}>
          <span className={status.className}>{status.label}</span>
          {order.receiveDate && (
            <span className={styles.date}>收货 {formatDate(order.receiveDate)}</span>
          )}
          {order.entryDate ? (
            <span className={styles.date}>录入 {formatDate(order.entryDate)}</span>
          ) : (
            <span className={styles.date}>录入 历史</span>
          )}
        </div>

        {/* 操作按钮 */}
        <div className={styles.actions} onClick={e => e.stopPropagation()}>
          {!order.received && (
            <button className={styles.btnReceived} onClick={handleMarkReceived}>
              确认收货
            </button>
          )}
          {order.received && !order.paid && (
            <button className={styles.btnPaid} onClick={handleMarkPaid}>
              确认收款
            </button>
          )}
          <button className={styles.btnRemark} onClick={() => {
            const newRemark = prompt('修改备注：', order.remark);
            if (newRemark !== null) {
              handleUpdateRemark(newRemark);
            }
          }}>
            备注
          </button>
          <button className={styles.btnDelete} onClick={handleDelete}>
            删除
          </button>
        </div>

        {/* 选中指示器 */}
        {isSelected && <div className={styles.checkIndicator}>&#10003;</div>}
      </div>
    );
  }
);

OrderCard.displayName = 'OrderCard';

export default OrderCard;
