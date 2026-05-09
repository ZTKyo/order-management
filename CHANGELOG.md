# 订单管理系统 - 开发日志

> 记录 2026-05-08 ~ 2026-05-09 的完整开发过程

---

## 一、项目起源

用户需要一个**订单收货管理系统**，用于：
- 记录每个订单的订单号、金额、客服、收货状态
- 按客服分组查看订单
- 统计可结算金额（收货满7天）
- 多设备同步（电脑+手机）

---

## 二、技术选型

| 技术 | 选择原因 |
|------|---------|
| React + TypeScript | 组件化开发，类型安全 |
| Vite | 构建速度快 |
| Firebase Auth | 免费用户认证 |
| Firebase Firestore | 免费云端数据库，实时同步 |
| GitHub Pages | 免费静态网站托管 |
| PWA | 可安装为手机/桌面应用 |

---

## 三、开发过程记录

### 阶段 1：项目初始化
- 使用 Vite 创建 React + TypeScript 项目
- 配置 Firebase（项目ID: order-management-62810）
- 设计数据模型（Order 类型定义）
- 实现基础 UI（表格、表单、统计卡片）

### 阶段 2：核心功能开发
- 实现订单增删改查
- 实现按客服分组排序（sortByAgent）
- 实现搜索筛选功能
- 实现收货/收款状态流转
- 实现结算金额统计（isSettleable 函数）
- 实现 CSV 导出

### 阶段 3：Firebase 集成
- 配置 Firebase Auth（邮箱密码登录）
- 配置 Firestore（实时数据同步）
- 实现 useFirestoreOrders Hook
- 实现 useFirebaseAuth Hook
- 配置 Firestore 安全规则

### 阶段 4：PWA 支持
- 创建 manifest.json
- 创建 Service Worker（sw.js）
- 添加 PWA 图标（72px - 512px）
- 实现离线缓存

### 阶段 5：部署到 GitHub Pages
- 首次部署成功
- 网站上线：https://ztkyo.github.io/order-management

---

## 四、遇到的问题及解决方案

### 问题 1：APK 安装失败
- **现象**：小米14澎湃OS3无法安装 PWA Builder 生成的 APK
- **原因**：APK 文件未签名
- **解决**：放弃 APK 方案，改用 PWA 直接安装

### 问题 2：PWA 手机端无法安装
- **现象**：电脑 Chrome 提示安装，手机不提示
- **原因**：manifest.json 图标缺少 `purpose` 字段，Service Worker 路径错误
- **解决**：添加 `purpose: "any maskable"`，修复 SW 路径

### 问题 3：PWA 安装后找不到图标
- **现象**：手机显示"已安装"但主屏幕没有图标
- **原因**：用户关闭了负一屏和上滑搜索
- **解决**：通过 Chrome 菜单 → "添加到主屏幕" 手动添加

### 问题 4：添加订单后不显示
- **现象**：添加成功提示，但主界面没有新订单
- **原因**：Firestore 安全规则不允许写入
- **解决**：修改 Firestore 规则，允许登录用户读写自己的数据

### 问题 5：Firebase 缓存冲突
- **现象**：`Failed to obtain exclusive access to the persistence layer`
- **原因**：使用了已弃用的 `enableIndexedDbPersistence()` API
- **解决**：改用 `initializeFirestore()` 新 API

### 问题 6：订单号显示乱码
- **现象**：订单号显示为 `uo2SbwY7t1B8ZgVnaG8X` 等随机字符串
- **原因**：代码使用 `doc.id`（Firestore 自动生成的 ID）而非 `data.id`（用户输入的订单号）
- **解决**：改为 `data.id || doc.id`

### 问题 7：表头和数据错位
- **现象**：表头有9列，数据行只有8列
- **原因**：OrderRow 组件把复选框和客服放在同一个 `<td>` 中
- **解决**：拆分为两个独立的 `<td>`

### 问题 8：备注/收货/收款/删除不生效
- **现象**：点击操作按钮没有反应
- **原因**：更新/删除操作使用用户订单号查找 Firestore 文档，但文档 ID 是自动生成的随机 ID
- **解决**：添加 `docIdMap` 映射表（订单号 → Firestore 文档 ID）

### 问题 9：填写备注导致客服分类错误
- **现象**：填写备注后，订单随机分布在不同客服下
- **原因**：Firestore `onSnapshot` 返回的数据没有按客服排序，同一天添加的订单顺序随机
- **解决**：读取数据后在前端调用 `sortByAgent()` 排序

### 问题 10：客服列表无法增删
- **现象**：客服列表硬编码为 ['小琪', '小八', '小吕']
- **解决**：添加客服管理功能，支持动态添加，数据存储在 localStorage

### 问题 11：手机端表格不便查看
- **现象**：手机端需要横向滑动查看表格
- **解决**：创建移动端卡片组件（OrderCard、PaidOrderCard），≤768px 自动切换

### 问题 12：Firestore orderBy null 值问题
- **现象**：历史数据 entryDate 为 null，可能导致查询失败
- **解决**：改用 `orderBy('createdAt')` 替代 `orderBy('entryDate')`

### 问题 13：Service Worker 永远不注册
- **现象**：PWA 离线功能不可用
- **原因**：在 React effect 中监听 `window.load` 事件，但 load 早已触发
- **解决**：直接调用 `navigator.serviceWorker.register()`

### 问题 14：agentCount O(n²) 性能问题
- **现象**：每行都重新计算客服订单数
- **解决**：使用 useMemo 预计算 agentCounts

---

## 五、最终项目结构

```
order-management/
├── src/
│   ├── App.tsx                          # 主组件
│   ├── index.tsx                        # 入口
│   ├── firebase/config.ts               # Firebase 配置
│   ├── hooks/
│   │   ├── useFirestoreOrders.ts        # Firestore 数据同步
│   │   ├── useFirebaseAuth.ts           # 登录/注册
│   │   ├── usePWA.ts                    # PWA
│   │   └── index.ts                     # 统计 Hook
│   ├── components/
│   │   ├── OrderForm/                   # 新增订单表单
│   │   ├── OrderRow/                    # 桌面端订单行
│   │   ├── OrderCard/                   # 移动端订单卡片
│   │   ├── PaidOrdersSection/           # 已收款区域
│   │   ├── PaidOrderCard/               # 移动端已收款卡片
│   │   ├── RemarkCell/                  # 备注编辑
│   │   ├── StatusBadge/                 # 状态标签
│   │   ├── AuthForm/                    # 登录/注册
│   │   ├── UserInfo/                    # 用户信息
│   │   ├── StatsCard/                   # 统计卡片
│   │   ├── Toast/                       # 提示消息
│   │   └── InstallPrompt/               # PWA 安装提示
│   ├── constants/index.ts               # 常量
│   ├── types/index.ts                   # 类型定义
│   ├── utils/index.ts                   # 工具函数
│   └── styles/App.module.css            # 全局样式
├── public/
│   ├── manifest.json
│   ├── sw.js
│   └── icons/
├── dist/                                # 构建产物
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 六、部署信息

| 项目 | 值 |
|------|-----|
| 线上地址 | https://ztkyo.github.io/order-management |
| GitHub 仓库 | https://github.com/ZTKyo/order-management |
| Firebase 项目 | order-management-62810 |
| 部署方式 | GitHub Pages |
| 构建命令 | `npm run build` |

---

## 七、Firebase 安全规则

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

## 八、已知限制

1. 客服管理只能添加，不能删除/重命名
2. 注册时不设置 displayName，显示邮箱地址
3. 多设备同时编辑备注可能互相覆盖
4. 批量删除非原子操作
5. 客服列表存在 localStorage，清除浏览器数据会丢失

---

## 九、未来计划

- [ ] 数据报表（按日期/客服/金额统计图表）
- [ ] 结算提醒（收货满7天通知）
- [ ] 批量导入（从 Excel 导入订单）
- [ ] 客服管理增强（删除、重命名）
- [ ] 注册时设置用户名
- [ ] 数据导出为 Excel 格式

---

## 十、关键经验总结

1. **Firestore 文档 ID 和业务 ID 要分开管理** — 用 docIdMap 映射
2. **前端排序不能依赖 Firestore** — onSnapshot 返回顺序不确定，需要前端重新排序
3. **PWA 图标必须有 purpose 字段** — Android 要求 `any maskable`
4. **Service Worker 注册不要等 load 事件** — React effect 执行时 load 已触发
5. **Firebase 免费版完全够用** — 1GB 存储，200万条订单
6. **移动端要用卡片替代表格** — 横向滑动体验差
7. **所有异步操作必须有 try/catch** — 否则错误被静默吞掉
8. **useCallback 依赖数组要完整** — 否则会有 stale closure bug
