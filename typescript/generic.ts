function identity<T>(value:T):T{
    return value;
}

const num=identity<number>(123);
const str=identity<string>("hello");

console.log(num);
console.log(str);


