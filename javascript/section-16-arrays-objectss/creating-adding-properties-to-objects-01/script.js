
// creating objects
const person = {
  //  key     value
  name: "tony",
  age: 25,
  city: "hyderabad",
};
console.log(person);

// adding properties to object -> DOT NOTATION
person.isMarried = true;
person.pinCode = 523109;

// bracket notation
person["hobby"] = "playing shuttle";
person["courses"] = ["html", "css", "javascript", "react", "nodeJs"];

const persons = ["tony", 30.8, "js", false]; // we can save any kind of data

// ACCESSING OBJECT PROPERTIES
//! ----- dot notation
const personName = person.name;
console.log(personName);


//? ---- bracket notation
const personHobby = person["hobby"];
console.log(personHobby);



//* -- understanding object methods
//* -- object.keys -> gives keys
const keys = Object.keys(person);
console.log(keys);


//* -- object.values -> gives values
const values = Object.values(person);
console.log(values);


//* -- has own property -> check's if an object has it's own property not inherited
const hasProperty = person.hasOwnProperty("name");
console.log(hasProperty);


//* -- object.assign() -> combines the object
const targetObj = {name : "tony"};
const sourceObj = {age : 30, country : "ny"}
const finalResult = Object.assign(targetObj,sourceObj)
console.log(finalResult);


// * -- delete operator -> deletes the key and value
delete person.name;
console.log(person);



//* -- Object.freeze --> freeze the property and making it immutable
const car = {
  model : "kia",
  year : "2025",
  price : "20 lakh"
}
console.log(car);
Object.freeze(car); //? -- freezes the object

car.model = "nissan";
console.log(car);




//! -- nesting objects
const user = {
  name : "prince",
  age : 30,
  address : {
    street : "123 main street",
    city : "ny",
    country : {
      name : 'usa',
      pinCode : "000000"
    }
  }
}
console.log(user);
// accessing nested objects properties
console.log(user.name);
console.log(user.address.country);
console.log(user.address.street);


// objects in an array
const userObj = [
  {
    name : "tony",
    age : 30,
    codeName : "iron man"
  },
  {
    name : "steve",
    age : 70,
    codeName : "captain america"
  },
  {
    name : "bruce",
    age : 40,
    codeName : "hulk"
  }
]
console.log(userObj);

// accessing data individually
console.log(userObj[0]);

// adding the new object to the user object
userObj.push({name : "thor", age : 100, codeName : "thor the thunder god"});

console.log(userObj[3]);


