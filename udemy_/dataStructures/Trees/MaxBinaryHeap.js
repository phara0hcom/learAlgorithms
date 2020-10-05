class MaxBinaryHeap {
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

  push(val) {
    this.values.push(val);
    let valI = this.values.length - 1;
    while (valI > 0) {
      const parentI = this.calcParentIndex(valI);
      const patent = this.values[parentI];

      if (val <= patent) break;

      this.values[parentI] = val;
      this.values[valI] = patent;
      valI = parentI;
    }
    return this.values;
  }

  removeRoot() {
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
      const lChildVal = this.values[childrenIndexes[0]] || Number.NEGATIVE_INFINITY;
      const rChildVal = this.values[childrenIndexes[1]] || Number.NEGATIVE_INFINITY;

      if (lChildVal < element && rChildVal < element) break;

      if (lChildVal > rChildVal) {
        this.values[index] = lChildVal;
        index = childrenIndexes[0];
        this.values[index] = element;
      } else {
        this.values[index] = rChildVal;
        index = childrenIndexes[1];
        this.values[index] = element;
      }
    }

    return root;
  }

  testSetValues(newValues) {
    this.values = [...newValues];

    return this.values;
  }
}

export default MaxBinaryHeap;
