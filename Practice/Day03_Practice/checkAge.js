"use strict";

const age = 22;

function checkAge(){
    console.log(age < 18 && "Invalid" || "Valid");
}
checkAge();

// T T = T
// T F = T
// F T = T
// F F = F