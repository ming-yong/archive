---
title: Process of building a webpage
description: My thinking and building process of Chingu voyage 13 tier 1 pre-work project.
categories: [Blog] 
tags: [I built something]
---

A webpage seems to be something too simple to have a blog post for it. But as someone who used to write HTML and CSS simultaneously, I figure it wouldn't hurt if one exists.

## Background

This project is a pre-work solo project to enter the Chingu program.

### Chingu?

In short, Chingu is a remote 8-week program for web developers where you can gain experience working in a remote agile team. A pre-work solo project in a tier of your choice have to be submitted before entering the 6-week voyage. 

There are three tiers to choose from: tier 1 uses HTML, CSS, Vanilla JavaScript, tier 2 uses framework such as React and tier 3 goes with full-stack development. In this case, we are talking about a tier 1 project.

## Let's start building!

![tier 1 pre-work project]({{site.baseurl}}/assets/images/tier1Preview.gif)

The project is named Fav-fonts. This gif in the [instruction github repo](https://github.com/ming-yong/voyage-prework-tier1-favfonts) is what I needed to build. For me, it can be broken down into 2 parts:

1. Responsive layout
2. Functionality

And my coding order will be HTML **and then** CSS, finishing up with JavaScript. In terms of layout, I will start on the smaller screen. I also work on bigger things(outermost layout of the elements) before modifying the little things like padding, and colours.

### Day 1: Layout planning

![project layout planning]({{site.baseurl}}/assets/images/favoriteFontsLanding.png)

A layout png is also provided to help with HTML planning. As seen, the layout contains a header(1), a toolbar(2), a main area(3) and a footer(4).

![project layout planning]({{site.baseurl}}/assets/images/chinguSolo-breakpoints.PNG)

Now it's time to see how the elements change on different breakpoints. Doing this will help you to structure your webpage.

- The footer stays the same on different screens.
- The header has a list of links and the logo, they will stack together on smaller screen.
- The tool bar, which I don't know why I think it's a `nav` when building it, has 2 functions on smaller screen and others only appear on bigger screen.
- The main area has all the font cards and seems to have a `flex-wrap` on it.

![day 1 progress]({{site.baseurl}}/assets/images/chingu-solo-d1.gif)

With the idea of how things work in mind, I built the layout for a smaller screen.

### Day 2: Responsive layout and some functionality

![day 2 progress]({{site.baseurl}}/assets/images/chingu-solo-d2.gif)

I have the HTML done so my day 2 is mainly about CSS. The coding process is very very smooth with a well-planned HTML.

### Day 3: Remaining functionality

![day 3 progress]({{site.baseurl}}/assets/images/chingu-solo-d3.gif)

On my third day, I implemented all the functionality using Vanilla JavaScript and it's ready to go!

And that's how a typical building process for me!

## Other: Fixing bugs

Sometimes you get something called bugs. Nothing to worry about, you just have fix it.

![bug fix]({{site.baseurl}}/assets/images/chingu-solo-fix1.gif)

A little bug I have is that default text appears right after the input box is empty.

![bug fix]({{site.baseurl}}/assets/images/chingu-solo-fix2.gif)

After the tiny little fix, my pre-work project is accepted by Chingu. You can view the [demo here](https://ming-yong.github.io/Favorite-Fonts/) or [code here](https://github.com/ming-yong/Favorite-Fonts).
