// Step 1: Get elements from HTML
const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const button = document.getElementById("calculate");
const result = document.querySelector(".result");

// Step 2: Add click event to button
button.addEventListener("click", function () {

  // Step 3: Get values from input boxes
  const value1 = num1.value;
  const value2 = num2.value;

  // Step 4: Convert string → number
  const number1 = Number(value1);
  const number2 = Number(value2);

  // Step 5: Add numbers
  const sum = number1 + number2;

  // Step 6: Show result on screen
  result.innerHTML = "Result : " + sum;
});