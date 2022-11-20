// ⚡ Simple (if) ⚡
// ➡ Syntax
// condition ? true : false

//🌞 Example
1 > 2 ? console.log(true) : console.log(false) // returns false

// Equivalent to:
function example() {
    if (1>2) { return true; }
    else { return false; }
}
console.log(example())  // returns false

// ⚡ complex (if, else if, else) ⚡
// ➡ Syntax
// condition1 ? value1
//          : condition2 ? value2
//          : condition3 ? value3
//          : value4;

//🌞 Example
let time = Math.floor(Math.random() * 24) + 1 
time < 10 ? greeting = "Good morning" 
    : time < 20 ? greeting = "Good Day"
    :greeting = "Good Evening";
console.log(greeting)

// Equivalent to:
if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
console.log(greeting)


//using normal function
let Member = true
function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}
console.log(getFee(Member)) //$2.00

//using arrow function
  Member = false
let getFee1 = (isMember) => {
  return (isMember ? '$2.00' : '$10.00');
}
console.log(getFee1(Member)) //$10.00

//using loops
for(let i = 0; i < 10; i++) {
  console.log(i>4? i + " is greater than 4" : i + " is less than 4")
}
// 0 is less than 4
// 1 is less than 4
// 2 is less than 4
// 3 is less than 4
// 4 is less than 4
// 5 is greater than 4
// 6 is greater than 4
// 7 is greater than 4
// 8 is greater than 4
// 9 is greater than 4

