"use strict";
// This function runs in the user's browser, executing on the client side.

let arr = [1,2,3,4,5];
function client_side(){
    for(let i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
//client_side();

let navBarItems = [
            {"Home":"#home"}, 
            {"Features":"#features"}, 
            {"UseCases":"#usecases"},
            {"Docs":"#docs"},
            {"Gallery":"#gallery"},
            {"Tutorials":"#tutorials"}];


let navbar = document.getElementById("navbar");

navBarItems.map((item) => {
    let li1 = document.createElement("li");
    let an1 = document.createElement("a");

    let itemKey = Object.keys(item)[0];
    let itemValue = Object.values(item)[0];

    an1.href = itemValue;
    an1.textContent = itemKey;

    navbar.appendChild(li1);
    li1.appendChild(an1);
})