// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 0; i <= 4; i++) {
  let star = "";
  for (j = 0; j <= i; j++) {
    star = star + "*";
  }
  console.log(star);
}

// 2)Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30

function table(n) {
  for (i = 1; i <= 10; i++) {
    console.log(n + "*" + i + "=" + n * i);
  }
}
// table(5);

// 3. Find the summation of all odd numbers between 1 to 500 and
// print them on the console log

function sum() {
  let sum = 0;
  for (let i = 1; i <= 500; i++) {
    if (i % 2 === 1) {
      sum = sum + i;
    }
  }
  console.log(sum);
}
// sum();

// 4. Skipping Multiples of 3
// Write a program to print numbers from 1 to 20, but skip multiples of 3.

function skipMultiples(n) {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
      continue;
    }
    console.log(i);
  }
}
// skipMultiples(3);

// 5. Reverse Digits of a Number (Using while loop)
// Write a program to reverse the digits of a given number
// using a while loop.

// Example:

// Input: 6789
// Output: 9876

// 6789 / 10 => Q=678  R= 9  n=678
// 678 / 10 =>  Q=67  R= 8 n=67
// 67 / 10 => Q=6  R= 7 n =6
// 6 / 10 => Q= 0 R= 6 n = 0

let n = 6789;
let reverse = 0;
while (n > 0) {
  remainder = n % 10;
  reverse = remainder + 10 * reverse;
  n = Math.floor(n / 10);
}

console.log(reverse);

// 6. Write your understanding on the difefrences between for, while,
// and do-while loop. Create their flow charts.
let n1 = 5;
while (n1 > 0) {
  console.log(n1);
  n1--;
}

// do-while
console.log("do-while");
let n2 = 5;
do{
    console.log(n2)
    n2--
}while (n2 > 0)
