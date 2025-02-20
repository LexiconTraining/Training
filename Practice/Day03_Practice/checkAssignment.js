"use strict";

let num = 10;  
// this function is for assignment operators

const assign = () => {
    console.log('Original value:', num);

    num += 5; 
    console.log('After += 5:', num);

    num -= 3; 
    console.log('After -= 3:', num);

    num *= 2;
    console.log('After *= 2:', num);

    num /= 4;
    console.log('After /= 4:', num);

    num %= 3;
    console.log('After %= 3:', num);
};
assign();
