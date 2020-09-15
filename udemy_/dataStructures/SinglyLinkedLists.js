class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length += 1;

    return this;
  }

  pop() {
    if (this.head === null) {
      return undefined;
    }
    let current = this.head;
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      let pre = null;
      while (current.next) {
        pre = current;
        current = current.next;
      }
      pre.next = null;
      this.tail = pre;
    }

    this.length -= 1;
    return current;
  }

  shift() {
    if (this.head === null) {
      return undefined;
    }
    const del = this.head;
    this.head = this.head.next;
    if (!this.head.next) {
      this.tail = null;
    }

    this.length -= 1;
    return del;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.tail = node;
    } else {
      node.next = this.head;
    }

    this.head = node;
    this.length += 1;

    return this;
  }
}

const list = new SinglyLinkedLists();

console.log({ list });

console.log(list.unshift('new head'));
console.log(list.unshift('newer head'));
