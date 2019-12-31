---
title: JS30 | Event Capture, Propagation, Bubbling and Once
description: Learning notes about Event Capture, Propagation, Bubbling and Once.
categories: [Notes] 
tags: [Learning Notes]
---

## Reference

- [JavaScript 30 by Wes Bos](https://javascript30.com/)

### Bubbling, Capture and Propagation

When we listen for a `click` event on every `div` and `console.log(this.classList.value)`.

```html
<div class="one">
 <div class="two">
  <div class="three"></div>
 </div>
</div>
```

Clicking on `div` with class `three` will console out "three", "two" and "one" because when we click on `three`, we also click on the `two` that wraps around it, so on and so forth, it will keep zooming out.

When user clicks, browser starts "capture" the element that user clicks from outermost layer going down, and then function "bubbles" from element to outermost.

```js
divs.forEach(div =>
 div.addEventListener("click", logText, {
  capture: true //default is false
 })
);
```

If we add a `capture:true`, the function will run on the way down instead of bubbling up. For example it will be "one", "two", "three" when we click on "one".

```js
function logText(e) {
 console.log(this.classList.value);
 e.stopPropagation(); // stop bubbling!
}
```

We can use `propagation` to stop bubbling. So when we click `one`, we get console "one".

### Once

```js
divs.forEach(div =>
 div.addEventListener("click", logText, {
  capture: false,
  once: true
 })
);
```

`Once: true` unbinds the event after it ran once, it is the equivalent to removing the event.
