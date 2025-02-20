"use strict";

//This function demonstrates the behaviour of arithmetic operators
function calculate(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
    } else if (operator === '%') {
        return num2 !== 0 ? num1 % num2 : 'Cannot perform modulus with zero';
    } else if (operator === '**') {
        return num1 ** num2;
    } else {
        return 'Invalid operator';
    }
}

console.log('Result : ', calculate(10, 5, '+'));