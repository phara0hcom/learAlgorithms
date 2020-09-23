# TREE Data structure

### TREE TERMINOLOGY

- Root - The top node in a tree.
- Child -A node directly connected to another node when moving away from the Root.
- Parent - The converse notion of a child.
- Siblings -A group of nodes with the same parent.
- Leaf - A node with no children.
- Edge - The connection between one node and another.

### Applications

- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
- Folders in Operating Systems
- Computer File Systems
- Decision Trees (true / false)
- Database Indices
- Sorting Algorithms

### TRAVERSING A TREE

Two ways:

1. Breadth-first Search
2. Depth-first Search

## Binary Search Tree (BST)

- Every parent node has at most two children
- Every node to the left of a parent node is always less than the parent
- Every node to the right of a parent node is always greater than the parent

### Big O

Insertion - O(log n)
Searching - O(log n)

NOT guaranteed!

# Binary Heap

**Very** similar to a binary search tree, but with some different rules!

In a **MaxBinaryHeap**, parent nodes are always larger than child nodes. In a **MinBinaryHeap**, parent nodes are always smaller than child nodes

## MAX BINARY HEAP

- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
- In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

## Why do we need to know this?

Binary Heaps are used to implement Priority Queues, which are very commonly used data structures. They are also used quite a bit, with graph traversal algorithms.
