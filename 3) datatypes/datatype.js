// ⚡ Data Types ⚡
// In computer science and computer programming, a data type or simply type is an attribute of data which tells the compiler or interpreter how the programmer intends to use the data.

// ⭐ Number (Integer/ Float/ Exponential)
// JavaScript has a single numeric datatype called 'number'. This datatype accommodates integers, decimal numbers (also called floating-point numbers) as well as numbers written in scientific notation. These can all be either positive or negative numbers.

// Let us see all three types of Numbers using examples below.

// • Integers
var age = 18                                           // number (int)
let oxidationOfCarbon = -4                             // number (int)

// • Decimal Numbers
const pi = 3.14                                         // number (float)
let freezeTempOfHydrogen = -259.2                       // number (float)


// • Exponential Numbers
var expo = 10e4                                         // number(exponential)=>10*10000=100000

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
var name = "J"                                         // string (char)
var name = "Jane"                                      // string

// ⭐ Object 
// Objects are variables too. But objects can contain many values.
// Object values are written as name : value pairs (name/key and value separated by a colon).
var name = {first:"Jane", last:"Doe"}                  // object

// • Object (attribute )
// Objects can have attribute. Attribute are properties of objects. Attribute are stored in object as variable definitions

const personWithAttribute = {
    firstName: "John",  //Object ( attributes)
    lastName : "Doe",   //Object ( attributes)
    id       : 5566     //Object ( attributes)
}

// • Object ( methods)
// Objects can also have methods. Methods are actions that can be performed on objects. Methods are stored in object as function definitions
const personWithMethods = {
    fullName : function() {     //Object ( methods)
      return this.firstName + " " + this.lastName
    }   
  }

// ⭐ Array
// Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value. Each item in an array has a number attached to it, called a numeric index, that allows you to access it. In JavaScript, arrays start at index zero and can be manipulated with various methods.
const sheets = ["HTML","CSS","JS"]                       // array

// ⭐ Boolean (True/ False)
// In JavaScript, a boolean value is one that can either be TRUE or FALSE. If you need to know “yes” or “no” about something, then you would want to use the boolean function.
var truth = true                                       // boolean (true)
var truth = false                                      // boolean (false)

// ⭐ Undefined
// The undefined property indicates that a variable has not been assigned a value, or not declared at all.
var a                                                  // undefined
var a = undefined                                      // undefined

// ⭐ Null
// 'Null' is a keyword in JavaScript that signifies 'no value' or nonexistence of any value. If you wish to shred a variable off its assigned value, you can simply assign 'null' to it. Besides this, like any other object, it is never implicitly assigned to a variable by JavaScript.
var a = null                                           // value null

// ⭐ Nan
// In JavaScript, NaN is short for "Not-a-Number". In JavaScript, NaN is a number that is not a legal number.
const bird = "crow"
const color = "black"
const total = bird + color
console.log(total)      //NaN = Not a number

// ⚡ Undefined Vs Null Vs Nan ⚡
// ⭐ Undefined
// The undefined property indicates that a variable has not been assigned a value, or not declared at all.

// ⭐ Null
// 'Null' is a keyword in JavaScript that signifies 'no value' or nonexistence of any value. If you wish to shred a variable off its assigned value, you can simply assign 'null' to it. Besides this, like any other object, it is never implicitly assigned to a variable by JavaScript.

typeof(null)          // "object" (not "null" for legacy reasons)
typeof(undefined)     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null  == null        // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true

// ⭐ Nan
// In JavaScript, NaN is short for "Not-a-Number". In JavaScript, NaN is a number that is not a legal number.

const text1 = 'hello'
const text2 = 'world'
const text3 = '     JavaScript    '
const alphabet = "abcdefghijklmnopqrstuvwxyz"

// 🔻 JS String Methods	🔻

// 1️⃣ concat()	                        //joins two or more strings
// 2️⃣ toUpperCase()	                  //returns the passed string in uppercase
// 3️⃣ toLowerCase()	                  //returns the passed string in lowercase
// 4️⃣ trim()/ trimStart()/ trimEnd()   //removes whitespace from the strings
// 5️⃣ split()	                        //converts string to array of strings
// 6️⃣ slice(start, end)	              //returns a part of a string
// 7️⃣ indexOf("string")                //find substring, -1 if doesn't contain 
// 8️⃣ charAt(index)/ charCodeAt(index) //returns character at specified index
// 9️⃣ replace()/replaceAll()	          //replaces a string with another string
// 🔟 substring(start,end)	           //returns a part of a string
// 1️⃣1️⃣ substr(start, length)          //returns a part of a string
// 1️⃣2️⃣includes()	                     //searches for a string and returns a boolean value
// 1️⃣3️⃣search()	                       //searches for a string returns a position of a match
// 1️⃣4️⃣ valueOf()                      //Returns primitive value of a string object
// 1️⃣5️⃣ String.length                  //Returns the length of a string:
// 1️⃣6️⃣ padStart()/ padEnd()           //Returns the length of a string:


// 1️⃣ concat()	              //joins two or more strings
// concatenating two strings
const result1_a = text1.concat(' ', text2)
console.log(result1_a)     // "hello world"

// concatenating more than two strings
const result1_b = text1.concat(' ', text2,text3)
console.log(result1_b)     // "hello world JavaScript"

// 2️⃣ toUpperCase()	     //returns the passed string in uppercase
// converting the text to uppercase
const result2 = text1.toUpperCase()
console.log(result2) // HELLO

// 3️⃣ toLowerCase()	     //returns the passed string in lowercase
// converting the text to lowercase
const result3 = text3.toLowerCase()
console.log(result3)      // javascript

// 4️⃣ trim()	             //removes whitespace from the strings
// removing whitespace from the string
const result4 = text3.trim()
console.log(result4)      // JavaScript


// 5️⃣ split()	              //converts string to array of strings
// converting the string to an array
const result5 = text1.split()
console.log(result5)         // ["hello"]

// 6️⃣ slice(start, end)	    //returns a part of a string
// slicing the string
const result6 = text1.slice(1, 3)
console.log(result6)         // "el"

//7️⃣ indexOf("string")      //find substring, -1 if doesn't contain 
//finding index of "lmno"
const result7 = alphabet.indexOf("lmno")    
console.log(result7)        //11 (starts from 0)

//8️⃣ charAt(index)	        //returns character at specified index
//finding string at index 11
const result8 = alphabet.charAt(11)    
console.log(result8)        //'l' (starts from 0)

//CodeAt(index)             //returns unicode of character at specified index

//9️⃣ replace()	            //replaces a string with another string
// finds and replaces string, takes regular expressions
const result9_a = alphabet.replace("abc","123")   
console.log(result9_a)       //"123defghijklmnopqrstuvwxyz"

// To replace case insensitive, use a regular expression with an /i flag (insensitive)
const result9_b = alphabet.replace("/abc/i","123")   
console.log(result9_b)       //"123defghijklmnopqrstuvwxyz"

// To replace all matches, use a regular expression with a /g flag (global match)
const result9_c = alphabet.replace("/abc/g","123")   
console.log(result9_c)       //"123defghijklmnopqrstuvwxyz"

// To replace all matches, we can also use replaceAll()
const result9_d = alphabet.replaceAll("/abc/i","123")   
console.log(result9_d)       //"123defghijklmnopqrstuvwxyz"

//🔟 substring(start,end)	//returns a part of a string
//It is similar to slice but difference is start and end values less than 0 are treated as 0 in substring().
const result10 = alphabet.substring(11,15)
console.log(result10)     //lmno

//1️⃣1️⃣ substr(start, length) //returns a part of a string
const result11 = text1.substr(1,2)
console.log(result11)        //el

// 1️⃣2️⃣includes()	          //searches for a string and returns a boolean value
// finding if ''a' is in string alphabet
const result12 = alphabet.includes('a')
console.log(result12)        //true

// finding if '1' is in string alphabet
const result13 = alphabet.includes('1')
console.log(result13)        //false


// 1️⃣3️⃣search()	            //searches for a string and returns a position of a match
// searching if 'a' is in string alphabet
const result14 = alphabet.search('a')
console.log(result14)        //0
//search return '-1' if not found 
const result15 = alphabet.search('1')
console.log(result15)        //-1

//1️⃣4️⃣ valueOf()           // Returns primitive value (that has no properties or methods) of a string object
// let result = text1.valueOf() is the same as let result = text1
const result16 = text1.valueOf()
console.log(result16)       //hello    
const result17 = text1
console.log(result17)       //hello   

// 1️⃣5️⃣ String length      //Returns the length of a string:
const result18 = text1.length
console.log(result18)       //5   

// 1️⃣6️⃣ padStart()         //The padStart() method pads a string with another string
const str1 = '123';
console.log(str1.padStart(6, "*")); // "***123"

// padEnd()               //The padStart() method pads a string with another string
const str2 = '123';
console.log(str2.padEnd(6, "*")); // "123***"