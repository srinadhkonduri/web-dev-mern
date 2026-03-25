let buttonEle = document.getElementById('buttonId');

let inputAmount = document.getElementById('amount');
let inputPercentage = document.getElementById('percentage');

let outputAmount = document.getElementById('resultAmount');
let outputPercentage = document.getElementById('percentage-amount');

function doCalculation() {

    // always convert inputs into numbers not outputs
    let inAmount = Number(inputAmount.value);
    let inPercentage = Number(inputPercentage.value);

    // Edge case handling
    if (isNaN(inAmount) || isNaN(inPercentage)) {
        outputAmount.value = '';
        outputPercentage.value = '';
        return;
    }

    let percentageFormula = (inPercentage / 100) * inAmount;

    outputAmount.value = inAmount;
    outputPercentage.value = percentageFormula.toFixed(2);
}

// Events
buttonEle.addEventListener('click', doCalculation);
inputAmount.addEventListener('input', doCalculation);
inputPercentage.addEventListener('input', doCalculation);