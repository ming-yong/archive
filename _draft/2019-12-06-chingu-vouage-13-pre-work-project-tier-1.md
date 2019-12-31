---
title: Build fast by planning
description: My thinking and building process of Chingu pre-work project.
categories: [Blog] 
tags: [Blog&Blogging]
---

This blog post is about my thinking process of building my tier 1 pre-work solo project for entering Chingu voyage 13. I was surprise how much of a difference a "mockup to follow" make in building speed so I figure I will write it down.

### What is Chingu

In short, Chingu is a remote 8-week program for web developers where you can gain experience working in a remote agile team. There are three tiers to choose from: tier 1 uses HTML, CSS, vanillaJS, tier 2 uses framework such as React and tier 3 goes with fullstack development. Pre-work solo project in tier of your choice have to be submitted before entering the 6-week voyage.

### Fav-fonts

![gif: tier 1 pre-work project]({{site.baseurl}}/assets/images/build/tier1Preview.gif)

This gif in the [instruction github repo](https://github.com/ming-yong/voyage-prework-tier1-favfonts) is what I needed to build. For me, it can be broken down into 2 parts:

1. Responsive layout
2. Functionality

### Day 1: Layout planning

![image: layout]({{site.baseurl}}/assets/images/build/favoriteFontsLanding.png)

A layout png is also provided to help with HTML planning. As seen, the layout contains a header(1), a toolbar(2), a main area(3) and a footer(4).

![image: layout]({{site.baseurl}}/assets/images/build/chinguSolo-breakpoints.PNG)

- The footer stays the same on different screens.
- The header has a list of links and the logo, they will stack together on smaller screen.
- The tool bar, which I don't know why I think it's a `nav` when building it, has 2 functions on smaller screen and others only appear on bigger screen.
- The main area has all the font cards and seems to have a `flex-wrap` on it.

With the idea of how things work in mind, I started my layout building for small screen.

![gif: day 1 progress]({{site.baseurl}}/assets/images/build/chingu-solo-d1.gif)

### Day 2: Responsive layout and some functionality

![gif: day 2 progress]({{site.baseurl}}/assets/images/build/chingu-solo-d2.gif)

Day 2 is mainly about CSS. The coding process is very very smooth with a well planned HTML.

### Day 3: Remaining functionality

![gif: day 3 progress]({{site.baseurl}}/assets/images/build/chingu-solo-d3.gif)

In my third day, I implemented all the functionality using vanillaJS and it's ready to go!

### Fixes

![gif: bugs]({{site.baseurl}}/assets/images/build/chingu-solo-fix1.gif)

A little bug I have is that default text appears right after the input box is empty.

![gif: fixes]({{site.baseurl}}/assets/images/build/chingu-solo-fix2.gif)

After the tiny little fix, my pre-work project is accepted by Chingu! You can view [demo here](https://ming-yong.github.io/Favorite-Fonts/) or [code here](https://github.com/ming-yong/Favorite-Fonts).

### What I learned

Plan before you code! And the order goes: any kind of UI/UX --> HTML --> CSS --> JS.
