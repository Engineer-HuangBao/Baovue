import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from "@/utils/components.ts"; // 组件引用合集
import qgff from "@/utils/qgff.ts"; // 公共方法引用合集

Vue.config.productionTip = false;

// Vue.use 注入插件-(引入组件模块)
Vue.use(components);
qgff;

// 挂载全局方法
Vue.prototype.$qgff = qgff;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// 设置浏览器标题
Vue.directive("title", {
  // 抄滴 ～！
  inserted: function(el) {
    // v-title data-title=“xx”
    document.title = (el.dataset.title || "") + "-伯客站-";
  }
});
