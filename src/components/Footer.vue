<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-center">
        <p class="copyright">&copy; 2023 Your Company. All rights reserved.</p>
        <div class="footer-links">
          <a href="#" class="footer-link">Privacy Policy</a>
          <a href="#" class="footer-link">Terms of Service</a>
          <a href="#" class="footer-link">Contact Us</a>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
// 你可以在这里定义逻辑
</script>
  
<style scoped>
.footer {
  background-color: rgba(249, 249, 249, 0.8); /* 苹果风格的浅灰色带透明度 */
  color: var(--apple-text-primary);
  border-top: 1px solid var(--apple-border);
  text-align: center;
  backdrop-filter: blur(10px); /* 磨砂玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* Safari 支持 */
  padding: 20px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
  position: relative;
  z-index: 10;
}
  
.footer-content {
  max-width: 980px; /* 苹果网站常用的内容宽度 */
  margin: 0 auto;
  padding: 0 22px; /* 适应小屏幕的内边距 */
}
  
.footer-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* 垂直元素间距 */
}
  
.copyright {
  margin: 0;
  font-size: 12px; /* 苹果风格的小字体 */
  color: var(--apple-text-secondary);
  letter-spacing: -0.01em; /* 微调字母间距 */
  font-weight: 400;
}
  
.footer-links {
  display: flex;
  gap: 24px; /* 苹果风格的链接间距 */
  flex-wrap: wrap; /* 在小屏幕上自动换行 */
  justify-content: center;
}
  
.footer-link {
  color: var(--apple-graphite); /* 使用太空灰颜色 */
  text-decoration: none;
  font-size: 12px;
  letter-spacing: -0.01em;
  position: relative;
  transition: color 0.2s ease;
}
  
.footer-link:hover {
  color: var(--apple-primary); /* 使用主题色 */
  text-decoration: none; /* 移除默认的下划线 */
}

/* 添加苹果风格的链接悬停效果 */
.footer-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--apple-primary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.footer-link:hover::after {
  transform: scaleX(1);
}
  
/* 媒体查询：更小屏幕上的适配 */
@media (max-width: 768px) {
  .footer-links {
    gap: 16px;
  }
  
  .footer {
    padding: 16px 0;
  }
}
  </style>
