'use strict';
const d = new date();
function getDayName() {
    const days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" ];
    return d.getDay();
}

function getDayInMonth() {
    return d.getDate();
}

function getDayInMonth() {
    const mounthName = ["January" , "February" , "March" , "April" 
, "May" , "June" , "July" , "August" , "September" ,
"October" , "November" , "December"];
    return [d.getMonth()];
}

function getYear() {
    return d.getFullYear ()
}

function getFullDate(){
   return `Today is ${getDayName()} the ${getDayInMonth()} of ${getMonthName()}, ${getYear()}`
    // Today is Sunday the 31 of January, 2021
}

console.log(getDayName())
console.log(getDayInMonth())
console.log(getMonthName())
console.log(getFullDate())