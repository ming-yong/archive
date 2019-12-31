---
title: Evolution of my All-In-One website
description: My Jekyll website in its different versions with different problems.
categories: [Blog] 
tags: [Blog&Blogging]
---

After feeling comfortable with HTML and CSS, I decided to build a blog using Jekyll and Github Pages because it's ~~free!~~ more complicated than a simple webpage on Codepen yet easier than building an interactive ecommerce site.

- [Learn the basic of Jekyll](https://jekyllrb.com/docs/step-by-step/01-setup/)


## Ugly version 1

![blog in version 1]({{site.baseurl}}/assets/images/blogV1Page.gif)

Since I have never use Jekyll before, I started out [learning the basic of Jekyll]() and managed to linked three pages(Home, About, Tag wall) together.

After that, I [archive my posts by years on Home page](http://chris.house/blog/building-a-simple-archive-page-with-jekyll/) and [added tags without plugins for my post and have all tags listed out on Tag Wall page](http://longqian.me/2017/02/09/github-jekyll-tag/), I was so confused that I just copy and paste code to make things work(not realise that I can do it like I did in version 3).

![hamburger menu in version 1]({{site.baseurl}}/assets/images/blogV1Hamburger.gif)

For smaller screen, I [added a hamburger menu](https://www.youtube.com/watch?v=8QKOaTYvYUA) with [animation](https://www.youtube.com/watch?v=hMKQMrkkObc).

### Super proud of myself, until...

The sense of accomplishment faded pretty quickly and I started thinking that **"this blog looks kinda ugly"**, because:

1. **There are too many colours:** Beside the main colours black and white, I have three other colours, one for hover/focus link, one for activated link, one for highlighting email.
2. **Ghost links appears on closed hamburger menu:** I "hide" my hamburger menu using `opacity:0`, which looks just fine until one day I accidentally navigate myself to other page by clicking a link in a post(it is at the same position as the links in hamburger menu). Although I can again "hide" it using a `z-index:-999999` but then anyone who knows how to highlight a page will find out.
3. **It is not responsive on mobile portrait mode:** The content inside the side bar on the left will squeeze together on mobile screen.

## Much better version 2

![second version blog on bigger screen]({{site.baseurl}}/assets/images/blogV2Page.gif)

I change my layout in this version, using only two colours. The blog does look a bit cleaner.

![hamburger menu on second version blog]({{site.baseurl}}/assets/images/blogV2Hamburger.gif)

I changed the hamburger menu, so it closes properly. I added a media query `only screen` for mobile layout.

![second version blog on smaller screen]({{site.baseurl}}/assets/images/blogV2PageSmall.gif)

### Too many notes

As a beginner, I wrote mostly note. Notes are the knowledge fragments that I want to keep but not ready to share.

## Current version 3

![blog in version 3]({{site.baseurl}}/assets/images/blogV3.gif)

For better and cleaner look, I

- added in one more colour.
- added [syntax highlighting](http://sangsoonam.github.io/2019/01/20/syntax-highlighting-in-jekyll.html).
- adjusted spacing between header, paragraph, list and more, so it looks cleaner and consistent.

For better user experience, I

- separated notes with posts.
- sorted posts by category.
- added a counter for tags in SIFT page to show the number of posts in each tag.
- narrowed down content's width so it is easier to read.

For better code, I

- gave `html` a `height` and `width` so that media query `screen` works on mobile and laptop.(removed the `only screen` media query).
- use flexbox layout, remove hard coded footer's height.
- realized that `site.categories` is available for doing what I did for tags.

As for now, I am happy with what I have here. One thing I would like to improve is the typography, it looks kind of weird but I couldn't tell exactly why.
