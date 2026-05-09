/**
 * 订单管理主应用组件
 * 
 * 功能：
 * - 用户登录/注册（邮箱密码）
 * - 订单云端同步
 * - 离线支持
 */

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { FilterType, StatCard } from './types';
import { FILTER_OPTIONS, TABLE_HEADERS, DEFAULT_AGENTS, AGENTS_STORAGE_KEY } from './constants';
import { usePWA, useFirebaseAuth, useFirestoreOrders, useOrderStats, useToast } from './hooks';
import { exportCSV, localToday } from './utils';
import Toast from './components/Toast/Toast';
import OrderForm from './components/OrderForm/OrderForm';
import OrderRow from './components/OrderRow/OrderRow';
import OrderCard from './components/OrderCard/OrderCard';
import StatsCard from './components/StatsCard/StatsCard';
import PaidOrdersSection from './components/PaidOrdersSection/PaidOrdersSection';
import InstallPrompt from './components/InstallPrompt/InstallPrompt';
import AuthForm from './components/AuthForm/AuthForm';
import UserInfo from './components/UserInfo/UserInfo';
import styles from './styles/App.module.css';

export default function App() {
  // Firebase 认证
  const {
    user,
    loading: authLoading,
    error: authError,
    login,
    register,
    logout,
    clearError,
    isLoggedIn,
    userId,
    displayName,
  } = useFirebaseAuth();

  // Firestore 订单同步
  const {
    orders,
    syncState,
    addOrder,
    markReceived,
    markPaid,
    updateRemark,
    deleteOrder,
    batchDelete,
  } = useFirestoreOrders(userId);

  // Toast 提示
  const { toast, notify, hideToast } = useToast();

  // PWA 状态
  const { isInstallable, isInstalled, isOffline, promptInstall } = usePWA();
  const [showInstallPrompt, setShowInstallPrompt] = useState(true);

  // UI 状态
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState<FilterType>('all');
  const [search, setSearch] = useState('');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // 移动端检测
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // 客服管理：从 localStorage 加载，默认使用 DEFAULT_AGENTS
  const [agents, setAgents] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(AGENTS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {}
    return DEFAULT_AGENTS;
  });

  // 保存客服列表到 localStorage
  useEffect(() => {
    try {
      localStorage.setItem(AGENTS_STORAGE_KEY, JSON.stringify(agents));
    } catch {}
  }, [agents]);

  // 添加新客服
  const handleAddAgent = useCallback((name: string) => {
    setAgents(prev => {
      if (prev.includes(name)) return prev;
      return [...prev, name];
    });
  }, []);

  // 订单统计
  const { filteredUnpaid, filteredPaid, stats, agentFirstIndex, paidAgentFirstIndex } =
    useOrderStats(orders, filter, search);

  // 统计卡片数据
  const statCards: StatCard[] = useMemo(
    () => [
      {
        label: '订单总数',
        value: `${stats.totalOrders} 单`,
        color: '#1a1a1a',
        bg: '#fff',
        border: '#e8e4de',
      },
      {
        label: '订单总金额',
        value: `¥${stats.totalAmount.toLocaleString()}`,
        color: '#1a1a1a',
        bg: '#fff',
        border: '#e8e4de',
      },
      {
        label: '待收款金额',
        value: `¥${stats.receivedAmount.toLocaleString()}`,
        color: '#065f46',
        bg: '#fff',
        border: '#e8e4de',
      },
      {
        label: `本次可结算 (${stats.nextDateStr})`,
        value: `¥${stats.settleableAmount.toLocaleString()}`,
        color: '#fff',
        bg: '#1a1a1a',
        border: '#1a1a1a',
      },
      {
        label: '累计已收款',
        value: `¥${stats.paidAmount.toLocaleString()}`,
        color: '#5b21b6',
        bg: '#f5f3ff',
        border: '#ddd6fe',
      },
    ],
    [stats]
  );

  // 预计算未收款订单的客服数量（避免 O(n^2)）
  const unpaidAgentCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    filteredUnpaid.forEach(o => { counts[o.agent] = (counts[o.agent] || 0) + 1; });
    return counts;
  }, [filteredUnpaid]);

  // 登录处理
  const handleLogin = useCallback(
    async (email: string, password: string) => {
      try {
        await login(email, password);
        notify('✅ 登录成功');
      } catch {
        notify('❌ 操作失败，请重试');
      }
    },
    [login, notify]
  );

  // 注册处理
  const handleRegister = useCallback(
    async (email: string, password: string) => {
      try {
        await register(email, password);
        notify('✅ 注册成功');
      } catch {
        notify('❌ 操作失败，请重试');
      }
    },
    [register, notify]
  );

  // 登出处理
  const handleLogout = useCallback(async () => {
    await logout();
    notify('已退出登录');
  }, [logout, notify]);

  // 添加订单
  const handleAddOrder = useCallback(
    async (orderData: any) => {
      try {
        await addOrder(orderData);
        notify('✅ 订单已添加');
      } catch {
        notify('❌ 操作失败，请重试');
      }
    },
    [addOrder, notify]
  );

  // 标记收货
  const handleMarkReceived = useCallback(
    async (id: string) => {
      try {
        await markReceived(id, localToday());
        notify('✅ 已标记收货');
      } catch {
        notify('❌ 操作失败，请重试');
      }
    },
    [markReceived, notify]
  );

  // 标记收款
  const handleMarkPaid = useCallback(
    async (id: string) => {
      try {
        await markPaid(id, localToday());
        notify('💰 已标记收款');
      } catch {
        notify('❌ 操作失败，请重试');
      }
    },
    [markPaid, notify]
  );

  // 更新备注
  const handleUpdateRemark = useCallback(
    async (id: string, remark: string) => {
      try {
        await updateRemark(id, remark);
        notify('✅ 备注已保存');
      } catch {
        notify('❌ 操作失败，请重试');
      }
    },
    [updateRemark, notify]
  );

  // 删除订单
  const handleDelete = useCallback(
    async (id: string) => {
      try {
        await deleteOrder(id);
        notify('🗑 订单已删除');
        setSelectedIds(prev => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      } catch {
        notify('❌ 操作失败，请重试');
      }
    },
    [deleteOrder, notify]
  );

  // 导出 CSV
  const handleExport = useCallback(() => {
    exportCSV(orders);
    notify('📥 CSV 文件已导出');
  }, [orders, notify]);

  // 选择订单
  const handleSelect = useCallback((id: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  // 全选
  const handleSelectAll = useCallback(() => {
    if (selectedIds.size === filteredUnpaid.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredUnpaid.map(o => o.id)));
    }
  }, [selectedIds.size, filteredUnpaid]);

  // 批量删除
  const handleBatchDelete = useCallback(async () => {
    if (selectedIds.size === 0) return;
    try {
      await batchDelete(Array.from(selectedIds));
      notify(`🗑 已删除 ${selectedIds.size} 个订单`);
      setSelectedIds(new Set());
    } catch {
      notify('❌ 操作失败，请重试');
    }
  }, [selectedIds, batchDelete, notify]);

  // 批量收货
  const handleBatchMarkReceived = useCallback(async () => {
    const ids = Array.from(selectedIds).filter(id => {
      const order = orders.find(o => o.id === id);
      return order && !order.received;
    });
    if (ids.length === 0) {
      notify('没有可标记收货的订单');
      return;
    }
    try {
      await Promise.all(ids.map(id => markReceived(id, localToday())));
      notify(`✅ 已标记 ${ids.length} 个订单收货`);
      setSelectedIds(new Set());
    } catch {
      notify('❌ 操作失败，请重试');
    }
  }, [selectedIds, orders, markReceived, notify]);

  // 加载中状态
  if (authLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>加载中...</div>
      </div>
    );
  }

  // 未登录状态
  if (!isLoggedIn) {
    return (
      <div className={styles.container}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&display=swap');
        `}</style>
        <AuthForm
          onLogin={handleLogin}
          onRegister={handleRegister}
          loading={authLoading}
          error={authError}
          clearError={clearError}
        />
      </div>
    );
  }

  // 已登录状态
  return (
    <div className={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&display=swap');
        * { box-sizing: border-box; }
        input, select { font-family: inherit; }
      `}</style>

      {/* PWA 安装提示 */}
      <InstallPrompt
        isVisible={showInstallPrompt}
        isInstallable={isInstallable}
        isInstalled={isInstalled}
        isOffline={isOffline}
        onInstall={promptInstall}
        onDismiss={() => setShowInstallPrompt(false)}
      />

      {/* Toast */}
      {toast && <Toast message={toast} onClose={hideToast} />}

      <div className={styles.content}>
        {/* 用户信息 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <UserInfo
            email={displayName || ''}
            onLogout={handleLogout}
            syncing={syncState.syncing}
          />
          <button
            className={styles.btnGhost}
            onClick={() => {
              const name = prompt('请输入新客服名称：');
              if (name && name.trim()) {
                handleAddAgent(name.trim());
                notify(`✅ 已添加客服：${name.trim()}`);
              }
            }}
            title="管理客服列表"
          >
            管理客服
          </button>
        </div>

        {/* Header */}
        <div className={styles.header}>
          <div>
            <div className={styles.headerSubtitle}>订单管理系统</div>
            <h1 className={styles.headerTitle}>收货台账</h1>
            <div style={{ marginTop: 6 }}>
              <span className={styles.saveBadge}>
                ☁️ 云端同步 · 多设备互通
              </span>
            </div>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.btnGreen} onClick={handleExport}>
              导出 CSV
            </button>
            <button className={styles.btnPrimary} onClick={() => setShowForm(v => !v)}>
              {showForm ? '取消' : '+ 新增订单'}
            </button>
          </div>
        </div>

        {/* 统计卡片 */}
        <div className={styles.statsGrid}>
          {statCards.map((card, i) => (
            <StatsCard key={i} stats={card} />
          ))}
        </div>

        {/* 新增订单表单 */}
        {showForm && (
          <OrderForm
            onSubmit={handleAddOrder}
            onClose={() => setShowForm(false)}
            existingIds={orders.map(o => o.id)}
            agents={agents}
            onAddAgent={handleAddAgent}
          />
        )}

        {/* 批量操作栏 */}
        {selectedIds.size > 0 && (
          <div className={styles.batchBar}>
            <span className={styles.batchInfo}>已选择 {selectedIds.size} 个订单</span>
            <div className={styles.batchActions}>
              <button className={styles.btnGhost} onClick={handleBatchMarkReceived}>
                批量确认收货
              </button>
              <button className={styles.btnDanger} onClick={handleBatchDelete}>
                批量删除
              </button>
              <button className={styles.btnGhost} onClick={() => setSelectedIds(new Set())}>
                取消选择
              </button>
            </div>
          </div>
        )}

        {/* 筛选栏 */}
        <div className={styles.filterBar}>
          <div className={styles.filterTabs}>
            {FILTER_OPTIONS.map(({ value, label }) => (
              <button
                key={value}
                className={`${styles.tab} ${filter === value ? styles.tabActive : ''}`}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <input
            className={styles.input}
            style={{ width: 230 }}
            placeholder="搜索订单号 / 客服 / 备注"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* 主表格 / 移动端卡片列表 */}
        {isMobile ? (
          <div className={styles.cardList}>
            {filteredUnpaid.length === 0 ? (
              <div className={styles.emptyState}>暂无待收款订单</div>
            ) : (
              filteredUnpaid.map(order => (
                <OrderCard
                  key={order.id}
                  order={order}
                  isSelected={selectedIds.has(order.id)}
                  onSelect={handleSelect}
                  onMarkReceived={handleMarkReceived}
                  onMarkPaid={handleMarkPaid}
                  onUpdateRemark={handleUpdateRemark}
                  onDelete={handleDelete}
                />
              ))
            )}
          </div>
        ) : (
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHeader} style={{ width: 40 }}>
                    <input
                      type="checkbox"
                      checked={selectedIds.size === filteredUnpaid.length && filteredUnpaid.length > 0}
                      onChange={handleSelectAll}
                      className={styles.checkbox}
                    />
                  </th>
                  {TABLE_HEADERS.map(h => (
                    <th key={h} className={styles.tableHeader}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredUnpaid.length === 0 ? (
                  <tr>
                    <td colSpan={9} className={styles.emptyState}>
                      暂无待收款订单
                    </td>
                  </tr>
                ) : (
                  filteredUnpaid.map((order, i) => (
                    <OrderRow
                      key={order.id}
                      order={order}
                      isGroupStart={agentFirstIndex[order.agent] === i}
                      agentCount={unpaidAgentCounts[order.agent]}
                      isSelected={selectedIds.has(order.id)}
                      onSelect={handleSelect}
                      onMarkReceived={handleMarkReceived}
                      onMarkPaid={handleMarkPaid}
                      onUpdateRemark={handleUpdateRemark}
                      onDelete={handleDelete}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* 已收款折叠区 */}
        <PaidOrdersSection
          orders={filteredPaid}
          agentFirstIndex={paidAgentFirstIndex}
          onDelete={handleDelete}
          isMobile={isMobile}
        />

        {/* 底部信息 */}
        <div className={styles.footer}>
          <div className={styles.footerInfo}>
            共 {orders.length} 条记录 · 云端实时同步
          </div>
        </div>
      </div>
    </div>
  );
}
