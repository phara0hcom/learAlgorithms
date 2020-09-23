class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

/**
 * Binary Search Tree (BST)
 * - Every parent node has at most two children
 * - Every node to the left of a parent node is always less than the parent
 * - Every node to the right of a parent node is always greater than the parent
 *
 *  Big O
 * Insertion - O(log n) NOT guaranteed!
 * Searching - O(log n) NOT guaranteed!
 *
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    let lastNode = this.root;
    let nextLoc;

    while (current) {
      lastNode = current;
      if (val === current.value) {
        return undefined;
      } else if (val > current.value) {
        current = current.right;
        nextLoc = 'right';
      } else {
        current = current.left;
        nextLoc = 'left';
      }
    }
    lastNode[nextLoc] = node;

    return this;
  }

  find(val) {
    if (!this.root) return undefined;
    let current = this.root;

    while (current) {
      if (val === current.value) {
        return current;
      } else if (val > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return false;
  }

  contains(val) {
    if (!this.root) return false;
    const find = this.find(val);

    if (find instanceof Node) return true;
    return false;
  }
}

export default BinarySearchTree;
