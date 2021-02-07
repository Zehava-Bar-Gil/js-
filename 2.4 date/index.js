'use strict';

function getDayName() {
    const days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" ]
    const d = new date();
    return d.getDay();
}

console.log(getDayName())