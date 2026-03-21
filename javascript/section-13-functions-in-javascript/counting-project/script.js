let count = 0;

let counterMain = document.querySelector('#counterMain');


document.querySelector('#increaseBy1').addEventListener('click',
    function(){
        count = count + 1;
        counterMain.innerHTML= count;
    }
)


document.querySelector('#decreaseBy1').addEventListener('click',
    function(){
        count = count - 1;
        counterMain.innerHTML= count;
    }
)

document.querySelector('#increaseBy10').addEventListener('click',
    function(){
        count = count + 10;
        counterMain.innerHTML= count;
    }
)


document.querySelector('#decreaseBy10').addEventListener('click',
    function(){
        count = count - 10;
        counterMain.innerHTML= count;
    }
)


document.querySelector('#reset').addEventListener('click',
    function(){
        let resetCount = 0;
        counterMain.innerHTML= resetCount;
    }
)
