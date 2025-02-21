"use strict";

const prompt = require('prompt-sync')();
const shoePrice = Number(prompt("Enter the price of one pair of shoes:"));
const quantity = Number(prompt("Enter the number of shoes you want to buy:"));

//this function calculates the total cost of shoes, applies a discount based on the total amount, and displays the final price after the discount.
function calculateTotalPrice(price, quantity) {
    const total = price * quantity;
    let discount = 0;

    if (total >= 5000) {
        discount = 20;
    } else if (total >= 3000) {
        discount = 15;
    } else if (total >= 1000) {
        discount = 10;
    }

    const discountAmount = (total * discount) / 100;
    const finalPrice = total - discountAmount;

    console.log("Total Price Before Discount:", total);
    console.log("Discount Applied:", discount + "%");
    console.log("Final Price After Discount:", finalPrice);
}


calculateTotalPrice(shoePrice, quantity);