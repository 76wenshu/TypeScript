console.log("ts")
class Person {
    name:string; //属性 省略了 public 关键字
    constructor(n:string){
        this.name = n;
    }
    run():void{
        console.log(this.name)
    }
}
let web = new Person('wangwu')
web.run() n 