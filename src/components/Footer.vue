<template>
    <div class="footer">
      <div class="footer-content">
        <!-- 居中内容 -->
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
    background-color: #b3c0d1; /* 背景颜色 */
    color: #333; /* 文字颜色 */
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); /* 顶部阴影 */
    text-align: center; /* 文字居中 */
  }
  
  .footer-content {
    max-width: 1200px; /* 最大宽度 */
    margin: 0 auto; /* 水平居中 */
  }
  
  .footer-center {
    display: flex;
    flex-direction: column; /* 垂直排列 */
    align-items: center; /* 水平居中 */
  }
  
  .copyright {
    margin: 0; /* 移除默认段落边距 */
    font-size: 14px; /* 字体大小 */
  }
  
  .footer-links {
    display: flex;
    gap: 20px; /* 链接之间的间距 */
  }
  
  .footer-link {
    color: #333; /* 链接颜色 */
    text-decoration: none; /* 移除下划线 */
    font-size: 14px; /* 字体大小 */
  }
  
  .footer-link:hover {
    text-decoration: underline; /* 鼠标悬停时显示下划线 */
  }
  </style>