
/* 
*for a given string tell me whether it has even numbers characters or not
*/
//-------- use string as a parameter in function------
function evenSizeString(str){
    let size = str.length;
    console.log(str, size);
    if (size % 2 === 0){
        console.log('even size');
    }
    else{
        console.log('odd size');
    }
}

// evenSizeString('Dhaka');
// evenSizeString('faka');
// evenSizeString('chaka');

// -----use boolean as a parameter in function----
function doubleTripple(num, double){
    if(double === true){
        result = num * 2;
        return result;
    }
    else{
        result = num * 3;
        return result;
    }
}

// console.log(doubleTripple(10, true));
// console.log(doubleTripple(20, false));

// ------use array as a parameter in function-------
 function numberOfElements(numbers){
    let length = numbers.length;
    return length;
 }

//  let arrayLength = numberOfElements([1, 2, 8, 98, 43, 17, 9]);
//  console.log(arrayLength);




// ------use object as a parameter in function------
function getAge(person){
    // let infoAll = person;
    // return infoAll;
    let age = person.age;
    return age;
    
    
}
let outputAge = getAge({age: 17, color: 'brown', height: '70cm'});

console.log(outputAge);




