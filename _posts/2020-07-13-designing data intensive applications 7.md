---
title: Designing Data-Intensive Applications - 7
description: Reading "Designing Data-Intensive Applications" by Martin Kleppmann
category: 2020
---

Designing Data-Intensive Applications. Chapter 2.

## Are document database repeating history?

Document model and NoSQL reopened the debate on how best to represent many-to-many relationships. (Oh they are not the same thing)

Historically, IMS from IBM, which used the hierarchy model and is also good with one-to-many but made many-to-many difficult like document model, faced the problem of duplicate(denormalize) data OR resolve references manually. The network model is another proposed solution besides the relational model at that time.

A record could have multiple parents. They are linked similar to pointers in a programming language. The access path started from a root record and many paths lead to the same destination. Developers have to keep track of those. Performing a query in the network model is like navigating in an n-dimensional data space.

Although manual access path selection was efficient storage wise(tape drivers), it made working with the database complicated and inflexible.

On the other hand, the relational model is straight forward: a relation(table) is a collection of tuples(rows). The query optimizer handles decisions like indexes to use and query execution order automatically. This frees the application developers' minds.

## No

Like hierarchical models, document model stores nested records within their parent record rather than in a separate table.

However, it is fundamentally the same as relational models when it comes to representing one-to-many and many-to-many relationships. It uses document reference(foreign keys in relational models) as its unique identifier. Therefore, it didn't follow the path of CODASYL(the IMS).
