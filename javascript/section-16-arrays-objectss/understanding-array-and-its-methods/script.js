// array methods
let fruits = ['apple','banana','grapes'];
console.log(fruits);


// push -> adds the elements on the back of the array
fruits.push('dragon-fruit','pineapple');
console.log(fruits);

// accessing the array data -> access the index data
let appleData = fruits[0];
console.log(appleData);


// pop -> removes the end of the array elements
let books = ['atomic habits','3000 stitches','money']
books.pop();
console.log(books);


// shift -> removes the first elements from the array 
books.shift();
console.log(books);


// unshift -> adds elements to the first of the array
books.unshift('MERN stack');
console.log(books);


// concat -> combines the arrays
const color1 = ['red','blue','green'];
const color2 = ['yellow','orange','pink'];

const result = color1.concat(color2);
console.log(result);



// slice -> breaks the array into parts
const vegetables = ['cabbage','carrot','cucumber','onion','potato']
console.log(vegetables.slice(1,4));


// .length -> gives the length of the array
console.log(vegetables.length);






 