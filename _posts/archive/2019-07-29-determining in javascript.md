---
title: (Archive) MDN | Determining in JavaScript
description: Learning notes about determining in JavaScript.
categories: [archive] 
tags: [archive] 
---

## References

- [MDN](https://developer.mozilla.org/en-US/)

## Content

- Object: [hasOwnProperty](#hasownproperty)
- String and Array: [includes](#includes)
- String: [endsWith](#endswith), [startsWith](#startswith)
- Array: [every](#every), [some](#some)

## Object

### hasOwnProperty

- **Used:** Indicating whether the object has the specified property as its own property (as opposed to inheriting it).
- **Mutation:** No.
- **Return:** Boolean.
- **Syntax:** `obj.hasOwnProperty(prop)`
- **Example:**

```js
const object1 = new Object();
object1.property1 = 42;
console.log(object1.hasOwnProperty("property1")); // expected output: true
console.log(object1.hasOwnProperty("toString")); // expected output: false
console.log(object1.hasOwnProperty("hasOwnProperty")); // expected output: false
```

## String and Array

### includes

- **Used:** Determine whether one string/a certain value may be found within another string/ an array.
- **Mutation:** No.
- **Return:** Boolean.
- **Syntax:**
  - string: `str.includes(searchString, [position])`
  - array: `arr.includes(valueToFind, [fromIndex])`
- **Example:**

```js
//string
var sentence = "The quick brown fox jumps over the lazy dog.";
var word = "fox";
console.log(`The word "${word}" ${sentence.includes(word) ? "is" : "is not"} in the sentence`);
// expected output: "The word "fox" is in the sentence"
//array
var array1 = [1, 2, 3];
console.log(array1.includes(2)); // expected output: true
var pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat")); // expected output: true
console.log(pets.includes("at")); // expected output: false
```

## String

### endsWith

- **Used:** Determine whether a string ends with the characters of a specified string.
- **Mutation:** No.
- **Return:** Boolean.
- **Syntax:** `str.endsWith(searchString[, length])`
- **Example:**

```js
const str1 = "Cats are the best!";
console.log(str1.endsWith("best", 17)); // expected output: true
const str2 = "Is this a question";
console.log(str2.endsWith("?")); // expected output: false
```

### startsWith

- **Used:** Determine whether a string begins with the characters of a specified string.
- **Mutation:** No.
- **Return:** Boolean.
- **Syntax:** `str.startsWith(searchString[, position])`
- **Example:**

```js
const str1 = "Saturday night plans";
console.log(str1.startsWith("Sat")); // expected output: true
console.log(str1.startsWith("Sat", 3)); // expected output: false
```

## Array

### every

- **Used:** Test whether all elements in the array pass the test implemented by the provided function.
- **Mutation:** No.
- **Return:** Boolean.
- **Syntax:** `arr.every(callback(element[, index[, array]])[, thisArg])`
- **Example:**

```js
function isBelowThreshold(currentValue) {
 return currentValue < 40;
}
var array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); // expected output: true
```

### some

- **Used:** Test whether at least one element in the array passes the test implemented by the provided function.
- **Mutation:** No.
- **Return:** Boolean.
- **Syntax:** `arr.some(callback(element[, index[, array]])[, thisArg])`
- **Example:**

```js
var array = [1, 2, 3, 4, 5];
var even = function(element) {
 // checks whether an element is even
 return element % 2 === 0;
};
console.log(array.some(even)); // expected output: true
```
