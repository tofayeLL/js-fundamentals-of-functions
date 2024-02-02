// check number even or not
function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

// console.log(isEven(5));
// console.log(isEven(110));



// another way shortcut return for odd check
function isOdd(num){
    if(num % 2 === 1){
        return true;
    }
    return false;
}
console.log(isOdd(20));
console.log(isOdd(33));