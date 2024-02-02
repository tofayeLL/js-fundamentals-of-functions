
/* --parameter er modhe amra je value pass kori setake arguments bole-- */



function doubleIt(num){
    let double = num * 2;
    console.log(num, double);
}

doubleIt(7);
console.log('---------------');
doubleIt(15);
console.log('-----------------');
doubleIt(30);


// in parameter or argument we can use variable also
const number = 190;
doubleIt(number);

const money = 370;
doubleIt(money);




function difference(num1, num2){
    let sub = num1 - num2;
    console.log(num1, num2, sub);
}

let fatherAge = 45;
let myAge = 18;
difference(fatherAge, myAge);


/* console.log('-------------');
difference(25, 10);
console.log('----------');
difference(76, 43); */
