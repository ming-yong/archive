---
title: NodeJS | Final JS30 project
description: I built a random gif generator to practice NodeJS.
categories: [Notes] 
tags: [Building Notes]
---

Finally, I hosted my final project of ["JavaScript 30"](https://javascript30.com/)(only "Geolocation based Speedometer and Compass" from day21 is skipped).

As always, this post is about summarizing the tutorial in addition of building the project, which often helps finding potential improvement in my case.

The project in this post is based on tutorial 12: Key Sequence Detection (KONAMI CODE). You can [view demo here](https://give-me-gif.herokuapp.com/) or [view complete code here](https://github.com/ming-yong/JS30-12-give-me-gif).

## Reference

- [JavaScript 30 by Wes Bos](https://javascript30.com/)
- [Promises, async/await, hiding API keys and application deployment videos by The Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw)

## Result

![demonstration of give me gif]({{site.baseurl}}/assets/images/giveMeGif.gif)

- **User story #1:** A gif will appear every time user types the word "gif".

## JavaScript

_The idea of combining key detection and APIs that uses keys took me almost 3 months to not being scared and finish it!_

### The vanilla front-end part

In html file, we have our nice and sweet set up of 2 `p` and 1 `img` to be change later.

```html
<body>
  <h1>Type the word "gif" to get one!</h1>
  <p span class="p_message">I am waiting!</p>
  <img src="https://media1.giphy.com/media/JIX9t2j0ZTN9S/giphy-downsized.gif?cid=2fc9222f4622a9d206dbb76b2b7b3fabddaef081c736bbc2&rid=giphy-downsized.gif" alt="funny cat GIF" />
  <p class="p_word"></p>
</body>
```

Whenever we detected the word "gif", we fire up our backend to bring us back a gif.

```js
const input = [];
const secretCode = "gif";
const image = document.querySelector("img");
const displayMessage = document.querySelector(".p_message");
const displayWord = document.querySelector(".p_word");

//whenever users type
window.addEventListener("keyup", async e => {
 e.preventDefault();//don't reload the page
 input.push(e.key);//push what they type to array "input"
 input.splice(-secretCode.length - 1, input.length - secretCode.length);//make sure "input" only contains 3 words
 displayMessage.textContent = "Last three things you typed: " + input.join("");//show the user what they type
 if (input.join("").toLocaleLowerCase().includes(secretCode)){//detect if input includes the secret code "gif"
  try {//see the next part of explanation
   const response = await fetch("/giveMeGif");
   const json = await response.json();
   displayWord.textContent = "The random word is " + json.word;
   image.src = json.url;
   image.alt = json.alt;
  } catch (error) {//never went here when testing, but figure it's nice to keep my error handling
   console.error(error);
   image.src = "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif";
   image.alt = "sad baby";
   displayMessage.textContent = "Oh no, we only found you this sad baby";
  }  
 }
});
```

### NodeJS comes into play

In our front-end JavaScript code, `fetch(/giveMeGif)` sends a GET request to our server.

```js
//setting up: 3 packages
const express = require("express"); //use express
const fetch = require("node-fetch"); //fetch in server code
require("dotenv").config();//env

//express set up
const app = express();
app.use(express.static("public")); //generate web pages from folder public

//Port and API keys from env(environment variable)
const port = process.env.PORT || 3000;
const giphyKey = process.env.GIPHY_KEY;
const wordnikKey = process.env.WORDNIK_KEY;
const giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}`;
const wordnikAPI = `http://api.wordnik.com/v4/words.json/randomWord?api_key=${wordnikKey}`;

app.listen(port, () => console.log(`listening at ${port}`));//just for checking

//a GET request route
app.get("/giveMeGif", async(request,response)=>{
  let result;
  try {
    console.log("Getting a GIF for ya!");//just for checking
    const response_wordnik = await fetch(wordnikAPI);//get a random word
    const json_wordnik = await response_wordnik.json();
    const response_giphy = await fetch(giphyAPI + json_wordnik.word);//get a gif, searched by the word we get
    const json_giphy = await response_giphy.json();
    result = {//pack the data we need for changing gif
      word: json_wordnik.word,
      url: json_giphy.data[0].images.downsized.url,
      alt: json_giphy.data[0].title
    };
  } catch (error) {
    console.error(error);
    result = {
      word: "N/A",
      url: "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif",
      alt: "sad baby"
    };
  }
  response.json(result);//send the data back to client side
})
  ```

So, the above is what happens for the line `const response = await fetch("/giveMeGif");` in client code. The next line
`const json = await response.json();` convert the response into JSON object to be use.

### Deploying

As for deploying, I had learned deploying on glitch and Heroku using CLI before from [The Coding Train](https://www.youtube.com/watch?v=Rz886HkV1j4) and this time, I used Heroku without the CLI but connected straight with GitHub.

A small little question I have right now is "How do Heroku" gets my env from GitHub?" Did GitHub hided it and by authenticate Heroku, the keys are shared?
