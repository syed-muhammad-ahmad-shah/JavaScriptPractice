// ⭐ Style Guide ⭐

// 1️⃣ Variable Names
// use camelCase for identifier names (variables and functions).
// All names start with a letter.

// 2️⃣ Spaces Around Operators
// Always put spaces around operators ( = + - * / ), and after commas
let x = y + z;
const myArray = ["Volvo", "Saab", "Fiat"];

// 3️⃣ Code Indentation
// Always use 2 spaces for indentation of code blocks
// Do not use tabs (tabulators) for indentation. Different editors interpret tabs differently.
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
  }

// 4️⃣ Statement Rules
// Always end a simple statement with a semicolon.
const cars = ["Volvo", "Saab", "Fiat"];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// 🔴 General rules for complex (compound) statements:
// Put the opening bracket at the end of the first line.
// Use one space before the opening bracket.
// Put the closing bracket on a new line, without leading spaces.
// Do not end a complex statement with a semicolon.
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  
// 5️⃣ Object Rules
// Place the opening bracket on the same line as the object name.
// Use colon plus one space between each property and its value.
// Use quotes around string values, not around numeric values.
// Do not add a comma after the last property-value pair.
// Place the closing bracket on a new line, without leading spaces.
// Always end an object definition with a semicolon.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

// 🔴 Short objects can be written compressed
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// 6️⃣ Line Length < 80
// For readability, avoid lines longer than 80 characters.
// If a JavaScript statement does not fit on one line, the best place to break it, is after an operator or a comma.
document.getElementById("demo").innerHTML =
"Hello Dolly.";

// 7️⃣ Naming Conventions
// Variable and function names written as camelCase
// Global variables written in UPPERCASE 
// Constants (like PI) written in UPPERCASE

// 🔴 Should you use hyp-hens in variable names?
// The short answer is NO!
// WHY?(read detail blow for answer)
// Hyphens in HTML and CSS:
// HTML5 attributes can start with data- (data-quantity, data-price).
// CSS uses hyphens in property-names (font-size).
// Hyphens can be mistaken as subtraction attempts. Hyphens are not allowed in JavaScript names.

// 🔴 Accessing HTML Elements
// A consequence of using "untidy" HTML styles, might result in JavaScript errors.
// These two JavaScript statements will produce different results:

const obj = getElementById("Demo")
const obj = getElementById("demo")

// If possible, use the same naming convention (as JavaScript) in HTML.

// ⭐ Best Practices ⭐
// Avoid global variables, avoid new, avoid ==, avoid eval()

// Declarations on Top
// Declare at the beginning
let firstName, lastName, price, discount, fullPrice;

// Initialization 
firstName = "John";
lastName = "Doe";

price = 19.90;
discount = 0.10;

fullPrice = price - discount;

// Initialize Variables
// It is a good coding practice to initialize variables when you declare them

// Declare and initiate at the beginning
let firstName = "";
let lastName = "";
let price = 0;
let discount = 0;
let fullPrice = 0,
const myArray = [];
const myObject = {};

// Declare  Arrays and Objects with const
// Declaring with const will prevent any accidental change of type
const car = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";      // Not possible