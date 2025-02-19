"use-strict";

const minNumber = 1;
const maxNumber = 10;
const maxAttempt = 10;

let  randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let usersGuess = null;
let attemptLeft = maxAttempt;

var feedback = "";

//this function is used to guess random number btw 1 to 10
function guessNumber(guess){
    if(guess<minNumber || guess>maxNumber){
        feedback = "Please guess the number between 1 to 10";
    }
    else{
        attemptLeft --;
        if(guess == randomNumber){
            feedback = "youve guessed right number";
        }
        else if(guess < randomNumber){
            feedback = "too low";
        }
        else{
            feedback = "too high";
        }

        if(attemptLeft < 0){
            feedback = "0 attempt left";
        }
    }
    console.log(feedback);
    console.log("Attempt left : "+attemptLeft);
}
guessNumber(1);
// guessNumber(2);
// guessNumber(3);
// guessNumber(4);
// guessNumber(5);
// guessNumber(6);
// guessNumber(7);
//console.log(Math.floor(1.55));