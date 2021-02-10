'use strict';

/*---------------------------------- 
Print with for loop all the number:
------------------------------------*/

const arrNum = [1,7,3,0,-5,7,3,9];
// for(let i=0 ; i<arr.length ; i++){
//     console.log(arrNum[i]);
// }
console.log (arrNum);

/*------------------------------------------------------------------------------- 
Create function “arrayLength” that return the array length (don’t use arr.length):
--------------------------------------------------------------------------------*/

function addValue(arr, value) {
    return arr.push(value);
}

console.log(addValue([1,7,3,0,-5,7,3],9));

/*---------------------------------------------------------------------------------
 Create function “arraySum” , the function return the sum of all elements in array:
 --------------------------------------------------------------------------------*/

console.log(
    [1,7,3,0,-5,7,3,9].reduce((a, b) => a + b, 0)
  );

/*-------------------------------------------------------------------------------
 Create function “arrayMulti” , the function return the multiplication of all the
 elements in array:
 ------------------------------------------------------------------------------*/

 let array = [1,7,3,-5,7,3,9];

 function multiply() {
     var sum = 1;
     for (var i = 0; i < array.length; i++) {
         sum = sum * array[i];
     }
     return sum;
}
 
 console.log(multiply(7));
