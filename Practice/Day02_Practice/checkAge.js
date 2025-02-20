"use strict";

//This function takes input from the user and adds +1 in the age
function checkAge(age) {
    age = Number(age);
    age += 1;
    console.log(`Next year, you will be ${age} years old.`);
}

checkAge(25);