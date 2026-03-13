let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}
// output : Its a normal day

// 2. Build an ATM Cash Withdrawal System
// Rajan goes to the Axis bank ATM.
// He enters an amount to withdraw.
// The ATM only allows multiples of 100.
// Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

function atmWithdrawal() {
  const enteredAmountPrompt = prompt("Enter amount to withdraw");
  //   const amount = enteredAmountPrompt ? enteredAmountPrompt : 0;
  if (!enteredAmountPrompt) {
    console.log("Please enter the amount");
    return;
  }
  if (enteredAmountPrompt % 100 === 0) {
    console.log("Withdrawal successful");
  } else {
    console.log("Invalid amount");
  }
}

// atmWithdrawal();

// 3. Build a Calculator with switch-case
// Write a simple calculator that takes an operator (+, -, *, /, %) as input,
// and performs the operation on two numbers. Print the output on the console.

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    case "%":
      console.log(num1 % num2);
      break;
    default:
      console.log("Invalid input");
  }
}

// calculator(100, 2, "+");

// 4. Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:

// Children (<18 years): $3
// Adults (18 - 60 years): $10
// Seniors (60+ years): $8
// Write a program that prints the ticket price based on the person’s age.

function ticketCharges(age) {
  if (age < 18) {
    console.log("Ticket charges is $3");
  } else if (age >= 18 && age < 60) {
    console.log("Ticket charges is $10");
  } else {
    console.log("Ticket charges is $8");
  }
}

// solution 2:
function ticketCharges(age) {
  if (age < 18) {
    console.log("Ticket charges is $3");
  } else if (age < 60) {
    console.log("Ticket charges is $10");
  } else {
    console.log("Ticket charges is $8");
  }
}
// ticketCharges(60);

// 5. Horoscope Sign Checker
// Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.)
// based on a person’s birth month. Make it month bases, not date based.
// Like March and April borns are Aries, Aplil and May born are Taurus,
// and so on. Do not use if-else.

// January, February → Aquarius
// February, March → Pisces
// March, April → Aries
// April, May → Taurus
// May, June → Gemini
// June, July → Cancer
// July, August → Leo
// August, September → Virgo
// September, October → Libra
// October, November → Scorpio
// November, December → Sagittarius
// December, January → Capricorn

function horoscopeSignChecker(month) {
  let sign;
  switch (month) {
    case "January":
    case "February":
      return "Aquarius";
    case "March":
    case "April":
      return "Aries";
    case "May":
    case "June":
      return "Gemini";
    case "July":
    case "August":
      return "Leo";
    case "September":
    case "October":
      return "Libra";
    case "November":
    case "December":
      return "Sagittarius";
  }
}
// console.log(horoscopeSignChecker("July"))

// 6)A triangle has 3 sides. A Triangle type is determined by its sides:

// All sides equal is called, Equilateral Triangle.
// Two sides equal is called, Isosceles Triangle.
// All sides different is called, Scalene Triangle.
// Take the sides of a triangle as input and write a program to
// determine the triangle type.
// Change the inputs everytime manually to see if the output changes correctly

const triangleType = (a, b, c) => {
  if (a === b && b == c) {
    return "Equilateral triangle";
  } else if (a === b || b === c || a === c) {
    return "Isosceles triangle";
  } else {
    return "Scalene Triangle";
  }
};

const triangle = triangleType(50,50,50);
console.log(triangle);
