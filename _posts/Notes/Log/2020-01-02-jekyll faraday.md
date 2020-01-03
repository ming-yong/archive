---
title: Bugs | Jekyll Faraday::ClientError
description: I encountered a Faraday::ClientError when serving jekyll website locally.
categories: [Notes] 
tags: [Log]
---

## Bug

When I try to serve my Jekyll website locally by `bundle exec jekyll serve`, I will received:

```console
jekyll 3.8.5 | Error:  uninitialized constant Faraday::Error::ClientError
Did you mean?  Faraday::ClientError
```

## Fix

In `Gemfile.lock`, change `faraday (1.0.0)` to `faraday (0.17.0)` and run `bundle install`.
