/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var symbols = ["♥", "♠", "♣", "♦"];
  var content = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  var randomSymbols = symbols[Math.floor(Math.random() * symbols.length)];
  var randomContent = content[Math.floor(Math.random() * content.length)];

  document.querySelector(".card-top").innerHTML = randomSymbols;
  document.querySelector(".card-content").innerHTML = randomContent;
  document.querySelector(".card-bot").innerHTML = randomSymbols;

  if (randomSymbols == "♥" || randomSymbols == "♦") {
    document.querySelector(".card").style.color = "red";
  } else if (randomSymbols == "♠" || randomSymbols == "♣") {
    document.querySelector(".card").style.color = "black";
  }
};
