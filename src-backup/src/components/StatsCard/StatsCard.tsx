/**
 * 统计卡片组件
 */

import React, { memo } from 'react';
import { StatCard } from '../../types';
import styles from './StatsCard.module.css';

interface StatsCardProps {
  stats: StatCard;
}

const StatsCard: React.FC<StatsCardProps> = memo(({ stats }) => {
  const isDark = stats.bg === '#1a1a1a';

  return (
    <div
      className={styles.card}
      style={{
        background: stats.bg,
        borderColor: stats.border,
      }}
    >
      <div
        className={styles.label}
        style={{ color: isDark ? '#999' : '#aaa' }}
      >
        {stats.label}
      </div>
      <div className={styles.value} style={{ color: stats.color }}>
        {stats.value}
      </div>
    </div>
  );
});

StatsCard.displayName = 'StatsCard';

export default StatsCard;
