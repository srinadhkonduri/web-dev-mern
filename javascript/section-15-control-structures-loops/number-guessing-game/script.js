let randomNumberFinal = Math.floor(Math.random() * 11);
console.log(randomNumberFinal);

let chances = 5;

document.getElementById("buttonId").addEventListener("click", function () {
    let num = Number(document.getElementById("numberInput").value);

    let resultEle = document.getElementById("result");

    let chancesEle = document.getElementById("chance");

    if (isNaN(num) || num < 0 || num > 10) {
        resultEle.innerHTML = `Enter a number between 1 to 10`;
        return;
    }

    if (chances <= 0) {
        resultEle.innerHTML = `Game Over`;
        return;
    }

    if (num === randomNumberFinal) {
        resultEle.innerHTML = "🎉 You guessed correctly! Game Over";
        chances = 0;
        return;
    } else if (num > randomNumberFinal) {
        resultEle.innerHTML = "Too high";
    } else {
        resultEle.innerHTML = "Too low";
    }

    chances--;

    if (chances == 0) {
        chancesEle.innerHTML = `No chances left Game Over`;
    } else {
        chancesEle.innerHTML = `Chances Left ${chances}`;
    }
});
