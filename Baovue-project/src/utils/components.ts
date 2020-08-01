import HelloWorld from "@/components/hB-components/HelloWorld.vue";

// vue组件的挂载(写好的组件在这里引用)-组件引用合集
function pluginComponents(Vue) {
  // 黄宝-----
  Vue.component("HelloWorld", HelloWorld); // xxxx组件
}

export default pluginComponents;
