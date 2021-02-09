'use strict';

function checkStrongPassword (password){
    let isBig = false, isSmall = 0, isNum =false;

    for(let i=0 ; i < password.length ; i++)
    if (password[i].charCodeAt(0) > 65 && password[i].charCodeAt(0) <91) {
        isBig = true;
    }
    if (password[i].charCodeAt(0) > 95 && password[i].charCodeAt(0) <123) {
        isSmall ++;
    }
    if (password[i].charCodeAt(0) > 47 && password[i].charCodeAt(0) <58) {
        isNum =true;
    }
    if(isNums && isSmall > 1 && isBig) return true;
    return false;
}

console.log(checkStrongPassword("abc"))



