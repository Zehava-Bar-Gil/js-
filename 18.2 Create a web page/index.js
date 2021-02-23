document.body.width = "100vw";
document.body.height = "100vh";


const header = document.createElement("header");
header.style.height = "12vh";
header.style.backgroundColor = "#f5eec8";
header.style.display = "flex";
header.style.justifyContent = "center";


document.body.appendChild(header);

const container = document.createElement("section");
container.style.width = "100%";
container.style.height = "90vh";
container.style.display = "flex";

const aside = document.createElement("aside");
aside.style.backgroundColor = "#dc0b21";
aside.style.flex = "1";
aside.style.width = "auto";
aside.style.height = "100%";

const main = document.createElement("main");
main.style.flex = "7";
main.style.height = "100%";
main.style.display = "flex";

const mainImg = document.createElement("img");
mainImg.src = "/18.2 Create a web page/art.jpg";

const mainTextArea = document.createElement("div");
mainTextArea.style.padding = "50px";
const title1 = document.createElement("h1");
title1.textContent = "Art by Gold";
const p1 = document.createElement("p");
p1.textContent = "When art and creation come together, you can sail to other realms and create new and wonderful worlds"
p1.style.paddingTop = "30px";
p1.style.fontSize = "18px";
mainTextArea.appendChild(title1);
mainTextArea.appendChild(p1);



main.appendChild(mainImg);
main.appendChild(mainTextArea);

container.appendChild(aside);
container.appendChild(main);

document.body.appendChild(container);


