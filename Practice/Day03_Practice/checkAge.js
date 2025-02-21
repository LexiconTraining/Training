"use strict";

const age = 22;

//this function validates that age should be greater than 18
function checkAge() {
    console.log(age >= 18 && "Eligible" || "Not Eligible");
}

checkAge();