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
}

.el-container {
  height: 100%;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 20px;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 30px;
  text-align: center;
}
</style>