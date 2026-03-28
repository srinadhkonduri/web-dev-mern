// ! destructuring

// * basic
let numbers = [1,2,3,4,5];
const [first,second,third,fourth,fifth] = numbers;
console.log(second);


// * swap variables
let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(a,b);


// * object destructuring
const {name, age} = {
    name : 'tony',
    age : 30
};
console.log(name, age);



// * function destructing
function greet({names, ages}){
    return `hello ${names} your age is ${ages}`;
}

// * another way is directly passing the object
function productInfo(prodInfo){
    return `product Id is ${prodInfo.id} and product name is ${prodInfo.prodName} and product price is ${prodInfo.price}`;
}

const prodInfos = {
    id : 1,
    prodName : 'phone',
    price : 70000
}
console.log(productInfo(prodInfos));



// **** nested destructuring **** very very important
const {
    id,
    info : {rollNO, Class}
} = {
    id : 1,
    info : {
        rollNO : "21f91a04b0",
        Class : "ece"
    }
}

console.log(id, rollNO);
