"use strict";
//验证
//  vscode
// windows+R
// 配置自动编译文件的过程
//DOS运行环境 cd 文件名 dir命令是展现所有的文件和文件夹
//  npm i -g  typescript
//  tsc index.ts //将TS文件转化成JS文件
//  在此目录下的实时自动更新
//  tsc --init
//  生成tsConfig.json
//  文件修改导出生成js文件的位置
//  "outDir": "./js",    //将TS文件转化成对的js文件导出的文件位置
//  之后再VScode的终端找到 运行任务tsc 监视tsConfig.json，进行实时的编译
console.log('ts nihao');
/* 这是TS的类型定义 */
//和正常的ECMAScript的情况不同是在，每一个变量中对变量进行定义一种类型，使变量的定义不会是那么宽松
// string类型
//  var str:string = "123"
// 只是能用相对应的类型
// boolean类型
var flag = true;
//  flag = "123"//增加类型校验必须制定类型有问题,
flag = false;
//number类型
var num = 123;
//string类型
var str = "123";
//数组类型
var array = [1, 2, 2, 3]; //数组中的值可以换成别类型的会报错但是浏览器的本地是能运行的
//使用数组的any 类型让数组中的元素值可以是任意变量的
//数组中的值可以换成别类型的会报错但是浏览器的本地是能运行的
//下边的这种方法不能够限定数组中有几种类型
var arraySecend = [1, 2, 2, "3"];
//通过泛型的的形式进行数组的定义在泛型的内部进行，
var arrryTwo = [1, 2, 2, 2];
//这种方法可以限定数组中能有几种数据类型
var arrryThree = [1, 2, 2, "2", 4, 5, {}];
//元组类型 数组的每一位的类型都是和元组中是相对应的
// 超过元组中定义数据个数就会报错，类型不对也会报错
var array2 = [1, "2"];
//表示状态码
//枚举
var falg;
(function (falg) {
    falg[falg["surcess"] = 1] = "surcess";
    falg[falg["error"] = 2] = "error";
})(falg || (falg = {}));
var suc = falg.surcess;
//如果enum中没有标识符那么就会返回他的下标
console.log(suc);
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["bule"] = 0] = "bule";
    color[color["block"] = 1] = "block"; //red,bule="0",block 如果是字符串那么后边就会生成undefined
})(color || (color = {}));
//如果是number类型那么下一位就会向后+1
var colred = color.red; //1
var colbule = color.bule; //4
var colblock = color.block; //5
console.log(colred, colbule, colblock);
// 工作中的实际例子展现如下
//保证各个状态的使用，能让后面的开发者能够更好的知道你的状态是什么
var statusMore;
(function (statusMore) {
    statusMore[statusMore["more"] = 0] = "more";
    statusMore[statusMore["succeus"] = 1] = "succeus";
    statusMore[statusMore["error"] = 2] = "error";
})(statusMore || (statusMore = {}));
var objectMore = {
    date: statusMore.more
};
console.log(objectMore, 123);
console.log(1);
//any 类型
//就是可以使用任何的数据类型不用进行指定
var numb = 123;
numb = "123";
//可以不指定类型
//因为是获取DOM的元素所以不能指定一个特定的类型只能用any
var box = document.getElementById("box");
box.style.color = "red";
//null and undefinded 其他类型的子类型(两个相同不多说)
// let num2:number;
// console.log(num2)//就会报错
// let num2:undefined;
// num2 =2//报错就是不能再赋别的类型
// console.log(num2)//就不会报错
var num2;
// num2 =2//报错就是不能再赋别的类型
console.log(num2); //就不会报错
//void
//普通
// function run(){
//     console.log("run")
// }
// run()
//TS
// function run(): void{
//     console.log("ts")
// }
// run()
//有返回值的
function run() {
    console.log("ts");
    return "ts";
}
run();
//never 从不会出现
var a;
a = undefined;
var b;
b = null;
//never中的因为抛出错误所以可以使用never类型
var c;
// c = (()=>{
//     throw new Error('错了')
// })()
// 不能赋值undefined and null 会报错
// c=undefined
