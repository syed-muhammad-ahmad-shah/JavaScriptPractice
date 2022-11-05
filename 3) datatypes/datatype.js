// ⚡ Data Types ⚡
// In computer science and computer programming, a data type or simply type is an attribute of data which tells the compiler or interpreter how the programmer intends to use the data.

// ⭐ Number (Integer/ Float/ Exponential)
// JavaScript has a single numeric datatype called 'number'. This datatype accommodates integers, decimal numbers (also called floating-point numbers) as well as numbers written in scientific notation. These can all be either positive or negative numbers.

// Let us see all three types of Numbers using examples below.

// • Integers
var age = 18;                                           // number (int)
let oxidationOfCarbon = -4;                             // number (int)

// • Decimal Numbers
const pi = 3.14                                         // number (float)
let freezeTempOfHydrogen = -259.2                       // number (float)


// • Exponential Numbers
var expo = 10e4                                         // number(exponential)=>10*10000=100000;

//  • Big int
// BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than 2^53-1.

// ➡ Syntax
// BigInt( number ) 
var bigNum = BigInt(123422222222222222222222222222222222222)   // bigint
// or
// Appending n to end of an integer literal
var bigNum1 = 123422222222222222222222222222222222222n         // bigint

// ⭐ String (String/ Char)
// char is a primitive data type. char represents a single character whereas String can have zero or more characters. So String is an array of chars. 
var name = "J";                                         // string (char)
var name = "Jane";                                      // string

// ⭐ Object 
// Objects are variables too. But objects can contain many values.
// Object values are written as name : value pairs (name/key and value separated by a colon).
var name = {first:"Jane", last:"Doe"};                  // object

// • Object (attribute )
// Objects can have attribute. Attribute are properties of objects. Attribute are stored in object as variable definitions

const personWithAttribute = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566
}
// • Object ( methods)
// Objects can also have methods. Methods are actions that can be performed on objects. Methods are stored in object as function definitions
const personWithMethods = {
    fullName : function() {     //Object ( methods)
      return this.firstName + " " + this.lastName;
    }   
  };

// ⭐ Array
var sheets = ["HTML","CSS","JS"];                       // array

// ⭐ Boolean (True/ False)
var truth = true;                                       // boolean (true)
var truth = false;                                      // boolean (false)

// ⭐ Undefined
var a;                                                  // undefined
var a = undefined;                                      // undefined

// ⭐ Null
var a = null;                                           // value null

// ⭐ Nan

// ⚡ Undefined Vs Null Vs Nan ⚡

