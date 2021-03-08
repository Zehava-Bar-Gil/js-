const randomJokeUrl = 'https://api.chucknorris.io/jokes/random'
const catApi = 'https://api.chucknorris.io/jokes/categories' ;
const jokeByCat = 'https://api.chucknorris.io/jokes/random?category='
const jokeText = document.querySelector('#jokeText');
const jokeBtn = document.querySelector('#jokeBtn');
const categories = document.querySelector('#categories');

async function getJoke(){
    if(categories.value === 'all'){
        let joke = await getRandomJoke();
        jokeText.innerHTML = joke.value;
    }
    else{
        let joke = await (await fetch(jokeByCat+categories.value)).json();
        jokeText.innerHTML = joke.value;
    }
    // let joke = await (await fetch(randomJokeUrl)).json();
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


// <select name="cars" id="cars">
//     <option value="volvo">Volvo</option>
//     <option value="saab">Saab</option>
//     <option value="mercedes">Mercedes</option>
//     <option value="audi">Audi</option>
// </select>

jokeBtn.addEventListener('click',getJoke)
