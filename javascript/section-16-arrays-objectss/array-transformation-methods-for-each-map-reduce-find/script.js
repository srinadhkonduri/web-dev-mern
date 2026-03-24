// methods
let numbers = [1,2,3,4,5,6,7,8,9];

// for each
numbers.forEach(function (num) {
    console.log(num);  
})

// objects using for each
const products = [
    {name : "phone", stock : 10, price : 1000, isOutOfStock : true},
    {name : "laptop" , stock : 5, price : 2000, isOutOfStock : false},
    {name : "tablet", stock : 3, price : 1500, isOutOfStock : false},
];

products.forEach((individualProducts) => {
    console.log(`product are : ${individualProducts.name} and stock remaining is ${individualProducts.stock}`);
    
})

//! map()
// * creates the new array
// * transform the elements
const doubledNumbers = numbers.map((num) => {
    return num * 2;
})
console.log(doubledNumbers);

// applying 10 % discount on the prices and returning the new array
const discountedPrices = products.map((product) => {
    return {
        // use the function input
        name : product.name,
        stock : product.stock,
        price : product.price * 0.9
    }
})

console.log(discountedPrices);


// ! reduce method
const numbers1 = [1,2,3,4,5,6];
const totalSum = numbers1.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
},0)

console.log(totalSum);


// reduce method on objects
const totalInventoryValue = products.reduce(function(accumulator, product){
    return accumulator + (product.price * product.stock);
}, 0)
console.log(totalInventoryValue);



// ! -- find method
const numbers2 = [1,2,3,4,5,6,7];
const foundNumber = numbers2.filter(function(num){
    return num > 3;
})
console.log(foundNumber);
