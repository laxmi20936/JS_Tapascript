// 1. What will be the output of the following code and why?
let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

outer(); // Bob

// 2. What is the mistake in the code below?
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total, "wrong");
// ===============================
// solution 2
function add1() {
  let total = 0;
  return function (num) {
    total += num;
    console.log(total);
  };
}

const addition = add1();
addition(10);
addition(5);

// 3. Create a function with a nested function and log a variable from the
// parent function.

function parent() {
  const city = "Mumbai";
  function child() {
    console.log(city);
  }
  child();
}

parent();
// 4. Use a loop inside a function and declare a variable inside the loop.
//  Can you access it outside?

function looping() {
  for (let i = 0; i <= 3; i++) {
    const al = "laxmi";
  }
  // console.log(al) // we cannot access
}

looping();

// 5. Write a function that tries to access a variable declared inside another
//  function.
function outer1() {
  function inner1() {
    const abc = "kkk";
  }
  inner1()
  console.log(abc);
}

outer1()

// 6. What will be the output and why?
// console.log(a); // we cannot access a before initialization
let a = 10;

// 7. Where is the age variable accessible?
function showAge() {
  let age = 25;
  console.log(age);
}

// console.log(age);
// Options:

// A: In Global
// B: Only inside showAge
// C: It will cause an error //correct(can be accessed inside showAge)
// D: None of the above

// 8. What will be the output and explain the output?
let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();

// Inner function forms the closure its outer function. Inner function
// is lexically sitting inside outer function. Inner function looks for
// variable message in its scope ,if its not found then it checks in
// the  outer scope

// 9. What will be the output and why?
let x = "Global";

function outer11() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x, "lll");
  }

  inner();
}

outer11();

// 10. What will be the output and why?

function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce(); //-1
reduce(); //-2
