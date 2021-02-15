'use strict';

const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
    ];

    /*----------------------------------------------------------
     Create a function that returns all the names from the array
    -----------------------------------------------------------*/
    
   let arrayNames = data.map((d)=>{
       return `${d.name}`
   })

   console.log(arrayNames);
  
   /*----------------------------------------------------------------------
   Create a function that returns all the objects that are born before 1990
   -----------------------------------------------------------------------*/

   function objectData(data) {
       let obj = []
       let birthday = data.map((d)=>{

         if(parseInt(d.birthday.split('-')[2]) < 1990)
         {
             obj.push(d)
         }
       });
        return obj;   
   }
   console.log(objectData(data));


/*---Other Option---*/
// const getBefore90 = (arr) => {
//     let year = arr.filter((item) => {
//        return Date.parse(item['birthday']) <  Date.parse('1-1-1990');
//     })
//     console.log(year);
// }

// getBefore90(data);
       
/*--------------------------------------------------------------------------
Create a function that returns an object of all the different foods from all
the objects as the key and the number of times that food is present in all the
objects as the value
---------------------------------------------------------------------------*/בג

const getFood = (arr) => {
  let food = arr.map((item) => {
    return  item.favoriteFoods['meats'].concat(item.favoriteFoods['fish']);
  });
  const foodAmounts = new Map();
  for (let i = 0; i < food.flat().length; i++) {
      let count = 0;
      for (let k = 0; k < food.flat().length; k++) {
          if (food.flat()[i] === food.flat()[k]) {
              count++;
          }
      } foodAmounts.set(food.flat()[i], count);
  } console.log(foodAmounts);
}

getFood(data);
