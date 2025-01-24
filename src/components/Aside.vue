<script setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Odometer,
    Setting,
    Bell
} from '@element-plus/icons-vue'

const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}

</script>

<template>
    <el-menu default-active="/" class="full-height-menu" router @select="handleSelect">
        <el-menu-item index="/">
            <el-icon><icon-menu /></el-icon>
            <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/story">
            <el-icon>
                <Odometer />
            </el-icon>
            <span>故事编排</span>
        </el-menu-item>
        <el-menu-item index="/myself">
            <el-icon>
                <document />
            </el-icon>
            <span>我的文章</span>
        </el-menu-item>
        <el-menu-item index="/setting">
            <el-icon>
                <Bell />
            </el-icon>
            <span>设置</span>
        </el-menu-item>
    </el-menu>
</template>

<style scoped>
.full-height-menu {
    height: 100%;
}
</style>