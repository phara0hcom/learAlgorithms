class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  calcParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  calcChildrenIndexes(index) {
    const times2 = index * 2;
    return [times2 + 1, times2 + 2];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);
    let valI = this.values.length - 1;
    while (valI > 0) {
      const parentI = this.calcParentIndex(valI);
      const patent = this.values[parentI];

      if (priority >= patent.priority) break;

      this.values[parentI] = node;
      this.values[valI] = patent;
      valI = parentI;
    }
    return this.values;
  }

  dequeue() {
    if (this.values.length === 0) return undefined;

    const root = this.values[0];
    if (this.values.length === 1) {
      this.values = [];
      return root;
    }

    // remove root
    // take last item put it in the root position
    const end = this.values.pop();
    this.values[0] = end;

    // sift the new root down to it's correct position
    let index = 0;
    const element = this.values[0];

    while (true) {
      const childrenIndexes = this.calcChildrenIndexes(index);
      const lChild = this.values[childrenIndexes[0]];
      const rChild = this.values[childrenIndexes[1]];
      const lPriority = lChild && lChild.priority ? lChild.priority : Infinity;
      const rPriority = rChild && rChild.priority ? rChild.priority : Infinity;

      if (
        (lPriority > element.priority || lPriority === element.priority) &&
        (rPriority > element.priority || rPriority === element.priority)
      ) {
        break;
      }
      if (lPriority < rPriority) {
        this.values[index] = lChild;
        index = childrenIndexes[0];
        this.values[index] = element;
      } else {
        this.values[index] = rChild;
        index = childrenIndexes[1];
        this.values[index] = element;
      }
    }

    return root;
  }
}

export default PriorityQueue;
