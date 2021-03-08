const randomJokeUrl = 'https://api.chucknorris.io/jokes/random'
const catApi = 'https://api.chucknorris.io/jokes/categories'
const jokeByCat = 'https://api.chucknorris.io/jokes/random?category='
const jokeText = document.querySelector('#jokeText');
const jokeBtn = document.querySelector('#jokeBtn');
const categories = document.querySelector('#categories');

async function getJokes () {
    if(categories.value === 'all'){
        let joke = await getRandomJoke();
        jokeText.innerHTML = joke.value;
    }
    else{
        let joke = await (await fetch(jokeByCat+categories.value)).json();
        jokeText.innerHTML = joke.value;
    }
    // let joke = await fetch(randomJokeUrl)
    // let Data = await joke.json();
    // console.log(Data.value);
    // jokeText.innerHTML = Data.value
}

async function createDropDown(){
    let allCat = await (await fetch(catApi)).json();
    let allOptions = allCat.map((cat)=>{
        return `<option value="${cat}">${cat}</option>`
    })
    categories.innerHTML = '<option>all</option>'+allOptions;
}

const getRandomJoke = async() =>{
    return await (await fetch(randomJokeUrl)).json();
}
// const allCat = await fetch(catApi)
// let DataC = await allCat.json();
// console.log(DataC);

createDropDown()


jokeBtn.addEventListener('click' ,getJokes)




