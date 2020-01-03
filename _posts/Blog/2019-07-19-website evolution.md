---
title: Evolution of this website
description: My Jekyll website in its different versions with different problems.
categories: [Blog] 
tags: [Blog&Blogging]
---

*Updated on 30 Dec 2019.*

This website is my first project. I built it when I was at the stage of “quite comfortable with HTML and CSS but have never built something more complicated than a webpage” as a beginner. It changes over time as I develop my learning style. I guess you can say I develop a project that develops me if that makes sense.

In this post, I would like to walk you through the different versions with different problems of each.

## Version 1: Ugly blog

![blog in version 1]({{site.baseurl}}/assets/images/blogV1Page.gif)

Yes, it used to be a blog. I chose to build a blog because it's what I will use, what I can build, and most importantly, it's free.

![hamburger menu in version 1]({{site.baseurl}}/assets/images/blogV1Hamburger.gif)

I had three main pages: Home, About, and Tag wall. Every post is listed on the “Home” page, every post has multiple tags that link to a “Tag” page, and every tag is listed at the “Tag wall” page. I also added an animated hamburger menu for a smaller screen.

It was so so painful to put it together and I couldn't express how proud I was when it's alive. Though, it didn't take me long to start judging how ugly it looks:

1. There are too many colours, a total of five to be precise.
2. Ghost links appear on a closed hamburger menu. I "hide" my hamburger menu using `opacity:0`, which looks just fine until one day I accidentally navigate myself to another page by clicking a link in a post(it's the same position as the links in the hamburger menu). Well, I can again "hide" it using a `z-index:-999999` but then anyone who knows how to highlight a page will find out.
3. It is not responsive on mobile portrait mode. The content of the left-sided bar squeezed together on a mobile screen.

## Version 2: Major layout change

![second version blog on bigger screen]({{site.baseurl}}/assets/images/blogV2Page.gif)

Major layout change and only two colours were used. The blog looks cleaner in this version.

![hamburger menu on second version blog]({{site.baseurl}}/assets/images/blogV2Hamburger.gif)

The hamburger menu closes properly. I added a media query `only screen` for mobile layout.

![second version blog on smaller screen]({{site.baseurl}}/assets/images/blogV2PageSmall.gif)

I soon discover that I wrote too many notes and to be honest, I'm the only reader for my notes.

## Version 3: Separate my notes with the posts

![blog in version 3]({{site.baseurl}}/assets/images/blogV3.gif)

In version 3, I separated my notes with the posts, sorted posts by category, added a counter for every tag in the "SIFT" page, and narrowed the content's width. For the "aesthetic" part, I added one more colour, added syntax highlighting, adjusted the typography(for example the space between `h2` and `p`). Code wise, I gave the `html` a height and width property and remove the `only screen` media query.

## Version 4: An All-in-one website

What you see now is the latest version of my website. I adjusted the typography, tags system, and refactor the code.

It is a blog, a portfolio and a place for storing my notes. The idea is to show both the developer and the human part of me in the right order using minimum clicks.
