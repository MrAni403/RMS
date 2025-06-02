// function identity(value) {
//     return value;
// }
// var num = identity(123);
// var str = identity("hello");
// console.log(num);
// console.log(str);


// const mypromise =new Promise((resolve,reject)=>{
//     let success=true;


//     if(success){
//         resolve("The task was successful!");
//     }else{
//         reject("something went worng.")
//     }
// });
// mypromise.then((message)=>{
//     console.log("success:",message);
// })

// .catch((error)=>{
//     console.log("Error:",error);
// });


function getUserData(){
    return new Promise((resolve, reject)=>{
        const fakeUser={name:"Alice",age:30};
        setTimeout(()=>resolve(fakeUser),1000);
    });
}

getUserData().then((user)=>{
    console.log("User Data:",user);
});