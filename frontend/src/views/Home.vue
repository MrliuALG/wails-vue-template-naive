<template>
  <div class="container">
    <div>
      <a data-wml-openURL="https://wails.io">
        <img src="/wails.png" class="logo" alt="Wails logo"/>
      </a>
      <a data-wml-openURL="https://vuejs.org/">
        <img src="/vue.svg" class="logo vue" alt="Vue logo"/>
      </a>
    </div>
    <n-h1>Welcome to Wails3+Naive UI+Pinia+Vue Router</n-h1>
    <n-button type="primary" @click="showMessage">
      <n-icon :component="isDark ? SunnyOutline : MoonOutline" />
      {{ isDark ? 'light' : 'dark' }}
    </n-button>

    <h1>{{ msg }}</h1>

    <div class="result">{{ result }}</div>

    <n-space style="margin-top: 20px;">
      <n-input  v-model:value="name" placeholder="Please enter your name" clearable></n-input>
      <n-button secondary strong @click="doGreet">Greet</n-button>
    </n-space>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {GreetService} from "../../bindings/changeme";
import {Events} from "@wailsio/runtime";
import { useAppStore } from '../stores/app'
import { storeToRefs } from 'pinia'
import { useMessage } from 'naive-ui'

// 正确导入图标组件
import { MoonOutline, SunnyOutline } from '@vicons/ionicons5'

const name = ref('')
const result = ref('Please enter your name below 👇')
const time = ref('Listening for Time event...')

const doGreet = () => {
  console.log('输入的名字:', name.value)
  let localName = name.value;
  if (!localName) {
    localName = 'anonymous';
  }
  GreetService.Greet(localName).then((resultValue) => {
    result.value = resultValue;
    message.info(resultValue)
  }).catch((err) => {
    console.log(err);
  });
}

defineProps({
  msg: String,
})

onMounted(() => {
  Events.On('time', (timeValue) => {
    time.value = timeValue.data;
  });
})

const appStore = useAppStore()
const { isDark } = storeToRefs(appStore)
const message = useMessage()

const showMessage = () => {
  appStore.toggleTheme()
  if (appStore.isDark) {
    message.success('Switch to dark mode！')
  } else {
    message.success('Switch to light mode！')
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #e80000aa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>