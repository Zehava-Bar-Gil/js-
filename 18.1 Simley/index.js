'use strict'

const div = document.querySelector('div')
console.log(div);
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

function createImageNode() {
    const image = document.createElement('img')
    image.src = '/18.1 Simley/gettyimages2.jpg'
    image.style.width = '100px'
    image.style.margin = "15px";
    return image;
}

button.addEventListener('click', () => {

    let Imgs = document.querySelectorAll('img')
    if (Imgs) {
        Imgs.forEach(e => e.remove())
    }

    document.querySelector('p').innerHTML = ''
    let text = parseInt(textarea.value)

    console.log(text)
    if (isNaN(text)) {
        document.querySelector('p').innerHTML = 'Enter number!'
    } else {
        for (let i = 0; i < text; i++) {
           div.appendChild(createImageNode())
            
        }
    }
   
});