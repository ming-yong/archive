---
title: MDN | Rest operator and Spread operator
description: Learning notes about rest operator and spread operator.
categories: [Notes] 
tags: [Learning Notes]
---

## References

- [MDN](https://developer.mozilla.org/en-US/)

## Summary

Rest syntax looks exactly like spread syntax but is used for destructuring arrays and objects. In a way, rest syntax is the opposite of spread syntax: spread 'expands' an array into its elements, while rest collects multiple elements and 'condenses' them into a single element.

## Rest operator

The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

- **Example:**

```js
function sum(...theArgs) {
	return theArgs.reduce((previous, current) => {
		return previous + current;
	});
}
console.log(sum(1, 2, 3)); // expected output: 6
console.log(sum(1, 2, 3, 4)); // expected output: 10
```

## Spread operator

- **Syntax:**
  - For function calls: `myFunction(...iterableObj);`
  - For array literals or strings: `[...iterableObj, '4', 'five', 6];`
  - For object literals (new in ECMAScript 2018): `let objClone = { ...obj };`
- **Example:**

```js
function sum(x, y, z) {
	return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // expected output: 6
console.log(sum.apply(null, numbers)); // expected output: 6
```
