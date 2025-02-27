<script setup>
import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue';
import Content from '@/components/Content.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="el-header">
        <Header />
      </el-header>
      <el-container>
        <el-aside class="el-aside">
          <Aside />
        </el-aside>
        <el-container>
          <el-main class="el-main">
            <Content />
          </el-main>
          <el-footer class="el-foot">
            <Footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>



<style scoped>
.common-layout {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
}

.el-container {
  height: 100%;
}

.el-header {
  padding: 0;
  height: auto !important;
  box-shadow: none;
  z-index: 100;
}

.el-aside {
  width: 220px !important;
  background-color: transparent;
  color: #333;
  text-align: center;
  transition: width 0.3s;
  overflow: hidden;
  border-right: none;
}

.el-main {
  background-color: rgba(255, 255, 255, 0.95);
  color: #1d1d1f;
  padding: 24px;
  transition: background-color 0.3s ease;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 0;
}

.el-footer {
  padding: 0;
  height: auto !important;
  background-color: transparent;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .el-aside {
    width: 180px !important;
  }
  
  .el-main {
    padding: 16px;
  }
}

/* 暗色模式支持 (可选) */
@media (prefers-color-scheme: dark) {
  .el-main {
    background-color: rgba(28, 28, 30, 0.95);
    color: #f5f5f7;
  }
}
</style>
