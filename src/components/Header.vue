<template>
   <div class="header">
    <!-- 靠左的 Logo -->
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" /> <!-- 替换为你的 Logo 路径 -->
    </div>

    <!-- 靠右的用户头像 -->
    <div class="user-avatar">
      <img src="@/assets/logo.png" alt="User Avatar" /> <!-- 替换为你的头像路径 -->
    </div>
  </div>
</template>

<style>
.header {
    display: flex;
    justify-content: space-between; /* 左右对齐 */
    align-items: center; /* 垂直居中 */
    background-color: #b3c0d1;
    color: #333;
    padding: 0 20px; /* 左右内边距 */
    height: 60px; /* 固定高度 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 可选：添加阴影 */
}

.logo img {
    height: 40px; /* 调整 Logo 高度 */
    width: auto; /* 保持宽高比 */
}

.user-avatar img {
    height: 40px; /* 调整头像高度 */
    width: 40px; /* 调整头像宽度 */
    border-radius: 50%; /* 圆形头像 */
    object-fit: cover; /* 保持图片比例 */
}
</style>