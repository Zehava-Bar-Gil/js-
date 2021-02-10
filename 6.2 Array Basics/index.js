'use strict';

/*-------------------------------------------------------------------------
Using a loop, iterate through this array and console.log all of the people:
--------------------------------------------------------------------------*/

const people = ["Greg", "Mary", "Devon", "James"];

for (let i= 0; i<people.length; i++) {

console.log(people[i]);
}

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

const arrName = ["Greg", "Mary", "Devon", "James"];

const count = arrName.unshift("Matt");

console.log (arrName);

/*---------------------------------------------------------
 Write the command to add your name to the end of the array
 --------------------------------------------------------*/

 const arrNames = [ 'Matt', 'Greg', 'Mary', 'Devon', 'James' ];

 const addName = arrNames.push("Zehava");

 console.log (arrNames);

 /*----------------------------------------------------------------------
Using a loop, iterate through this array and after console.log-ing "Mary",
exit from the loop:
 -----------------------------------------------------------------------*/

const arrPeople = [ 'Greg', 'Mary', 'Devon', 'James', 'Matt', 'Zehava' ];

 const exitFromArray=(arr)=>{ //Array up to the name Mary(includes)
    let flag=false;
    for(let i=0;flag!=true;i++){
        if(arr[i]=="Mary")
        {
            flag=true;
        }
        console.log(arr[i]);
    }
}

console.log("Array up to the name Marry(includes):")
exitFromArray(arrPeople);

/*------------------------------------------------------------------
 Write the command to make a copy of the array using slice. The copy
 should NOT include "Mary" or "Matt":
 ------------------------------------------------------------------*/

 const arrOfPeople = [ 'Matt', 'Mary', 'Greg', 'Devon', 'James', 'zehava' ];

 console.log(arrOfPeople.slice(2));

 /*-----------------------------------------------------------------
Write the command that gives the indexOf where "Mary" is located
 ------------------------------------------------------------------*/

const arrOfP = [ 'Greg', 'Mary', 'Devon', 'James', 'Matt', 'Zehava' ];

console.log(arrOfP.indexOf('Mary'));

/*-----------------------------------------------------------------
Write the command that gives the indexOf where "Foo" is located (this
should return -1).
 ------------------------------------------------------------------*/

 const arrOfPe = [ 'Greg', 'Mary', 'Devon', 'James', 'Matt', 'Zehava' ];

 console.log(arrOfP.indexOf('Foo'));

/*----------------------------------------------------------------------------------  
Using the splice command, remove "Devon" from the array and add "Elizabeth" & "Artie"
-----------------------------------------------------------------------------------*/

const arrOfPeo = ["Greg", "Mary", "Devon", "James"];

const toRemoveG = new Set(["Greg"]);

const differenceArr = arrOfPeo.filter( x => !toRemoveG.has(x) );

console.log(differenceArr);

const addNames = arrNames.push ("Elizabeth" , "Artie")

console.log (arrNames)

/*----------------------------------------------------------------- 
Create a new variable called withBob and set it equal to the people
array concatenated with the string of "Bob"
-----------------------------------------------------------------*/
const arrOfPeop = [ 'Matt' , 'Greg', 'Mary', 'Devon' , 
                'James', 'Zehava', 'Elizabeth', 'Artie'];

let withBob="Bob";
console.log(arrOfPeop.concat(withBob));
/*concat() method is used to join 2 / more arrays*/