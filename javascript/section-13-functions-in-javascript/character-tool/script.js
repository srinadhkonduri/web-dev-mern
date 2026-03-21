// character tool

let inputMessage = prompt('Enter a message')
let length = inputMessage.length;
let messageUpperCase = inputMessage.toUpperCase();
let messageLowerCase = inputMessage.toLowerCase();
let slicedMessage = inputMessage.slice(1,3);
let replaceText = inputMessage.replace('hi','hello')

console.log(length);
console.log(messageUpperCase);
console.log(messageLowerCase);
console.log(slicedMessage);
console.log(replaceText);




