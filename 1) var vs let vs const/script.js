// ⚡ Variable – (var vs let vs const)
// There is a slight difference between var let and const which is discussed following

// ⚡ Initialization
var a; //✅
let b; //✅
// const c; //❌ const must have an initial value


// ⚡ Re-Assignment
var d = 1; 
d = 10; //✅
let e = 2; 
e = 20; //✅

const f = 3; 
// f = 30 //❌ const value is always constant and cannot be reassigned


// ⚡ Re-Declaration
var g = 1; 
var g = 10; //✅

let h = 2;
    h = 2;  //✅
// let h = 20; //❌ must use variable name only to reassign, cannot be reassigned 

const i = 3; 
// const i = 30 //❌ cannot be reassigned


// ⚡ Scope
// Global Scope ==> Any variable that is declared outside any of the function
// Function Scope(var) ==> Can be accessed inside the function it was declared and its child
// Block Scope (let and const) ==> Can be accessed inside curly brackets where it was declared and its child


function myFunction(){
  var fname = 'Syed';        
  let mName = 'Muhammad';    
  const lname = 'Ahmad';     
  console.log(fname);       // Syed
  console.log(mName);       // Muhammad
  console.log(lname);       // Ahmad

  if(true){
    console.log(fname);     // Syed
    console.log(mName);     // Muhammad
    console.log(lname);     // Ahmad

      var myAge1 = 13;
      let myAge2 = 15;
      const myAge3 = 14;
      console.log(myAge1);  // 13    
      console.log(myAge2);  // 15
      console.log(myAge3);  // 14
  }

  console.log(fname);       // Syed       
  console.log(mName);       // Muhammad
  console.log(lname);       // Ahmad

  console.log(myAge1);      //13
  // console.log(myAge2);      //not defined
  // console.log(myAge3);      //not defined
};
myFunction();
