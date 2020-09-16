// 引用组件-折叠 
 import Home from "@/views/publicPage/Home.vue";
// 路由配置分人-模块-存放
export default {
  // ============================作者:黄宝=======
  hBrouters() {
    const routers =
      "{ path: '/bao', name: 'bao', component: '@/views/hB-functionPage/bao/bao.vue' }";
    return routers;
  },
  // ============================作者:黄宝=======  模拟动态路由模块
  fangfa(bbbooo) {
    const roots: [{}] = [
      {
        path: "/",
        name: "Home",
        component: Home,
        children: [
          {
            path: "/bao",
            name: "bao",
            component: () => import(/**/ "@/views/hB-functionPage/bao/bao.vue")
          }
        ]
      }
    ];
    bbbooo(roots);
  }
};
