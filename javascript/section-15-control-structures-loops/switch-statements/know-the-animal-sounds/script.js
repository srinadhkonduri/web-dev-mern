document.getElementById('buttonId').addEventListener('click',
    function () {

        let textInputs = document.getElementById('textInput').value.toLowerCase();

        let resultEle = document.getElementById('result')


        let animal = textInputs;
        switch(animal){
            case 'cat':
                resultEle.innerHTML = `cat makes sounds as meow`;
                break;
            case 'dog':
                resultEle.innerHTML =  `dog makes sounds as bhow`;
                break;
            case 'buffalo':
                resultEle.innerHTML =  `cannot describe in words`;
                break;
            case 'lion':
                resultEle.innerHTML = `lion roars`;
                break;
            case 'tiger':
                resultEle.innerHTML = `tiger rours`;
                break;
            default:
                resultEle.innerHTML =  `please enter valid inputs`
        }
    }
)