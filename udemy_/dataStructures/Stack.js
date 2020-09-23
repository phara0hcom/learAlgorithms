class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.first) {
      this.last = node;
    } else {
      node.next = this.first;
    }

    this.first = node;
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;

    const del = this.first;
    this.first = del.next;
    if (!this.first) {
      this.last = null;
    }

    this.size--;
    return del.val;
  }
}

export default Stack;
