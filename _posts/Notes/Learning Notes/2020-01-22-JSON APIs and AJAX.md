---
title: fcc | JSON APIs and AJAX
description: Learning notes about JSON APIs and AJAX.
categories: [Notes] 
tags: [Learning Notes]
---

## References

- [freeCodeCamp "Data Visualization Certification"](https://www.freecodecamp.org/)

## JSON APIs and AJAX

```js
//execute only once the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
  //--handle click event
  document.getElementById('getMessage').onclick = function(){};
  //--change text
  document.getElementsByClassName('message')[0].textContent="Here is the message";
});

//--Get JSON with the JavaScript XMLHttpRequest Method
const req = new XMLHttpRequest();//create instance
req.open("GET",'/json/cats.json',true);//initialize a request, true makes it an asynchronous request
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};

//--Get JSON with the JS fetch method
fetch('/json/cats.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerHTML = JSON.stringify(data);
    })

//--Access the JSON Data from an API
json[0].altText

//--Convert JSON Data to HTML
let html = "";
json.forEach(function(val) {
  const keys = Object.keys(val);
  html += "<div class = 'cat'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});

//--render images from data sources
html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";

//--pre-filter JSON to get the data you need
json = json.filter(val=>val.id!==1);

//--Get Geolocation Data to Find A User's GPS Coordinates
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}

//--Post Data with the JavaScript XMLHttpRequest Method
const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');//info about sender and the request
//must be called after open and before send
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201){//4 = operation is complete, 201 = successful request
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);
```
