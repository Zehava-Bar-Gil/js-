const randomApi = 'https://dog.ceo/api/breeds/image/random'
const img = document.querySelector('#img');
const BtnRandom = document.querySelector('#BtnRandom');

function getRandomDogImage(){
    let result = await fetch(randomApi);
    let image = await result.json();
    console.log(image);
    img.src = image.msg
}

