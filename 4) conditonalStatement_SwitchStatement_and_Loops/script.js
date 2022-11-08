// ⚡ if, else if, else ⚡
// Conditional statements are used to perform different actions based on different conditions.

//🔴 Use if to specify a block of code to be executed, if a specified condition is true
//🔴 Use else to specify a block of code to be executed, if the same condition is false
//🔴 Use else if to specify a new condition to test, if the first condition is false
//🔴 Use switch to specify many alternative blocks of code to be executed

// ⭐ Syntax
// if (condition) {
    // 	statement
    // } 
    // else if(condition){
    // 	statement
    // }
    // else{
    //   statement
    // }
            
// ⭐ Example
let Name1  = ["Ahmad_Shah","Baber", "Kareem"] // test array

// Returns a random integer from 0 to 2:
let Name = Name1[Math.floor(Math.random() * 3)] 

// search()	            //searches for a string and returns a position of a match
if(Name.search("A") === 0){
    console.log("Your name ", Name, " Starts with letter 'A' ")
}
else if(Name.search("B") === 0){
    console.log("Your name ", Name, " Starts with letter 'B' ")
}
else{
    console.log("Your name ", Name, " don't Starts with letter 'A' nor 'B' ")
}

// ⚡ Switch Statement ⚡
// The switch statement is used to perform different actions based on different conditions.

// 🔴 The switch expression is evaluated once.
// 🔴 The value of the expression is compared with the values of each case.
// 🔴 If there is a match, the associated block of code is executed.
// 🔴 If there is no match, the default code block is executed

// ⭐ Syntax
// switch(expression) {
//     case x:
//       code block
//       break;
//     case y:
//       code block
//       break;
//     default:
//       code block
//   }

// ⭐ Example
let color1 = ["red", "green", "yellow"]  //test array

// Returns a random integer from 0 to 4:
let color = color1[Math.floor(Math.random() * 5)] 

switch(color) {
    case "red":
      console.log(color, " stop")
      break;
    case "yellow":
        console.log(color, " get ready")
        break;
    case "green":
      console.log(color, " go head")
      break;
    default:
      console.log("enter valid color")
  }

// 🔁 Loops 🔁  
// Loops can execute a block of code a number of times. Until some condition matches.

// 🔴 initializer Expression 1 sets a variable before the loop starts (let i = 0).
// 🔴 condition Expression 2 defines the condition for the loop to run (i must be less than 5).
// 🔴 increment Expression 3 increment or decrement each time the code block in the loop has been executed.(i++)/ (++i) or (i--)/ (--i)

// Syntax
// for (initializer; condition; increment) {
// 	code
// }

// ⭐ Example_1
// print each number between 0 and 9
for (let i = 0; i < 10; i++) {
	console.log(i);
}

// ⭐ Example_2
// for loops are useful when working with arrays
let array = [ "a", "b", "c" ];
// print each element in the array
for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
}

// ⚡ Types of loops ⚡

// 1️⃣ for - loops through a block of code a number of times
// 2️⃣ for/in - loops through the properties of an object
// 3️⃣ for/of - loops through the values of an iterable object (array)
// 4️⃣ forEach - loops through the array
// 5️⃣ while - loops through a block of code while a specified condition is true
// 6️⃣ do/while - also loops through a block of code while a specified condition is true


// 1️⃣ for - loops through a block of code a number of times
// ➡ Syntax
// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }

// ⭐ Example
for (let i = 5; i > 0; i--) {
    console.log(i);
  }
    // 5
    // 4
    // 3
    // 2
    // 1

// 2️⃣ for/in - loops through the properties of an object
// ➡ Syntax
// for (key in object) {
//     // code block to be executed
//   }

// ⭐ Example
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  console.log(person[x])
}
// John
// Doe
// 25

// 3️⃣ for/of - loops through the values of an iterable object
// ➡ Syntax
// for (key of object) {
//     // code block to be executed
//   }
const people = [{ name: 'Karl', location: 'UK' }, 
                { name: 'Steve', location: 'US' }];

for (const person of people) {
    console.log(person.name); // "karl", then "steve"
    console.log(person.location); // "UK", then "US"
}

// 4️⃣ forEach - loops through the array
// ➡ Syntax
// fruits.forEach(myFunction);

// ⭐ Example_1
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(function(fruit){
  console.log('I want to eat a ' + fruit)
});
// I want to eat a mango
// I want to eat a papaya
// I want to eat a pineapple
// I want to eat a apple

// ⭐ Example_2
let words = ['one', 'two', 'three', 'four'];
words.forEach((word) => {
  console.log(word);
});
// one
// two
// three
// four

// 5️⃣ while - loops through a block of code while a specified condition is true
// ➡ Syntax
// while (condition) {
	// code
// }

// ⭐ Example
var arr = [1, 2, 3, 4, 5] // test array
 let j= 0;
 while(j < arr.length)
 {
     console.log(arr[j]);
     j++;
 }
    // 1
    // 2
    // 3
    // 4
    // 5

// 6️⃣ do/while - also loops through a block of code while a specified condition is true
// ➡ Syntax
// do {
	// code
// }
// while (condition)

// ⭐ Example
 let k=0;
 do{
     console.log(arr[k]);
     k++;
 }
 while(k < arr.length);
    // 1
    // 2
    // 3
    // 4
    // 5