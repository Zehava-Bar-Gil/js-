'use strict';

const arr = [2, 10, 40, 120, 4, 18, 1];

/*max*/
const maxReducer = (max, currentValue) => currentValue > max ? currentValue : max;
let max = arr.reduce(maxReducer, 0);
console.log(max);

/*sum of even numbers*/
const sumOfEvenReducer = (sum, currentValue) => currentValue % 2 == 0 ? sum += currentValue : sum;
let sumOfEven = arr.reduce(sumOfEvenReducer, 0);
console.log(sumOfEven);

/*average*/
const sumReducer = (sum, currentValue) => sum + currentValue;
let avg = arr.reduce(sumReducer) / arr.length;
console.log(avg);
