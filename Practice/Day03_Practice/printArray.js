"use strict";

//This function prints the max and the min value of the array
function findMaxMin(arr){

    if (arr.length === 0){
        return "Array is empty";
    }
    let max = arr[0];
    let min = arr[0];

    for(let i = 0; i<arr.length; i++){

        if(arr[i]>max){
            max = arr[i];
        }
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return {"Max number : " : max , 
            "Min number : " :min
    };

}
console.log(findMaxMin([1,2,4,5,-6,8,-8,20,-20]));