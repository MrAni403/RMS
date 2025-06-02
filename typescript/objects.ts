// const person:{name:string,age:number,gender:string}={
//     name:"Anil",
//     age:24,
//     gender:"Male"
// }

// console.log(person);



// const car:{type:string,mileage?:number}={
//     type:"BMW"
// };
// car.mileage=20;

// console.log(car);

//An interface defines the shape of the object-- what properties it must have and what types those properties should be.


// interface man{
//     name:String;
//     age:Number;
// }

// const anil: man={
//     name:"Anil reddy",
//     age:24
    
// };

// console.log(anil);



// interface Animal{
//     name:string;
//     speak():void;
// }

// const dog:Animal={
//     name:"chimntu",
//     speak() {
//         console.log("bowww boww bowwwwwwwwwwww");
//     }
// }

// console.log(dog);



// interface Rectangle{
//     height:number,
//     width:number
// }

// interface ColoredRectangle extends Rectangle{
//     color:string
// }

// const ColoredRectangle={
//     height:20,
//     width:10,
//     color:"red"
// };

// console.log(ColoredRectangle);


interface Food{
    name:string;
    calories:number;
}

function speak(food:Food):void{
    console.log(`our ${food.name} has ${food.calories} + calories`);
}

let ice={
    name:"ice_cream",
    calories:2000,
}
speak(ice);