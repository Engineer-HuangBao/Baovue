import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from "@/utils/components.ts";

Vue.config.productionTip = false;

// Vue.use 注入插件-(引入组件模块)
Vue.use(components)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
