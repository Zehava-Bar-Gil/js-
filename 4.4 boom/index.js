'use strict';

let greetings = `#########
7BOOM!
#########`
console.log(greetings)

function has7inside(number) {
    let firstDigit = number % 10
    let secondDigit = parseInt(number / 10)
    let thirdDigit = parseInt(number / 100)
    if (firstDigit === 7 || secondDigit === 7 || thirdDigit === 7) {
        return true
    }
    return false
}

for (let i = 1; i <= 100; i ++) {
    if ((i % 7 === 0)  && i.toString().indexOf("7")){
    console.log("BOOM");
    }
    
    else if (i % 7 === 0) {
    console.log("BOOM BOOM"); 
    }

    else {
        console.log(i)
    }
}


