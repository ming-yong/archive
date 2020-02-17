---
title: (Archive) fcc | Regular Expressions
description: Learning notes about regular expressions.
categories: [archive] 
tags: [archive] 
---

## References

- [freeCodeCamp "Javascript Algorithms And Data Structures Certification"](https://www.freecodecamp.org/)

## Cover topics

- [Methods:Test,Match,Replace](#methods-test-match-replace)
- ["Filter" your match: Flag, Operator](#filter-your-match-flag-operator)
- [Matching possibilities: Wild card, Classes, Set](#matching-possibilities-wild-card-classes-set)
- [Caret symbol (^): Negated character set, Check the start and check the end](#caret-symbol--negated-character-set-check-the-start-and-check-the-end)
- [Optional element: All or none](#optional-element-all-or-none)
- [Patterns occur times: One or more, zero or more](#patterns-occur-times-one-or-more-zero-or-more)
- [Shortest match: Lazy match](#shortest-match-lazy-match)
- [Character class shortcut: Whitespace, Letters, Numbers](#character-class-shortcut-whitespace-letters-numbers)
- [Match quantity: Quantity specifiers](#match-quantity-quantity-specifiers)
- [Multiple patterns: Positive and Negative Lookahead](#multiple-patterns-positive-and-negative-lookahead)
- [Reuse patterns: Capture group](#reuse-patterns-capture-group)
- [Practice](#practice)

---

Regular Expression also known as "regex" or "regexp", it helps programmers match, search, and replace text.

In all the code blocks below, I will be using this variable if no other variable declaration was made. Return result will be comment beside.

```js
let me = "Yong Ming";
```

## Methods: Test, Match, Replace

Three methods to use with regular expression:

1. Test method `.test()`: checks if the text exist and returns a boolean value.
2. Match method `.match()`: returns match word.
3. Replace method `.replace()`: replace the matching pattern.

Notice in Test method regex pattern comes first whereas in Match method string comes first.

```js
let regex = /ng/;

//Test method: Is regex(pattern) exists in me(string)?
/Code/.test("freeCodeCamp"); //true
regex.test(me); //true

//Match method: Do Str has matching Regex?
"freeCodeCamp".match(/Code/); //"Code"
me.match(regex); //"ng"

//Replace method: find Regex in Str and replace it
me.replace(regex, "ee"); //"Yoee Ming"----me is still Yong Ming
```

[back to top](#cover-topics)

## "Filter" your match: Flag, Operator

Two flags are introduced:

1. ignore flag `i`: ignore case/case insensitive.
2. global flag `g`: match all occurrences.

```js
me.match(/n/g); //Returns "n","n"
me.match(/y/i); //Returns "Y"
```

One operator: or `|`

```js
me.match(/y|m/i); //"Y"
me.match(/p|m/i); //"M"
me.match(/m|y/i); //"Y"----returns the first result
me.match(/m|y/gi); //"Y" "M"
```

[back to top](#cover-topics)

## Matching possibilities: Wild card, Classes, Set

1. wild card `.`: multiple possibilities.
2. character classes `[]`: character(s) you want.
3. character set `[-]`: character within a range(for example [a-z], [z-a] will throw a SyntaxError, [a-a] works fine).
4. number set: same as character set.

```js
me.match(/.ng/g); //"ong","ing"
me.match(/[aeiou]/gi); //"o","i"
me.match(/[m-y]/gi); //"Y","o","n","M","n"
me.match(/[0-9]/gi); //null
```

[back to top](#cover-topics)

## Caret symbol (^): Negated character set, Check the start and check the end

If you want the exclude element from your match, use negated character set, a caret symbol `^`

```js
me.match(/[^aeiou]/gi); //"Y","n","g"," ","M","n","g"----it return whitespace too!
me.match(/[^a-z]/gi); //" "----works with character set too
```

Another use of caret symbol is to check if patterns occurs at the beginning of strings:

```js
//aeiou that occurs at the start of a string
me.match(/^[aeiou]/gi); //null----be careful where you place the ^
```

In contrast, use dollar sign `$` to check if patterns occur at the end:

```js
me.match(/g$/gi); //"g"
me.match(/Ming$/gi); //"Ming"
me.match(/$g/gi); //null----will not work
```

[back to top](#cover-topics)

## Optional element: All or none

Check for optional element in string using `?`:

```js
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(american); //true
rainbowRegex.test(british); //true
```

[back to top](#cover-topics)

## Patterns occur times: One or more, zero or more

1. One or more times `+`
2. Zero or more times `*`

```js
let fallFromFloorOne = "Bang! Aaaaaahhhhh";
let fallFromFloorTen = "Aaaaaahhhhh Bang!";
let hi = "hi hi hii";

fallFromFloorOne.match(/a/i); //"a"
fallFromFloorTen.match(/a/i); //"A"

fallFromFloorOne.match(/a/gi); //"a", "A", "a", "a", "a", "a", "a"
fallFromFloorTen.match(/a/gi); //"A", "a", "a", "a", "a", "a", "a"

fallFromFloorOne.match(/a+/i); //"a"
fallFromFloorTen.match(/a+/i); //"Aaaaaa"

fallFromFloorOne.match(/a+/gi); //"a", "Aaaaaa"
fallFromFloorTen.match(/a+/gi); //"Aaaaaa", "a"

fallFromFloorOne.match(/hi*/i); //"h"
fallFromFloorTen.match(/hi*/gi); //"h", "h", "h", "h", "h"
hi.match(/hi*/i); //"hi"
hi.match(/hi*/gi); //"hi", "hi", "hii"
```

[back to top](#cover-topics)

## Shortest match: Lazy match

Regular expression is by default "greedy", meaning it will find the longest possible part of a string that fits the regex pattern and return it as a match.

Lazy match `?` returns ALL the shortest possible match, not ONLY the shortest.

```js
let ship = "titanic";
let smallerShip = "tanic";
let twoShip = "titanic titanic";

ship.match(/t[a-z]*i/); //"titani"
ship.match(/t[a-z]*?i/); //"ti"

smallerShip.match(/t[a-z]*i/); //"tani"
smallerShip.match(/t[a-z]*?i/); //"tani"

twoShip.match(/t[a-z]*i/); //"titani"
twoShip.match(/t[a-z]*?i/); //"ti"
twoShip.match(/t[a-z]*i/g); //"titani", "titani"
//shortest string that starts with a t and ends with a i
twoShip.match(/t[a-z]*?i/g); //"ti", "tani", "ti", "tani"
```

[back to top](#cover-topics)

## Character class shortcut: Whitespace, Letters, Numbers

1. Match whitespace `\s`
2. Match non-whitespace `\S`
3. Match all letters and numbers `\w`: matches [A-Za-z0-9_]
4. Match everything but letters and numbers `\W`
5. Match all numbers `\d`
6. Match all non-numbers `\D`

```js
//whitespace
me.match(/\s/); //" "
me.match(/\S/); //"Y"

// letters and numbers
me.match(/\w/); //"Y"
me.match(/\W/); //" "

//numbers
me.match(/\d/); //" "
me.match(/\D/); //"Y"
```

[back to top](#cover-topics)

## Match quantity: Quantity specifiers

1. Between x to y times `{x,y}`
2. At least x time(s) `{x,}`
3. Exactly x time(s) `{x}`

```js
let whatsUpMan = "Baaaaam";

whatsUpMan.match(/a{2,4}/); //"aaaa"
whatsUpMan.match(/a{2,}/); //"aaaaa"
whatsUpMan.match(/a{,6}/); //null----will not work
whatsUpMan.match(/a{3}/); //"aaa"
whatsUpMan.match(/a{6}/); //null----if exceed
```

[back to top](#cover-topics)

## Multiple patterns: Positive and Negative Lookahead

1. positive lookahead `?=`: make sure pattern is there.
2. negative lookahead `?!`: make sure pattern is not there.

Pattern inside lookahead will not be return with the result.

```js
me.match(/M(?=i)/); //"M"
me.match(/M(?=o)/); //null
me.match(/M(?!i)/); //null
me.match(/M(?!o)/); //"M"
```

[back to top](#cover-topics)

### Reuse patterns: Capture group

Capture group `()` and `\`

```js
let number = "42 42 42";

number.match(/\d+/); //"42"----get us number
number.match(/\d+\s/); //"42 "----get us number with a space

number.match(/(\d+)\s\1/); //"42 42","42"----number space group1(number), group1(number)
number.match(/\d+(\s)\1/); //null----there is no two space
number.match(/\d+(\s)\d+\1/); //"42 42 "," "---- number space number group1(space), group1(space)

number.match(/(\d+)(\s)\1\2/); //"42 42 ","42", " "
//so far seems like it will return the pattern, and the groups.
let myAnswer = /^(\d+)(\s)\1\2\1$/;
let fccAnswer = /^(\d+)\s\1\s\1$/;

number.match(fccAnswer); //"42 42 42","42"
number.match(myAnswer); //"42 42 42","42", " "

// Theoretically, to check if there are only three numbers with space between, both should work
fccAnswer.test(number); //true
myAnswer.test(number); //true

fccAnswer.test("42"); //false
myAnswer.test("42"); //false

fccAnswer.test("42 42 42"); //false
myAnswer.test("42 42 42"); //false

fccAnswer.test("42 42 42 "); //false
myAnswer.test("42 42 42 "); //false
```

[back to top](#cover-topics)

## Practice

Warm up:

1. Get everything except "ng" from `me`.
2. Switch "Yong" and "Ming" position.
3. Remove whitespace at the start and the end of string " Yong Ming ".

### Sign up password

- Requirements:
  - Password has to be at least two characters long.
  - Two character long password can only use alphabet.
  - Password can be uppercase or lowercase.
  - Number have to be at the end of the password.
  - There can be zero or more numbers.

### Log in password

Password is greater than 5 character long and have two consecutive digits

### Answers

- Warm up

  - no "ng": `me.match(/[^ng]/ig);`(Returns "Y", "o", "M", "i").
  - reverse name: `me.replace(/(\w+)\s(\w+)/, '$2 $1');`.
  - remove whitespace: `" Yong Ming ".replace(/^\s+|\s+$/g,"")`.

- Sign up password: `/\D{2,}\d*$/i`

  - Password has to be at least two characters long.(`{2,}`)
  - Two character long password can only use alphabet.(`\D`)
  - Password can be uppercase or lowercase.(`i`)
  - Number have to be at the end of the password.(`\d$`)
  - There can be zero or more numbers.(\*)

- Log in password: `/(?=\w{5,})(?=\D*\d{2})`
