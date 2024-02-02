
function add(price1, price2){
    let total = price1 + price2;
    return total;
}

let bill = add(10, 24);



// return in shortcut

function add2(price1, price2){
    return price1 + price2;
}

let bill2 = add2(12, 20);
console.log(bill, bill2);


// another
function doMath(num1, num2){
    let sum = num1 + num2;
    let sub = num1 - num2;
    let multiply = sum * sub;
    let divide = multiply / 2;
    return divide;

}

let result = doMath(30, 20);
console.log(result);


