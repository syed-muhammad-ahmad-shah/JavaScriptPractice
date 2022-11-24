const car = {
    name:"suzuki",
//  key : value 
    model:2024,
    color:"black"
}


console.log(car.name, car.model, car.name)
console.log(car['name'])
console.log(car['model'])
console.log(car['color'])

// console.log(car.model)
// console.log(car.color)

for(let jabbar in car) {
    // console.log([jabbar])
    console.log(car[jabbar])
}




const person = {
    fName:"ahmad",
    lName:"shah",
    age:22,
    fun :function() {
        console.log("hello")
    }
}
for(let i in person){
    console.log(person[i])
}

// There are different ways to create new objects:


// Create a single object, using an object literal.
const car1 = {
    name:"suzuki",
//  key : value 
    model:2024,
    color:"black"
}

// Create a single object, with the keyword new.
const person1 = new Object();
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue";
let x = "firstName"
console.log(person1['firstName'])
console.log(person1[x])


// Define an object constructor, and then create objects of the constructed type.
// Create an object using Object.create().



function MyFunc() {
    this.x = 100;
}

var obj1 = new MyFunc();
// obj1.x;
console.log(typeof(obj1))


x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
// console.log(myObj.cars)
for (let i in myObj.cars) {
   myObj.cars[i].name ;
//    console.log(myObj.cars[i])
   console.log(myObj.cars[i].name)
  for (let j in myObj.cars[i].models) {
     myObj.cars[i].models[j] ;
  }
}


 function sum(){

}