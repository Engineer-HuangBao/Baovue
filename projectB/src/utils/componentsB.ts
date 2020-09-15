import HelloWorld from "../components/HelloWorld.vue";

// vue组件的挂载(写好的组件在这里引用)-组件引用合集
function pluginComponents(Vue) {
  // 黄宝-----公共组件封装合集
  Vue.component("HelloWorld", HelloWorld); //
}

export default pluginComponents;
