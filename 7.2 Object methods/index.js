'use strict';

/*---------------------------------------------------------------
1. Create an object called ‘mycountry’ for a country of your choice,
containing properties ‘country’, ‘capital’, ‘language’, ‘population’
and ‘neighbours’ (an array)
2. Add a method to the object called 'describe' to the 'myCountry'
object. With the help of the ‘this’ keyword, this method will log a
string like this to the console:
‘Finland has 6 million people, their mother tongue is Finnish, they
have 3 neighbouring countries and a capital called Helsinki’.
----------------------------------------------------------------*/

let mycountry = {
    country: "Italy",
    capital: "Rome",
    language: "Italian",
    population: "60 million",
    // neighbours: ["France" , "Switzerland" , "Austria" , "Slovenia"], 
    neighbours: [],
    describe:function () {
    console.log(`${this.country} has ${this.population}, their mother tongue is ${this.language}, they
    have 4 neighbouring countries ${this.neighbours} and a capital called ${this.capital} `)
},

checkIsland: function() {
this.Island = this.neighbours.length > 0 ? false:true;

  },
};

mycountry.checkIsland();

console.log (mycountry);