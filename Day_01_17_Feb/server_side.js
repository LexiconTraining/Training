"use strict";
//ACCESING API USING GET METHOD


//This function fetches the data from an API 
async function getServerData() {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();

        console.log("Data Object : ",data);
        console.log(`First product object : , ${data.products[0]}`);
        console.log(`Title of first product : , ${data.products[0].title}`);
}
getServerData();