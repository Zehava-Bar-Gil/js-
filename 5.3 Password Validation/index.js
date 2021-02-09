'use strict';

function checkStrongPassword (password){
    let isBig = false, isSmall = 0, isNum =false;

    for(let i=0 ; i < password.length ; i++) {

    
    if (password[i].charCodeAt(0) > 65 && password[i].charCodeAt(0) <91) {
        isBig = true;
    }
    if (password[i].charCodeAt(0) > 95 && password[i].charCodeAt(0) <123) {
        isSmall ++;
    }
    if (password[i].charCodeAt(0) > 47 && password[i].charCodeAt(0) <58) {
        isNum =true;
    }
} 
if(isNum && isSmall > 1 && isBig) return true;
return false;
}

console.log(checkStrongPassword("abcB11134"))

// const passwordValidator4 = (password) => {
//     return password.lengh > 7 && /[A-Z]/.test(password)
//     ? "Very Strong"
//     : password.lengh > 7
//     ? "Strong"
//     : "Weak";

// };

// console.log(passwordValidator4("1234Az1"))




