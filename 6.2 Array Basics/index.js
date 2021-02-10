'use strict';

/*-------------------------------------------------------------------------
Using a loop, iterate through this array and console.log all of the people:
--------------------------------------------------------------------------*/

const people = ["Greg", "Mary", "Devon", "James"];

console.log(people);

/*----------------------------------------------- 
Write the command to remove "Greg" from the array:
------------------------------------------------*/

const myArr = ["Greg", "Mary", "Devon", "James"];

const toRemove = new Set(["Greg"]);

const difference = myArr.filter( x => !toRemove.has(x) );

console.log(difference);

/*----------------------------------------------- 
Write the command to remove "James" from the array:
------------------------------------------------*/

const myArray = ["Greg", "Mary", "Devon", "James"];

const toClear = new Set(["James"]);

const newList = myArray.filter( x => !toClear.has(x) );

console.log(newList);

/*-------------------------------------------------------- 
Write the command to add "Matt" to the front of the array.:
---------------------------------------------------------*/
