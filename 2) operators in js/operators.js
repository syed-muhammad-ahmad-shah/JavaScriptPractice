let x = 5;
let y = 3;

// ⭐ARITHMETIC OPERATORS⭐

// addition
console.log('x + y = ', x + y);    // 8

// subtraction
console.log('x - y = ', x - y);    // 2

// multiplication
console.log('x * y = ', x * y);    // 15

// Exponentiation
console.log('x ** y = ', x ** y);  // 125

// division
console.log('x / y = ', x / y);    // 1.6666666666666667

// Modulus (remainder)
console.log('x % y = ', x % y);    // 2

// increment    x=5
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
console.log('x = ', x);     // 7

// decrement    x=5
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x);     // 5

// ⭐Assignment Operator⭐

// Operator	      Name	                                     Example 
/*   =      Assignment operator       */	  console.log('a=7:',a = 7);     // 7
/*  +=      Addition assignment	      */      console.log('a+=5:',a += 5);   // a = a + 5: 12 
/*  -=      Subtraction Assignment    */	  console.log('a-=2:',a -= 2);   // a = a - 2: 10
/*  *=      Multiplication Assignment */	  console.log('a*=3:',a *= 3);   // a = a * 3: 30
/*  /=      Division Assignment	      */      console.log('a/=2:',a /= 2);   // a = a / 2: 15
/*  %=      Remainder Assignment      */      console.log('a%=2:',a %= 2);   // a = a % 2: 1
/*  **=     Exponentiation Assignment */      console.log('a**=2',a **= 2);  // a = a**2: 1


// ⭐Comparison Operators⭐

// equal operator
console.log('2 == 2:',2 == 2);     // true
console.log('2 == "2":',2 == '2'); // true

// not equal operator
console.log('3 != 2:',3 != 2);                         // true
console.log("'hello' != 'Hello':",'hello' != 'Hello'); // true

// strict equal operator
console.log('2 === 2:',2 === 2);     // true
console.log("2 === '2':",2 === '2'); // false

// strict not equal operator
console.log("2 !== '2':",2 !== '2'); // true
console.log("2 !== 2:",2 !== 2);     // false


var a = 2;
var b = 5;
var c = 10;

// ⭐Logical Operators⭐

if (a === 3 || a === 2) {
    console.log("a === 3 || a === 2: TRUE");
} else {console.log("a === 3 || a === 2: FALSE");}
//TRUE
if (a === 4 || b === 3 || c === 11) {
    console.log("a === 4 || b === 3 || c === 11: TRUE");
} else {console.log("a === 4 || b === 3 || c === 11: FALSE");}
//FALSE
if (a === 2 && b === 5) {
    console.log("a === 2 && b === 5: TRUE");
} else {console.log("a === 2 && b === 5: FALSE");}
//TRUE
if (c != 10) {
    console.log("c != 10: TRUE");
} else {console.log("c != 10: FALSE");}
//FALSE

// ⭐ Type OF Operators ⭐

let name = "Ahmad"
let age = 23
let muslim = true
let full_name = {first:"Jane", last:"Doe"}
let sheets = ["HTML","CSS","JS"]       
let unDefined                        
let empty = null

console.log("\"ahmad\":",typeof(name))      //string
console.log("23",typeof(age))               //number
console.log("true:",typeof(muslim))         //boolean
console.log("name={}",typeof(full_name))    //object
console.log("name=[]",typeof(sheets))       //array(object)
console.log(typeof(unDefined))              //undefined
console.log(typeof(empty))                  //null

// ⭐ Bitwise Operators ⭐

// Bitwise And
console.log(5 & 10) // 0
//  5 => 00000000 00000000 00000000 00000101 & 
// 10 => 00000000 00000000 00000000 00001010 
// ans=> 00000000 00000000 00000000 00000000 => 0

// Bitwise Or
console.log(5 | 10) // 15
//  5 => 00000000 00000000 00000000 00000101 | 
// 10 => 00000000 00000000 00000000 00001010 
// ans=> 00000000 00000000 00000000 00001111 => 15

// Bitwise Not
console.log(~ 10) // -11
// ~ 10 => 00000000 00000000 00000000 00001010 
// ans =>  11111111 11111111 11111111 11110101 => -11

// Bitwise Xor
console.log(5 ^ 10) // 15
//  5 => 00000000 00000000 00000000 00000101 ^ 
// 10 => 00000000 00000000 00000000 00001010 
// ans=> 00000000 00000000 00000000 00001111 => 15

// Bitwise Left shift
console.log(5 << 1) // 10
// 5 =>   00000000 00000000 00000000 00000101 << 1 
// ans => 00000000 00000000 00000000 00001010  => 10

// Bitwise Right shift
console.log(-3 >> 1) // -2
// -3 =>  11111111 11111111 11111111 11111101 >> 1
// ans => 11111111 11111111 11111111 11111110  => 2

// Bitwise Unsigned Right shift
console.log(-3 >>> 1) // 2
// -3 =>   11111111 11111111 11111111 11111101 >>> 1
// ans =>  01111111 11111111 11111111 11111110  => 2147483646