---
title: MDN | Converting in JavaScript
description: Learning notes about converting in JavaScript.
categories: [Notes] 
tags: [Learning Notes]
---

## References

- [MDN](https://developer.mozilla.org/en-US/)

## Content

- String to Array: [split](#split), [Array.from](#arrayfrom)
- Array to String: [join](#join)

## String to Array

### split

- **Used:** Split a String object.
- **Mutation:** No.
- **Return:** An array of strings.
- **Syntax:** `str.split([separator[, limit]])`
- **Example:**

```js
var str = "The quick brown fox jumps over the lazy dog.";
var words = str.split(" ");
console.log(words[3]); // expected output: "fox"
var chars = str.split("");
console.log(chars[8]); // expected output: "k"
var strCopy = str.split();
console.log(strCopy); // expected output: Array ["The quick brown fox jumps over the lazy dog."]
```

### Array.from

- **Used:** Create a new, shallow-copied Array instance from an array-like or iterable object.
- **Mutation:** No.
- **Return:** A new Array instance.
- **Syntax:** `Array.from(arrayLike[, mapFn[, thisArg]])`
- **Example:**

```js
console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

## Array to String

### join

- **Used:** Join arrays.
- **Mutation:** No.
- **Return:** A new string.
- **Syntax:** `arr.join([separator])`
- **Example:**

```js
var elements = ["Fire", "Air", "Water"];
console.log(elements.join()); // expected output: "Fire,Air,Water"
console.log(elements.join("")); // expected output: "FireAirWater"
console.log(elements.join("-")); // expected output: "Fire-Air-Water"
```
