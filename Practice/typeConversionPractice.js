"use strict";

// This function converts string values to different types
function stringConversion(str1, str2, str3) {
    const num1 = Number(str1);  
    const strVal = String(str2); 
    const boolVal = Boolean(str3); 

    console.log("Value:", num1, "Type:", typeof num1);
    console.log("Value:", strVal, "Type:", typeof strVal);
    console.log("Value:", boolVal, "Type:", typeof boolVal);
}

stringConversion("52", "abc", "abc");