"use strict";

const prompt = require('prompt-sync')();
// const num = Number(prompt("Enter a number:"));

function evenOdd(num){

    if (num === 0) {
        console.log("The number is Zero");
    } else if (num > 0) {
        console.log(num % 2 === 0 ? "Positive Even" : "Positive Odd");
    } else {
        console.log(num % 2 === 0 ? "Negative Even" : "Negative Odd");
    }
}
evenOdd("-15");