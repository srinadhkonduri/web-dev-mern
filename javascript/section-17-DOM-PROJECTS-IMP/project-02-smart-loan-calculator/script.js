// Correct ID
const loanAmountInput = document.getElementById("loan-amount");
const interestRate = document.getElementById("interest-rate");
const yearInput = document.getElementById("years");

const monthlyPaymentAmount = document.getElementById("monthly-payment");
const totalPaymentAmount = document.getElementById("total-payment");
const totalInterestAmount = document.getElementById("total-interest");

const buttonIdInput = document.getElementById("buttonId");

buttonIdInput.addEventListener("click", function (e) {
  e.preventDefault(); // 🔥 prevent form refresh

  const loanAmount = Number(loanAmountInput.value);
  const annualRate = parseFloat(interestRate.value);
  const years = Number(yearInput.value);

  // ✅ Validation
  if (loanAmount <= 0 || annualRate < 0 || years <= 0) {
    alert("Enter valid inputs");
    return;
  }

  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = years * 12;

  let emi;

  if (monthlyRate === 0) {
    emi = loanAmount / totalMonths;
  } else {
    const power = Math.pow(1 + monthlyRate, totalMonths);
    emi = (loanAmount * monthlyRate * power) / (power - 1);
  }

  //* inputs accepts .value not innerHTML
  monthlyPaymentAmount.value = emi.toFixed(2);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  totalPaymentAmount.value = totalPayment.toFixed(2);
  totalInterestAmount.value = totalInterest.toFixed(2);
});
