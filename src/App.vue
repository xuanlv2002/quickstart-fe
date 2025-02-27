<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
/* 全局 Apple 风格样式 */
:root {
  /* Apple 高级颜色变量 */
  --apple-primary: #5E5CE6;      /* 高级紫色，替代默认的蓝色 */
  --apple-primary-hover: #4E4CD0;
  --apple-secondary: #BF5AF2;    /* 紫罗兰色，用于强调 */
  --apple-accent: #FF9F0A;       /* 金色/香槟色，用于特殊强调 */
  --apple-graphite: #8E8E93;     /* 太空灰，用于次要元素 */
  --apple-midnight: #1C1C1E;     /* 午夜色，用于深色元素 */
  --apple-text-primary: #1d1d1f;
  --apple-text-secondary: #86868b;
  --apple-background: #ffffff;
  --apple-background-secondary: #f5f5f7;
  --apple-border: rgba(0, 0, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
  color: var(--apple-text-primary);
  background-color: var(--apple-background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  height: 100%;
  width: 100%;
  overflow: hidden;
  line-height: 1.5;
  font-size: 16px;
}

#app {
  height: 100%;
  width: 100%;
}

/* 链接样式 */
a {
  color: var(--apple-primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--apple-primary-hover);
}

/* 平滑过渡 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

/* 媒体查询 - 暗色模式支持 */
@media (prefers-color-scheme: dark) {
  :root {
    --apple-text-primary: #f5f5f7;
    --apple-text-secondary: #a1a1a6;
    --apple-background: #000000;
    --apple-background-secondary: #1d1d1f;
    --apple-border: rgba(255, 255, 255, 0.1);
  }
}
</style>
