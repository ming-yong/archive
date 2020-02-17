---
title: (Archive) MDN | Looping in JavaScript
description: Learning notes about looping in JavaScript.
categories: [archive] 
tags: [archive] 
---

## References

- [MDN](https://developer.mozilla.org/en-US/)

## Content

- Other: [for...in](#forin), [for...of](#forof)
- Object: [Objecet.entries](#objectentries), [Objecet.keys](#objectkeys), [Objecet.values](#objectvalues)
- Array: [map](#map), [forEach](#foreach), [reduce](#reduce)

## Other

### for...in

The `for...in` loop below iterates over all of the object's enumerable, non-Symbol properties and logs a string of the property names and their values. `for...in` should not be used to iterate over an Array where the index order is important.

```js
var obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
 console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

### for...of

The `for...of` statement creates a loop iterating over iterable objects, including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

```js
function* foo() {
 yield 1;
 yield 2;
}
for (let o of foo()) {
 console.log(o);
 // expected output: 1
 break; // closes iterator, triggers return
}

//array
let iterable = [10, 20, 30];

for (let value of iterable) {
 value += 1;
 console.log(value);
}
// 11
// 21
// 31

//string
let iterable = "boo";

for (let value of iterable) {
 console.log(value);
}
// "b"
// "o"
// "o"
```

## Object

### Object.entries

- **Return:** An array of the given object's own enumerable string-keyed property [key, value] pairs.
- **Syntax:** `Object.entries(obj)`
- **Example:**

```js
const object1 = {
 a: "somestring",
 b: 42
};
for (let [key, value] of Object.entries(object1)) {
 console.log(`${key}: ${value}`);
}
// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed
```

### Object.keys

- **Return:** An array of strings that represent all the enumerable properties of the given object.
- **Syntax:** `Object.keys(obj)`
- **Example:**

```js
const object1 = {
 a: "somestring",
 b: 42,
 c: false
};
console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
```

### Object.values

- **Return:** An array containing the given object's own enumerable property values.
- **Syntax:** `Object.values(obj)s`
- **Example:**

```js
const object1 = {
 a: "somestring",
 b: 42,
 c: false
};
console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
```

## Array

### map

- **Used:** Call a provided function on every element in the calling array.
- **Mutation:** No.
- **Return:** A new array.
- **Syntax:**

```js
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
```

- **Example:**

```js
var array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

### forEach

- **Used:** Execute a provided function once for each array element.
- **Mutation:** No.
- **Return:** `undefined`
- **Syntax:** `arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);`
- **Example:**

```js
var array1 = ["a", "b", "c"];
array1.forEach(function(element) {
 console.log(element);
});
// expected output: "a"
// expected output: "b"
// expected output: "c"
```

### reduce

- **Used:** Execute a reducer function (that you provide) on each element of the array.
- **Mutation:** No.
- **Return:** The single value that results from the reduction.
- **Syntax:** `arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])`
- **Example:**

```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer)); // expected output: 10
// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5)); // expected output: 15
```
