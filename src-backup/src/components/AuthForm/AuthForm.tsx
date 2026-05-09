/**
 * 登录/注册组件
 */

import React, { useState, memo } from 'react';
import styles from './AuthForm.module.css';

interface AuthFormProps {
  onLogin: (email: string, password: string) => Promise<void>;
  onRegister: (email: string, password: string) => Promise<void>;
  loading: boolean;
  error: string | null;
  clearError: () => void;
}

const AuthForm: React.FC<AuthFormProps> = memo(({
  onLogin,
  onRegister,
  loading,
  error,
  clearError,
}) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setLocalError('');

    // 验证
    if (!email.trim()) {
      setLocalError('请输入邮箱');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setLocalError('请输入有效的邮箱地址');
      return;
    }
    if (!password) {
      setLocalError('请输入密码');
      return;
    }
    if (password.length < 6) {
      setLocalError('密码至少6位');
      return;
    }

    if (isRegister) {
      if (password !== confirmPassword) {
        setLocalError('两次密码不一致');
        return;
      }
      await onRegister(email.trim(), password);
    } else {
      await onLogin(email.trim(), password);
    }
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setLocalError('');
    clearError();
  };

  const displayError = localError || error;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>订单管理系统</h1>
          <p className={styles.subtitle}>
            {isRegister ? '创建账号，开启云端同步' : '登录账号，同步您的数据'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>邮箱</label>
            <input
              type="email"
              className={styles.input}
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>密码</label>
            <input
              type="password"
              className={styles.input}
              placeholder="至少6位密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          {isRegister && (
            <div className={styles.field}>
              <label className={styles.label}>确认密码</label>
              <input
                type="password"
                className={styles.input}
                placeholder="再次输入密码"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          )}

          {displayError && (
            <div className={styles.error}>{displayError}</div>
          )}

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
          >
            {loading ? '处理中...' : (isRegister ? '注册' : '登录')}
          </button>
        </form>

        <div className={styles.footer}>
          <span className={styles.footerText}>
            {isRegister ? '已有账号？' : '没有账号？'}
          </span>
          <button
            type="button"
            className={styles.switchBtn}
            onClick={toggleMode}
          >
            {isRegister ? '立即登录' : '立即注册'}
          </button>
        </div>

        <div className={styles.hint}>
          <p>💡 注册后可在多设备间同步数据</p>
          <p>🔒 数据安全存储在云端</p>
        </div>
      </div>
    </div>
  );
});

AuthForm.displayName = 'AuthForm';

export default AuthForm;
