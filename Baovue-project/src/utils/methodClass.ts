// 全局工具方法
export default {
  // ============================作者:黄宝=======
  /** @简称 -> 储存localStorage--setData-
    @简介 -> 
    @用法 -> this.$methodClass(key,)
    */
  setData(key, value) {
    const currentTime: number = new Date().getTime();
    // 设置过期时间 (3天)
    const pastTime: number = 3 * 24 * 60 * 60 * 1000;
    // 将内容转为字符串
    // const data: string = JSON.stringify({ 'data': value, 'time': currentTime + pastTime });
    const data: string = JSON.stringify({
      data: value,
      time: currentTime + pastTime
    });
    localStorage.setItem(key, data);
  }
  // ============================作者:黄宝=======
};
