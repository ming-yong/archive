---
title: Designing Data-Intensive Applications - 15
description: Reading "Designing Data-Intensive Applications" by Martin Kleppmann
category: 2020
---

Designing Data-Intensive Applications. Chapter 3: Storage and Retrieval.

## Hash Indexes

Hash map is a key-value store. We can break data into segments, perform compaction on them(only keep the most recent update for each key), and merge. Each segment has its own in-memory hash table that links to file offsets. We check the most recent, and then second recent segment when searching for a value.

It comes with some issue, such as file format, crash recovery, and more.
