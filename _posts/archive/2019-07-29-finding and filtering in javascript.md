---
title: (Archive) MDN | Finding and Filtering in JavaScript
description: Learning notes about finding and filtering in JavaScript.
categories: [archive] 
tags: [archive] 
---

## References

- [MDN](https://developer.mozilla.org/en-US/)

## Content

- Other: [Math.max](#mathmax), [Math.min](#mathmin)
- String and Array: [indexOf](#indexof), [lastIndexOf](#lastindexof)
- String: [search](#search), [match](#match)
- Array: [findIndex](#findindex), [find](#find), [filter](#filter)

## Other

### Math.max

- **Used:** Find the largest of zero or more numbers.
- **Mutation:** No.
- **Return:** The largest of the given numbers.
- **Syntax:** `Math.max([value1[, value2[, ...]]])`
- **Example:**

```js
console.log(Math.max(1, 3, 2)); // expected output: 3
console.log(Math.max(-1, -3, -2)); // expected output: -1
var array1 = [1, 3, 2];
console.log(Math.max(...array1)); // expected output: 3
```

### Math.min

- **Used:** Find the smallest of zero or more numbers.
- **Mutation:** No.
- **Return:** The smallest of the given numbers.
- **Syntax:** `Math.min([value1[, value2[, ...]]])`
- **Example:**

```js
console.log(Math.min(2, 3, 1)); // expected output: 1
console.log(Math.min(-2, -3, -1)); // expected output: -3
var array1 = [2, 3, 1];
console.log(Math.min(...array1)); // expected output: 1
```

## String and Array

### indexOf

- **Used:** Find the index within the calling String object/array of the first occurrence of the specified value/given element.
- **Mutation:** No.
- **Return:** The first index of the element in the string/array.
- **Syntax:**
  - string: `str.indexOf(searchValue)` or `str.indexOf(searchValue, fromIndex)`
  - array: `arr.indexOf(searchElement[, fromIndex])`
- **Example:**

```js
//string
var paragraph =
 "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
var searchTerm = "dog";
var indexOfFirst = paragraph.indexOf(searchTerm);
console.log('The index of the first "' + searchTerm + '" from the beginning is ' + indexOfFirst);
// expected output: "The index of the first "dog" from the beginning is 40"
console.log(
 'The index of the 2nd "' + searchTerm + '" is ' + paragraph.indexOf(searchTerm, indexOfFirst + 1)
);
// expected output: "The index of the 2nd "dog" is 52"
//array
var beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison")); // expected output: 1
// start from index 2
console.log(beasts.indexOf("bison", 2)); // expected output: 4
console.log(beasts.indexOf("giraffe")); // expected output: -1
```

### lastIndexOf

- **Used:** Find the index within the calling String object/array of the last occurrence of the specified value.
- **Mutation:** No.
- **Return:** The last index of the element in the array.
- **Syntax:**
  - string: `str.lastIndexOf(searchValue[, fromIndex])`
  - array: `arr.lastIndexOf(searchElement[, fromIndex])`
- **Example:**

```js
//string
var paragraph =
 "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
var searchTerm = "dog";
console.log(
 'The index of the first "' + searchTerm + '" from the end is ' + paragraph.lastIndexOf(searchTerm)
);
// expected output: "The index of the first "dog" from the end is 52"
//array
var animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals.lastIndexOf("Dodo"));
// expected output: 3
console.log(animals.lastIndexOf("Tiger"));
// expected output: 1
```

## String

### search

- **Used:** Execute a search for a match between a regular expression and this String object.
- **Mutation:** No.
- **Return:** The index of the first match between the regular expression and the given string.
- **Syntax:** `str.search(regexp)`
- **Example:**

```js
var paragraph =
 "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
// any character that is not a word character or whitespace
var regex = /[^\w\s]/g;
console.log(paragraph.search(regex)); // expected output: 43
console.log(paragraph[paragraph.search(regex)]); // expected output: "."
```

### match

- **Used:** Retrieve the result of matching a string against a regular expression.
- **Mutation:** No.
- **Return:** An array.
- **Syntax:** `str.match(regexp)`
- **Example:**

```js
var paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
var regex = /[A-Z]/g;
var found = paragraph.match(regex);
console.log(found); // expected output: Array ["T", "I"]
```

## Array

### findIndex

- **Used:** Find the index of the first element in the array that satisfies the provided testing function.
- **Mutation:** No.
- **Return:** The index of the first element in the array that passes the test.
- **Syntax:** `arr.findIndex(callback(element[, index[, array]])[, thisArg])`
- **Example:**

```js
var array1 = [5, 12, 8, 130, 44];
function isLargeNumber(element) {
 return element > 13;
}
console.log(array1.findIndex(isLargeNumber)); // expected output: 3
```

### find

- **Used:** Find the value of the first element in the array that satisfies the provided testing function.
- **Mutation:** No.
- **Return:** The value of the first element in the array that satisfies the provided testing function.
- **Syntax:** `arr.find(callback(element[, index[, array]])[, thisArg])`
- **Example:**

```js
var array1 = [5, 12, 8, 130, 44];
var found = array1.find(function(element) {
 return element > 10;
});
console.log(found);
// expected output: 12
```

### filter

- **Used:** Filter an array.
- **Mutation:** No.
- **Return:** A new array with the elements that pass the test.
- **Syntax:** `var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])`
- **Example:**

```js
var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const result = words.filter(word => word.length > 6);
console.log(result); // expected output: Array ["exuberant", "destruction", "present"]
```
