---
title: fcc | Functional Programming
description: Learning notes about functional programming.
category: 2019
tags: functionalProgramming
---

## Reference

- [freeCodeCamp](https://www.freecodecamp.org/)

## Cover topics

- [Functional Programming](#functional-programming)
- [Terms](#terms)
- [Summary](#summary)

---

## Functional Programming

Functional programming is a style of programming which is about:

1. Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change. For example, declare function arguments instead of depends on variable present.

2. Pure functions - the same input always gives the same output.

3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled. For example, use `+1` instead of `++`.

## Terms

1. **Callbacks**: Functions that are passed into another function to decide the invocation of that function. For example, `filter(callback)`.

2. **First Class** Function: Function that can be assigned to a variable, passed into another function, returned from another function. **All functions in JavaScript are first class function**. Similarly, **First Class** Objects means object that can be used like any other object, which can be saved in variables, stored in an object, or passed as an function argument.

3. **Higher Order** Function: Function that take a function as an argument or return a function as return value.

4. **Lambda**: The function that is being passed as argument or being return.

5. **Mutation**: Changing or altering things.

6. **Side Effect**: The outcome of mutation.

7. **Pure Function**: Function that does not cause any side effect

8. **Arity**: The number of arguments a function requires(arity of a function).

9. **Currying**: To convert a function of N arity into a function of 1 arity(currying of a function).

10. **Partial Application**: Applying a few arguments to a function at a time and returning another function that is applied to more arguments.

## Summary

- **Functional programming** is about **isolated function** and **pure function**.
- **pure function** is function with **limited side effect(no mutation)**, same input always gives the same output.
- All function in JavaScript is **first class function**, meaning they can be store in a variable, passed as function argument and returned from a function.

```js
higherOrderFunction(callback(arity)){
  return lambda(arity){
    return result;
  }
}

function partialApplication(x,y){
  return x+y;
}

function currying(x){
  return function currying(y){
    return x+y;
  }
}
```
