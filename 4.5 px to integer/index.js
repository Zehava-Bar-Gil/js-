const leapYear = (year) => {
    if (year % 4 === 0 && !(year % 100 === 0)
    || year % 400 === 0) {
        console.log("yes")
    }
}

leapYear(1996)