---
title: The evolution of this website
description: My Jekyll website in its different versions with different problems.
categories: [Blog] 
tags: [Blog&Blogging]
---

*Updated on 30 Dec 2019.*

Hello, world. I figure my first blog post should be about my first project, which happens to be this website, so here we go.

### How it happens

I was feeling quite comfortable with HTML and CSS and wanted to build something more complicated than a webpage on Codepen. Ideally fitting these three criteria:

1. What I will keep using.
2. What I can build without learning too many new things.
3. Free to build and free to keep.

Eventually, I decided to build a blog using Jekyll and Github Pages. I read that a developer should know how to write. As a terrible writer myself,  I think now is the best time to start practicing.

With a lot of struggle, my blog went live in May 2019. It wasn't perfect at all, in fact it was very ugly. I try my best to not abandon my ugly newborn and quit programming forever, and luckily, we both grow along the way. I guess I developed a project that develops me if that makes sense.

## Version 1

![blog in version 1]({{site.baseurl}}/assets/images/blogV1Page.gif)

The first version is an ugly looking blog. I had three main pages: "Home", "About", and "Tag wall", plus one page for every tag. Every post is listed on the “Home” page, every post has multiple tags that link to a “Tag” page, and every tag is listed at the “Tag wall” page. I even added a fancy animated hamburger menu for a smaller screen.

![hamburger menu in version 1]({{site.baseurl}}/assets/images/blogV1Hamburger.gif)

I was so so proud of myself when it's alive. Though, it didn't take me long to start judging how ugly it looks:

1. There are too many colours, a total of five to be precise.
2. Ghost links appear on a closed hamburger menu. I "hide" my hamburger menu using `opacity:0`, which looks just fine until one day I accidentally navigate myself to the "ABOUT" page when trying to click a link in a post. Well, I can again "hide" it using a `z-index:-999999` but then anyone who knows how to highlight a page will find out.
3. It is not responsive on mobile portrait mode. The content of the left-sided bar squeezed together on a mobile screen.

## Version 2

![second version blog on bigger screen]({{site.baseurl}}/assets/images/blogV2Page.gif)

HiYa! I gave it a makeover. Only two colours were used. Maybe I went a little bit too far but the blog looks cleaner now.

![hamburger menu on second version blog]({{site.baseurl}}/assets/images/blogV2Hamburger.gif)

The hamburger menu closes properly. I added a media query `only screen` for mobile layout.

![second version blog on smaller screen]({{site.baseurl}}/assets/images/blogV2PageSmall.gif)

I thought that would be it. HOWEVER, I soon noticed that I wrote too many notes. Nobody wants to read someone's notes, and they aren't meant to be read by people except me either.

## Version 3

![blog in version 3]({{site.baseurl}}/assets/images/blogV3.gif)

I want to keep my notes on the internet so I separated it with the blog posts. I added the categories tag(with a counter on the "SIFT" page), added one more colour, sorted the posts by category on the "Home" page; My code blocks now support syntax highlighting. 

I tried to improve the typography but it didn't work out. I gave the `html` a height and width property and remove the `only screen` media query. I found I read quicker with narrow content so I did that as well.

## Version 4 === what you see now

HiYa! Another makeover, it not just a blog anymore.

### Why

I was putting together a portfolio and thinking about what would best present myself, not only as a developer but also as a human who talks and learns, to whoever reads it.

Who is my reader?

Right, if I throw my portfolio on the internet, anyone can read it. I spent some time in the shower and came out with the logic below:

**Potential reader:**

- Someone who wants to hire me.
- Someone who is also learning computer programming.
- Me who wants to copy and paste my notes.

**How hiring person use this website:**

-->Landed on home page

Okay, a little bit about this person.(Go to LinkedIn/Github and never comeback).

-->Go to the BLOG page

This person can talk(checked).

-->Go to the PROJECTS page

This person can build(checked).

-->Go to the NOTES page

This person can learn(checked).

**How coding person use this website:**

For other developers, it's pretty straight forward: what I wrote, what I built and what I learned.

One thing I would like to show the past version me is that the importance, as for providing value to others, might be **blog**(I can share my knowledge)**>projects**(I can build things)**>notes**(I'm doing tutorials) but the amount of time you spent is always **notes>projects>blog**.

So, keep learning, everything takes time.

### Other changes

I'm much happier with the typography now. I change the way I use tags and categories so I'm not adding any tag just because I wanted to. I was learning BEM methodology for CSS around this update so I used what I know to the max in this version. The code is much cleaner now.

This is the best solution I got for balancing between time, clicks and content. I'm 100% sure I have everything I want to tell you where you are. I introduce myself and this website in less than one scroll when you landed. You can know me briefly by spending as little as three clicks.
