import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
// import methodClass from "@/utils/methodClass.ts"; // 公共方法引用合集

Vue.use(VueRouter);

// 配置路由
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/bao",
        name: "bao",
        component: () => import(/**/ "../views/hB-functionPage/bao/bao.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/hB-functionPage/About.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
// methodClass.setData('useName', '123')

// 路由拦截-全局前置守卫
router.beforeEach((to, from, next) => {
  /*黄宝*/
  // 声明：定义字符串类型 = 存值（为什么要[|| ""]?因为string类型不能储存null，拿到的可能是null-为空时及为假-与或非）
  const useData: string = localStorage.getItem("useName") || "";
  // 声明：定义数字类型 = 当前时间戳
  const time: number = new Date().getTime();
  // 声明：定义对象类型 = 将字符串转换称对象（好开心～我有对象了～！）
  const useDataArr: string[] = JSON.parse(useData);

  /*黄宝*/
  // 判断是否未登陆-转跳登陆页
  if (!useData || useDataArr["time"] < time) {
    console.log("未登陆 || 时间超过");
    localStorage.removeItem("useName");
    // localStorage.clear();
  }

  // console.log(to, from, next)
  next();
});

// 全局后置守卫
router.afterEach((to, from) => {
  console.log(to, from);
});

export default router;
