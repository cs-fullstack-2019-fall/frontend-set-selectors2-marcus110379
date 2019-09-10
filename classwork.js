// Print the first p tag to the console using the ID, class, and tag selectors.
//
//     Print the special class using both the query selector and query all selector.
//
//     Change the color of the h1 statement to blue.
//
//     Change the color of the last p tag to yellow.


let el = document.getElementsByTagName("p");
console.log(el[0]);
let elo = document.getElementsByClassName("special");
console.log(elo[0]);
let elow = document.getElementById("first");
console.log(elow);
let ebo = document.querySelector(".special");
console.log(ebo);
let eco = document.querySelectorAll(".special");
console.log(eco[0]);
let h1el =document.getElementsByTagName("h1");
h1el[0].style.color ="blue";
let pt =document.getElementsByTagName("p");
pt[3].style.color ="yellow";



