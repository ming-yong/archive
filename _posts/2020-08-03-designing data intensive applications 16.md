---
title: Designing Data-Intensive Applications - 16
description: Reading "Designing Data-Intensive Applications" by Martin Kleppmann
category: 2020
---

Designing Data-Intensive Applications. Chapter 3: Storage and Retrieval.

## SSTables and LSM-Trees

We sorted key-value pairs segments by the keys. And store the most recent value of each on a Sorted String Table(SSTables). We can also compress the segments into blocks(compressible block) and use sparse in-memory indexes as entries.

When a write comes in, add it to the memtable(in-memory tree). Write the memtable out to disk as an SSTable file whenever it grew to a certain size.

When performing a read, first read the memtable, and then the most recent on-disk segment.

To avoid losing data in the memtable, keep a separate log on disk. This log will just contain every newly added record, not sorted, and will be discarded after the memtable is written out.
