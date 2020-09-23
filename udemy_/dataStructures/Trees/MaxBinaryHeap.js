class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  calcParentIndex(index) {
    return Math.floor((index - 1) / 2);
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
}

export default MaxBinaryHeap;
