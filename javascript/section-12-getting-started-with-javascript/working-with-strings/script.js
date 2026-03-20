// ways of creating strings

let singleQuoteStrings = 'tony stark';

let doubleQuoteStrings = "tony stark";

let templateQuoteStrings = `tony stark`;


// length method
console.log(templateQuoteStrings.length);


// index of method -> accessing a specific character
console.log(singleQuoteStrings[2]);


// to upper case and to lower case
console.log(doubleQuoteStrings.toLowerCase);
console.log(doubleQuoteStrings.toUpperCase);

// index of (extracts part of the substring in the given string)
console.log(doubleQuoteStrings.indexOf(5));


// slice -> extracts part of substring in the given string by start value and end value
console.log(templateQuoteStrings.slice(1,3));


// replace replaces a substring in the given string
console.log(doubleQuoteStrings.replace("tony","iron"));


// concat -> combines two string into a single string
console.log(singleQuoteStrings.concat(doubleQuoteStrings));


// template literals -> allows multi line strings and expressions
console.log(`${singleQuoteStrings}` , `${doubleQuoteStrings}` , `${templateQuoteStrings}`);












