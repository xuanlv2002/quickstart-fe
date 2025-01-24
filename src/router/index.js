import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [{
        path: '',
        name: 'index-detail',
        component: () => import('@/content_views/index.vue'),
      },
      {
        path: '/story',
        name: 'story-detail',
        component: () => import('@/content_views/stroy.vue'),
      },
      {
        path: '/myself',
        name: 'myself-detail',
        component: () => import('@/content_views/myself.vue'),
      }, {
        path: '/setting',
        name: 'setting-detail',
        component: () => import('@/content_views/setting.vue'),
      }]
    }
  ],
})

export default router
