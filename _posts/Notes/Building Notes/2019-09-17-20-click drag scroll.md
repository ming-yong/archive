---
title: JS30 | Click, Drag, Scroll
description: I built a click and drag to scroll effect to practice vanillaJS.
categories: [Notes] 
tags: [Building Notes]
layout: js30
tutorial_number: 27
tutorial_name: Click and Drag to Scroll
demo_link: https://ming-yong.github.io/JS30-27-click-drag-scroll/
sourceCode_link: https://github.com/ming-yong/JS30-27-click-drag-scroll
---

## Result

![demonstration of click and drag to scroll effect]({{site.baseurl}}/assets/images/clickDragScroll.gif)

- **User story #1:** I can click and drag the cards to scroll.
- **User story #2:** when my mouse left the page or up, the cards will not be scroll.

## JavaScript

_A short yet very nice to know project._

### Should we scroll

We use `isDown` as a flag to determines whether we should allow scrolling.

```js
const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => {
 isDown = true;
 slider.classList.add("active"); //the pop up effect when clicked
 startX = e.pageX - slider.offsetLeft; //make sure we are clicking the div
 scrollLeft = slider.scrollLeft; //starting point for X when click
});

slider.addEventListener("mouseleave", () => {
 isDown = false;
 slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
 isDown = false;
 slider.classList.remove("active");
});
```

A CSS class `active` will be added if allow:

```css
.items.active {
 background: rgba(255, 255, 255, 0.3);
 cursor: grabbing;
 cursor: -webkit-grabbing;
 transform: scale(1);
}
```

### Scroll

Do the math to calculate how far we should scroll:

When user drags, `slider.scrollLeft = scrollLeft - walk`, where:

- `slider.scrollLeft` is the number of pixels that `slider` is scrolled from its left edge.
- `scrollLeft` is the initial `slider.scrollLeft` value when user clicks.
- `walk` = `x`(the current X coordinate) - `startX`(the initial X coordinate).

```js
slider.addEventListener("mousemove", e => {
 if (!isDown) return; //stop the function from running
 e.preventDefault(); //avoid selecting other element
 const x = e.pageX - slider.offsetLeft; //changing X when drag
 const walk = (x - startX) * 3; //how many X do we move, every pixel moves, scroll the slider three pixels
 slider.scrollLeft = scrollLeft - walk;
});
```
