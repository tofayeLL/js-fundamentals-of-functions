
/* ----write a function to give me the sum of all numbers in array-- */
/* 
----step-1: declare a function.
----step-2: call check whether the function is called properly
----step-3: set a parameter(s);
----step-4: pass the parameter (s) and check whether parameter is passed in a proper format.

*/

function sumOfNumbers(numbers){
    console.log(numbers);
   /*  let total = 0;
    for(let i = 0; i < numbers.length; i++){
        
        arrayNum = numbers[i];
        total = total + arrayNum;
    }
    return total; */

    // another way to do by use for
    let sum = 0;
    for(let num of numbers){
        sum = sum + num;
    }
    return sum;
}

let numbs = [10, 12, 4, 8, 19, 2];
let sum = sumOfNumbers(numbs);
console.log( 'sum of numbers:', sum);