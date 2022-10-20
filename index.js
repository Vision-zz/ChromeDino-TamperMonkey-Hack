// ==UserScript==
// @name         Chrome dino hack
// @namespace    http://tampermonkey.net/
// @version      1.00
// @description  Invinsibility and speed hack with customizable buttons
// @match        https://dino-chrome.com/
// @match        https://t-rex-game.com/
// @match        https://chromedino.com/*
// @grant        none
// ==/UserScript==


// Invincibility Script
const oldGameOver = Runner.prototype.gameOver;
const minSpeed = 10;
let currentSpeed = 10
Runner.prototype.gameOver = () => {};

const button = document.createElement("Button");
button.innerHTML = "Reset Game Over";
button.style = "top:0;right:0;position:absolute;z-index:99999;padding:20px;";
document.body.appendChild(button);
button.onclick = function(){
    Runner.prototype.gameOver = oldGameOver;
};


const button2 = document.createElement("Button");
button2.innerHTML = "Set hack";
button2.style = "top:0;right:150px;position:absolute;z-index:99999;padding:20px;";
document.body.appendChild(button2);
button2.onclick = function(){
    Runner.prototype.gameOver = () => {};
};

const button3 = document.createElement("Button");
button3.innerHTML = "Speed +";
button3.style = "top:0;right:240px;position:absolute;z-index:99999;padding:20px;";
document.body.appendChild(button3);
button3.onclick = function(){
    currentSpeed += 20
    Runner.instance_.setSpeed(currentSpeed)
};

const button4 = document.createElement("Button");
button4.innerHTML = "Speed -";
button4.style = "top:0;right:330px;position:absolute;z-index:99999;padding:20px;";
document.body.appendChild(button4);
button4.onclick = function(){
    currentSpeed - 20 < minSpeed ? currentSpeed = 10 : currentSpeed -= 20
    Runner.instance_.setSpeed(currentSpeed)
};



