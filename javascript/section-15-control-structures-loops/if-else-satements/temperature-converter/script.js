// getting all the values from the code

document.getElementById("buttonId").addEventListener("click", function () {
  let temp = document.getElementById("temperature").value;
  console.log(temp);

  let conversionType = document.getElementById("conversionType").value;
  console.log(conversionType);

  let resultEle = document.getElementById("result");

  if (isNaN(temp)) {
    resultEle.innerHTML = `invalid input please provide valid input`;
    return;
  }

  if(conversionType == 'toCelsius'){
    let convertedTemperature = ((temp - 32) * 5.0/9);
    let result = convertedTemperature;
    resultEle.innerHTML = `${temp} F into celsius is ${result.toFixed(2)}`;
  }


    if(conversionType == 'toFahrenheit'){
    let convertedTemperature = ((temp * 9/5.0) + 32)
    let result = convertedTemperature;
    resultEle.innerHTML = `${temp} C into fahrenheit is ${result.toFixed(2)}`
    }
});

