# Wails 3 + Vue 3 + Naive UI 模板

[![GitHub](https://camo.githubusercontent.com/a4fe5f7c273420c742c6307782a5a9f94dba2ed9d7eb047281407f7e13897dff/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f7761696c736170702f7761696c73)](https://github.com/wailsapp/wails/blob/master/LICENSE)

[English](https://github.com/MrliuALG/wails-vue-template-naive/blob/main/README.md) · [简体中文](https://github.com/MrliuALG/wails-vue-template-naive/blob/main/README_Zh-CN.md)

这是一个基于 **Wails v3** 框架的现代化桌面应用开发模板，集成了以下核心技术栈：

- [Wails v3 官网](https://v3alpha.wails.io/)
- [Naive UI 官网](https://www.naiveui.com/)

## ✨ 特性

- ✅ **Wails v3** - 下一代桌面应用开发框架 (官网)
- ✅ **Vue 3** - 组合式 API 和 `<script setup>`语法
- ✅ **Naive UI** - 完整的 Vue 3 组件库 (官网)
- ✅ **Pinia** - 官方推荐的状态管理库
- ✅ **Vue Router** - 路由管理
- ✅ **主题切换** - 暗黑/亮色主题，自动持久化
- ✅ **自动引入** - Naive UI 组件自动导入

## 🚀 快速开始

### 环境要求

- **Go 1.23+** (Wails v3 要求)
- **Node.js 16+**
- **Wails CLI v3**: `go install github.com/wailsapp/wails/v3/cmd/wails3@latest`

### 创建项目

```
# 使用 Wails v3 创建新项目
wails3 init -n your-project-name -t https://github.com/MrliuALG/wails-vue-template-naive

# 进入项目目录
cd your-project-name

# 安装前端依赖
cd frontend
npm install

# 返回根目录并启动开发模式
cd ..
wails3 dev
```

## 📁 项目结构

```
wails-vue-template-naive/
├── frontend/                 # 前端代码
│   ├── package.json          # 前端依赖配置
│   ├── vite.config.js        # Vite 构建配置
│   ├── index.html            # HTML 入口文件
│   ├── public/               # 静态资源
│   │   ├── style.css         # 全局样式
│   │   ├── vue.svg           # Vue 图标
│   │   ├── wails.png         # Wails 图标
│   │   └── Inter-Medium.ttf  # 字体文件
│   └── src/
│       ├── App.vue           # 根组件
│       ├── main.js           # 应用入口
│       ├── stores/           # 状态管理
│       │   ├── app.js        # 应用状态
│       │   └── persistence.js # 持久化插件
│       ├── router/           # 路由配置
│       │   └── index.js      # 路由设置
│       ├── views/            # 页面组件
│       │   └── Home.vue      # 首页
│       └── components/       # 可复用组件
│           └── HelloWorld.vue # 示例组件
├── bindings/                 # Wails 前端绑定
│   ├── changeme/             # 示例绑定目录
│   │   └── greetservice.js   # 示例服务绑定
│   └── index.js              # 绑定入口文件
├── template.json            # 模板配置文件
├── .gitignore              # Git 忽略规则
└── README.md               # 说明文档
```

## 🛠️ 技术栈

### 核心框架

- **Wails v3** - 下一代桌面应用开发框架 (官网)
- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具

### UI 组件库

- **Naive UI** - 完整的 Vue 3 组件库 (官网)
- **Vicons** - Vue 图标库

### 状态管理

- **Pinia** - Vue 官方推荐的状态管理库

### 路由管理

- **Vue Router 4** - 官方路由管理器

## 💡 功能说明

### 主题切换

模板内置暗黑/亮色主题切换功能，主题偏好会自动保存到 LocalStorage。

### 状态持久化

使用 Pinia 插件实现状态持久化，应用重启后状态不会丢失。

### 自动引入

配置了 Naive UI 组件的自动引入，无需手动导入。

### 路由配置

已配置基础路由结构，可直接添加新页面。

## 📖 开发指南

### 添加新页面

1. **创建组件**: 在 `frontend/src/views/`创建新的 Vue 组件
2. **配置路由**: 在 `frontend/src/router/index.js`中添加路由配置
3. **使用路由**: 在需要的地方使用 `<router-link>`或编程式导航

```
// router/index.js
const routes = [
  {
    path: '/new-page',
    name: 'NewPage',
    component: () => import('../views/NewPage.vue')
  }
]
```

### 使用 Naive UI 组件

直接在模板中使用 Naive UI 组件，无需手动导入：

```
<template>
  <n-button type="primary" @click="handleClick">主要按钮</n-button>
  <n-input v-model="value" placeholder="请输入内容" />
  <n-space>
    <n-tag type="success">成功标签</n-tag>
  </n-space>
</template>
```

### 状态管理

在组件中使用 Pinia store：

```
<script setup>
import { useAppStore } from '../stores/app'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()
const { isDark, theme } = storeToRefs(appStore)

const toggleTheme = () => {
  appStore.toggleTheme()
}
</script>
```

### 后端通信

使用 Wails v3 绑定调用 Go 后端函数：

```
<script setup>
import { Greet } from '@/bindings'

const handleGreet = async () => {
  const response = await Greet('World')
  console.log('后端响应:', response)
}
</script>
```

## 🏗️ 构建发布

```
# 开发模式 (热重载)
wails3 dev

# 生产构建
wails3 build

# 指定平台构建
wails3 build -platform windows    # Windows
wails3 build -platform darwin     # macOS
wails3 build -platform linux      # Linux

# 构建安装包 (Wails v3 新特性)
wails3 build -nsis    # Windows NSIS 安装包
wails3 build -deb     # Linux Debian 包
wails3 build -rpm     # Linux RPM 包
wails3 build -appimage # Linux AppImage
```

## ❓ 常见问题

### 1. Wails v3 注意事项

Wails v3 目前处于 Alpha 阶段，API 可能会有变动。生产环境建议使用 Wails v2。

### 2. 依赖安装失败

确保使用 Node.js 16+ 版本，并尝试清除缓存：

```
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### 3. 主题不生效

检查浏览器控制台是否有错误信息，确保正确引入了 Naive UI 组件。

### 4. Wails 命令找不到

确保已正确安装 Wails v3 CLI：

```
go install github.com/wailsapp/wails/v3/cmd/wails3@latest
```

### 5. Go 模块问题

在项目根目录运行：

```
go mod tidy
go mod download
```

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个模板：

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some feature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

MIT 许可证 - 详见 LICENSE 文件

## 📋 更新日志

### v1.0.0

- 初始版本发布
- 集成 Wails v3 + Vue 3 + Naive UI + Pinia + Vue Router
- 支持主题切换和状态持久化
- 添加 Wails 后端绑定示例
