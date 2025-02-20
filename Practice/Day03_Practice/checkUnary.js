"use strict";

//This program demonstrates the behavior of postfix increment and postfix decrement
function postfixOperator(num){ 
    console.log("Postfix num++: ",num++); //first return then increment
    console.log("After increment : ",num);

    console.log("Postfix num--: ",num--);
    console.log("After decrement : ",num);
}
// postfixOperator(10);
// postfixOperator("10.5");
// postfixOperator("Rishi");

//This program demonstrates the behavior of prefix increment and prefix decrement
function prefixOperator(num){
    console.log("Prefix ++num: ", ++num);
    console.log("After increment: ",num);

    console.log("Prefix --num: ", --num);
    console.log("After decrement: ",num);
}

// prefixOperator(10);
// prefixOperator("10.5");
// prefixOperator("Rishi");

