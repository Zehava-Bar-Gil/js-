/*-----------------------------------------------------------------------------------
1.1- Basic loop
Loop over this array with the forEach method and console log each
element and its index.
-------------------------------------------------------------------------------------*/

'use strict';

const words = ["one", "two", "three", "four", "five"];

words.forEach(function (el, i) {
    console.log(el, i)
});

const consoleLog = (el, i) => {
  console.log(el, i);
};
const myForEach = (arr, callback) => {
  if (typeof callback === "function") {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i);
    }
  } else return;
};

const x = myForEach(words, consoleLog);
console.log(x);


/*--------------------------------------------------------------------------
1.2- ToNumber
Create a function ToNumber that takes one argument an array.
Return from the function a new array changing the strings of numbers to
actual numbers. Use the forEach method to accomplish this.
---------------------------------------------------------------------------*/

const toNum = (arr) =>{
    const result =[];
    arr.forEach((el , i) =>{
    result.push(i+1);
});
return result;
};

const x = toNum (words);
console.log(x);

/*------------------------------------------------------------------------
1.3-Fruits
Loop over this array with the forEach method and console log this
sentence : “I am eating a <fruit name>”. But if the fruit is an apple. You
need to console log “I am eating an Apple.
Notice we changed the “a” to “an”.
-------------------------------------------------------------------------*/

const fruits = ["mango", "papaya", "pineapple", "apple"];

fruits.forEach((fruit) =>{
    if (fruit === "apple") {
        console.log(`I am eating an ${fruit}`);    
    }
    else{
        console.log(`I am eating a ${fruit}`);
    }
}); 

/*-------------------------------------------------------------------------
1.4- Mutate the array
Iterate over this array with the forEach method. With the help of the third
argument of the forEach method (which is the array you are looping over)
mutate the array that every number double value.
-------------------------------------------------------------------------*/

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((el, index, arr) =>{
    arr[index] = el *2;
});

console.log(numbers);
