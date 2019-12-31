---
title: VanillaJS | Rock paper scissors game
description: I built a rock paper scissors game to practice vanillaJS.
categories: [Notes] 
tags: [Building Notes]
---

I am building small projects to practice my Vanilla JavaScript. This is my second project: A rock paper scissors game built from memory. You can [view demo here](https://codepen.io/ming-yong/full/WVrNBa) or [view complete code here](https://codepen.io/ming-yong/pen/WVrNBa).

## Reference

- [YouTube video "Web Development Tutorial - JavaScript, HTML, CSS - Rock Paper Scissors Game" by freeCodeCamp](https://www.youtube.com/watch?v=jaVNP3nIAv0&list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V&index=3&t=0s)

## Result

![demonstration of rock paper scissors game]({{site.baseurl}}/assets/images/rps.gif)

- **User story #1:** I can choose between rock, paper and scissors by clicking the corresponding icon.
- **User story #2:** I can see the game result in a scoreboard section.
- **User story #3:** I can reset the game by clicking the reset button.
- **User story #4:** In each game, I can see my choice in a display box named "Human" and my score on the top of the "Human" display box.
- **User story #5:** In each game, I can also see computer's choice in a display box named "Computer" and computer's score on the top of the "Computer" display box.
- **User story #6:** The background colour of the display boxes will change based on the result. Green if won, red if lost and yellow if it is a draw.
- **User story #7:** I can see a judge announcing the result under the display box.

## JavaScript

_The main idea is to compare the user's choice with the computer's and defines who is the winner._

### How to select elements from the DOM

We need to select the elements before using it in JavaScript.

```js
//input
const div_r = document.getElementById("r");
const div_p = document.getElementById("p");
const div_s = document.getElementById("s");
const div_reset = document.getElementById("reset");
//output
const p_humanScore = document.getElementById("humanScore");
const p_compScore = document.getElementById("compScore");
const div_humanChoice = document.getElementById("humanChoice");
const div_compChoice = document.getElementById("compChoice");
const p_judgeSay = document.getElementById("result");
```

### How to play a game

We can listen for a `click` event on every icon to trigger the game.

```js
function getCompPick() {
 const choices = ["r", "p", "s"];
 const randomNum = Math.floor(Math.random() * 3);
 return choices[randomNum];
}

function game(humanPick) {
 let compPick = getCompPick();
 let gameResult;
 switch (humanPick + compPick) {
  case "rr":
  case "pp":
  case "ss":
   gameResult = "draw";
   break;
  case "rs":
  case "pr":
  case "sp":
   gameResult = "win";
   break;
  case "rp":
  case "ps":
  case "sr":
   gameResult = "lose";
   break;
 }
 displayResult(gameResult, humanPick, compPick);
}

//input
div_r.addEventListener("click", () => game("r"));
div_p.addEventListener("click", () => game("p"));
div_s.addEventListener("click", () => game("s"));
```

### How to display the result

We use the value "r", "p" or "s" to select the corresponding icon from an object `display`.

```js
const display = {
 r: "✊",
 p: "🖐️",
 s: "✌️"
};
//tracking
let humanCurrentScore = 0;
let compCurrentScore = 0;

function displayResult(result, humanPick, compPick) {
 let judgeSay, humanColor, compColor;
 if (result == "draw") {
  judgeSay = "It is a draw!";
  humanColor = "#FFD700";
  compColor = "#FFD700";
 } else if (result == "win") {
  judgeSay = "Human won!";
  humanCurrentScore++;
  humanColor = "green";
  compColor = "red";
 } else {
  judgeSay = "Human lost!";
  compCurrentScore++;
  humanColor = "red";
  compColor = "green";
 }
 p_humanScore.textContent = humanCurrentScore;
 p_compScore.textContent = compCurrentScore;
 p_judgeSay.textContent = judgeSay;
 div_humanChoice.style.background = humanColor;
 div_compChoice.style.background = compColor;
 div_compChoice.textContent = display[compPick];
 div_humanChoice.textContent = display[humanPick];
}
```

### How to reset the game

We set everything back to default value when user click the "Reset" button.

```js
div_reset.addEventListener("click", function() {
 humanCurrentScore = 0;
 compCurrentScore = 0;
 p_humanScore.textContent = humanCurrentScore;
 p_compScore.textContent = compCurrentScore;
 div_humanChoice.textContent = "❓";
 div_humanChoice.style.background = "#DCDCDC";
 div_compChoice.textContent = "❓";
 div_compChoice.style.background = "#DCDCDC";
 p_judgeSay.textContent = "Hi, I am your judge.";
});
```

And... that is all the JavaScript we need to build this rock paper scissors game.
