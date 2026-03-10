// ✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
// ✅ Task 2: Print the values to the console.
// ✅ Task 3: Try reassigning values to let and const variables and observe errors.
// ✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.

let name = "laxmi"
const age = 29

// age = 30

 name = "Ankur"
//  console.log(name);

const name2 = name + 1
// console.log(name2 + 1)
name = "Pinky"
console.log(name2, name)
const arr = [ 1, 2,3]

const newarr = arr
newarr[3] = 33
// console.log(newarr, arr)


const obj1 = {name: "laxmi"}
const obj2 = obj1
obj1.name = "Ankur"
console.log(obj1, obj2)