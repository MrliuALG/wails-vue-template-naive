# Wails 3 + Vue 3 + Naive UI Template

[![GitHub](https://camo.githubusercontent.com/a4fe5f7c273420c742c6307782a5a9f94dba2ed9d7eb047281407f7e13897dff/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f7761696c736170702f7761696c73)](https://github.com/wailsapp/wails/blob/master/LICENSE)

[English](https://github.com/MrliuALG/wails-vue-template-naive/blob/main/README.md) · [简体中文](https://github.com/MrliuALG/wails-vue-template-naive/blob/main/README_Zh-CN.md)

A modern desktop application development template based on **Wails v3** framework with the following core technologies:

- [Wails v3 Official](https://v3alpha.wails.io/)
- [Naive UI Official](https://www.naiveui.com/)

## ✨ Features

- ✅ **Wails v3** - Next-gen desktop app framework (Official)
- ✅ **Vue 3** - Composition API & `<script setup>`syntax
- ✅ **Naive UI** - Complete Vue 3 component library (Official)
- ✅ **Pinia** - Official state management
- ✅ **Vue Router** - Routing management
- ✅ **Theme Toggle** - Dark/Light themes with auto-persistence
- ✅ **Auto-import** - Naive UI components auto-imported

## 🚀 Quick Start

### Prerequisites

- **Go 1.23+** (Wails v3 requirement)
- **Node.js 16+**
- **Wails CLI v3**: `go install github.com/wailsapp/wails/v3/cmd/wails3@latest`

### Create Project

```
# Create new project with Wails v3
wails3 init -n your-project-name -t https://github.com/MrliuALG/wails-vue-template-naive

# Enter project directory
cd your-project-name

# Install frontend dependencies
cd frontend
npm install

# Return to root and start dev mode
cd ..
wails3 dev
```

## 📁 Project Structure

```
wails-vue-template-naive/
├── frontend/                 # Frontend code
│   ├── package.json          # Frontend dependencies
│   ├── vite.config.js        # Vite config
│   ├── index.html            # HTML entry
│   ├── public/               # Static assets
│   │   ├── style.css         # Global styles
│   │   ├── vue.svg           # Vue logo
│   │   ├── wails.png         # Wails logo
│   │   └── Inter-Medium.ttf  # Font file
│   └── src/
│       ├── App.vue           # Root component
│       ├── main.js           # App entry
│       ├── stores/           # State management
│       │   ├── app.js        # App state
│       │   └── persistence.js # Persistence plugin
│       ├── router/           # Routing
│       │   └── index.js      # Router config
│       ├── views/            # Page components
│       │   └── Home.vue      # Home page
│       └── components/       # Reusable components
│           └── HelloWorld.vue # Example component
├── bindings/                 # Wails bindings
│   ├── changeme/             # Example binding
│   │   └── greetservice.js   # Example service
│   └── index.js              # Bindings entry
├── template.json            # Template config
├── .gitignore              # Git ignore rules
└── README.md               # Documentation
```

## 🛠️ Tech Stack

### Core Frameworks

- **Wails v3** - Desktop app framework (Official)
- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next-gen build tool

### UI Library

- **Naive UI** - Vue 3 component library (Official)
- **Vicons** - Vue icon library

### State Management

- **Pinia** - Official state management

### Routing

- **Vue Router 4** - Official router

## 💡 Features

### Theme Toggle

Built-in dark/light theme switching with LocalStorage persistence.

### State Persistence

Pinia plugin for state persistence across app restarts.

### Auto-import

Naive UI components auto-imported (no manual imports needed).

### Routing

Pre-configured basic routing structure.

## 📖 Development Guide

### Add New Page

1. **Create component**: Add Vue component in `frontend/src/views/`
2. **Configure route**: Add route in `frontend/src/router/index.js`
3. **Use route**: Use `<router-link>`or programmatic navigation

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

### Use Naive UI Components

Use components directly (no imports needed):

```
<template>
  <n-button type="primary" @click="handleClick">Primary Button</n-button>
  <n-input v-model="value" placeholder="Input something" />
  <n-space>
    <n-tag type="success">Success Tag</n-tag>
  </n-space>
</template>
```

### State Management

Use Pinia store in components:

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

### Backend Communication

Call Go backend functions via Wails v3 bindings:

```
<script setup>
import { Greet } from '@/bindings'

const handleGreet = async () => {
  const response = await Greet('World')
  console.log('Backend response:', response)
}
</script>
```

## 🏗️ Build & Release

```
# Dev mode (hot reload)
wails3 dev

# Production build
wails3 build

# Platform-specific builds
wails3 build -platform windows    # Windows
wails3 build -platform darwin     # macOS
wails3 build -platform linux      # Linux

# Package builds (Wails v3 features)
wails3 build -nsis    # Windows NSIS installer
wails3 build -deb     # Linux Debian package
wails3 build -rpm     # Linux RPM package
wails3 build -appimage # Linux AppImage
```

## ❓ FAQ

### 1. Wails v3 Notes

Wails v3 is currently in Alpha. API may change. For production, use Wails v2.

### 2. Dependency Installation Issues

Ensure Node.js 16+ and try:

```
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### 3. Theme Not Working

Check browser console for errors and ensure Naive UI is properly imported.

### 4. Wails Command Not Found

Install Wails v3 CLI properly:

```
go install github.com/wailsapp/wails/v3/cmd/wails3@latest
```

### 5. Go Module Issues

Run in project root:

```
go mod tidy
go mod download
```

## 🤝 Contributing

Issues and PRs are welcome!

1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some feature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open PR

## 📄 License

MIT License - See LICENSE file

## 📋 Changelog

### v1.0.0

- Initial release
- Wails v3 + Vue 3 + Naive UI + Pinia + Vue Router
- Theme toggle & state persistence
- Wails backend binding examples