"use strict";
//校验TS文件是否生成JS文件
console.log("TSfunction");
//函数声明
//es5
// function run(){
//     return 'reun'
// }
// var run2 = function(){
//     return "run2"
// }
//ts
//在函数中需要定义返回的数据类型
// function fun():string{
//     return "str"
//     // return 123//就会报错
// }
// let run = function():number{
//     return 123
// }
//ts中定义方法传参.只要是变量就一定需要定义他的类型是什么
// function getInfo(name:string,age:number):string{
//     return name+age
// }
getInfo('wzs', 123); //产餐如果不是按照类型传参就发生错误的情况，就会编译不通过
getInfo('wzs'); //产餐如果不是按照类型传参就发生错误的情况，就会编译不通过
//匿名函数与上边的相同不多写
//没有返回值得方法
function getFn() {
    console.log(123);
}
//方法的可选参数
//函数中的参数数量必须一样 加？就是可选参数
//可选参数要放在最后
// function getInfo(name:string,age?:number):string{
//     return name+age
// }
//
//默认参数，也可以传入值
function getInfo(name, age) {
    if (age === void 0) { age = 20; }
    return name + age;
}
//根据if else 展现出函数的重载
function getInfo2(value) {
    if (typeof value === "string") {
        return value;
    }
    else if (typeof value === "number") {
        return value;
    }
}
