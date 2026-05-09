/**
 * Toast 提示组件
 */

import React, { useEffect, memo } from 'react';
import styles from './Toast.module.css';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = memo(({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className={styles.toast}>{message}</div>;
});

Toast.displayName = 'Toast';

export default Toast;
