---
title: Jekyll | JS30 posts template
description: Create a template in Jekyll for repeating content.
categories: [Notes] 
tags: [Log]
---

I wrote one post for every project I built in JavaScript 30 challenge starting with the same paragraph. And that's totally fine until I want to change it on all posts, so here it is, how I created a template for repeating content.

### Step 1: Creating a layout file

This `./_layouts/js30.html` file uses `post` layout and included the introduction and ending paragraph I wanted.

Ps: " \\ " is used to escape ruby code here.

```html
<!--front matter-->
\-\-\- layout:post \-\-\-

<p>
 I am building small projects to practice my Vanilla JavaScript. For this reason, I started a 30 days Vanilla JS challenge named "JavaScript 30".
</p>
<p>
 In this post I will try to summarize a project which is based on tutorial \{\{ page.tutorial_number \}\}: \{\{ page.tutorial_name \}\}, to ensure that I am not blindly following the tutorial but can explain what I learned as well. You can <a href="\{\{ page.demo_link \}\}">view demo here</a> or <a href="\{\{ page.sourceCode_link \}\}">view source code here</a> for this build. I highly recommend
 you to check out the <a href="https://javascript30.com/">JavaScript 30 by Wes Bos</a> if you are seeking a clearer explanation on how to build this project.
</p>

\{\{ content \}\}

<p>
 And... that's how the JavaScript works. Thanks for reading.
</p>
```

### Step 2: Front matter in each post

Now in each post, all I need to do is to include these information in the front matter.

```ruby
\-\-\-
layout: js30
tutorial_number: 30
tutorial_name: Whack a Mole Game
demo_link: https://ming-yong.github.io/JS30-30-whack-a-mole/
sourceCode_link: https://github.com/ming-yong/JS30-30-whack-a-mole
\-\-\-
```

And I can now focus on the actual content. That's it, thanks for reading.
