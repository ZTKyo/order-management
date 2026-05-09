/**
 * Firebase 配置文件
 */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, CACHE_SIZE_UNLIMITED } from 'firebase/firestore';

// Firebase 配置
const firebaseConfig = {
  apiKey: "AIzaSyDS8jEcdPzYcDiDRZpvopMM6qxX1t6nNzU",
  authDomain: "order-management-62810.firebaseapp.com",
  projectId: "order-management-62810",
  storageBucket: "order-management-62810.firebasestorage.app",
  messagingSenderId: "593654538436",
  appId: "1:593654538436:web:322125e0c1bba4f0086991"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 获取 Auth 实例
export const auth = getAuth(app);

// 获取 Firestore 实例（使用新的缓存配置）
export const db = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED,
});

export default app;
