class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedLists {
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
      node.prev = this.tail;
      this.tail.next = node;
    }
    this.tail = node;
    this.length += 1;

    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    const toDelete = this.tail;
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    toDelete.prev = null;
    this.length -= 1;
    return toDelete;
  }

  shift() {
    if (this.head === null) {
      return undefined;
    }

    const toDelete = this.head;
    this.head = toDelete.next;
    if (!this.head) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }

    toDelete.next = null;
    this.length -= 1;
    return toDelete;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.tail = node;
    } else {
      this.head.prev = node;
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
    const lastIndex = this.length - 1;
    const half = lastIndex / 2;
    let counter = 0;
    let entry = this.head;
    let startFromBeginning = true;
    if (index > half) {
      entry = this.tail;
      counter = lastIndex;
      startFromBeginning = false;
    }

    while (counter !== index) {
      if (startFromBeginning) {
        entry = entry.next;
        counter += 1;
      } else {
        entry = entry.prev;
        counter -= 1;
      }
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
    const prev = this.get(index - 1);

    if (prev && prev instanceof Node) {
      const current = prev.next;
      current.prev = newNode;
      prev.next = newNode;
      newNode.next = current;
      newNode.prev = prev;

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

    const toDelete = this.get(index);
    const prevNode = toDelete.prev;
    const nextNode = toDelete.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    toDelete.next = null;
    toDelete.prev = null;
    this.length -= 1;

    return toDelete;
  }

  reverse() {
    if (!this.head || this.length === 1) return undefined;

    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let nextNode;

    for (let i = 0; i < this.length; i++) {
      nextNode = current.next;
      const { prev, next } = current;
      current.next = prev;
      current.prev = next;

      current = nextNode;
    }

    return this;
  }
}

export default DoublyLinkedLists;
