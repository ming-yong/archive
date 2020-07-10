---
title: Designing Data-Intensive Applications - 3
description: Reading "Designing Data-Intensive Applications" by Martin Kleppmann
category: 2020
---

Designing Data-Intensive Applications. Chapter 1.

We can either scale-up(upgrade machine) or scale-out(distribute to many cheaper machines) for scaling. The solution is usually a mixture of both. The main deciding factor when designing the scalability of a data system comes down to the purpose of the application we are building. Does it require more writes or reads? Is storing data its heaviest task? Does it handle few but large size or many but small requests?

I read that Rust is replacing C/C++ for writing memory-safe programs.
