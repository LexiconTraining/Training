"use strict";

const prompt = require('prompt-sync')();

const num1 = Number(prompt("Enter first number:"));
const num2 = Number(prompt("Enter second number:"));
const num3 = Number(prompt("Enter third number:"));

//this function takes 3 inputs from the user and determine the largest using if-else statement.
function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log("Largest number:", findLargest(num1, num2, num3)); 


//this function takes 3 inputs from the user and determine the largest using ternary operator.
function findLargest(num1, num2, num3) {
    return (num1 >= num2 && num1 >= num3) ? num1 : 
           (num2 >= num1 && num2 >= num3) ? num2 : num3;
}
//console.log("Largest number is: ",findLargest(num1, num2, num3));