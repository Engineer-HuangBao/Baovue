import Vue from "vue";
import routers from "@/router/routers.ts";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

// 配置路由
const routes: Array<RouteConfig> = [
  // 定义登陆路由
  {
    path: "/login",
    name: "login",
    component: () => import(/* */ "@/views/publicPage/login.vue")
  },
  // 定义丢失路由
  {
    path: "/404",
    name: "404",
    component: () => import(/* */ "@/views/publicPage/404.vue")
  }
];

// 创建router实例
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 接收回调
function dynamic(params) {
  // addRoutes添加路由
  router.addRoutes(params);
}
// 接收动态路由参数-回调参数添加上路由
routers.fangfa(dynamic);

// 路由拦截-全局前置守卫
router.beforeEach((to, from, next) => {
  /* to:准备要前往的路由！！, from:当前准备离开的路由！！, next:一定要调用该方法来 resolve 这个钩子 */
  // 声明：定义字符串类型 = 存值（为什么要‘|| ""’?因为string类型不能储存null，拿到的可能是null-为空时及为假-与或非）
  const useData: string = localStorage.getItem("useName") || "";
  // 声明：定义数字类型 = 当前时间戳
  const time: number = new Date().getTime();
  // 声明：定义对象类型 = 将字符串转换称对象（好开心～我有对象了～！）
  const useDataArr: string[] = JSON.parse(useData || "[]");
  /*黄宝*/
  // 判断是否未登陆-转跳登陆页
  if ((!useData || useDataArr["time"] < time) && to.name != "login") {
    localStorage.removeItem("useName");
    // const path: string = "{ path: '/login' }"
    next({
      path: "/login"
    });
  }
  next();
});

// 全局后置守卫
router.afterEach((to, from) => {
  console.log(to, from);
});

export default router;
