import HelloWorld from "@/components/hB-components/HelloWorld.vue";
import bPrompt from "@/components/hB-publicUi/b-prompt.vue";
import bButton from "@/components/hB-publicUi/b-button.vue";

// vue组件的挂载(写好的组件在这里引用)-组件引用合集
function pluginComponents(Vue) {
  // 黄宝-----公共组件封装合集
  Vue.component("b-prompt", bPrompt); // 提示框
  Vue.component("b-button", bButton); // 按钮

  // 黄宝-----
  Vue.component("HelloWorld", HelloWorld); // xxxx组件
}

export default pluginComponents;
