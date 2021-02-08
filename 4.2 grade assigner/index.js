'use strict';

const score = (points) => {

    if (points  <= 64) {
     
        return "F"
    }
    else if (points > 64 && points <= 69) {
        return "D"
    }
    else if (points > 69 && points <= 79) {
        return "C"
    }
    else if (points > 79 && points <= 89) {
        return "B"
    } else {
        return "A"
    }

}

console.log(score(64))
console.log(score(65))
console.log(score(78))
console.log(score(89))
console.log(score(95))