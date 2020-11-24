<template>
  <div id="app" style="">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 这里放你这个组件的定义属性～
    };
  },
  computed: {},
  methods: {
    /* 这里放你这个组件的方法～ */
  },
  beforeCreate() {
    // vue实例初形成,现在是拿不到-data-与-methods-的值哦
  },
  created() {
    // 实例已存在内存,可拿到-data-与-methods-,但未编译模板(未挂载dom)~
  },
  beforeMount() {
    // 已编译完成模板,但是还是没挂载好dom～
  },
  mounted() {
    // 已挂载编译模板,就是现在可以拿到refs啦～,不过为了保守起见建议使用this.$nextTick,
    // nextTick即是dom下一次更新后执行（dom都不知道是什么的赶紧滚来给你通宵补习!）
    this.$nextTick(() => {
      /* 代码 */
    });
  },
  beforeUpdate() {
    // 状态更新前动作,就是这里的data已经更新啦～可是页面（dom）上还没更新上～
  },
  updated() {
    // 状态更新后动作,就是data和页面（实例）上已经同步完成了更新！
  },
  beforeDestroy() {
    // 组件销毁前动作,就是这个组件要关闭了！我来告诉你声！
  },
  destroyed() {
    // 组件销毁后动作，就是老子走了！你爱咋咋地！！
  }
};
</script>
<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}
</style>
