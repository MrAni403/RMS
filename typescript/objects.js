// const person:{name:string,age:number,gender:string}={
//     name:"Anil",
//     age:24,
//     gender:"Male"
// }
var ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
console.log(ColoredRectangle);


function speak(food) {
    console.log("our ".concat(food.name, " has ").concat(food.calories, " + calories"));
}
var ice = {
    name: "ice_cream",
    calories: 2000,
};
speak(ice);
