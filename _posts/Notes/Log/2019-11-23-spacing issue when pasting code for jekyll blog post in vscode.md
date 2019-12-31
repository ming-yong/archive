---
title: Bugs | Spacing issue when pasting code
description: I discover a quick fix for markdownlint hard tabs issue.
categories: [Notes] 
tags: [Log]
---

Whenever I pasted code for my Jekyll blog post code block in Visual Studio Code, yellow lines appears.

![markdownlint hard tabs]({{site.baseurl}}/assets/images/markdownlint.PNG)

And it results in weird spacing on the post.

![markdownlint hard tabs result]({{site.baseurl}}/assets/images/markdownlint_before.PNG)

Turns out it's something called "markdownlint hard tabs" and can be solved if you redo the spacing like this:

![markdownlint hard tabs show fix]({{site.baseurl}}/assets/images/markdownlint_slowSolution.gif)

### Solution

A quicker fix is by typing "markdownlint" and select "Fix supported markdownlint violations in this document" in command palette(`Ctrl+Shift+P` to open it).

![markdownlint hard tabs quick fix]({{site.baseurl}}/assets/images/markdownlint_fastSolution.gif)

All lines will be fixed and weird spacing will be take away on the post.

![markdownlint hard tabs fixed result]({{site.baseurl}}/assets/images/markdownlint_after.PNG)
