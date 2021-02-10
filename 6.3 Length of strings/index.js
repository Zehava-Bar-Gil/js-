'use strict';

/*---------------------------------------------------------------------------
 Write a function that will receive an array of strings and will return a new
array containing all the lengths of all the strings in the array it got as a
 parameter:-----------------------------------------------------------------*/

const arr = ["Zehava", "Does", "Not" ,"Sleep", "enough"]
const elementsLenght=(array)=>{
    let newArr=array.map(arrElement => arrElement.length);
    //The map() method creates a new array with the results of calling a function for every array element
    return newArr;
}
console.log(elementsLenght(arr));