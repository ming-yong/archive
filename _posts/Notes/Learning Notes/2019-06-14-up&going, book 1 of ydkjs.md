---
title: Book | Up&Going of YDKJS
description: Reading notes about YDKJS book1.
categories: [Notes] 
tags: [Learning Notes]
---

## References

- [YDKJS(You Don't Know JS) by getify](https://github.com/getify/You-Dont-Know-JS)

## Cover topics

- [Chp 1 Into Programming](#chp-1-intro-to-programming)
- [Chp 2 Into JavaScript](#chp-2-into-javascript)
- [Chp 3 Into YDKJS](#chp-3-into-ydkjs)
- [Summary](#summary)

## Chp 1 Into Programming

[Review of this chapter on GitHub](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#review)

### Executing a Program

For different programming language, the translation from your source code to machine code is either done by a **Compiler** or a **Interpreter**. If the code is "interpreted", the translation happens from top to bottom, line by line, every time the program runs, whereas for "compiling", translation is done ahead of time, before program runs.

**JavaScript is a compiled language.**

### Coercion

Coercion is the conversion of variable from type to type.

It can be done **explicitly** or **implicitly**, an example of **explicit coercion** is using the built-in function `Number(...)`. Example for **implicit coercion** will be comparing `number` to `string`, `"4"==4` will be coerced to `4==4`, lacking of this piece of knowledge may lead to confusion in code.

### Variable

Some language emphasize the type for variable, known as **Static typing(a.k.a type enforcement)**, meaning the variable holds specific values(exp `number` and `string`).

JavaScript uses **Weak typing(a.k.a dynamic typing )**, so variable can hold any type of value at any time.

### Scope

**Lexical scope**: variable can be access by code in **that scope** or **any scope outside of it.**

## Chp 2 Into JavaScript

[Review of this chapter on GitHub](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#review)

### Values & Types

ES6 introduces a new variable type `symbol` to JavaScript.

### Objects

`Function` and `array` are both **subtype** of `object`. `Object` uses "key"(or "property") for indexing while array uses numerically index.

### Built in type method

Built in method like `a.toUpperCase()` works because of **"Boxing"**, which an "object wrapper form"(a.k.a "native") defines method on its prototype. `String` is a "native" for `string`.

### Comparing values

Comparison can be divided into two types: **equality** and **inequality**, "not-equal"(!) is not equals to "inequality".

Coercion between non-`boolean` to `boolean` follows a "truthy&falsy" rule, falsy value included:

- `""`(empty string)
- `0`, `-0`, `NaN`
- `null`, `undefined`
- `false`

For **equality** comparison, `==` and `===` both check for value equality but `==` checks with coercion allowed and `===` without(strict equality).

In conclusion, use `===` when either side of it:

- can be `true` or `false`
- is `0`, `""`, `[]`(empty array)

The value of object is held by reference so only reference match will be check. For example, `array` is by default coerced to `string` by joining values with a comma.

There is not "strict **inequality**", two `string` will be compare lexicographically, `string` will be coerced if comparing to `number`.

### Variable, Function scope, Block scope and Hoisting

Naming rule: start with `a-z`, `A-Z`, `$` and `_` and then character and `0-9`.

Variable declared using `var` has **function scope**, using `let` give variable **block scope**.

**Hoisting**: `var` is "moved" to the top.

### Nested scope and Strict Mode

**ReferenceError** occurred when code tries to access variable that is out of scope.

In **strict mode**(`"use strict";`), try to set a "haven't been declared" variable will cause a `ReferenceError` while in "not-**strict mode**" implicit auto-global variable will be declared.

### Conditional

"Conditional operator"(or "ternary operator") is a more concise form of `if...else` statement.

### Function as value and IIFE

"Function expression" can be named or anonymous.

Variable inside a "Immediately Invoked Function Expression"(IIFE) will not affect other code due to its scope.

### Closure and Modules

**Closure** makes accessing variable after the function ran possible.

**Module pattern** is the most common usage of **Closure**, it can "hide" variable from the outside world and public API.

### this identifier

**this** is not a "object-oriented patterns", it points to `object`, which points to how `function` was called.

### Prototype

**Prototype** acts as a "fallback" where JS engine will use `object`'s internal prototype to look for `property` that doesn't exist in the `object`.

A more natural way than "faking/emulating a "class" with "inheritance"" of applying prototype is a pattern called "behavior delegation".

### Old&New

To bring new features into older environment, a pice of code that is equivalent to the feature's behavior is uses, known as **polyfilling**. For new syntax, we **transpiling**("transforming + compiling) the code.

## Chp 3 Into YDKJS

The third and last chapter [Into YDKJS](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch3.md) is a summary on the structure and content of the whole book series.

## Summary

In this book, a lot of terms were introduced briefly, such as "closure", "module", "prototype", etc. The whole book is easy to understand as all of the concept was discussed at a very high level.
