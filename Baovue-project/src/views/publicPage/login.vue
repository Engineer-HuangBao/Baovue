<template>
  <div class="bao">
    <h1>login</h1>
  </div>
</template>
<script>
import methodClass from "@/utils/methodClass.ts"; // 公共方法引用合集
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

  created() {
    methodClass.setData("useName", "123");
    // 实例已存在内存,可拿到-data-与-methods-,但未编译模板(未挂载dom)~
  }
};
</script>
