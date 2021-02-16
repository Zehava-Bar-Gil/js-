const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];

const compareFoods = (food, food1)=>{
    let lengthArr = [];

    for(let i in food)
    {
        for(let k in food1){

            if(food[i] === food1[k]){
               
                lengthArr.push(food[i]);
            }
        }
    }
    if(lengthArr.length !==0)
    {
        return lengthArr
    }
    else{
        return false
    }
}

console.log(compareFoods(food, food1));