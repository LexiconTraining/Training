// This function runs in the user's browser, executing on the client side.

// function client_side(){
//     let arr = [1,2,3,4,5];
//     for(let i = 0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// }
// client_side();

let navBar = [
            {"Home":"#home"}, 
            {"Features":"#features"}, 
            {"UseCases":"#usecases"},
            {"Docs":"#docs"},
            {"Gallery":"#gallery"},
            {"Tutorials":"#tutorials"}];

// navBar.map((nav) => {
//     return(console.log(nav));
// })


let navbar = document.getElementById("navbar");

// let li1 = document.createElement("li");
// let li2 = document.createElement("li");
// let an1 = document.createElement("a");
//let div_tag = document.createElement("div");


//an1.appendChild(div_tag);

navBar.map((item) => {
    let li2 = document.createElement("li");
    let an1 = document.createElement("a");

    let itemKey = Object.keys(item)[0];
    let itemValue = Object.values(item)[0];

    an1.href = itemValue;
    an1.textContent = itemKey;

    navbar.appendChild(li2);
    li2.appendChild(an1);
})