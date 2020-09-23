class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;

    return ++this.size;
  }

  dequeue() {
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

export default Queue;
