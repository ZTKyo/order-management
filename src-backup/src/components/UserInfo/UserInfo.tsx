/**
 * 用户信息组件
 * 显示已登录用户信息和登出按钮
 */

import React, { memo } from 'react';
import styles from './UserInfo.module.css';

interface UserInfoProps {
  email: string;
  onLogout: () => void;
  syncing?: boolean;
}

const UserInfo: React.FC<UserInfoProps> = memo(({ email, onLogout, syncing }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          {email.charAt(0).toUpperCase()}
        </div>
        <div className={styles.details}>
          <div className={styles.email}>{email}</div>
          {syncing && <div className={styles.syncing}>同步中...</div>}
        </div>
      </div>
      <button className={styles.logoutBtn} onClick={onLogout}>
        退出登录
      </button>
    </div>
  );
});

UserInfo.displayName = 'UserInfo';

export default UserInfo;
