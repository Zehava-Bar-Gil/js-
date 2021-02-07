'use strict';

function circleArea(r){
    // pi * radius * radius
    return (Math.PI * Math.pow(r,2)).toFixed(2);
}

console.log(circleArea(5))