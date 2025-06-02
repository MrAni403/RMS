// class Person{
//     name:string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// const person=new Person();
// person.name="ANIL";
// console.log(person);
// class Person{
//     private name:string;
//     public constructor(name:string){
//         this.name=name;
//     }
//     public getName():string{
//         return `My name is ${this.name}`;
//     }
// }
// const person1=new Person("Anil Reddy");
// console.log(person1.getName());
var report = /** @class */ (function () {
    function report(name) {
        this.name = name;
    }
    report.prototype.getname = function () {
        return this.name;
    };
    report.prototype.print = function () {
        console.log("Report:" + this.name);
    };
    return report;
}());
var Financereport = /** @class */ (function (_super) {
    __extends(Financereport, _super);
    function Financereport(name) {
        return _super.call(this, name) || this;
    }
    Financereport.prototype.print = function () {
        console.log("financialreport ".concat(this.name));
    };
    Financereport.prototype.getLineItems = function () {
        console.log("5 line items");
    };
    return Financereport;
}(report));
var report1 = new Financereport("months sales");
report1.print();
var a = new report("Anil");
console.log(a.getname());
