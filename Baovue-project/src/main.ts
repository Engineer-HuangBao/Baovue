import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from "@/utils/components.ts"; // 组件引用合集
import methodClass from "@/utils/methodClass.ts"; // 公共方法引用合集

Vue.config.productionTip = false;

// Vue.use 注入插件-(引入组件模块)
Vue.use(components);
methodClass;

// 挂载全局方法
Vue.prototype.$methodClass = methodClass;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
