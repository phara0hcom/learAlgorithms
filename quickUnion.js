/**
 * Union Find Lazy Solution
 */
class UF {
  idArr = [];
  constructor(n = 10) {
    this.idArr = this.makeLocations(n);
  }

  makeLocations(locationCount) {
    const locArr = [];
    for (let i = 0; i < locationCount; i++) {
      locArr.push(i);
    }

    return locArr;
  }

  findRoot(loc) {
    if (loc === this.idArr[loc]) return loc;
    return this.findRoot(this.idArr[loc]);
  }

  union(p, q) {
    const rootP = this.findRoot(p);
    const rootQ = this.findRoot(q);
    this.idArr[rootP] = rootQ;
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
