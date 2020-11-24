<template>
  <div>123</div>
</template>
<script>
export default {
  data() {
    return {
      //
    };
  },
  // props 父传子值
  props: {
    // 宽
    width: {
      type: String, // 类型
      default: "100px" // 默认值
    },
    // 高
    height: {
      type: String, // 类型
      default: "50px" // 默认值
    },
    // 是否是搜索表单渲染
    isSearch: {
      type: Boolean,
      default: false
    },
    // 字段对象
    itemInfo: { type: Object }
  }
};
</script>
