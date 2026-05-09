/**
 * PWA 安装提示组件
 */

import React, { memo } from 'react';
import styles from './InstallPrompt.module.css';

interface InstallPromptProps {
  isVisible: boolean;
  isInstallable: boolean;
  isInstalled: boolean;
  isOffline: boolean;
  onInstall: () => void;
  onDismiss: () => void;
}

const InstallPrompt: React.FC<InstallPromptProps> = memo(
  ({ isVisible, isInstallable, isInstalled, isOffline, onInstall, onDismiss }) => {
    if (!isVisible) return null;

    // 已安装状态
    if (isInstalled) {
      return (
        <div className={styles.container}>
          <div className={`${styles.prompt} ${styles.installed}`}>
            <div className={styles.icon}>✓</div>
            <div className={styles.content}>
              <div className={styles.title}>应用已安装</div>
              <div className={styles.desc}>您可以从主屏幕快速访问订单管理</div>
            </div>
            <button className={styles.closeBtn} onClick={onDismiss}>
              ✕
            </button>
          </div>
        </div>
      );
    }

    // 离线状态
    if (isOffline) {
      return (
        <div className={styles.container}>
          <div className={`${styles.prompt} ${styles.offline}`}>
            <div className={styles.icon}>📡</div>
            <div className={styles.content}>
              <div className={styles.title}>离线模式</div>
              <div className={styles.desc}>您正在离线使用，数据将保存在本地</div>
            </div>
          </div>
        </div>
      );
    }

    // 可安装状态
    if (isInstallable) {
      return (
        <div className={styles.container}>
          <div className={styles.prompt}>
            <div className={styles.icon}>📱</div>
            <div className={styles.content}>
              <div className={styles.title}>添加到主屏幕</div>
              <div className={styles.desc}>安装后像 App 一样使用，离线也能访问</div>
            </div>
            <div className={styles.actions}>
              <button className={styles.installBtn} onClick={onInstall}>
                安装
              </button>
              <button className={styles.dismissBtn} onClick={onDismiss}>
                稍后
              </button>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
);

InstallPrompt.displayName = 'InstallPrompt';

export default InstallPrompt;
