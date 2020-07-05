---
title: MDN | Manipulating in JavaScript
description: Learning notes about manipulating in JavaScript.
category: 2019
---

## References

- [MDN](https://developer.mozilla.org/en-US/)

## Content

- String and Array: [concat](#concat), [slice](#slice)
- String: [replace](#replace), [trim](#trim), [charAt](#charat), [charCodeAt](#charcodeat), [fromCharCode](#fromcharcode)
- Array: [sort](#sort), [splice](#splice), [push](#push), [pop](#pop), [shift](#shift), [unshift](#unshift)

## String and Array

### concat

- **Used:** Merge two or more strings/arrays.
- **Mutation:** No.
- **Return:** A new string/array.
- **Syntax:**
  - string: `str.concat(string2[, string3, ..., stringN])`
  - array: `var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])`
- **Example:**

```js
//string
var str1 = "Hello";
var str2 = "World";
console.log(str1.concat(" ", str2)); // expected output: "Hello World"
console.log(str2.concat(", ", str1)); // expected output: "World, Hello"
//array
var array1 = ["a", "b", "c"];
var array2 = ["d", "e", "f"];
console.log(array1.concat(array2)); // expected output: Array ["a", "b", "c", "d", "e", "f"]
```

### slice

- **Used:** Extract a section of a(n) string/array.
- **Mutation:** No.
- **Return:** A new string/array.
- **Syntax:**
  - string: `str.slice(beginIndex[, endIndex])`
  - array: `arr.slice([begin[, end]])`
- **Example:**

```js
//string
var str = "The quick brown fox jumps over the lazy dog.";
console.log(str.slice(31)); // expected output: "the lazy dog."
console.log(str.slice(4, 19)); // expected output: "quick brown fox"
console.log(str.slice(-4)); // expected output: "dog."
console.log(str.slice(-9, -5)); // expected output: "lazy"
//array
var animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2)); // expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5)); // expected output: Array ["bison", "camel", "duck", "elephant"]
```

## String

### replace

- **Used:** Replace some or all matches of a pattern in a string.
- **Mutation:** No.
- **Return:** A new string.
- **Syntax:** `var newStr = str.replace(regexp|substr, newSubstr|function)`
- **Example:**

```js
var p = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
var regex = /dog/gi;
console.log(p.replace(regex, "ferret"));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
console.log(p.replace("dog", "monkey"));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
```

### trim

- **Used:** Remove whitespace from both ends of a string.
- **Mutation:** No.
- **Return:** A new string.
- **Syntax:** `str.trim()`
- **Example:**

```js
var greeting = "   Hello world!   ";
console.log(greeting); // expected output: "   Hello world!   ";
console.log(greeting.trim()); // expected output: "Hello world!";
```

### charAt

- **Used:** Find the single UTF-16 code unit located at the specified index of the string.
- **Mutation:** No.
- **Return:** A string representing the character (exactly one UTF-16 code unit).
- **Syntax:** `character = str.charAt(index)`
- **Example:**

```js
var sentence = "The quick brown fox jumps over the lazy dog.";
var index = 4;
console.log("The character at index " + index + " is " + sentence.charAt(index));
// expected output: "The character at index 4 is q"
```

### charCodeAt

- **Used:** Find the UTF-16 code unit at the given index.
- **Mutation:** No.
- **Return:** A number representing the UTF-16 code unit value.
- **Syntax:** `str.charCodeAt(index)`
- **Example:**

```js
var sentence = "The quick brown fox jumps over the lazy dog.";
var index = 4;
console.log(
 "The character code " + sentence.charCodeAt(index) + " is equal to " + sentence.charAt(index)
);
// expected output: "The character code 113 is equal to q"
```

### fromCharCode

- **Used:** Create string from the specified sequence of UTF-16 code units.
- **Mutation:** No.
- **Return:** A string of length N consisting of the N specified UTF-16 code units.
- **Syntax:** `String.fromCharCode(num1[, ...[, numN]])`
- **Example:**

```js
console.log(String.fromCharCode(189, 43, 190, 61));
// expected output: "½+¾="
```

## Array

### sort

- **Used:** Sort the elements of an array.
- **Mutation:** Yes.
- **Return:** The sorted array.
- **Syntax:** `arr.sort([compareFunction])`
- **Example:**

```js
var months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months); // expected output: Array ["Dec", "Feb", "Jan", "March"]

var array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // expected output: Array [1, 100000, 21, 30, 4]
```

### splice

- **Used:** Change the contents of an array.
- **Mutation:** Yes.
- **Return:** An array containing the deleted elements.
- **Syntax:** `var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`
- **Example:**

```js
var months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // inserts at index 1
console.log(months); // expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']
months.splice(4, 1, "May"); // replaces 1 element at index 4
console.log(months); // expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
```

### push

- **Used:** Add one or more elements to the end of an array and returns the new length of the array.
- **Mutation:** Yes.
- **Return:** The new length property of the object upon which the method was called.
- **Syntax:** `arr.push(element1[, ...[, elementN]])`
- **Example:**

```js
var animals = ["pigs", "goats", "sheep"];
console.log(animals.push("cows")); // expected output: 4
console.log(animals); // expected output: Array ["pigs", "goats", "sheep", "cows"]
animals.push("chickens");
console.log(animals); // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]
```

### pop

- **Used:** Remove the last element from an array and returns that element. This method changes the length of the array.
- **Mutation:** Yes.
- **Return:** The removed element.
- **Syntax:** `arr.pop()`
- **Example:**

```js
var plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop()); // expected output: "tomato"
console.log(plants); // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants); // expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

### shift

- **Used:** Remove the first element from an array and returns that removed element. This method changes the length of the array.
- **Mutation:** Yes.
- **Return:** The removed element from the array; undefined if the array is empty.
- **Syntax:** `arr.shift()`
- **Example:**

```js
var array1 = [1, 2, 3];
var firstElement = array1.shift();
console.log(array1); // expected output: Array [2, 3]
console.log(firstElement); // expected output: 1
```

### unshift

- **Used:** Add one or more elements to the beginning of an array and returns the new length of the array.
- **Mutation:** Yes.
- **Return:** The new length property of the object upon which the method was called.
- **Syntax:** `arr.unshift(element1[, ...[, elementN]])`
- **Example:**

```js
var array1 = [1, 2, 3];
console.log(array1.unshift(4, 5)); // expected output: 5
console.log(array1); // expected output: Array [4, 5, 1, 2, 3]
```
