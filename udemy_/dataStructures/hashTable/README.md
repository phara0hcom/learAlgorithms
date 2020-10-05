# Hash Table

## WHAT IS A HASH TABLE?

Hash tables are used to store key-value pairs.
They are like arrays, but the keys are not ordered.
Unlike arrays, hash tables are fast for all of the following operations:

- finding values
- adding new values
- removing values

## WHY SHOULD I CARE?

Nearly every programming language has some sort of hash table data structure. Because of their speed, hash tables are very commonly used!

You can easily store things with human-readable keys and converting them to computer-readable keys with a Hash function.

## WHAT MAKES A GOOD HASH? (not a cryptographically secure one)

1. Fast (i.e. constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly
3. Deterministic (same input yields same output)

## Dealing with Collisions

Even with a large array and a great hash function, collisions are inevitable. There are many strategies for dealing with collisions, but we'll focus on two:

1. Separate Chaining
2. Linear Probing

### Separate Chaining

With _separate chaining_, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).
This allows us to store multiple key-value pairs at the same index.

### Linear Probing

With linear probing, when we find a collision, we search through the array to find the next empty slot.
Unlike with separate chaining, this allows us to store a single key-value at each index.

## BIG O of Hash Table
- Insert: O(1)
- Deletion: O(1)
- Access: O(1)