const CANDYSTORE = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200,
    }

/*--------------------------------------------------------------------
The function shoImplement the following getCandy function:
Implement the following getCandy function:
The function should return the candy element with the specified id.
-------------------------------------------------------------------*/

function GetCandy(obj, id)
{
    if (obj.candies[0].id === id)
   {
       return (obj.candies[0]);
   } 
   else
   {
      return (obj.candies[1]);
   }
}

/*-----------------------------
This function return the price:
------------------------------*/

function GetPrice(obj, id)
{
    if (obj.candies[0].id === id)
   {
       return (obj.candies[0].price);
   } 
   else
   {
      return (obj.candies[1].price);
   }
}


/*----------------------------
This function add a new candy
-----------------------------*/
function AddCandy(obj, name, id, price)
{
    obj.candies.push({name: name, id: id, price: price, amount: 1});
}

/*-------------------------------------------
This function reduce the amout of this candy
--------------------------------------------*/

function BuyCandy(obj, id)
{
    for (let i = 0; i < obj.candies.length; ++i)
    {
        if (obj.candies[i].id === id)
        {
            obj.cashRegister += obj.candies[i].price;
            obj.candies[i].amount -= 1;
        }
    }
}

/*---------------  GeneralFunction  ------------------*/

function GeneralFunction()
{
    'use strict';

    console.log(GetCandy(CANDYSTORE, "5hd7y"));

    console.log(GetPrice(CANDYSTORE, "as12f"));

    AddCandy(CANDYSTORE, 'snickers', 'ba90r', 4);
    console.log(CANDYSTORE.candies);

    BuyCandy(CANDYSTORE, '5hd7y');
    console.log(CANDYSTORE.candies + ' ' + CANDYSTORE.cashRegister);

};  GeneralFunction();