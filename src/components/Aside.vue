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
    <el-menu default-active="/" class="apple-sidebar" router @select="handleSelect">
        <div class="sidebar-header">
            <div class="sidebar-logo">Menu</div>
        </div>
        <el-menu-item index="/" class="apple-menu-item">
            <el-icon><icon-menu /></el-icon>
            <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/story" class="apple-menu-item">
            <el-icon>
                <Odometer />
            </el-icon>
            <span>故事编排</span>
        </el-menu-item>
        <el-menu-item index="/myself" class="apple-menu-item">
            <el-icon>
                <document />
            </el-icon>
            <span>我的文章</span>
        </el-menu-item>
        <el-menu-item index="/setting" class="apple-menu-item">
            <el-icon>
                <Bell />
            </el-icon>
            <span>设置</span>
        </el-menu-item>
    </el-menu>
</template>

<style scoped>
.apple-sidebar {
    height: 100%;
    background-color: rgba(247, 247, 247, 0.9);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-right: 1px solid rgba(0, 0, 0, 0.08);
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
    padding-top: 10px;
}

.sidebar-header {
    padding: 10px 20px 20px;
    margin-bottom: 8px;
}

.sidebar-logo {
    font-size: 14px;
    font-weight: 600;
    color: #1d1d1f;
    letter-spacing: -0.01em;
}

/* 重写 Element Plus 菜单样式 */
:deep(.el-menu) {
    border-right: none;
}

:deep(.el-menu-item) {
    height: 40px;
    line-height: 40px;
    margin: 4px 8px;
    border-radius: 8px;
    font-size: 13px;
    color: #1d1d1f;
    transition: all 0.25s ease;
}

:deep(.el-menu-item.is-active) {
    background-color: rgba(94, 92, 230, 0.1);
    color: var(--apple-primary);
    font-weight: 500;
}

:deep(.el-menu-item:hover) {
    background-color: rgba(191, 90, 242, 0.05);
}

:deep(.el-menu-item .el-icon) {
    margin-right: 8px;
    color: var(--apple-graphite);
}

:deep(.el-menu-item.is-active .el-icon) {
    color: var(--apple-primary);
}

/* 响应式调整 */
@media (max-width: 768px) {
    :deep(.el-menu-item) {
        padding: 0 14px;
    }
    
    :deep(.el-menu-item span) {
        font-size: 12px;
    }
}
</style>
