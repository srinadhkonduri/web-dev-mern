document.getElementById("buttonId").addEventListener("click", function () {
  let numberInput = document.getElementById("inputId").value;

  let resultEle = document.getElementById("paraId");

  let num = parseInt(numberInput);

  for (let i = num; i >= 0; i--) {
    setTimeout(() => {
        resultEle.innerHTML = `remaining time ${i}`
    },(num - i) * 1000); // increasing delay
  }
});
