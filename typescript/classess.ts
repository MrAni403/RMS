// class Person{
//     name:string;
// }

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



// class Report1{
//     name:string;

//     public constructor(name:string){
//         this.name=name;
//     }
//     getname(){
//         return this.name;
//     }

//     print(){
//         console.log("Report:"+this.name);
//     }
// }

// class Financereport extends Report1{
//     constructor(name:string){
//         super(name);
//     }

//     print(){
//         console.log(`financialreport ${this.name}`);
//     }
//     getLineItems(){
//         console.log("5 line items");
//     }
// }

// let report1=new Financereport("months sales");
// report1.print();
// let a=new Report1("Anil");
// console.log(a.getname());


