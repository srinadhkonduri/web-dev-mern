let inAmount = document.getElementById('amount');

let inHavingAmount = document.getElementById('currentAmount');

let resultEle = document.getElementById('result');

let monthlySaving = document.getElementById('monthlySaving')

let buttonEle = document.getElementById('buttonId');


function calculate(){
    let inAmounts = Number(inAmount.value);
    let inHavingAmounts = Number(inHavingAmount.value);
    let month = Number(monthlySaving.value);

    let remainingAmount = inAmounts - inHavingAmounts;
    let finalMonths = remainingAmount / month;

    resultEle.value = finalMonths;
}


buttonEle.addEventListener('click',calculate);


inAmount.addEventListener('input',calculate);
inHavingAmount.addEventListener('input',calculate);
resultEle.addEventListener('input',calculate);
monthlySaving.addEventListener('input',calculate);