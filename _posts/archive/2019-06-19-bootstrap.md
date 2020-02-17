---
title: (Archive) fcc | Bootstrap
description: Learning notes about Bootstrap.
categories: [archive] 
tags: [archive] 
---

## References

- [freeCodeCamp "Front End Libraries Certification"](https://www.freecodecamp.org/).

Bootstrap is a front-end framework used to design responsive web pages and web applications. It takes a mobile-first approach to web development. Bootstrap includes pre-built CSS styles and classes, plus some JavaScript functionality. Bootstrap uses a responsive 12 column grid layout and has design templates for: buttons, images, tables, forms navigation.

## Cover topics

- To Start
- Basic

## To Start

```html
//link to add bootstrap
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>

//link to add font awesome
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" integrity="sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+" crossorigin="anonymous">
```

## Basic

```html
//to start, nested elements in
<div class="container-fluid"></div>

//responsive image, add class img-responsive
<img src="#" alt="#" class="img=responsive">

//align text, add class text-center
<h1 class="text-center">H1</h1>

//text
<h1 class="text-primary">H1</h1>
<p>Top 3 things cats <span class="text-danger">hate:</span></p>

//button
<button class="btn btn-default">Like</button>//btn-primary, btn-info, btn-danger
<button class="btn btn-default btn-block">Submit</button>

//12 column grid system, class col-md-*, col-xs-*
<div class="row">
  <div class="col-xs-4">
    <button class="btn btn-block btn-primary">Like</button>
  </div>
  <div class="col-xs-4">
    <button class="btn btn-block btn-info">Info</button>
  </div>
  <div class="col-xs-4">
    <button class="btn btn-block btn-danger">Delete</button>
  </div>
</div>

//form-control
<input type="text" class="form-control" placeholder="cat photo URL" required>

//Font Awesome
/*is a convenient library of icons. These icons are vector graphics, stored in the .svg file format.*/
<i class="fa fa-info-circle"></i>

//well, querySelector target
<!--Only change code above this line.-->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

[back to top](#cover-topics)
