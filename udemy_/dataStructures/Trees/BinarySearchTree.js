import Queue from '../Queue';
import Stack from '../Stack';

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
  /**
   * Insert a value in the tree
   * @param {number} val we want to insert
   *
   * @returns this
   */
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

  /**
   * Find a node in the tree
   * @param {number} val the value of the Node we want to find
   *
   * @returns {Node}
   */
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

  /**
   * Is a value in the tree
   * @param {number} val the value we want to find
   *
   * @returns {boolean} true if found
   */
  contains(val) {
    if (!this.root) return false;
    const find = this.find(val);

    if (find instanceof Node) return true;
    return false;
  }

  /**
   * Breadth First Search
   * Iterates over the tree from on each level left to right
   * and then one step to the bottom
   *
   * @returns {Array} of found value's
   */
  breadthFirstSearch() {
    if (!this.root) return undefined;
    const que = new Queue();
    const returnArr = [];
    que.enqueue(this.root);

    while (que.size) {
      const current = que.dequeue();
      returnArr.push(current.value);
      if (current.left) que.enqueue(current.left);
      if (current.right) que.enqueue(current.right);
    }

    return returnArr;
  }

  /**
   * (Tamer's version) Depth First Search Pre Order (while loop)
   * We go to the depth first and while going down add the values
   * At the bottom wo go the the next unvisited branch
   *
   */
  DFSPreOrder() {
    if (!this.root) return undefined;
    const que = new Stack();
    const returnArr = [];
    que.push(this.root);

    while (que.size) {
      const current = que.pop();
      returnArr.push(current.value);
      if (current.right) que.push(current.right);
      if (current.left) que.push(current.left);
    }

    return returnArr;
  }

  /**
   * Depth First Search Pre Order (recursive)
   * We go to the depth first and while going down add the values
   * At the bottom wo go the the next unvisited branch
   *
   */
  depthFirstSearchPreOrder() {
    if (!this.root) return undefined;
    const returnArr = [];

    const traverse = (node) => {
      returnArr.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return returnArr;
  }

  /**
   * Depth First Search In Order
   * We go to the depth first tt the bottom we add values
   * go the the next unvisited branch
   *
   */
  depthFirstSearchPostOrder() {
    if (!this.root) return undefined;
    const returnArr = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      returnArr.push(node.value);
    };

    traverse(this.root);

    return returnArr;
  }

  /**
   * Depth First Search In Order
   * We go to the depth first tt the bottom we add values
   * go the the next unvisited branch
   *
   */
  depthFirstSearchInOrder() {
    if (!this.root) return undefined;
    const returnArr = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      returnArr.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return returnArr;
  }
}

export default BinarySearchTree;
