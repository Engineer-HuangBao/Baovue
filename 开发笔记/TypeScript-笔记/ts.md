### const router = createRouter() 类型定义

```typescript
let bao: boolean = false; // tsc => var bao = false    // 布偶类型
let bao: number = 10;     // tsc => var bao = 10       // 数字类型
let bao: string = 'sb';   // tsc => var bao = 'sb'     // 字符类型
let bao: number[] = [6,0];// tsc => var bao = [6,0]    // 数组类型
let bao: any = 4;bao ='1';// tsc => var bao = 4 => '1' // 动态类型
let bao: Array<number> = [6,0]; // tsc => var bao = [6,0] // 数组类型
// ----
let bao: [string,number] = ['1',1];   // tsc => var bao = ['1',1]  // 已知数组内元素属性类型
bao[0].substr(1) // -> Yes
bao[1].substr(1) // -> Error
bao[3].substr('1') // -> Yes -满足-字符串||数字-
bao[4] = true // -> Error -不满足-字符串||数字-
bao[5].toString() // Yes -字符串||数字-都有toString-
// ----
enum Direction {
    NORTH,SOUTH,EAST,WESY,
};
let bao:Direction = Direction.NORTH // 枚举赋予类型？
// ----
function bao (): void {
    // Void -> 表示没有任何类型,当一个箭头函数没有返回值时,通常返回void
    // 声明Void类型的变量没有什么作用,因为他的值只能为 undefined || null
    console.log('npPlas')
}; // tsc => function bao() { console.log('npPlas') }
// ----
let bao1:any = "huangbaoNP!"
let bao2:number = (<string>bao1.length)
let bao3:number = (bao1 as string.length)
// Assertion '我知道我自己在干什么,请相信我'
// 断言类型--在类型转换时，不进行特殊的数据检查和结构
// ----
```

