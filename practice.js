/* ---practice one---- */
/* question: Take four parameters. Multiply the four numbers and then return the result */

/* function multiply(num1, num2, num3, num4){
    let multiply = num1 * num2 * num3 * num4;
    return multiply;

}

let result = multiply(4, 3, 2, 5);
console.log(result);
 */


/* ---practice task two---- */
/* question: Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result. */

function evenOdd(num){
    console.log('number is:', num);
    if(num % 2 === 0){
        console.log('number is even number:', num);
        return num * 2;
    }
    else{
        console.log('number is odd number:', num);
        return num / 2;
    }

}

let result = evenOdd(5);
let result1 = evenOdd(4);
let result2 = evenOdd(7);
console.log('The result is:', result, result1, result2);