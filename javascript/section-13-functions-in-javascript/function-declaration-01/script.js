// steps of creating a function and using a function ()
// define the function()
// function addNumbers() {
//     // write the code here inside the function
//     console.log('this is my function');
//     let a = 10;
//     let b = 20;
//     let result = a + b;
//     console.log(result);
    
// }

// call or use the function
// addNumbers();



// FUNCTION PARAMETERS AND ARGUMENTS and with return type
// function mulNumbers(a,b){
//     let result = a * b;
//     return `the result of the two numbers is : ${result}`;
// }
// console.log(mulNumbers(23,2));



// FUNCTION EXPRESSION
const divNumbers = function(a,b){
    let result = a + b;
    return result;
}
let divResult = divNumbers(10,20);
console.log(divResult);



// ARROW FUNCTIONS
const modNUmbers = (a, b) => {
    let result = a % b;
    return result;
}
let modResult = modNUmbers(6,2);
console.log(modResult);



// ANONYMOUS FUNCTION
(function(a,b) {
    console.log(a**b);
    
})(2,3);

((a,b) => {
    let result = a + b;
    console.log(result);
    
})(2,4)