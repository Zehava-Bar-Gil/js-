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

let newarray1 = [];
for(let i=0;i<foodsWithUpperCase.length; i++){
    newarray1.push(foodsWithUpperCase[i].toLowerCase())
}
newarray1.sort()
console.log(newarray1);

/*-----------------------------------------------------------
Sort the array of strings from descending to ascending order.
------------------------------------------------------------*/

let newarray2 = [];
for(let i=0;i<foodsWithUpperCase.length; i++){
    newarray2.push(foodsWithUpperCase[i].toLowerCase())
}
newarray2.sort().reverse();
console.log(newarray2);

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