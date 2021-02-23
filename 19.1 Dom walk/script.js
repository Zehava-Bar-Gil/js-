/*--Create a variable that holds the <li> element with the class “start-here”--*/

let li1 = document.querySelector(".start-here");
let li2 = document.createElement ('li')

/*--Change the text from “title 2” to “main title”--*/

li1.firstChild.textContent = "main title";

/*--Add another sub title with the text “sub title 4”--*/

li2.textContent = 'sub title 4';

li1.nextElementSibling.firstElementChild.appendChild(li2)

/*--Delete the last <li> element from the list--*/

start1.nextElementSibling.nextElementSibling.remove();

/*--Change the <title> element text to “Master Of The Dom”.--*/

const title = start.parentElement.parentElement.previousElementSibling.children[3];
title.textContent = "Master Of The Dom";

/*--Change the text of the <p> element ot something else of your--*/

const p = start.parentElement.nextElementSibling.firstElementChild;

p.textContent = 'Hello Zehava!';

