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
// 1️⃣2️⃣ includes()	                   //searches for a string and returns a boolean value
// 1️⃣3️⃣ search()	                     //searches for a string returns a position of a match
// 1️⃣4️⃣ valueOf()                      //Returns primitive value of a string object
// 1️⃣5️⃣ String.length                  //Returns the length of a string
// 1️⃣6️⃣ padStart()/ padEnd()           //Returns the length of a string


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
const str1 = '123'
console.log(str1.padStart(6, "*")) // "***123"

// padEnd()               //The padStart() method pads a string with another string
const str2 = '123'
console.log(str2.padEnd(6, "*")) // "123***"



let stuff = ['A', 'B', 'C', 'D', 'E', 'F'] // test array

// 🟥 JS Array Methods	🟥

// 1️⃣ stuff.pop()                        // removes the last item in the array (returns what was removed)
// 2️⃣ stuff.shift()                      // removes the first item in the array (returns what was removed)
// 3️⃣ stuff.push("G")                    // adds an item to the end of the array (returns the new length of the array)
// 4️⃣ stuff.unshift("Z")                 // adds an item to the beginning of the array (returns the new length of the array)
// 5️⃣ stuff.indexOf("C")                 // returns the index number of the item in the array
// 6️⃣ stuff.splice(2)                    // gets rid of the index item and after it (returns what was removed)
//  stuff.splice(2,2)                    // second argument determines how many items are removed in total (including index) (returns what was removed)
//  stuff.splice(2,0,"Hello")            // inserts item "hello" into index number 2 and shifts other items ahead (removing 0 items) (returns what was removed)
//  stuff.splice(2,3,"Hello")            // removes 3 items (including index number 2 and after) and inserts "hello" into index number 2 (returns what was removed)
// 7️⃣ stuff.slice(2)                     // same as splice but doesn't modify the original array (returns what would be removed)
// 8️⃣ stuff.toString()                   // returns the combination of elements of the array into a string
// 9️⃣ stuff.join("-")                    // works the same as toString() but the argument determines what is between each element in the string
// 1️⃣0️⃣ stuff.reverse()                 // reverses an array's elements (returns same thing)
// 1️⃣1️⃣ stuff.includes("G")             // returns "true" if the item is located in the array and returns false if not
// 1️⃣2️⃣ stuff.at(-1)                    // returns the item corresponding to index, same as stuff[argument] if argument is positive but if it is negative it is the same as stuff[stuff.length + argument]
// 1️⃣3️⃣ stuff.length                    // Returns the length of an Array
// 1️⃣4️⃣ delete stuff[index]             // Deletes an array elements
// 1️⃣5️⃣ stuff.concat(['G', 'H', 'I'])   // returns the combination of array "stuff" with the array argument
// 1️⃣6️⃣ array.sort()                    // The sort() method sorts an array alphabetically
// 1️⃣7️⃣ array.map(function/ operation)  // creates a new array from calling a function for every array element.
// 1️⃣8️⃣ array.filter(function/ operation) // creates a new array filled with elements that pass a test provided by a function.
// 1️⃣9️⃣ array.forEach()                   // loop over array by executing a provided callback function for each element in an array.
// 2️⃣0️⃣ array.every() //  checks every element in the array that passes the condition, returning true or false .


// 1️⃣ stuff.pop()                   // removes the last item in the array (returns what was removed)
stuff.pop() // removes the last item in the array (returns what was removed)
//stuff = ['A', 'B', 'C', 'D', 'E']
//return: ['F'] 

// 2️⃣ stuff.shift()                 // removes the first item in the array (returns what was removed)
stuff.shift() // removes the first item in the array (returns what was removed)
//stuff = ['B', 'C', 'D', 'E', 'F']
//return: ['A']

// 3️⃣ stuff.push("G")               // adds an item to the end of the array (returns the new length of the array)
stuff.push("G") // adds an item to the end of the array (returns the new length of the array)
//stuff = ['B', 'C', 'D', 'E', 'F', 'G']
//return: 6      //array length

// 4️⃣ stuff.unshift("A")            // adds an item to the beginning of the array (returns the new length of the array)
stuff.unshift("A") // adds an item to the beginning of the array (returns the new length of the array)
//stuff = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
//return: 7     //array length

// 5️⃣ stuff.indexOf("C")            // returns the index number of the item in the array
stuff.indexOf("C") // returns the index number of the item in the array
//return: 2

// 6️⃣ stuff.splice(2)               // gets rid of the index item and after it (returns what was removed)
stuff.splice(2) // gets rid of the index item and after it (returns what was removed)
//stuff = ['A', 'B']
//return: ['C', 'D', 'E', 'F']

stuff = ['A', 'B', 'C', 'D', 'E', 'F'] // test array
// stuff.splice(2,2)             // second argument determines how many items are removed in total (including index) (returns what was removed)
stuff.splice(2,2) // second argument determines how many items are removed in total (including index) (returns what was removed)
//stuff = ['A', 'B', 'E', 'F']
//return: ['C', 'D']

//  stuff.splice(2,0,"Hello")     // inserts item "hello" into index number 2 and shifts other items ahead (removing 0 items) (returns what was removed)
stuff.splice(2,0,"Hello") // inserts item "hello" into index number 2 and shifts other items ahead (removing 0 items) (returns what was removed)
//stuff = ['A', 'B', 'Hello', 'C', 'D', 'E', 'F']
//return: []

stuff = ['A', 'B', 'C', 'D', 'E', 'F'] // test array
//  stuff.splice(2,3,"Hello")     // removes 3 items (including index number 2 and after) and inserts "hello" into index number 2 (returns what was removed)
stuff.splice(2,3,"Hello") // removes 3 items (including index number 2 and after) and inserts "hello" into index number 2 (returns what was removed)
//stuff = ['A', 'B', 'Hello', 'F']
//return: ['C', 'D', 'E']

stuff = ['A', 'B', 'C', 'D', 'E', 'F'] // test array
// 7️⃣ stuff.slice(2)                 // same as splice but doesn't modify the original array (returns what would be removed)
//  stuff.slice(2)                // same as splice but doesn't modify the original array (returns what would be removed)
stuff.slice(2) // same as splice but doesn't modify the original array (returns what would be removed)
//stuff = ['A', 'B', 'C', 'D', 'E', 'F']
//return: ['C', 'D', 'E', 'F']

// 8️⃣ stuff.toString()               // returns the combination of elements of the array into a string
stuff.toString() // returns the combination of elements of the array into a string
//stuff = ['A', 'B', 'C', 'D', 'E', 'F']
//return: "A,B,C,D,E,F"

// 9️⃣ stuff.join("-")                // works the same as toString() but the argument determines what is between each element in the string
stuff.join("-") // works the same as toString() but the argument determines what is between each element in the string
//stuff = ['A', 'B', 'C', 'D', 'E', 'F']
 //return: "A-B-C-D-E-F"
 
 // 1️⃣0️⃣ stuff.reverse()             // reverses an array's elements (returns same thing)
 stuff.reverse() // reverses an array's elements (returns same thing)
 console.log(stuff)
 //stuff = ['F', 'E', 'D', 'C', 'B', 'A']
 //return: []
 
 // 1️⃣1️⃣ stuff.includes("G")         // returns "true" if the item is located in the array and returns false if not
 stuff.includes("G") // returns "true" if the item is located in the array and returns false if not
 //return: false
 
 stuff = ['A', 'B', 'C', 'D', 'E', 'F'] // test array
 
 // 1️⃣2️⃣ stuff.at(index)                // returns the item corresponding to index, same as stuff[argument] if argument is positive but if it is negative it is the same as stuff[stuff.length + argument]
 stuff.at(-1) // returns the item corresponding to index, same as stuff[argument] if argument is positive but if it is negative it is the same as stuff[stuff.length + argument]
 //return: 'F'
 
 stuff.at(-2) // returns the item corresponding to index, same as stuff[argument] if argument is positive but if it is negative it is the same as stuff[stuff.length + argument]
 //return: 'E'
 
 stuff.at(0) // returns the item corresponding to index, same as stuff[argument] if argument is positive but if it is negative it is the same as stuff[stuff.length + argument]
 //return: 'A'
 
 stuff.at(1) // returns the item corresponding to index, same as stuff[argument] if argument is positive but if it is negative it is the same as stuff[stuff.length + argument]
 //return: 'B'
 
 // 1️⃣3️⃣ stuff.length               //Returns the length of a Array
 stuff.length
 // return:  6
 
 // 1️⃣4️⃣ delete stuff[index]         // Deletes an array elements
 let body = delete stuff[0] //Deleting elements leaves undefined holes in an array
 // stuff = [ <1 empty item>, 'B', 'C', 'D', 'E', 'F' ]
 // return: []
 
 // 1️⃣5️⃣ stuff.concat(['G', 'H', 'I']) // returns the combination of array "stuff" with the array argument
 stuff.concat(['G', 'H', 'I']) // returns the combination of array "stuff" with the array argument
 //stuff = ['A', 'B', 'C', 'D', 'E', 'F']
 //return: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
 
 const Girls = ["Cecilia", "Lone"]
 const Boys = ["Emil", "Tobias", "Linus"]
 
 Girls.concat(Boys)
 // Girls = [ 'Cecilia', 'Lone' ]
 // return: [ 'Cecilia', 'Lone', 'Emil', 'Tobias', 'Linus' ]
 
 const fruits = ["Banana", "Orange", "Apple", "Mango"] // test array
 console.log(fruits)
 
 // 1️⃣6️⃣ array.sort()                  // The sort() method sorts an array alphabetically
 fruits.sort()
 //  fruits = [ 'Apple', 'Banana', 'Mango', 'Orange' ]
 //  return:  [ 'Apple', 'Banana', 'Mango', 'Orange' ]
 
 // array sorting a number
 const points = [40, 100, 1, 5, 25, 10]   // test array
 points.sort()                            //[ 1, 10, 100, 25, 40, 5 ]
 //Ascending order
 points.sort(function(a, b){return a - b})//[ 1, 5, 10, 25, 40, 100 ]
 
 // Descending order
 points.sort(function(a, b){return b - a})//[ 100, 40, 25, 10, 5, 1 ]
 
 // sorting randomly
 points.sort(function(){return 0.5 - Math.random()})
 
 // Finding highest and lowest number
 points.sort(function(a, b){return a - b})

// now points[0] contains the lowest value
let lowest = points[0]                //1

// and points[points.length-1] contains the highest value
let highest = points[points.length-1] //100

// 1️⃣7️⃣ array.map(function/ operation) // creates a new array from calling a function for every array element.
// Example 1
let arr = [1, 2, 3, 4, 5, 6]  // test array
const mapped = arr.map(element => element + 30)
console.log(mapped) // [31, 32, 33, 34, 35, 361

// Example 2
const numbers = [65, 44, 12, 4]
const newArr = numbers.map(myFunction) // [ 650, 440, 120, 40 ]
console.log(newArr)
function myFunction(num) {
  return num * 10
}

// 1️⃣8️⃣ array.filter(function/ operation) // creates a new array filled with elements that pass a test provided by a function.
arr = [1, 2, 3, 4, 5, 6]   // test array
// Example 1
const filtered = arr.filter(element => element === 2 || element === 4)
console.log(filtered) // [2, 4]

// Example 2
const ages = [32, 33, 16, 40]
const result = ages.filter(checkAdult)
function checkAdult(age) {
  return age >= 18
}

// 1️⃣9️⃣ array.forEach() // loop over array by executing a provided callback function for each element in an array.
arr = [1, 2, 3]   // test array
arr.forEach(element => {
  console.log (element)
});
// 1
// 2
// 3


// 2️⃣0️⃣ array.every() //  checks every element in the array that passes the condition, returning true or false .
arr = [1, 2, 3, 4, 5, 6]   // test array
// all elements are greater than 5
const greaterFive = arr.every(num => num > 5)
console. log(greaterFive) // false
// all elements are less than 9
const lessNine = arr.every(num => num < 9);
console. log(lessNine); // true

// 🔴 JS Number Methods	🔴


//1️⃣ toString()	    Returns a number as a string
//2️⃣ toExponential()	Returns a number written in exponential notation
//3️⃣ toFixed()	      Returns a number written with a number of decimals
//4️⃣ toPrecision()	  Returns a number written with a specified length
//5️⃣ ValueOf()	      Returns a number as a number

//1️⃣ toString()	    Returns a number as a string
let x = 123
x.toString()          //123
// (123).toString()      //123
// (100 + 23).toString() //123

//2️⃣ toExponential()	Returns a number written in exponential notation
x = 9.656;
console.log(x.toExponential(2))
console.log(x.toExponential(4))
console.log(x.toExponential(6))
// 9.66e+0
// 9.6560e+0
// 9.656000e+0

//3️⃣ toFixed()	      Returns a number written with a number of decimals
x = 9.656;
console.log(x.toFixed(0))
console.log(x.toFixed(2))
console.log(x.toFixed(4))
console.log(x.toFixed(6))
// 10
// 9.66
// 9.6560
// 9.656000

//4️⃣ toPrecision()	  Returns a number written with a specified length
x = 9.656;
console.log(x.toPrecision())
console.log(x.toPrecision(2))
console.log(x.toPrecision(4))
console.log(x.toPrecision(6))
// 9.656
// 9.7
// 9.656
// 9.65600

//5️⃣ ValueOf()	      Returns a number as a number
 x = 123;
console.log(x.valueOf())
console.log((123).valueOf())
console.log((100 + 23).valueOf())
// 123
// 123
// 123