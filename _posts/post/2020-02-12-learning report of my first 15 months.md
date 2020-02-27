---
title: Learning report 9/2018-12/2019
description: My year in review for September 2018- December 2019.
categories: [post]
tags: [year in review]
image: /assets/images/2019/2019.PNG
---

![image]({{page.image}})

That's a sketch of how I feel most of the time(It can be frustrating sometimes). Anyway, here's what I've done in my first 15 months of learning:

- [learn HTML, CSS, Javascript and build my first project](#first-line-of-code-to-first-project).
- [meeting and working with people](#connecting-with-people).
- [a total of 35 builds](#built-35-things-learning-6-skills).

My daily process is posted on [Twitter]({{site.social-links.twitter}}) with hashtag [100DaysOfCode](https://www.100daysofcode.com/).

## First line of code to first project

I started learning HTML and CSS through curriculums under [Responsive Web Design Certification](https://www.freecodecamp.org/certification/ming-yong/responsive-web-design). After feeling quite comfortable with my HTML and CSS skills, I decided to build my first project.

### My first project

is a ugly blog that went alive in May.
![version 1]({{site.baseurl}}/assets/images/2019/jekyll/v1blog.gif)

Fancy hamburger menu in version 1.
![version 1 hamburger menu]({{site.baseurl}}/assets/images/2019/jekyll/v1blogHamburger.gif)

Version 2 is cleaner than version 1.
![version 2]({{site.baseurl}}/assets/images/2019/jekyll/v2blog.gif)

Hamburger menu in version 2.
![version 2 hamburger menu]({{site.baseurl}}/assets/images/2019/jekyll/v2blogHamburger.gif)

Version 3 has syntax highlighting and colour orange.
![version 3]({{site.baseurl}}/assets/images/2019/jekyll/v3blog.gif)

I separated notes with posts in version 4. Remove JavaScript and rewrite my CSS with BEM methodology.
![version 4]({{site.baseurl}}/assets/images/2019/jekyll/v4blog.gif)

So to say, it's in version 5.

### JavaScript

I was also working on my [Javascript Algorithms And Data Structures Certification](https://www.freecodecamp.org/certification/ming-yong/javascript-algorithms-and-data-structures) at that time. I wasn't feeling very comfortable with JavaScript after so I took [JavaScript30](https://javascript30.com/) before moving onto learning ReactJS and NodeJS.

## Connecting with people

### Events

I went to [UX/UI design workshop](https://github.com/ladieslearningcode/llc-ux), joined the 136th [CodeNewbie](https://www.codenewbie.org/chat) check-in chat, and went to a few local meetups.

### Open source

I joined my very first [Hacktoberfest](https://hacktoberfest.digitalocean.com/).

![Hacktoberfest]({{site.baseurl}}/assets/images/2019/opensource/hacktoberfest2019.PNG)

and completed it with baby contributions such as:

- Share favorite learning resources in [bhavaniravi/my-favorite-resources](https://github.com/bhavaniravi/my-favorite-resources).
- Become a contributor for [womenintech-chennai/womenintech-website](https://github.com/womenintech-chennai/womenintech-website).
- A pixel and translation for the [twilio-labs/open-pixel-art](https://github.com/twilio-labs/open-pixel-art).

### Team project

![Chingu schedule]({{site.baseurl}}/assets/images/2019/chingu/chinguSchedule.PNG)

I got accepted into Chingu Voyage 13, a program where you can team up with other learners to build a project.

![Chingu certification]({{site.baseurl}}/assets/images/2019/chingu/chinguCert.PNG)

We built a Momentum clone named [MoTo](https://medium.com/@mingyong/introducing-moto-from-chingu-voyage-13-c1c1f9e98f80) in 6 week-long Agile sprints.

## Built 35 things learning 6 skills

In sum, I've experience with HTML and CSS, Jekyll, Vanilla JS, ReactJS, NodeJS, and working in a remote team using Agile methodology as a 15-month-old coder.

{% for build in site.data.2019 %}
<p>
  {{build[1] | size}} {{build[0]}}
  <ul>
  {% for item in build[1] %}
    <li>{{item.name}}: <a target="_blank" href="{{item.demo}}">demo</a> | <a target="_blank" href="{{item.code}}">code</a></li>
  {% endfor %}
  </ul>
</p>
{% endfor %}
