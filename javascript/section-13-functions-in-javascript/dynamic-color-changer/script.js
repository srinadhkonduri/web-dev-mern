
let colorId = document.querySelector('.color');

let increaseSize = document.querySelector('.increase');

let resetId = document.querySelector('.reset');

let titleId = document.querySelector('.title');

let bodyEle = document.querySelector('body');


// change the background color
colorId.addEventListener('click', () => {
    let randomColor =  `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    bodyEle.style.backgroundColor = randomColor;
})

increaseSize.addEventListener('click', () => {
    titleId.style.fontSize = "50px";
})


resetId.addEventListener('click', () => {
    bodyEle.style.backgroundColor = "white";
    titleId.style.fontSize = "30px";
})