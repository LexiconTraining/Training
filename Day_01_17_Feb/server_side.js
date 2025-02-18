//ACCESING API USING GET METHOD


//This function fetches the data from an API 
async function getServerData() {

        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();

        console.log(data);
        console.log(data.products[0]);
        console.log(data.products[0].title);
}
getServerData();