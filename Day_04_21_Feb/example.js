"use strict";

// if (false) {
//     console.log("Hello");
//   } else if (null) {
//     console.log("Hi");
//   } else if (undefined) {
//     console.log("Hey");
//   } else {
//     console.log("Bye");
//   }

//   console.log(0 || 1 && 2 || 3);

//   console.log([]+[]);

  //1 && 2;

/*
movie ticket -


*/ 

const ticketPrice = 100;
let discount = 0;
let studentID = true;
let name = "";

function getMovieTicket(age, name, studentID){
    if(age>0 && age<=100){
        if(age<=12 ){
            discount = 50;
            console.log(`Hi ${name}, you've got 50% discount`);
        }
        else if(age>60){
            discount = 30;
            console.log(`Hi ${name}, you've got 30% discount`);
        }
        if(age>=12){
            if(studentID){
                discount = 20;
                console.log(`Hi ${name}, you've got 20% discount`)
            }
        }
        else{
            console.log(`Sorry ${name}, No discount applicable`)
        }
        let finalPrice = (ticketPrice - (ticketPrice * discount) / 100);
        console.log("final ticket price is : ",finalPrice);
    }
}
getMovieTicket(12, "Rushi");


