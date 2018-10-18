'use strict';

function startUp() {

 document.addEventListener('keydown', event => {
  switch (event.keyCode) {
   case 81:
    colorChoice();
    break;
   case 87:
    helloWorld();
    break;
   case 69:
    bam();
    break;
   case 77:
    rickPlay();
    break;
   case 65:
    phaser();
    break;
   case 83:
    pong();
    break;
   case 68:
    plane();

  }
 });

 document.addEventListener('keyup', event => {
  switch (event.keyCode) {
   case 65:
    zapHide();
    break;
   case 83:
    springHide();
    break;
   case 68:
    planeHide();
  }
 });


 var color = ['magenta', 'yellow', 'cyan'];
 var i = 0;

 function colorChoice() {
  var colorResult = color[(i + 1) % color.length];
  document.getElementById('demo').style.backgroundColor = colorResult;
  document.getElementById("demo").innerHTML = "CHANGE THIS FOREVER (q key)";
  i++;
 }

 function helloWorld() {
  document.getElementById("demo").innerHTML = "Hello World";
 }

 var springimg = document.getElementById("springimg");
 var planeimg = document.getElementById("planeimg");
 var zapimg = document.getElementById("zapimg");

 function bam() {
  document.getElementById("waitforit").innerHTML = 'THIS!<img src="https://wellingtonbuddhistcentre.files.wordpress.com/2017/04/bam.jpg?w=1800" />';
 }

 function phaser() {
  document.getElementById('phaser').play();
  zapimg.classList.remove("hide");
 }

 function zapHide() {
  zapimg.classList.add("hide");
 }

 function pong() {
  document.getElementById('pong').play();
  springimg.classList.remove("hide");

 }

 function springHide() {
  springimg.classList.add("hide");
 }


 function plane() {
  document.getElementById('plane').play();
  planeimg.classList.remove("hide");

 }

 function planeHide() {
  planeimg.classList.add("hide");
 }

 var playlink = 'https://www.youtube.com/embed/oHg5SJYRHA0?rel=0&amp;controls=0&amp;showinfo=0?rel=0;&autoplay=1';
 var rick = document.getElementById("rick");

 function rickPlay() {
  document.getElementById("waitforit").innerHTML = "WAIT FOR IT!";
  rick.src = playlink;
  rickShow();

 }

 function rickShow() {
  setTimeout(function() {
   rick.classList.remove("hide");
  }, 4000);

 }

}
