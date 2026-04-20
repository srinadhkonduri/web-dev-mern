// java script code for the project
let globalTip = 0;

let inputAmount = document.getElementById("amount");

let selectedServiceExperience = document.getElementById("serviceExperience");

const requiredPercentageOfTip = function () {
  let amount = Number(inputAmount.value); // ✅ FIX
  let selectedService = selectedServiceExperience.value;

  if (selectedService == "exceptional") {
    globalTip = amount * (25 / 100);
  } else if (selectedService == "veryGood") {
    globalTip = amount * (20 / 100);
  } else if (selectedService == "good") {
    globalTip = amount * (15 / 100);
  } else if (selectedService == "fair") {
    globalTip = amount * (10 / 100);
  } else if (selectedService == "bad") {
    globalTip = amount * (5 / 100);
  } else {
    globalTip = 0;
  }

  return globalTip; // ✅ IMPORTANT
};

let totalPersons = document.getElementById("persons");

let totalTipAmount = document.getElementById("tip-amount");

let totalAmountToBePaid = document.getElementById("total-amount");

let totalAmountPerPerson = document.getElementById("amount-per-person");

let totalTipPerPerson = document.getElementById("tip-per-person");

let buttonEle = document.getElementById("buttonId");

// main logic create a function
function calculateAll() {
  let billAmount = Number(inputAmount.value);
  let serviceQuality = requiredPercentageOfTip(); // ✅ CALL FUNCTION
  let totalPersonsIn = Number(totalPersons.value); // ✅ FIX

  // total tip amount
  totalTipAmount.value = serviceQuality.toFixed(0);

  // total amount
  totalAmountToBePaid.value = (billAmount + serviceQuality).toFixed(0);

  // amount per person
  totalAmountPerPerson.value = (
    (billAmount + serviceQuality) /
    totalPersonsIn
  ).toFixed(0);

  // tip per person
  totalTipPerPerson.value = (serviceQuality / totalPersonsIn).toFixed(0);
}

// adding the button
buttonEle.addEventListener("click", calculateAll);

// add real time updates
inputAmount.addEventListener("input", calculateAll);
selectedServiceExperience.addEventListener("change", calculateAll);
totalPersons.addEventListener("input", calculateAll);
