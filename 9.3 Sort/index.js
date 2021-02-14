'use strict';

const foods = ["falafel", "sabich", "hummus", "pizza with extra" ,
"pineapple"];

/*-----------------------------------------------------------
Sort the array of strings from ascending to descending order
----------------------------------------------------------*/

foods.sort();
console.log(foods);

/*-----------------------------------------------------------
Sort the array of strings from descending to ascending order
----------------------------------------------------------*/

foods.sort();
foods.reverse();
console.log(foods);

const foodsWithUpperCase  = ["falafel", "sabich", "hummus", "pizza with extra" ,
"pineapple"];

/*-----------------------------------------------------------
Sort the array of strings from ascending to descending order.
------------------------------------------------------------*/

let newarray = [];
for(i=0;i<foodsWithUpperCase.length; i++){
    newarray.push(foodsWithUpperCase[i].toLowerCase())
}
newarray.sort()
console.log(newarray);

/*-----------------------------------------------------------
Sort the array of strings from descending to ascending order.
------------------------------------------------------------*/

let newarray = [];
for(i=0;i<foodsWithUpperCase.length; i++){
    newarray.push(foodsWithUpperCase[i].toLowerCase())
}
newarray.sort().reverse();
console.log(newarray);

/*---------------------------------------------------------*/
const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];

/*-----------------------------------------------------
Sort the array of strings from the longest word to the
shortest word only using the sort function
----------------------------------------------------*/

words.sort(function(a, b){
    return b.length - a.length;
  });
  console.log(words);