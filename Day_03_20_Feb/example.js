// function calculate(n1,n2){
//     // console.log(n1);
// }
// calculate(1,'+')  
// calculate(2,'+') //output 3
// calculate(2,'+') //output 5
// calculate(5,'-') //output 0


// console.log(1<2<3);

// console.log(3>2>1);

// if(10 < 2){

// }


// let a = 1;
// if (a++ > 1) {
//     console.log("True");
// } else {
//     console.log("False");
// }


// let m = 1, n = 0;
// let res = m++ && ++n;
// console.log(m, n, res);



let total = 0;

function calculate(n1, op) {
    if (op === "+") {
        total += n1;
    } else if (op === "-") {
        total -= n1;
    } else if (op === "*") {
        total *= n1;
    } else if (op === "/") {
        if (n1 !== 0) {
            total /= n1;
        } else {
            console.log("division by zero is not allowed.");
            return;
        }
    } else if (op === "%") {
        total %= n1;
    } else {
        console.log("Invalid operator");
        return;
    }
    console.log("Result:", total);
}

calculate(1, "+");
calculate(2, "+");
calculate(2, "+");
calculate(5, "-");
calculate(10, "*");
calculate(5, "+");
calculate(2, "/");
calculate(3, "%");