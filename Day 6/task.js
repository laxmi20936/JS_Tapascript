// <!-- 1. Write a Function to Convert Celsius to Fahrenheit
// Create a function celsiusToFahrenheit(celsius) that converts a temperature
//  from Celsius to Fahrenheit.
// Formula: (Celsius * 9/5) + 32 = Fahrenheit -->
function tempConverter(celsius) {
  const fahrenheitTemp = (celsius * 9) / 5 + 32;
  console.log(fahrenheitTemp);
}
tempConverter(32);

// 2. Create a Function to Find the Maximum of Two Numbers
// Write a function findMax(num1, num2) that returns
// the larger of the two numbers. It should work for negative numbers as well. -->

function maxNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(maxNumber(-4, 15));

// 3. Function to Check if a String is a Palindrome
// Create a function isPalindrome(str) that checks if a given string is a
// palindrome (reads the same forward and backward).
// You can not use any string function that we have not learned
//  in the series so far. -->

function checkPalindrome(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str.charAt(i);
  }
  if (reverse === str) {
    console.log("Palindrome");
  } else {
    console.log("Not a palindrome");
  }
}
checkPalindrome("aka");

//  4. Write a Function to Find Factorial of a Number
// Create a function factorial(n) that returns the factorial of n.
// Example 5! = 5 * 4 * 3 * 2 * 1 -->

function factorial(n) {
  let numFactorial = 1;
  for (let i = n; i >= 1; i--) {
    // console.log(i);
    numFactorial = numFactorial * i;
  }
  console.log(numFactorial);
}

factorial(5);

// 5. Write a function to Count Vowels in a String
// Write a function countVowels(str) that counts the number of
// vowels (a, e, i, o, u) in a given string.

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charAt(i).toLowerCase();
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      count = count + 1;
    }
  }

  console.log(count);
}
countVowels("LAxmi");

// 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
// Write a function capitalizeWords(sentence) that takes a sentence
// and capitalizes the first letter of each word.
// You can use the toUpperCase() method of string to convert
// the lowercase to uppercase.

function capitalizeWords(sentence) {
  let newStr = "";
  for (let i = 0; i < sentence.length; i++) {
    if (i === 0 || sentence[i - 1] === " ") {
      newStr = newStr + sentence[i].toUpperCase();
    } else {
      newStr = newStr + sentence[i];
    }
  }
  console.log(newStr);
}
capitalizeWords("hi, hello how are you");

// 7. Use an IIFE to Print “Hello, JavaScript!”
// Write an IIFE that prints "Hello, JavaScript!" to the console.
// Here the Second word must be supplied using paramneter and argument.

(function (greet) {
    console.log("Hello javascript," + greet);
  },
)("welcome");

// 8. Create a Simple Callback Function
// Write a function greet(name, callback), where callback prints a message
// using the name parameter.

function greet(name , cb){
   cb(name)
}

greet("laxmiiii00", function(n){
    console.log("Hi" + " " + n)
})