// 全局工具方法
export default {
  // ============================作者:黄宝=======
  /** @简称 -> -储存localStorage-
    @简介 -> 
    @用法 -> this.$methodClass(key,)
    */
  setData(key, value) {
    // 声明：定义数字类型 = 当前时间戳
    const currentTime: number = new Date().getTime();
    // 声明：定义数字类型 = 3天时间算法
    const pastTime: number = 3 * 24 * 60 * 60 * 1000;
    // 声明：定义字符串类型 = 将内容转为字符串
    const data: string = JSON.stringify({
      data: value,
      time: currentTime + pastTime
    });
    // 创建localStorage储存内容(key名字,内容)
    localStorage.setItem(key, data);
  },
  /** @简称 -> -随机生成范围数-
  @简介 -> 随机如0 ～ 20之间的随机数
  @用法 -> this.$methodClass(最小值,最大值)
  */
  randomNums(min, max) {
    const num: number = max - min;
    const randNum: number = Math.random();
    const nums: number = min + Math.round(randNum * num); //四舍五入
    return nums;
  }
  // ============================作者:黄宝=======
};
