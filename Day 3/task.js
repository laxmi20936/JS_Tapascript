// 1. Odd or Even?
//  Take a number and find if the number is an odd or even number.
//  Print the number and result in the console.

let num = 11;
const output = num % 2 ? "odd" : "even";
console.log(num, output);

// 2. Do you have a Driving License?
// Let's check if you are eligible to get a driving license.
//  The eligibility to get a driving licence is 18 years.

//  Manage age as a variable.
//  Check if the age is elligible for a driving license and print
// it on the console accordingly.

const age = 16;

const eligibleCandidate = age >= 18 ? "elligle" : "not elligile";
// console.log(age, eligibleCandidate);

// 3. Calculate CTC with a Bonus
// Let's calculate how much you earn from your office.

//  You get 12,300 rupees as your monthly salary.
//  You get a 20% bonus on your annual salary.
//  How much money do you make per annum as a CTC?

const monthlySalary = 12300;
const yearlySalary = monthlySalary * 12;
const bonus = yearlySalary * (20 / 100);
const ctc = yearlySalary + bonus ;
console.log(ctc)

// 4. Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!

//  Create a color variable.
//  Based on the color variable's value print in the console
// if a traveller needs to STOP or GO.
//   The Red color is for STOP and the Green color is for GO.

let color = "green1";
const signalIndicator =
  color === "red" ? "STOP" : color === "green" ? "GO" : "wrong color";
console.log(signalIndicator);

// 5. Create an Electricity Bill Calculator
// Let's calculate how much you pay for electricity bills per month 
// and annually.

//  Create a units variable. 
// Based on this value you will calculate the total electricity bill for a months.
//  If each day you consume the units and each unit cost 150 rupees, 
// how much will you be charged per month?
//  If there is a 20% discount on the annual payment, 
// how much will you be charged for an annual payment?

const units = 20
const unitsInDay = 150 * 20
const unitsChargedMontly = 30 * unitsInDay
const unitsChargedAnnually = 12 * unitsChargedMontly
const discount = unitsChargedAnnually * (20 / 100)
const annualDiscount = unitsChargedAnnually - discount
console.log(unitsChargedMontly, unitsChargedAnnually,annualDiscount )

// 6. Leap Year Checker
// Is 2025 a Leap Year?

//  Take year as input.
//  Use the arithmetic operator and ternary operator to
// print if a year is a leap year or not.
const year = 2024;
const isLeapYear =
  (year % 4 === 0 && year % 400 === 0) || year % 100 !== 0
    ? "Leap Year"
    : "Not a leap year";

console.log(isLeapYear);

// 7. Max of Three Numbers
// Find the max number from the lot.

//  Take three numbers and assign them to variables p, q, and r.
//  Now find the maximum of these three numbers using the comparison operators.

const a = 10;
const b = 18;
const c = 89;
let max;

if (a > b && a > c) {
  max = a;
} else if (b > a && b > c) {
  max = b;
} else {
  max = c;
}

// console.log(max);
