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

/* function evenOdd(num){
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
console.log('The result is:', result, result1, result2); */



/* ---practice task three---*/
/* question: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. */


/* function make_avg(numbers){
   console.log('Numbers are:', numbers);
   let len = numbers.length;

   let sum = 0;
   let avg;
   console.log( 'array length:', len);
   for(let num of numbers){
    sum = sum + num;
     avg = sum / len;
   }
   
return avg;

}

let numbs = [2, 4, 5, 7, 6, 8];
let average = make_avg(numbs);
console.log( 'Average of the numbers:', average); */



// another array and numbers pass in the parameter
// let numbs1 = [2, 17, 5, 8, 6];
// let average1 = make_avg(numbs1);
// console.log( 'Average of the numbers:', average1);



/* ---practice task four--- */
/* question: Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. */


function count_zero(str){
    console.log( 'The string is:', str);
    let count = 0;
    let convertArray = str.split('');
    for(let numbs of convertArray){
      if(numbs === '0'){
      count ++; 
      }
        
    }
    return count;
}


let str = '01010010';
let result = count_zero(str);
console.log('Number of zero in string:', result);






/* ----practice task five--- */
/* question: Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd */

/* function odd_even(num){
    console.log('The number is:', num);
   if(num % 2 === 0){
    return 'even';
   }
   else{
    return 'odd';
   }

}

let result = odd_even(5);
let result1 = odd_even(6);
let result2 = odd_even(18);
console.log(result, result1, result2); */