// 1. Explain Temporal Dead Zone by creating 3 variables inside a block. 
// Post the code as your answer.
// console.log(az, "ll")
let z = "aka"
{
   const a = "laxmi"
   let b = "ankur"
   var az = "kkkkkk"
}
// Tdz- area where we cannot access a variable until its initialised with some value

// 2. Explain Variable and Function Hoisting with Example. 
// Post the code as your answer.

console.log(a)  //undefined
getData()
console.log(getData22())
var a = "data"

function getData(){
  console.log(a, "getData")
}

var getData22 = function(){
 console.log("hi laxmi")
}
