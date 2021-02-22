'use strict'

const div = document.querySelector('#div-1')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')

let fontSize =
parseInt(window.getComputedStyle(div).fontSize);

plus.addEventListener('click',()=>{
fontSize +=10
if(fontSize < 100){
    div.style.fontSize = `${fontSize}px`
   }
}) 

minus.addEventListener('click',()=>{
    fontSize -=10
    if(fontSize > 6){
        div.style.fontSize = `${fontSize}px`
   }
}) 