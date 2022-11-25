// ⭐ objects ⭐
/*
An object is made of key value pairs. Keys can be strings 
(which don't require quotes), array with a string, or symbols. Values can be arrays,
objects, numbers etc

➡  syntax
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value
};
*/
// 1) Object Literal
	const objLit = {
    	name: "Ahmad",
      	age: 20
    }
console.log(objLit.name)    //Ahmad
console.log(objLit.age)     //20

// 2) New key word
class ObjectLayout {
	constructor() {
    	this.firstName = "Ahmad"; //property
    }
  
  	sayHi() { // Method
    	return `Hello from ${this.firstName}`;
    }
}
const object = new ObjectLayout();
console.log(object.firstName) // Ahmad;
console.log(object.sayHi()) // "Hello from Larry"

// 3) Another way of creating an object:
const obj1 = new Object();
obj1.name = 'John'

//🌞Example
let testSymbol = Symbol('item number 3')
const obj = {
	item1: 1,
    "item number 2": 2,
    testSymbol: 3,
  	['a']: 4
}


// 🌟Accessing value
// To access values, you can use 1️⃣ dot notation or 2️⃣ bracket notation. 
// 1️⃣ dot notation 
console.log(obj.item1)
// 2️⃣ bracket notation. 
console.log( obj['item number 2'])
// ◾ Both do the same thing, bracket notion is useful for multi space keys,
// ◾ keys with dashes, or accessing values using variables

 let b = 'item1'
  console.log(obj[b])   //1
  // The following would NOT work and would return undefined:
  console.log(obj.b)    //undefined



// Short hand key assignment:
const name1 = 'John'
const obj2 = {
    // this is short hand that automatically sets the key to be 'name',
    // and it's value to be 'John'
	name1, 
}


// ⚡ Methods in objects
const obj4 = {
  	name: 'Mike',
  	number: 4421,
	sayHi: () => 'hi',
  	sayBye() {
    	return 'bye'
    }
}

console.log(obj4.sayHi())   //hi
console.log(obj4.sayBye())  //bye
