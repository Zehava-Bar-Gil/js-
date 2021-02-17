'use strict';

/*------
Block 1
------*/

var b = 1;// Global scope
function someFunction(number) { // function outer scope -Parent function
function otherFunction(input) {//Child function
return b;// function inner scope -Not set, so he takes from the parent fun'
}
b = 5;// Parent function
return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
//add a closures -acsses a parent level scop
//from a child scope - firstResult = someFunction
// Will always be equal to 5 

/*-------------------------------------------------------------------------*/

/*------
Block 2
------*/

var a = 1;// Global scope
function b2() {   
a = 10;
return;//-a
function a() { }
}
b2();//undefined 
console.log(a);//Will always be equal to 1, Because affected from global scope

/*-------------------------------------------------------------------------*/


let i;
for (i = 0; i < 3; i++) {//if I'll put let i inside, the result will be 0,1,2 
const log = () => {
console.log(i);
}
setTimeout(log, 100);//Return i*3, Because let i it's out to for loop
}

