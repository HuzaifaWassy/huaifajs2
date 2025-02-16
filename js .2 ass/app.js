// Task 1: Short form of x = x + 1
let x = 10;
x++;  // or x += 1;

// Task 2: Reduce x (100) to 99
x = 100;
x--;

// Task 3: Value of y
let a = 50;
let y = a++;
console.log("Value of y:", y); // 50

// Task 4: Value of z
let b = 50;
let z = --b;
console.log("Value of z:", z); // 49

// Task 5: Decrement num and assign its original value to newNum
let num = 30;
let newNum = num--;

// Task 6: Add 1 and assign original value to another variable
let nuam = 40;
let oldNum = nuam++;

// Task 7: Increment a number and show alert
let number = 15;
number++;
alert("New value: " + number);

// Chapter 7 - Math Expression III
let calculatedNum1 = 2 + (2 * 6);  
let calculatedNum2 = (2 + 2) * 6; 
let calculatedNum3 = (2 + 2) * (4 + 2); 
let calculatedNum4 = ((2 + 2) * 4) + 2; 

console.log(calculatedNum1, calculatedNum2, calculatedNum3, calculatedNum4);

// Chapter 8 - String Concatenation
let numStr = "2" + "2"; // "22"
let message = "Hello," + "Dolly"; // "Hello,Dolly"
alert(message);
alert("33" + 3); // "333"

// Concatenation example
let country1 = "Pakistan";
let country2 = "Zindabad";
alert(country1 + " " + country2);

let stringWithNumber = "Age: " + 25;
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

// Chapter 9 - Prompts
let firstNameInput = prompt("Enter first name:");
let countryInput = prompt("Country?", "China");

// Fixed prompt error
let yourName = prompt("Enter Your Name");

// Example prompt with default response
let defaultResponse = "Hello";
let userResponse = prompt(defaultResponse, "Enter something...");
alert(userResponse);

// Math Operations (Addition, Subtraction, Multiplication, etc.)
let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));

document.write(`<p>Addition: ${num1 + num2}</p>`);
document.write(`<p>Subtraction: ${num1 - num2}</p>`);
document.write(`<p>Multiplication: ${num1 * num2}</p>`);
document.write(`<p>Division: ${num1 / num2}</p>`);
document.write(`<p>Modulus: ${num1 % num2}</p>`);

// Variable Declaration and Operations
let variable;
document.write(`<p>Value after declaration: ${variable}</p>`);
variable = 5;
document.write(`<p>Initial value: ${variable}</p>`);
variable++;
document.write(`<p>After increment: ${variable}</p>`);
variable += 7;
document.write(`<p>After addition: ${variable}</p>`);
variable--;
document.write(`<p>After decrement: ${variable}</p>`);
document.write(`<p>Remainder when divided by 3: ${variable % 3}</p>`);

// Movie Ticket Calculation
let ticketPrice = 600;
let totalCost = ticketPrice * 5;
document.write(`<p>Total cost for 5 tickets: ${totalCost} PKR</p>`);

// Multiplication Table
let tableNum = parseInt(prompt("Enter a number for multiplication table:", "5")) || 5;
document.write(`<h3>Multiplication Table of ${tableNum}</h3>`);
for (let i = 1; i <= 10; i++) {
    document.write(`${tableNum} x ${i} = ${tableNum * i}<br>`);
}

// Temperature Converter
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
document.write(`<p>${celsius}°C is ${fahrenheit}°F</p>`);

fahrenheit = 86;
celsius = (fahrenheit - 32) * 5/9;
document.write(`<p>${fahrenheit}°F is ${celsius}°C</p>`);

// Checkout System
let item1Price = 500;
let item2Price = 1000;
let item1Qty = 2;
let item2Qty = 1;
let shipping = 150;
let totalBill = (item1Price * item1Qty) + (item2Price * item2Qty) + shipping;
document.write(`<p>Total Bill: ${totalBill} PKR</p>`);

// Percentage Calculation
let totalMarks = 500;
let obtainedMarks = 450;
let percentage = (obtainedMarks / totalMarks) * 100;
document.write(`<p>Percentage: ${percentage}%</p>`);

// Currency Conversion
let usd = 10, riyal = 25;
let pkr = (usd * 104.8) + (riyal * 28);
document.write(`<p>Total in PKR: ${pkr}</p>`);

// Arithmetic Sequence Calculation
let initialNum = 10;
let result = ((initialNum + 5) * 10) / 2;
document.write(`<p>Final Result: ${result}</p>`);

// Age Calculator
let currentYear = new Date().getFullYear();
let birthYear = 2000;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
document.write(`<p>They are either ${age1} or ${age2} years old.</p>`);

// Circle Properties
let radius = 5;
let circumference = 2 * 3.142 * radius;
let area = 3.142 * radius * radius;
document.write(`<p>Circumference: ${circumference}</p>`);
document.write(`<p>Area: ${area}</p>`);

// Lifetime Supply Calculator
let snack = "Chips";
let currentAge = 25;
let maxAge = 80;
let perDay = 2;
let totalSnacks = (maxAge - currentAge) * 365 * perDay;
document.write(`<p>You will need ${totalSnacks} ${snack} to last until age ${maxAge}.</p>`);
