---
title: Designing Data-Intensive Applications - 12
description: Reading "Designing Data-Intensive Applications" by Martin Kleppmann
category: 2020
---

Designing Data-Intensive Applications. Chapter 2.

Datalog, a subset of Prolog, is an older language. It has a format of `predicate(subject, object)`, which is similar to the triple-store model. It combined and reused rules in different queries.

We first present data with the hierarchical model, then we introduced the relational model to handle many-to-many relationships. More recently, we develop another nonrelational "NoSQL" datastores, which diverged into two main directions: Document databases(data stores in a self-contained document and documents rarely have a relationship between) and Graph databases(anything is potentially related to anything).

Applications will settle with a certain data structure, it will either be a explicit(handle on write) or implicit(handle on read) schema.

Each data model comes with its own query language or framework. We mentioned SQL, MapReduce, Cypher, Datalog, and more in this chapter.
