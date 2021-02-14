'use strict';

/*---------------------------------------------------------
 Create 3 separate objects that their key is called name
 and their value is a string. Store them in separate
 variables.
 -------------------------------------------------------*/

const name ={
    firstName: 'Zehava',
    lastName: 'Bar Gil',
    age: 30
};

const myMap = new Map();
myMap.set('firstName', 'Zehava');
myMap.set('lastName' , 'Bar Gil');
myMap.set('age', 30);
console.log(myMap);

/*-------------------------------------------------------
Create a new Map object that sets each object as a key
 and assign an id number as the value.
 --------------------------------------------------------*/

const score = 200;
const prizes = new Map();
prizes.set(200, 'Dog')
prizes.set(400, 'Siberian Husky')
prizes.set(600, 'Australian Shepherd')

console.log(`You win a ${prizes.get(score)}`);

/*-------------------------------------------------
Iterate over the Map object with the for..of loop.
 - log the name and id
 --------------------------------------------------*/

for (const [points, prize] of prizes) {
    console.log(points, prize);
}

