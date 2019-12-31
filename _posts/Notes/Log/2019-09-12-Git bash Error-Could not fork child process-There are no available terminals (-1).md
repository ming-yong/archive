---
title: Bugs | Git bash Error-Could not fork child...
description: I encountered "Could not fork child process-There are no available terminals (-1)" issue on GitBash.
categories: [Notes] 
tags: [Log]
---

I don't know how and why this happens but I guess it have to do with not terminating Git Bash properly.

![image: git bash crash]({{site.baseurl}}/assets/images/Bugs/gitBashCrash.png)

### Solution

In the terminal, kill `ssh-agent.exe` using `taskkill /F /IM ssh-agent.exe`.
