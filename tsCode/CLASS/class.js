"use strict";
console.log("ts");
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    return Person;
}());
var web = new Person('wangwu');
web.run();
n;
