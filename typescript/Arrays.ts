const list1: number[]=[];

for(let i=0;i<10;i++){
    list1.push(i);
}
console.log(list1);


const list2: string[]=[];

for(let i=0;i<5;i++){
    list2.unshift("Anil");
}

console.log(list2);




const list3: readonly number[]=[1,2,3,4];
//list3.push(3);
/// Error: Property 'push' does not exist on type 'readonly number[]'.
console.log(list3);


let ourtuple:[number,string,boolean];

ourtuple=[4,"Anil",true];

console.log(ourtuple);
