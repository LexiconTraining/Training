"use strict";

const num1 = 20;
const num2 = 4;
const operator = '%';


//This function uses arithmetic operators for doing some mathematical operations
function calculator(num1, num2, operator){
    if (operator === "+"){
        return num1 + num2;
    }
    else if(operator === "-"){
        return num1 - num2;
    }
    else if(operator === "*"){
        return num1 * num2;
    }
    else if(operator === "/"){
        return num1 / num2;
    }
    else if(operator === "%"){
        return num1 % num2;
    }
    else{
        console.log("Invalid Operator");
    }
}
console.log("Result : ", calculator(num1, num2, operator));