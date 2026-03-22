// query selector
const querySelectorClass = document.querySelector('.product-card')
console.log(querySelectorClass);

// query selector via attribute
const attributeSelector = document.querySelector("[data-rating='4.9']")
console.log(attributeSelector);


// -------------------------------------------------



// query selector all
const querySelectorAllEle = document.querySelectorAll('.product-card');
console.log(querySelectorAllEle);

// query selector all attribute
const querySelectorAllAttributeEle = document.querySelectorAll("[data-rating='4.7']");
console.log(querySelectorAllAttributeEle);


// printing all the product names
const productName = document.querySelectorAll('.product-name');

const productArray = Array.from(productName);

const result = productArray.map((el) => el.innerHTML);

console.log(result);



// printing the laptop's names by category
const categoryProductEle = document.querySelectorAll("[data-category='laptop'] .product-name");

// first create an node list in the form of array
const arrayResult = Array.from(categoryProductEle);

// and iterate the array with for each map
const result1 = arrayResult.map((el) => el.textContent);

// log the result
console.log(result1);
