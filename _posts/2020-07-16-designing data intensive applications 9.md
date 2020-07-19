---
title: Designing Data-Intensive Applications - 9
description: Reading "Designing Data-Intensive Applications" by Martin Kleppmann
category: 2020
---

Designing Data-Intensive Applications. Chapter 2.

## Schema flexibility

The document model is not schemaless (meaning we can add arbitrary keys and values) but rather schema-on-read.

Schema-on-read means the data structure is implicit and only interpreted when read, we can think of it as the dynamic/runtime type checking in programming languages. The relational model, on the other hand, is schema-on-write, it's similar to the static/compile-time type checking in programming languages.

An advantage of schema-on-read will be when we need to change the data. We can easily do that through code. Migration has to take place if we were working with relational databases.
