/**
 * 已收款订单折叠区域组件
 */

import React, { memo, useCallback, useMemo } from 'react';
import { Order } from '../../types';
import { formatDate } from '../../utils';
import PaidOrderCard from '../PaidOrderCard/PaidOrderCard';
import styles from './PaidOrdersSection.module.css';

interface PaidOrdersSectionProps {
  orders: Order[];
  agentFirstIndex: Record<string, number>;
  onDelete: (id: string) => void;
  isMobile?: boolean;
}

const PaidOrdersSection: React.FC<PaidOrdersSectionProps> = memo(
  ({ orders, agentFirstIndex, onDelete, isMobile = false }) => {
    const [expanded, setExpanded] = React.useState(false);

    const totalAmount = orders.reduce((s, o) => s + o.amount, 0);

    // 预计算客服数量（避免 O(n^2)）
    const agentCounts = useMemo(() => {
      const counts: Record<string, number> = {};
      orders.forEach(o => { counts[o.agent] = (counts[o.agent] || 0) + 1; });
      return counts;
    }, [orders]);

    const handleDelete = useCallback(
      (id: string) => {
        onDelete(id);
      },
      [onDelete]
    );

    return (
      <div className={styles.section}>
        {/* 折叠标题栏 */}
        <div className={styles.header} onClick={() => setExpanded(v => !v)}>
          <div className={styles.headerLeft}>
            <span className={styles.title}>已收款订单</span>
            <span className={styles.badge}>
              {orders.length} 单 · ¥{totalAmount.toLocaleString()}
            </span>
          </div>
          <span
            className={styles.arrow}
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            ▾
          </span>
        </div>

        {/* 折叠内容 */}
        {expanded && (
          <div className={styles.content}>
            {isMobile ? (
              /* 移动端：卡片列表 */
              <div className={styles.cardList}>
                {orders.length === 0 ? (
                  <div className={styles.empty}>暂无已收款订单</div>
                ) : (
                  orders.map(o => (
                    <PaidOrderCard
                      key={o.id}
                      order={o}
                      onDelete={handleDelete}
                    />
                  ))
                )}
              </div>
            ) : (
              /* 桌面端：表格 */
              <table className={styles.table}>
                <thead>
                  <tr>
                    {['客服', '订单号', '金额', '备注', '收货日期', '收款日期', '操作'].map(h => (
                      <th key={h} className={styles.th}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {orders.length === 0 ? (
                    <tr>
                      <td colSpan={7} className={styles.empty}>
                        暂无已收款订单
                      </td>
                    </tr>
                  ) : (
                    orders.map((o, i) => {
                      const isGroupStart = agentFirstIndex[o.agent] === i;
                      const agentCount = agentCounts[o.agent];

                      return (
                        <tr key={o.id} className={styles.row}>
                          <td className={styles.td}>
                            {isGroupStart ? (
                              <div>
                                <div className={styles.agentName}>{o.agent}</div>
                                <div className={styles.agentCount}>{agentCount} 单</div>
                              </div>
                            ) : (
                              <span className={styles.indent}>↓</span>
                            )}
                          </td>
                          <td className={styles.orderId}>{o.id}</td>
                          <td className={styles.amount}>¥{o.amount}</td>
                          <td className={styles.td}>
                            {o.remark || <span className={styles.noRemark}>—</span>}
                          </td>
                          <td className={styles.date}>
                            {o.receiveDate ? formatDate(o.receiveDate) : '—'}
                          </td>
                          <td className={styles.paidDate}>
                            {o.paidDate ? formatDate(o.paidDate) : '—'}
                          </td>
                          <td className={styles.td}>
                            <button
                              className={styles.btnDanger}
                              onClick={() => handleDelete(o.id)}
                            >
                              删除
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    );
  }
);

PaidOrdersSection.displayName = 'PaidOrdersSection';

export default PaidOrdersSection;
