---
title: Designing Data-Intensive Applications - 8
description: Reading "Designing Data-Intensive Applications" by Martin Kleppmann
category: 2020
---

Designing Data-Intensive Applications. Chapter 2.

## Relational Vs Document

Document model: schema flexibility, better performance due to locality.
Relational model: better support for joins, and one-to-many and many-to-many relationships.

### When to use document model

- When data is tree of one-to-many relationships which is usually loaded at once.
- Not deeply nested.

### When to use relational model

- You application uses many-to-many relationships.

For highly interconnected data, graph models are the most natural (document < relational < graph).
