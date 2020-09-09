/**
 * Union Find Lazy Solution
 */
class UF {
  idArr = [];
  size = [];
  constructor(n = 10) {
    this.idArr = this.makeLocations(n);
  }

  makeLocations(locationCount) {
    const locArr = [];
    for (let i = 0; i < locationCount; i++) {
      locArr.push(i);
      this.size.push(1);
    }

    return locArr;
  }

  findRoot(loc) {
    if (loc === this.idArr[loc]) return loc;
    this.idArr[loc] = this.idArr[this.idArr[loc]]; // path compression
    return this.findRoot(this.idArr[loc]);
  }

  union(p, q) {
    const rootP = this.findRoot(p);
    const rootQ = this.findRoot(q);
    if (rootP === rootQ) return;
    if (this.size[rootP] < this.size[rootQ]) {
      this.idArr[rootP] = rootQ;
      this.size[rootP] += this.size[rootQ];
    } else {
      this.idArr[rootQ] = rootP;
      this.size[rootQ] += this.size[rootP];
    }
  }

  connected(p, q) {
    return this.findRoot(p) === this.findRoot(q);
  }

  returnLocArr() {
    return this.idArr;
  }
}

const unionFind = new UF(10);

unionFind.union(4, 3);
unionFind.union(3, 8);
unionFind.union(6, 5);
unionFind.union(9, 4);
unionFind.union(2, 1);

console.log(unionFind.connected(0, 7)); // true
console.log(unionFind.connected(8, 9)); // false

unionFind.union(5, 0);

console.log(unionFind.connected(0, 7)); // true
console.log(unionFind.connected(8, 9)); // false

unionFind.union(7, 2);

console.log(unionFind.connected(0, 7)); // true
console.log(unionFind.connected(8, 9)); // false

unionFind.union(6, 1);

console.log(unionFind.connected(0, 7)); // true
console.log(unionFind.connected(8, 9)); // true
