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
        // this.productionP(true, "span" + datas.spanId, span, this.scH);
        // 挂载span到hB-background节点下
        document.getElementById("hB-background").appendChild(span);
        // 如果已经增加足够多的span了就关闭且开始随机生成代码（最主要的～）
        if (datas.px > this.scW) {
          this.randomAppear(
            true,
            "span" + datas.spanId,
            span,
            this.scH,
            datas.spanId
          );
          clearInterval(interval);
        }
      }, 1);
    },
    // 随机列进项开始
    randomAppear(judge, name, spans, scH, idnum) {
      setInterval(() => {
        const num = this.$qgff.randomNums(0, idnum);
        const span = document.getElementById("span" + num);
        this.productionP(true, "span" + num, span, this.scH);
      }, this.$qgff.randomNums(30, 60));
    },
    // 将已经生成的代码通过更换名字来达到渐变的效果
    gradients(judge, name, span, scH, p) {
      // 随机显示周期时长
      const num = this.$qgff.randomNums(0, 10) + 100;
      const item1 = setTimeout(() => {
        p.className = "hBp5";
        clearTimeout(item1);
      }, num * 0);
      const item2 = setTimeout(() => {
        p.className = "hBp4";
        clearTimeout(item2);
      }, num * 1);
      const item3 = setTimeout(() => {
        p.className = "hBp3";
        clearTimeout(item3);
      }, num * 2);
      const item4 = setTimeout(() => {
        p.className = "hBp2";
        clearTimeout(item4);
      }, num * 3);
      const item5 = setTimeout(() => {
        p.className = "hBp1";
        try {
          span.removeChild(p);
        } catch (e) {
          p.className = "hBp1";
        }
        clearTimeout(item5);
      }, num * 4);
    },
    // 生成p标签-存放随机字母-然后一直循环到地步结束
    productionP(judge, name, span, scH) {
      const datas = { idnum: 0, num: 0, px: 0, pnum: 6 };
      // 间隔器-使从头倒脚一个个生产显示
      const interval = setInterval(() => {
        // 生产p标签（还是没挂载到节点上）
        const p = document.createElement("p");
        datas.idnum += 1;
        p.className = "hBp" + datas.pnum;
        p.id = "hBp" + name + datas.idnum;
        p.innerHTML = String.fromCharCode(65 + Math.ceil(Math.random() * 25)); //随机生成数字后转字母
        p.style.top = datas.px + "px";
        // 累计长度判断是否到底
        datas.px += 20;
        // 判断传过来的父节点-为真时-挂载p节点
        span && p && span.appendChild(p);
        this.gradients(judge, name, span, scH, p, datas);
        if (datas.px > scH) {
          clearInterval(interval);
        }
      }, this.$qgff.randomNums(20, 60));
    }
  },
  created() {
    // methodClass.setData("useName", "123");
  },
  mounted() {
    this.$nextTick(() => {
      // 拿到视窗宽高（用来判断span标签可到达宽高）
      this.scW = document.documentElement.clientWidth;
      this.scH = document.documentElement.clientHeight;
      this.productionSpan();
    });
  }
};
</script>
<style lang="less">
.login {
  width: 100%;
  height: 100%;
  position: relative;
}
#hB-background {
  overflow: hidden;
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
p {
  padding: 0px;
  margin: 0px;
  font-size: 20px;
}
.hBp6 {
  position: absolute !important;
  color: #58bc5b;
}
.hBp5 {
  position: absolute;
  color: #58bc5bd6;
}
.hBp4 {
  position: absolute;
  color: #58bc5ba8;
}
.hBp3 {
  position: absolute;
  color: #58bc5b60;
}
.hBp2 {
  position: absolute;
  color: #58bc5b28;
}
.hBp1 {
  position: absolute;
  color: #58bc5b10;
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
