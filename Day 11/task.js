// 1. What will be the output of the following code and why?
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); //1
counter(); //2

// inner function  forms a closure with the variable in the outer function
// and inner function can still remember its lexical environment even
// if the outer function has completed its execution.

// 2. What will be the output and why?
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()()); //100

// 3. Create a button dynamically and attach a click event handler using a
// closure. The handler should count and log how many times the button
// was clicked.

function aka() {
  let count = 0;
  document.getElementById("btn1").addEventListener("click", function () {
    count = count + 1;
    console.log(`button clicked ${count} times`);
  });
}

aka();

// 4. Write a function createMultiplier(multiplier) that returns another
// function to multiply numbers.

function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}
const mult = createMultiplier(3);
console.log(mult(2));
// console.log(mult(5))

// 5. What happens if a closure references an object?
// The object is garbage collected immediately
// The object remains in memory as long as the closure exists(Correct)
// The object is automatically cloned
// None of the Above.

// 6. Write a function factory of counter to increment, decrement,
// and reset a counter.
// Use closure to refer the count value across the functuions.

function counterNew(initialValue) {
  let count = initialValue;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    reset: function () {
      count = initialValue;
      return count;
    },
  };
}

const data = counterNew(0);
console.log(data.increment());
// console.log(data.increment())
// console.log(data.increment())
// console.log(data.increment())
// console.log(data.decrement())
// console.log(data.decrement())
// console.log(data.decrement())
// console.log(data.decrement())
// console.log(data.decrement())
// console.log(data.reset())
// console.log(data.reset())
