"use strict";


//this function is to assign grades based on marks using a if, else, else if statement
function getResult(score){
    if(score<=100 && score>=90){
        console.log("You've got A Grade");
    }
    else if(score<=89 && score>=80){
        console.log("You've got B Grade");;
    }
    else if(score<=79 && score>=70){
        console.log("You've got C Grade");
    }
    else if(score<=69 && score>=60){
        console.log("You've got D Grade");
    }
    else if(score<=59 && score>=0){    
        console.log("You have failed!!");
    }
    else{
        console.log("Please Enter marks between 0-100");
    }
}
//getResult(95);

const marks = undefined;

//this function is to assign grades based on marks using a switch statement
function getGrade(marks) {
    switch (true) {
        case (marks >= 90 && marks <= 100):
            return "Grade: A";
        case (marks >= 80 && marks <= 89):
            return "Grade: B";
        case (marks >= 70 && marks <= 79):
            return "Grade: C";
        case (marks >= 60 && marks <= 69):
            return "Grade: D";
        case (marks < 60 && marks >= 0):
            return "Grade: F";
        default:
            return "Invalid Marks! Enter a number between 0 and 100.";
    }
}

console.log(getGrade(marks));