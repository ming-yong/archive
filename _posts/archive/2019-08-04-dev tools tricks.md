---
title: (Archive) JS30 | Dev tools tricks
description: Learning notes about some useful dev tools tricks.
categories: [archive] 
tags: [archive] 
---

## Reference

- [JavaScript 30 by Wes Bos](https://javascript30.com/)

## Tricks

```js
//1. The source of the attribute
//Inspect element > Break on > attribute modification

//2. interpolated:
console.log("I am a %s string!", "human");

//3. styled:
console.log("%c I am a text", "font-size:50px;background:red;");

//4. warning:
console.warn("OH NOOOO");

//5. error:
console.error("NO WAY!");

//6. info:
console.info("Crocodiles ear 3-4 people per year");

//7. testing:
console.assert(1 === 2, "That is wrong!");

//8. cleaning
console.clear();

//viewing DOM elements
console.dir(p);

//grouping together
dogs.forEach(dog => {
 console.group(`${dog.name}`); //or groupCollapsed
 console.log(`This is ${dog.name}`);
 console.log(`${dog.name} is ${dog.age * 7} years old`);
 console.groupEnd(`${dog.name}`);
});

//counting
console.count("Count");
console.count("Counting");
console.count("Count");
console.count("Counting");
console.count("Count");
console.count("Count");

//timing
console.time("fetching data");
fetch("url")
 .then(data => data.json())
 .then(data => {
  console.timeEnd("fetching data");
  console.log(data);
 });

//table
console.table(dogs));//array of object
```
