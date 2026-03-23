let numInput = document.getElementById("numInput");

let buttonID = document.getElementById("buttonId");

let resultMain = document.getElementById("result");

buttonID.addEventListener("click", function () {
  let number = Number(numInput.value);

    if (number >= 21) {
      resultMain.innerHTML = `Result : you are eligible to drink,
                                    you are eligible to vote , drive`;
    } else if (number >= 18) {
      resultMain.innerHTML = `Result : you are eligible to vote,
                                     you are eligible to drive`;
    } else if (number >= 16) {
      resultMain.innerHTML = `Result : you are eligible to drive`;
    } else {
      resultMain.innerHTML = `Result : invalid input`;
    }
});
