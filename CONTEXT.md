# 订单管理系统 - 项目上下文文档

> 本文档用于新会话时快速恢复项目上下文。每次新会话开始时，请 SOLO 先读取此文件。

---

## 一、项目概述

**项目名称**：订单管理系统 - 收货台账
**项目类型**：Web 应用（PWA）
**用途**：管理订单的收货、收款、客服分组、结算对账
**用户**：个人使用，支持多设备同步

---

## 二、技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18 | 前端框架 |
| TypeScript | - | 类型安全 |
| Vite | 5 | 构建工具 |
| Firebase Auth | - | 用户登录/注册（邮箱密码） |
| Firebase Firestore | - | 云端数据库，实时同步 |
| GitHub Pages | - | 静态网站托管 |
| PWA | - | 可安装为手机/桌面应用 |

---

## 三、项目结构

```
/workspace/order-management/
├── src/
│   ├── App.tsx                          # 主组件（核心逻辑）
│   ├── index.tsx                        # 入口文件
│   ├── firebase/config.ts               # Firebase 配置
│   ├── hooks/
│   │   ├── useFirestoreOrders.ts        # Firestore 数据同步（核心）
│   │   ├── useFirebaseAuth.ts           # 登录/注册
│   │   ├── usePWA.ts                    # PWA 相关
│   │   └── index.ts                     # useOrderStats 等统计 Hook
│   ├── components/
│   │   ├── OrderForm/                   # 新增订单表单
│   │   ├── OrderRow/                    # 桌面端订单行（表格）
│   │   ├── OrderCard/                   # 移动端订单卡片
│   │   ├── PaidOrdersSection/           # 已收款区域
│   │   ├── PaidOrderCard/               # 移动端已收款卡片
│   │   ├── RemarkCell/                  # 备注编辑
│   │   ├── StatusBadge/                 # 状态标签
│   │   ├── AuthForm/                    # 登录/注册表单
│   │   ├── UserInfo/                    # 用户信息
│   │   ├── StatsCard/                   # 统计卡片
│   │   ├── Toast/                       # 提示消息
│   │   └── InstallPrompt/               # PWA 安装提示
│   ├── constants/index.ts               # 常量（客服列表、表单初始值等）
│   ├── types/index.ts                   # TypeScript 类型定义
│   ├── utils/index.ts                   # 工具函数（排序、过滤、日期、导出CSV）
│   └── styles/App.module.css            # 全局样式
├── public/
│   ├── manifest.json                    # PWA 配置
│   ├── sw.js                            # Service Worker
│   └── icons/                           # PWA 图标（72-512px）
├── dist/                                # 构建产物（部署用）
├── package.json                         # 依赖配置
├── vite.config.ts                       # Vite 配置
└── tsconfig.json                        # TypeScript 配置
```

---

## 四、部署信息

| 项目 | 值 |
|------|-----|
| 线上地址 | https://ztkyo.github.io/order-management |
| GitHub 仓库 | https://github.com/ZTKyo/order-management |
| 部署方式 | GitHub Pages（从 main 分支部署） |
| 构建命令 | `npm run build` |
| 构建产物 | `order-management/dist/` |

### 部署步骤
1. 在本地运行 `npm run build`
2. 将 `dist/` 中的文件上传到 GitHub 仓库根目录
3. 等待 1-2 分钟，GitHub Pages 自动更新

---

## 五、Firebase 配置

| 项目 | 值 |
|------|-----|
| Firebase 项目 | order-management-62810 |
| API Key | AIzaSyDS8jEcdPzYcDiDRZpvopMM6qxX1t6nNzU |
| Auth Domain | order-management-62810.firebaseapp.com |
| Project ID | order-management-62810 |
| Firestore 规则 | 只允许登录用户读写自己的数据 |

### Firestore 数据结构
```
users/{userId}/orders/{docId}
  ├── id: string           # 用户输入的订单号（如 260418-xxx）
  ├── amount: number       # 金额
  ├── agent: string        # 客服名称
  ├── received: boolean    # 是否已收货
  ├── receiveDate: string | null  # 收货日期（YYYY-MM-DD）
  ├── entryDate: string    # 录入日期（YYYY-MM-DD）
  ├── paid: boolean        # 是否已收款
  ├── paidDate: string | null     # 收款日期
  ├── remark: string       # 备注
  ├── createdAt: Timestamp # Firestore 写入时间
  └── updatedAt: Timestamp # 最后更新时间
```

### Firestore 安全规则
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

---

## 六、核心业务逻辑

### 订单状态流转
```
新增订单 → 未收货 → 已收货（确认收货）→ 已收款（确认收款）
```

### 结算规则
- 收货满 **7 天** 后可结算（`isSettleable` 函数）
- 结算周期：每周四结算

### 客服管理
- 默认客服：小琪、小八、小吕
- 支持动态添加新客服（存储在 localStorage）
- 客服列表 key：`custom_agents_v1`

### 数据排序
- 前端按客服分组排序（`sortByAgent`）
- Firestore 按 `createdAt` 降序排列
- 使用 `docIdMap` 映射用户订单号 → Firestore 文档 ID

### 移动端适配
- 屏幕宽度 ≤ 768px 自动切换为卡片布局
- `OrderCard` 替代 `OrderRow`（表格）
- `PaidOrderCard` 替代已收款表格
- 统计卡片 2 列，表单单列

---

## 七、已知限制

1. **客服管理**：只能添加，不能删除/重命名（存储在 localStorage，清除浏览器数据会丢失）
2. **用户名**：注册时不设置 displayName，显示邮箱地址
3. **备注冲突**：多设备同时编辑同一条备注可能互相覆盖（影响极小）
4. **批量删除**：非原子操作，部分失败时数据可能不一致

---

## 八、开发注意事项

### 关键技术点
1. **docIdMap**：Firestore 文档 ID 和用户订单号是分开的，更新/删除必须用 docIdMap 查找正确的文档 ID
2. **sortByAgent**：Firestore 读取后必须在前端重新排序，不能依赖 Firestore 的排序
3. **receiveDate**：未收货时为 `null`，不是空字符串
4. **Service Worker**：直接注册，不要监听 `load` 事件（React effect 执行时 load 已触发）

### 构建注意事项
- 每次构建后 `dist/` 中的 JS/CSS 文件名会变化（Vite 内容哈希）
- 部署时需要更新 `index.html` 中引用的文件名
- 旧的 JS/CSS 文件需要从 GitHub 删除

### 常见问题
| 问题 | 原因 | 解决 |
|------|------|------|
| 添加订单后不显示 | Firestore 规则或权限问题 | 检查安全规则 |
| 订单号显示乱码 | 用了 doc.id 而非 data.id | 检查 onSnapshot 读取逻辑 |
| 表头数据错位 | OrderRow 列数和表头不一致 | 检查 td 数量 |
| 手机端无法安装 PWA | manifest 或 SW 配置错误 | 检查 manifest.json 和 sw.js |
| Firebase 缓存冲突 | 多标签页或旧缓存 | 清除浏览器缓存 |

---

## 九、变更历史

| 日期 | 版本 | 变更内容 |
|------|------|---------|
| 2026-05-08 | v1.0 | 初始版本，完成基础功能 |
| 2026-05-08 | v1.1 | 修复 Firebase 同步、表格错位、排序等问题 |
| 2026-05-08 | v1.2 | 添加移动端卡片布局、客服管理、全面 bug 修复 |
| 2026-05-08 | v1.3 | 修复 orderBy null 问题、Service Worker 注册、性能优化 |

---

## 十、未来计划

- [ ] 数据报表（按日期/客服/金额统计图表）
- [ ] 结算提醒（收货满 7 天通知）
- [ ] 批量导入（从 Excel 导入订单）
- [ ] 客服管理增强（删除、重命名）
- [ ] 注册时设置用户名
