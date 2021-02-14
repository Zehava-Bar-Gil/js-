'use strict';

/*-----------------------------------------------------------
Sort the array of numbers from ascending to ascending order
-----------------------------------------------------------*/

const numbers = [1, -5, 666, 2, 400, 11];
const numbersSorted = numbers.sort(function (firstItem, secondItem) {
    if (firstItem > secondItem) {
        return 1;
    }else if (secondItem > firstItem ) {
        return -1;
    }else{
        return 0;
    }
});

console.log(numbersSorted);

/*-----------------------------------------------------------
Sort the array of numbers from descending to ascending order
-----------------------------------------------------------*/

const number = [1, -5, 666, 2, 400, 11];
const s = number.sort((a,b)=>b-a);
console.log(s);