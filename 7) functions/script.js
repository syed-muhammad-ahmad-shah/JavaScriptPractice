// ⭐ Function in JS ⭐
// A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

///////
//JavaScript Function Declarations
///////

//1️⃣ (simple function)
function hello1() {
return "Hello simple function"
}
console.log(hello1())

//2️⃣ (function expression/ anonymous function)
let hello2 = function() {
return "Hello function expression"
}
console.log(hello2())


//3️⃣ ( IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (llFE))
let hello3 = (function() {
return "Hello IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (llFE)"
}())
console.log(hello3)


let myName = 'Ahmad'  //test variable

//4️⃣ (arrow function)
let hello4 = (name) => { return ("Hello " + name) }
console.log(hello4(myName))
//OR
let hello5 = (name) => { return (`Hello  ${name}`) }
console.log(hello5(myName))

// ⚡ Why use functions ?
// 1️⃣ re-usability
// 🔴 Function allows you to define a block of code, give it a name and then execute it as many times as you want.
// 🔴 This is helpful when we want to use a piece of code to repeat many time in our code.

// 2️⃣ Parameters 
// We can pass parameters to functions.
// 🌞 Example
function speak(parameter) {
    return parameter
  }
  
  console.log(speak("hi"))  //hi

// 🌕 Accessing a function
// Accessing a function without '()' will return the function object instead of the function result
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32)
  }
console.log(toCelsius) 
  // function toCelsius(f) { return (5/9) * (f-32) }
console.log(toCelsius(30)) 
//-1.1111111111111112

// toCelsius refers to the function object, and toCelsius() refers to the function result.

// ⚡ Arrow Functions ⚡
// 🔴 Arrow functions allows a short syntax for writing function expressions.
// 🔴 You don't need the function keyword, the return keyword, and the curly brackets.

// 🌞 Example
// ES5
var normalFunction = function(x, y) {
    return x * y
  }
  
// ES6
const arrowFunction = (x, y) => x * y

// 🌟 Syntax
// 1️⃣ Without parameters and only one line
let greeting = () => "Hello World!"
console.log(greeting())

// 2️⃣ With one parameters and only one line
let greeting1 = a => "Hello World! " + a
console.log(greeting1("and Universe"))

// 3️⃣ With two parameters and only one line
let greeting2 = (a,b) => "Hello World!" + a + b
console.log(greeting2(", Universe", " and galaxy"))

// 4️⃣ With two or more parameters and two or more lines
let greetingAndTime = (a,b) => {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log("Hello World!" + a + b)
    return "Current time is " + time
    // console.log(time)
}
console.log(greetingAndTime(", Universe", " and galaxy"))
