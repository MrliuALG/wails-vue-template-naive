<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-loading-bar-provider>
            <div class="container">
              <RouterView></RouterView>
            </div>
          </n-loading-bar-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-message-provider>
    <n-global-style />
  </n-config-provider>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useAppStore } from './stores/app'
import { darkTheme } from 'naive-ui'
import { computed } from 'vue'

const appStore = useAppStore()

const theme = computed(() => {
  return appStore.isDark ? darkTheme : null
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>