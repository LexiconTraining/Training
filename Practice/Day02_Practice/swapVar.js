"use strict";

//This function swaps two variables using destructuring
function swapUsingDes(number1, number2){
    console.log("Before swapping: number1 =", number1, ", number2 =", number2);
    [number1, number2] = [number2, number1];
    console.log("After swapping: number1 =", number1, ", number2 =", number2);
}
swapUsingDes(10,5);



//This function swaps two variables with the help of XOR operator
function swapUsingXOR(num1, num2){
    console.log("Before swapping: num1 =",num1, ", num2 =",num2);
    num1 = num1 ^ num2;
    num2 = num2 ^ num1;
    num1 = num1 ^ num2;
    console.log("After swapping: num1 =",num1, ", num2 =",num2)
}
//swapUsingXOR(10,5);