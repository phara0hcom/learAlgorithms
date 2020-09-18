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
    if (!this.head) {
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

  validIndex(index) {
    if (typeof index !== 'number' || Number.isNaN(index)) {
      return new Error('pass a "number" as an argument');
    }

    return true;
  }

  get(index) {
    const validIndex = this.validIndex(index);
    if (validIndex instanceof Error) return validIndex;

    if (index < 0 || index >= this.length) return undefined;
    let counter = 0;
    let entry = this.head;
    while (counter !== index) {
      entry = entry.next;
      counter += 1;
    }

    return entry;
  }

  set(index, val) {
    const set = this.get(index);
    if (set && set instanceof Node) {
      set.val = val;

      return true;
    }

    return false;
  }

  insert(index, val) {
    if (this.validIndex(index) instanceof Error) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const pre = this.get(index - 1);

    if (pre && pre instanceof Node) {
      newNode.next = pre.next;
      pre.next = newNode;
      this.length += 1;

      return true;
    }

    return false;
  }

  remove(index) {
    if (index < 0 || index >= this.length || this.validIndex(index) instanceof Error) {
      return undefined;
    }
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const pre = this.get(index - 1);
    const toDelete = pre.next;
    pre.next = toDelete.next;
    this.length -= 1;

    return toDelete;
  }

  reverse() {
    if (!this.head || this.length === 1) return undefined;

    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }
}

export default SinglyLinkedLists;
