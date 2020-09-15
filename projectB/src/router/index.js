import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/home/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // route -> routes
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cards',
      name: 'cards',
　　　 component: () => import(/* webpackChunkName: 'Card' */ '../components/cards/Cards.vue'),
　　},
　],
})

export default router