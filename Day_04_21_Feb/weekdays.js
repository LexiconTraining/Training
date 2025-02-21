"use strict";

const prompt = require('prompt-sync')();

let day = Number(prompt("Enter a day: "));

//this function uses if else statement and displays the day based of the users input
function checkDay(day){

    if(day === 1){
        console.log("Sunday");
    }
    else if(day === 2){
        console.log("Monday");
    }
    else if(day === 3){
        console.log("Tuesday");
    }
    else if(day === 4){
        console.log("Wednesday");
    }
    else if(day === 5){
        console.log("Thursday");
    }
    else if(day === 6){
        console.log("Friday");
    }
    else if(day === 7){
        console.log("Saturday")
    }
    else{
        console.log("Invalid choice of date");
    }
}
checkDay(day);

//This function uses a switch statement to display the days of the week.
function dayNum(day){
    switch(day){
        
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 1:
            console.log("Saturday");
            break;
        default:
            console.log("Enter a valid day");
    }
}
dayNum(day);