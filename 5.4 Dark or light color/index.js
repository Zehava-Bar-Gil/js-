'use strict';

let color = (typeOfColor) => {
switch (typeOfColor) {
  case "yellow":
  case "pink":
  case "orange": 
    console.log("light color");
    break;
  case "blue":
  case "purple":
  case "brown":
    console.log("dark color");
  default:
    console.log("Unknown color");   

   }

}; 

color("yellow");
color("blue");
color("123");
color("");