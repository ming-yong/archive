---
title: JS30 | Reference vs Copy in JS
description: Learning notes about reference and copy in JavaScript.
category: 2019
tags: JavaScript
---

## Reference

- [JavaScript 30 by Wes Bos](https://javascript30.com/)

## Reference vs Copy

Normally, a variable(v2), which we assigned the value of another variable(v1) to, will not be affected after we change the value of the original variable(v1).

```js
//can be strings, numbers, booleans
let age = 100;
let age2 = age;
console.log(age, age2); //100,100
age = 200;
console.log(age, age2); //200,100
```

### array

However for array, we will have to make a copy of the original array before we change the items.

```js
//ways to copy an array
const array2 = array.slice();
const array2 = [].concat(array);
const array2 = [...array];
const array2 = Array.from(array);
```

## object

We have to make a copy of object too.

```js
//this is only 1 level deep!
const captain = Object.assign({}, person, { number: 99, age: 12 });
//we will hopefully soon see the object spread: const captain = {...person};
//not recommended, performance issue
const captain = JSON.parse(JSON.stringify(person));
```
