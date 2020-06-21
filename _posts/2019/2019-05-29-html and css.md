---
title: fcc | HTML and CSS
description: Learning notes about HTML and CSS.
category: 2019
tags: HTML CSS 
---

## References

- [freeCodeCamp "Responsive Web Design Certification"](https://www.freecodecamp.org/)

## Cover topics

- [Applied Visual Design](#applied-visual-design)
- [Applied Accessibility](#applied-accessibility)
- [Responsive Web Design Principles](#responsive-web-design-principles)
- [CSS Flexbox](#css-flexbox)
- [CSS Grid](#css-grid)

### Applied Visual Design

CSS:

```css
/*box-shadow*/
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
/*offset-x(how far to push the shadow horizontally from the element)*/
/*offset-y(how far to push the shadow vertically from the element)*/
/*blur-radius(optional), spread radius (optional), color value*/

/*text transform property*/
text-transform: lowercase;
/*uppercase, capitalize, initial(default), inherit, none*/

/*line-height*/
line-height:25px;

/*relative position and offset*/
p{
  position:relative;
  bottom:10px;
}

/*HSL*/
Hue(color spectrum) Saturation(grey amount) Lightness(0-360, 100%, 100%);/*adjust color tone*/

/*linear gradient*/
background: linear-gradient(gradient_direction, color1, color2, color3, ...);
background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));
/*striped*/
background: repeating linear-gradient(
  90deg,
  yellow 0px,
  blue 40px,
  green 40px,
  red 80px
);

/*size and skew*/
  transform: scale(2);
  transform: skewX(-32deg);
  transform: skewY(-32deg);

/*animation*/
#anim {
  animation-name: colorful;
  animation-duration: 3s;
  animation-fill-mode:forwards;
  animation-iteration-count:infinite;
  animation-timing-function:linear;/*ease-out*/
  animation-timing-function: cubic-bezier(0.311, 0.441, 0.444, 1.649);/*x1,y1,x2,y2*/
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}

@keyframes bounce{

  0% {

    top: 0px;

  }

  50% {

    top: 249px;

    width: 130px;

    height: 70px;

  }

  100% {

    top: 0px;

  }

}
```

[back to top](#cover-topics)

### Applied Accessibility

HTML:

```html
<--text alternative-->
alt="description"
<!--when image is already being described by caption, alt should be left blank-->

<!--use h1-6 to show hierarchical relationships of content-->

<!--landmark(semantic)-->
<main>
<header>
<footer>
<nav>
<article><!--group independent, self-contained content-->
<section><!--group related content-->

<!--improve accessibility of audio content-->
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg" />
  <source src="audio/meow.ogg" type="audio/ogg" />
</audio>

<!--improve chart accessibility-->
<figure>
  <img src="roundhouseDestruction.jpeg" alt="photo of camper cat executing a roundhouse kick">
  <br>
  <figcaption>
    Master camper cat demonstrates proper form of a roundhouse kick.
  </figcaption>
</figure>

<!--form accessibility-->
<form>
  <!--label-->
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <!--radio button-->
  <fieldset>
    <legend>Choose one of these three items:</legend>
    <input id="one" type="radio" name="items" value="one">
    <label for="one">Choice One</label><br>
    <input id="two" type="radio" name="items" value="two">
    <label for="two">Choice Two</label><br>
    <input id="three" type="radio" name="items" value="three">
    <label for="three">Choice Three</label>
  </fieldset>
</form>

<!--accessible date picker-->
<label for="input1>Enter a date:</label>
<input type="date" id="input1" name="input1">

<!--standardize times-->
<time datetime="2019-04-02">Tuesday</time>
```

CSS:

```css
/*make element only visible for screen reader*/
.sr-only{
  position:absolute;
  left: -10000px;
  width:1px;
  height:1px;
  top:auto;
  overflow:hidden;
}
/*display: none; or visibility:hidden; hides content for everyone, including screen reader users*/
/*zero values for pixel sizes, such as width:0px; and height:0px;*/
/*removes the element from the flow of your document,*/
/*meaning screen reader will ignore it*/

/*high contrast text*/

/*avoid colorblindness*/

/*uses descriptive link text to gives links meaning*/

/*makes links navigable with accesskey*/
<button accesskey="b">important button</button>

/*use tabindex to add keyboard focus to an element*/
<div tabindex="0">I need keyboard focus !!</div>
/* 1 will be first, default 0 will be last*/
```

[back to top](#cover-topics)

### Responsive Web Design Principles

CSS:

```css
/*media query*/

/*responsive image*/
img {
 max-width: 100%;
 display: block;
 height: auto;
}

/*higher resolution image display*/
/*set the height and width to 50% of its original values*/

/*responsive typography (viewport units)*/
-width: 10vw; //10% of the viewpoint's width
-height: 3vh; //3% of the viewpoint's height
-height: 70vmin; //70% of the viewport's smaller dimension(height vs width)
-width: 100vmax;
```

[back to top](#cover-topics)

### CSS Flexbox

```css
/*to start:*/
display: flex;

/*reverse row:*/
flex-direction: row-reverse;

/*reating rows and columns:*/
flex-direction: row;
flex-direction: column;

/*align elements:*/
justify-content: center; /*flex-start,flex-end,space-between,space-around*/
align-items: center; /*flex-start,flex-end,stretch,baseline*/

/*wrapping*/
flex-wrap: wrap; /*no-wrap(default),wrap-reverse*/

/*shrink/expands items and initial size*/
flex-shrink: 1; /*the higher the number is, the more it shrinks*/
flex-grow: 2;
flex-basis: 10em; /*auto*/
flex: 2 2 150px; /*1*/
flex: 1 1 150px; /*2*/
/*grow shrink basis, when container is >300px, 1 will expand at twice at the rate of 2, vice versa*/

/*rearrange elements*/
order: 1; /*the number of its sequence*/

/*adjust items individually*/
align-self: center; /*accept same values as align-items and will override it*/
```

[back to top](#cover-topics)

### CSS Grid

```css
/*to start:*/
display:grid;

/*adding columns and rows:*/
grid-template-columns: 100px 100px 100px;/*3 100px columns*/
grid-template-rows: 50px 50px;
grid-template-columns:auto 50px 10% 2fr 1fr;/*as wide as the content, 50 px, 10% of the grid, 2/3 and 1/3 wide*/

/*adding gaps:*/
grid-column-gap:10px;
grid-row-gap:5px;
grid-gap:10px 20px;/*one value allpies to both, two applies to row then column*/

/*controlling spacing:*/
grid-column:1/3; item took space from first to third vertical line, consuming two columns
grid-row:2/4;

/*aligning items:*/
justify-self:center;/*horizontally,start,end,center*/
align-self:end;
align-items:center;/*align all vertically*/
justify-items:start;/*applies to both*/

/*grouping cells into area*/
grid-template-areas:
  "header header header"
  "content content"/*two cells into content and one designated as empty cell*/
  "footer footer footer"
grid-area:footer;/*placing items in grid areas*/
grid-area:3/1/4/4;/*horizontal/vertical line to start at and horizontal/vertical line to end at*/

/*repeat function*/
grid-template-rows:repeat(100,50px);/*100 50px rows*/
grid-template-columns:repeat(2,1fr 50px) 20px;/*1fr 50px 1fr 50px 20px*/

/*minmax function*/
grid-template-columns:100px minmax(50px, 200px);/*100px column and a column wide min50px max200px*/
repeat(auto-fill,minmax(60px 1fr));/*moves your items when resizing, insert 60px blank cells*/
                                  /*if container is too big*/
repeat(auto-fit,minmax(60px,1fr));/*stretches each cells to fit the whole container*/

/*responsive layout on different viewpoint*/
@media(min-width: 300px){}
@media(max-width: 400px){}

/*creating grids within grids*/
display: grid; and grid-template-columns: auto 1fr;/*inside one of the items*/
```

[back to top](#cover-topics)
