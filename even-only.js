/* 
* create a function that will return only even numbers
*
*/

function evenNumbersOnly(numbers){
    console.log( 'numbers:', numbers);

    // by using for loop manually
   /*  let even = [];
    for(let i = 0; i < numbers.length; i++){ 
       let checkEven = numbers[i];
       if(checkEven % 2 === 0){
         even.push(checkEven);    
       } 
    }
    return even; */

    // by using for of
    let even = [];
    for(let num of numbers){
        if(num % 2 === 0){
            even.push(num);
        }
    }

return even;

}

let numbs = [11, 5, 12, 15, 16, 8, 10, 4, 3, 6, 20];
let even = evenNumbersOnly(numbs);
console.log( 'even numbers:', even);










