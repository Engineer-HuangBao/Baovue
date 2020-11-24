import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import Homes from '../Home.vue'

// 定义routerHistory拿到createWebHistory对象
const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Homes
    },
    {
      path: '/contact',
      component: Homes
    }
  ]
})

// 路由拦截-全局前置守卫
router.beforeEach((to, from, next) => {
  /* to:准备要前往的路由！！, from:当前准备离开的路由！！, next:一定要调用该方法来 resolve 这个钩子 */
  console.log(12312322)
  // // 声明：定义字符串类型 = 存值（为什么要‘|| ""’?因为string类型不能储存null，拿到的可能是null-为空时及为假-与或非）
  // const useData: string = localStorage.getItem("useName") || "";
  // // 声明：定义数字类型 = 当前时间戳
  // const time: number = new Date().getTime();
  // // 声明：定义对象类型 = 将字符串转换称对象（好开心～我有对象了～！）
  // const useDataArr: string[] = JSON.parse(useData || "[]");
  // /*黄宝*/
  // // 判断是否未登陆-转跳登陆页
  // if ((!useData || useDataArr["time"] < time) && to.name != "login") {
  //   localStorage.removeItem("useName");
  //   // const path: string = "{ path: '/login' }"
  //   next({
  //     path: "/login"
  //   });
  // }
  next();
});
export default router