"use strict";
const prompt = require('prompt-sync')();

const num1 = Number(prompt("Enter first number: "));
const num2 = Number(prompt("Enter second number: "));

//this function compare the values between two numbers
function compareAndEvaluate(num1, num2) {
    console.log("Comparisons:");
    console.log('num1 > num2 : ', num1 > num2);
    console.log('num1 < num2 : ', num1 < num2);
    console.log('num1 >= num2 : ', num1 >= num2);
    console.log('num1 <= num2 : ', num1 <= num2);
    console.log('num1 == num2 : ', num1 == num2);
    console.log('num1 === num2 : ', num1 === num2);
    console.log('num1 != num2 : ', num1 != num2);
    console.log('num1 !== num2 : ', num1 !== num2);

    console.log("\nLogical Operators:");
    console.log('Both numbers are positive (&&) : ', num1 > 0 && num2 > 0);
    console.log('At least one number is positive (||) : ', num1 > 0 || num2 > 0);
    console.log('num1 is NOT positive (!) : ', !(num1 > 0));
}

compareAndEvaluate(num1, num2);


