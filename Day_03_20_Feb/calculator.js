"use strict";

const prompt = require('prompt-sync')();

const num1 = Number(prompt("Enter first number: "));
const num2 = Number(prompt("Enter second number: "));
let choice = prompt("Enter your choice : ");
    
//this function takes input from the user and performs mathematical operation 
function calculator(num1, num2){
    if(choice === "+"){
        return num1 + num2;
    }
    else if(choice === "-"){
        return num1 - num2;
    }
    else if(choice === "*"){
        return num1 * num2;
    }
    else if(choice === "/"){
        return num1 / num2;
    }
    else if(choice === "%"){
        return num1 % num2;
    }
    else{
        console.log("Invalid choice!!!"); 
    }
}
console.log("Resullt is : ",calculator(num1, num2));