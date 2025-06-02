//FUNCTIONS WITH TYPES:

	function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Alice")); // ✅ Valid
// greet(42); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'


//--->name: string defines the parameter type
//-->: string =after the parentheses defines the return type 


2//] FUNCTION WITH MULTIPLE PARAMETERS:

function add(x:number,y:number):number{
		return x+y;
}

console.log(add(5,10));


//3]OPTIONAL PARAMETERS:

function log(message: string, user?: string):void{
	if(user){
		console.log(`[${user}] ${message}`);
	}else{
		console.log(message);
	}
}

log("System rebooted");
log("file saved","Alice");


//---->use ? to make a parameter optional *************************

//4] DEFUALT PARAMETERS


function multiply(a:number, b:number=1):number{
	return a*b;
}

console.log(multiply(5));
console.log(multiply(5,2));


//5]Arrow Functions

const add2=(a:number,b:number):number=>{
	return a+b;
};

console.log(add2(10,35));

const multiply1=(a:number,b:number)=>a*b;

console.log(multiply1(20,40));

//---->Arrow function with no Parameters

const greet2=():void=>{
	console.log("heelo!");
}

//--->Arrow function with One Parameter

const square=(x:number):number=>x*x;

console.log(square(3));



const users=["anil","chintu","vishnu"];

users.forEach((user:string):void=>{
	console.log(`hello,${user}`);
});







