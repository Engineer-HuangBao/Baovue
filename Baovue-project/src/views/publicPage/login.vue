<template>
  <div class="login" v-title data-title="登陆">
    <div id="hB-background" @click="bao"></div>
    <div v-if="loginShu" id="hB-login"></div>
  </div>
</template>
<script>
// import methodClass from "@/utils/methodClass.ts"; // 公共方法引用合集
export default {
  data() {
    return {
      // 登陆页面显示与不显示
      loginShu: false,
      // 视窗宽/高度
      scW: null,
      scH: null
    };
  },
  computed: {},
  methods: {
    bao() {
      this.loginShu = true;
    },
    // 给页面生成足够的span容器
    productionSpan() {
      // 定义：spanId:每生成一个span+1-相当于独立身份 px:累计已经生成多少宽度
      const datas = { spanId: 0, px: 0 };
      // 间隔器（反复弹跳!）
      const interval = setInterval(() => {
        // 创建spam节点（还未挂载上dom哦）
        const span = document.createElement("span");
        datas.spanId++;
        datas.px += 15.1;
        span.style.width = "15px";
        span.id = "span" + datas.spanId;
        // this.baonp(true, "span" + datas.spanId, span, this.scH);
        // 挂载span到hB-background节点下
        document.getElementById("hB-background").appendChild(span);
        // 如果已经增加足够多的span了就关闭且开始随机生成代码（最主要的～）
        if (datas.px > this.scW) {
          // this.baobao(true, 'span' + datas.spanId, span, scH, datas.spanId)
          clearInterval(interval);
        }
      }, 1);
    }
  },
  created() {
    // methodClass.setData("useName", "123");
  },
  mounted() {
    console.log(this.$qgff.randomNums(1, 20));
    this.$nextTick(() => {
      this.scW = document.documentElement.clientWidth;
      this.scH = document.documentElement.clientHeight;
      this.productionSpan();
    });
  }
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
}
#hB-background {
  width: 100%;
  height: 100%;
  background: black;
  position: absolute;
  top: 0px;
  left: 0px;
  // word-wrap: break-word;
  // word-break: break-all;
  position: relative;
  display: flex;
  span {
    font-weight: bold;
    color: #58bc5b;
    height: 100%;
    display: block;
    position: relative;
    word-wrap: break-word;
    word-break: break-all;
  }
}
#hB-login {
  width: 100%;
  height: 100%;
  background: #dcdcdc1a;
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>
