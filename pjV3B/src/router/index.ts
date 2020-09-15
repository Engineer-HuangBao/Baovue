import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: import('/@views/Home'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('/@views/User'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router