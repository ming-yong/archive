---
title: Bugs | Kill a running task
description: I killed a task on localhost port 3000 when learning React.
categories: [Notes] 
tags: [Log]
---

I have to kill a task that's running on port 3000 when learning React.

![something is already running on port 3000]({{site.baseurl}}/assets/images/port3000.PNG)

### Solution

In the terminal:

- run `netstat -ano | findstr :3000` and should get a response of `TCP    0.0.0.0:3000           0.0.0.0:0              LISTENING       16028`.
- after that, kill it by typing `taskkill /PID 16028 /F`.
