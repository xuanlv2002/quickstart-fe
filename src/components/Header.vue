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
  color: var(--apple-text-primary);
  padding: 0 24px;
  height: 44px; /* Apple 标准高度 */
  backdrop-filter: blur(10px); /* 磨砂玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* Safari 支持 */
  border-bottom: 1px solid var(--apple-border);
  position: sticky;
  top: 0;
  z-index: 999;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
  transition: all 0.3s ease;
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

/* 添加导航链接样式 */
.nav-items a {
  color: var(--apple-text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
  padding: 4px 0;
}

.nav-items a:hover, 
.nav-items a.active {
  color: var(--apple-primary);
}

.nav-items a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--apple-primary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-items a:hover::after,
.nav-items a.active::after {
  transform: scaleX(1);
}

.user-avatar {
  position: relative;
}

.user-avatar img {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 1px 3px var(--apple-border);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.user-avatar img:hover {
  transform: scale(1.05);
  border-color: var(--apple-primary); /* 悬停时显示主题色边框 */
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
