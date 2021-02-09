'use strict';

let lan = (languages) =>{
switch (languages) {
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place in number of native speakers");
    break;
  case "hindi":
    console.log("4rd place in number of native speakers");
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Not in the top 5");   

}
} 

lan ("mandarin");
lan("spanish");
lan("english");
lan("hindi");
lan("arabic");
lan(" ");

   
