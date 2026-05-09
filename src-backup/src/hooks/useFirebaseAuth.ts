/**
 * Firebase 邮箱密码认证 Hook
 * 处理用户注册、登录、登出、状态监听
 */

import { useState, useEffect, useCallback } from 'react';
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/config';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

/**
 * Firebase 认证 Hook
 */
export function useFirebaseAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  // 监听登录状态
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setState({ user, loading: false, error: null });
      },
      (error) => {
        setState({ user: null, loading: false, error: error.message });
      }
    );

    return () => unsubscribe();
  }, []);

  // 注册
  const register = useCallback(async (email: string, password: string, displayName?: string) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const result = await createUserWithEmailAndPassword(auth, email, password);
      
      // 设置显示名称
      if (displayName && result.user) {
        await updateProfile(result.user, { displayName });
      }
      
      setState({ user: result.user, loading: false, error: null });
      return result.user;
    } catch (error: any) {
      const message = getErrorMessage(error.code);
      setState(prev => ({ ...prev, loading: false, error: message }));
      throw new Error(message);
    }
  }, []);

  // 登录
  const login = useCallback(async (email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const result = await signInWithEmailAndPassword(auth, email, password);
      setState({ user: result.user, loading: false, error: null });
      return result.user;
    } catch (error: any) {
      const message = getErrorMessage(error.code);
      setState(prev => ({ ...prev, loading: false, error: message }));
      throw new Error(message);
    }
  }, []);

  // 登出
  const logout = useCallback(async () => {
    try {
      await signOut(auth);
      setState({ user: null, loading: false, error: null });
    } catch (error: any) {
      setState(prev => ({ ...prev, error: error.message }));
      throw error;
    }
  }, []);

  // 重置密码
  const resetPassword = useCallback(async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      const message = getErrorMessage(error.code);
      throw new Error(message);
    }
  }, []);

  // 清除错误
  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  return {
    ...state,
    register,
    login,
    logout,
    resetPassword,
    clearError,
    isLoggedIn: !!state.user,
    userId: state.user?.uid || null,
    displayName: state.user?.displayName || state.user?.email || null,
  };
}

// 错误信息翻译
function getErrorMessage(code: string): string {
  const messages: Record<string, string> = {
    'auth/email-already-in-use': '该邮箱已被注册',
    'auth/invalid-email': '邮箱格式不正确',
    'auth/operation-not-allowed': '该登录方式未启用',
    'auth/weak-password': '密码太弱，请使用至少6位密码',
    'auth/user-disabled': '该账号已被禁用',
    'auth/user-not-found': '该邮箱未注册',
    'auth/wrong-password': '密码错误',
    'auth/invalid-credential': '邮箱或密码错误',
    'auth/too-many-requests': '登录失败次数过多，请稍后再试',
    'auth/network-request-failed': '网络连接失败',
  };
  return messages[code] || '操作失败，请重试';
}
