'use strict';

function percentageOfWorld1(population) {
    return (population / 7900 * 100).toFixed(2)
}

console.log("population of Chaina is " + percentageOfWorld1(1441) + " % of the world");
console.log("population of US is " + percentageOfWorld1(5002) + " % of the world");
console.log("population of Israel is " + percentageOfWorld1(12) + " % of the world");

const percentageOfWorld2 = population => (population / 7900 * 100).toFixed(2);

console.log("population of Chaina is " + percentageOfWorld2(1441) + " % of the world");
console.log("population of US is " + percentageOfWorld2(5002) + " % of the world");
console.log("population of Israel is " + percentageOfWorld2(12) + " % of the world");





