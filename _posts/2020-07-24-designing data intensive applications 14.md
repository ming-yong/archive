---
title: Designing Data-Intensive Applications - 14
description: Reading "Designing Data-Intensive Applications" by Martin Kleppmann
category: 2020
---

Designing Data-Intensive Applications. Chapter 3: Storage and Retrieval.

We looked at data models and query languages in the previous chapter. In this chapter, we will be talking about storage engines: log-structured and page-oriented (exp B-trees).

Appending files to a database gives you a super-efficient write and terrible reads(O(n)). Indexing is a trade-off for this purpose. It speeds up the reads but slows down writes. We don't index everything to overkill the data design.
