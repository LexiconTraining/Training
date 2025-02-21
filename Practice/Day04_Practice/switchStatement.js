"use strict";

const prompt = require('prompt-sync')();
const innings = Number(prompt("Enter total innings played:"));
const runs = Number(prompt("Enter total runs scored:"));
const outs = Number(prompt("Enter number of times out:"));

let average;

switch (true) {
    case outs === 0:
        average = "Not Applicable (Not Out in any innings)";
        break;
    case runs === 0:
        average = 0;
        break;
    case innings > 0 && runs > 0 && outs > 0:
        average = runs / outs;
        break;
    default:
        average = "Invalid Input";
}

console.log("Batting Average:", average);
