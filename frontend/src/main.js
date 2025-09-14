import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { piniaPersistence } from './stores/persistence'  // 导入插件

const pinia = createPinia()

// 注册持久化插件到 pinia 实例
pinia.use(piniaPersistence)

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')