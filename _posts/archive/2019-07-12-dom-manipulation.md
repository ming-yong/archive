---
title: (Archive) fcc | DOM Manipulation
description: Learning notes about DOM manipulation.
categories: [archive] 
tags: [archive] 
---

## References

- [YouTube Video "JavaScript and the HTML DOM" by freeCodeCamp](https://www.youtube.com/playlist?list=PLWKjhJtqVAbllLK6r2dnGjUVWB_cFNcuO).\*\*

## Cover topics

- [Selecting and Changing element](#selecting-and-changing-element)
- [Setting and Getting CSS style](#setting-and-getting-css-style)
- [DOM Event and addEventListener](#dom-event-and-addeventlistener)
- [DOM Nodes](#dom-nodes)
- [Animation in the DOM and requestAnimationFrame](#animation-in-the-dom-and-requestanimationframe)
- [Window Object](#window-object)
- [Pop up boxes](#pop-up-boxes)
- [Cookies vs localStorage vs sessionStorage](#cookies-vs-localstorage-vs-sessionstorage)
- [Browser history](#browser-history)

## Selecting and Changing element

```js
//by id
var div1 = document.getElementById("id");
document.querySelector("#id");
//by class
document.getElementsByClassName("className");
document.querySelector(".className");
//only in div1
div1.getElementsByClassName("className");
//by tag
document.getElementsByTagName("p");
//all
var queryAll = document.querySelectorAll(".className,#id");
//changing innerHTML
div1.innerHTML = "<h1>Hello</h1>";

for (i = 0; i < queryAll.length; ++i) {
 queryAll[i].innerHTML = "<h1>Hello</h1>";
}
//use textContent to avoid scripting attack
div1.textContent = "Hello";
```

[back to top](#cover-topics)

## Setting and Getting CSS style

```js
var line = document.getElementById("line");
//one style at a time
line.style.background = "red";

//multiple at a time, will remove any inline style
line.setAttribute("style", "color:red; border: 1px solid blue");

console.log(line.style); // only show inline style
console.log(window.getComputedStyle(line));
```

[back to top](#cover-topics)

## DOM Event and addEventListener

```js
//onclick
document.getElementById("myBtn").onclick = changeBackgroundToBlue;

function changeBackgroundToBlue(){
  document.querySelector('body').style.background = "blue";
}

//oninput
function removeLetterFromH1(){
  var h1 = document.querySelector('h1');
  h1.textContent = h1.textContent.slice(0,-1);
}

//onmouseover
function mOver(obj){
  obj.innerHTML = "Get off me";
}

//onmouseout
function mOut(obj){
  obj.innerHTML = "Thank you";
}

//addEventListener
//syntax: element.addEventListener(event, function, useCapture);
//useCapture is a bool, if myP(inside myDiv) and myDiv are both set to true, myDiv's function works first, but if both are set to false, myP's function will work first.

var myP = document.getElementById("myP");
var myDiv = document.getElementById("myDiv");

//event listener is not support in all browser, onclick is but writing a new onclick will override the old one.
myP.addEventListener("click", function(){myDiv.style.background = "lightblue"});
//or
myP.onclick = function(){myDiv.style.background = "lightblue"});

//removeEventListener won't work if the whole function is put as parameter.
```

[back to top](#cover-topics)

## DOM Nodes

```js
//appending node after paragraph
var para = document.createElement("p");

//like this
var node = document.createTextNode("Up above the world so high");
para.appendChild(node);

var parent = document.getElementById("div1");
parent.appendChild(para);

//or
para.innerHTML = "like a diamond in the sky";

var child = document.getElementById("p1");
parent.insertBefore(para, child); //insert para before child

//replacing child
var para3 = document.createElement("p");
para3.innerHTML = "When the blazing sun is gone";
parent.replaceChild(para3, child); //replace child with para3

//removing child
parent.removeChild(para3);
```

[back to top](#cover-topics)

## Animation in the DOM and requestAnimationFrame

```js
//only apply to child with absolute position and its parent with relative position
function myMove(){//call onClick
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame(){
    if(pos == 350){
      clearInterval(id);
    }else{
      pos++;
      elem.style.top= pos + 'px';
      elem.style.left=pos + 'px';
    }
  }

}

var item = document.getElementById('item');
item.animate([//keyframes
  {transform: 'scale(1)', background: 'red', opacity: 1, offset: 0},
  {transform: 'scale(0.5) rotate(270deg)', background:'blue', opacity:.5, offset:.2},
  {transform:'scale(1) rotate(0deg)', background: 'red', opacity:1, offset:1},
],{
  duration:2000;//ms
  easing:'ease-in-out',
  delay:10,//ms
  iterations:Infinity,//or a number
  direction:'alternate',//normal,reverse,etc
  fill:'forwards'//backward,both,none,auto
});

//requestAnimationFrame
//benefits:
//1.the browser can optimize it, so animations will be smoother
//2.animation in inactive tabs will stop, allowing CPu to chill
//3.more battery-friendly

function step(timestamp){
  if(!start || progress >400) start=timestamp;
  progress=(timestamp-start)/10+50;
  element.style.top=progress+'px';
  stopId=window.requestAnimationFrame(step);
}

function toggleAnimation(){
  if(!toggle){
    toggle=true;
    window.requestAnimationFrame(step);
  }else{
    toggle=false;
    cancelAnimationFrame(stopId);
  }
}
```

[back to top](#cover-topics)

## Window Object

```js
//getting window's size
window.addEventListener("resize", update);
var x = window.document.getElementById("demo");
update();

function update() {
 x.innerHTML =
  "Browser inner window width: " + window.innerWidth + "height: " + window.innerHeight + ".";
}

//open new window
var newWindowObj = window.open(
 "http://freecodecamp.com",
 "newWindow",
 "menubar=true,location=true,resizable=false,scrollbars=false,width=400,height=300,top=200,left=200"
);
//adding target="newWindow" open link in this window

//move window
function move() {
 newWindowObj.moveBy(50, 0);
 newWindowObj.focus();
}
```

[back to top](#cover-topics)

## Pop up boxes

```js
//alert
alert("Alert!!");

//confirm
if(confirm("Press a button")){//return boolean
  //user pressed OK
}else{
  //user pressed cancel
}

//prompt
var person = prompt("What's your name?","default");

if(person==null||person=""){
  //user cancelled prompt
}else{
  //receive user's name
}
```

[back to top](#cover-topics)

## Cookies vs localStorage vs sessionStorage

They are all ways to store data in the browser however have difference in capacity, browsers, accessible from, expires, storage location and whether it is sent to the server with requests.

Cookies are best for anything that has to be access by the server and the local machine.

```js
localStorage.setItem('breakfast','cereal');
//can be found in Application in Chrome Dev tool
//only add new item if key is change
console.log(localStorage.getItem('breakfast'));

sessionStorage.setItem('breakfast','eggs');
console.log(sessionStorage.getItem('breakfast'));

//remove
localStorage.removeItem('lunch');
localStorage.clear();

document.cookie="hello=true";
document.cookie="doSomethingsOnlyOnce=true;
expires=Fri, 31 Dec 99999 23:59:59 GMT";//with expire date
document.cookie="person=beau;expires=Fri, 31 Dec 99999 23:59:59 GMT;path=/";

//to get a cookie
console.log(document.cookie);//all cookies are store in one string file

//to delete cookie
document.cookie="person=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
```

[back to top](#cover-topics)

## Browser history

```js
//history object
alert(window.history.length);

history.back(); //go back to the previous page, can be forward

history.go(-3); //will go back 3 pages, can be positive or 0

history.replaceState("beau is great", null, "unicycle.html"); //will replace history entry, won't actually load the page
console.log(history.state); //beau is great

history.pushState(null, null, "freeCodeCamp");
```

[back to top](#cover-topics)
