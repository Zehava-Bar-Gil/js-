'use strict';

/*----------------------------------------------------
Write a a function called ‘isString’ that receives 2
arguments, a string and a callback function.
The function checks that the string is indeed a string.
If the string is a string, pass the string to a callback
function which logs that string to the console.
-----------------------------------------------------*/

const isstring = (string, callback) =>{
    if(typeof string === 'string'){
        callback(string)
    }
}

const logString = (string) =>{
    console.log(string)
}

isstring('Hello World', logString)

/*------------------------------------------------------
Create a function called ‘firstWordUpperCase’ that
receives 2 arguments, a string and a callback function.
The function will capitalize the first word in the sentence
and pass the string to a callback function which will create
dashes between the words
----------------------------------------------------------*/

const sayHello = name =>{
    console.log(`hello ${name}`);
}

const isString = (str , callback)=>{
    if(typeof str === "string"){
        callback(str);
    }
    else{
        console.log("not string");
    }
}

isString('Zehava' , sayHello);