//? counter app code

// * initialize a counter
let counter = 0;

// * get the result id
let resultCounter = document.getElementById('result');

// * getting the increase counter id
let increaseCounter = document.getElementById('increase');

// * getting the decrease counter id
let decreaseCounter = document.getElementById('decrease');

// * getting the reset counter id
let resetCounter = document.getElementById('reset');


// * creating a function for it to make it dynamic for increase
increaseCounter.addEventListener('click',function(e){
    e.preventDefault();
    counter = counter + 1;
    resultCounter.innerHTML = `${counter}`;
})

// * creating a function for it to make it dynamic for decrease
decreaseCounter.addEventListener('click', function(e){
    e.preventDefault()
    counter = counter - 1;
    resultCounter.innerHTML = `${counter}`;
})
 

// * creating a function for it to make it dynamic for reset
resetCounter.addEventListener('click',function(){
    counter = 0;
    resultCounter.innerHTML = `${counter}`;
})




// ? code for the stop watch
// * grab the input coming from the input box
let inputValueTaken = document.getElementById('input');

let resultEle = document.getElementById('result1');

let buttonEle = document.getElementById('buttonId');

let interval;

// * create a function for it to make it dynamic
buttonEle.addEventListener('click',function(){
    let inputValue = Number(inputValueTaken.value)

    if(inputValue < 0 || isNaN(inputValue)){
        resultEle.innerHTML = `invalid`;
        return;
    }

    interval = setInterval(() => {
        resultEle.innerHTML = `Remaining Time : ${inputValue}`;
        inputValue--;

        if(inputValue < 0){
            clearInterval(interval);
        }
    },1000 ) // changes every second
})
