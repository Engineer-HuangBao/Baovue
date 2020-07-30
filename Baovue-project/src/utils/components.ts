import HelloWorld from "@/components/hB-components/HelloWorld.vue";

// vue组件的挂载
function pluginComponents(Vue) {
  // 黄宝-----
  Vue.component("HelloWorld", HelloWorld); //
}

export default pluginComponents;
