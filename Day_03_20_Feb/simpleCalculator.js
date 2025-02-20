"use strict";

const prompt = require('prompt-sync')();

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

//this function is a simple calculator used for basic mathematical operations
function simpleCalculator() {

    console.log("Addition (+) : ", num1 + num2);
    console.log("Subtraction (-) : ", num1 - num2);
    console.log("Multiplication (*) : ", num1 * num2);
    console.log("Division (/) : ", num1 / num2);
    console.log("Modulus (%) : ", num1 % num2);
}

simpleCalculator();