import { defineStore } from 'pinia'
import { ref } from 'vue'
import { piniaPersistence } from './persistence'  // 导入插件

export const useAppStore = defineStore('app', () => {
    const isDark = ref(false)
    const theme = ref('light')

    const toggleTheme = () => {
        isDark.value = !isDark.value
        theme.value = isDark.value ? 'dark' : 'light'
    }

    return {
        isDark,
        theme,
        toggleTheme
    }
}, {
    // 添加插件配置
    plugins: [piniaPersistence]
})