<template>
  <div class="header">
    <!-- 靠左的 Logo -->
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </div>

    <!-- 中间的导航项 (可以根据需要添加) -->
    <div class="nav-items">
      <!-- 这里可以添加导航链接 -->
    </div>

    <!-- 靠右的用户头像 -->
    <div class="user-avatar">
      <img src="@/assets/logo.png" alt="User Avatar" />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8); /* 半透明白色背景 */
  color: #1d1d1f; /* Apple 文本颜色 */
  padding: 0 24px;
  height: 44px; /* Apple 标准高度 */
  backdrop-filter: blur(10px); /* 磨砂玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* Safari 支持 */
  border-bottom: 1px solid rgba(0, 0, 0, 0.08); /* 细微的边框 */
  position: sticky;
  top: 0;
  z-index: 999;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
  transition: background-color 0.3s ease;
}

.header:hover {
  background-color: rgba(255, 255, 255, 0.9); /* 悬停时稍微不透明 */
}

.logo img {
  height: 26px; /* Apple 风格更小的 logo */
  width: auto;
  transition: opacity 0.2s ease;
}

.logo img:hover {
  opacity: 0.8; /* 悬停效果 */
}

.nav-items {
  display: flex;
  gap: 24px; /* Apple 风格的导航间距 */
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.01em; /* 微调字母间距 */
}

.user-avatar {
  position: relative;
}

.user-avatar img {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08); /* 精细阴影 */
  transition: transform 0.2s ease;
}

.user-avatar img:hover {
  transform: scale(1.05); /* 悬停时微微放大 */
}

/* 媒体查询：更小屏幕上的适配 */
@media (max-width: 768px) {
  .header {
    padding: 0 16px;
  }
  
  .nav-items {
    display: none; /* 在小屏幕上隐藏导航项 */
  }
}
</style>
