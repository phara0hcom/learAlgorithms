/**
 * Union Find Eager Solution
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

  union(locA, locB) {
    const groupLocA = this.idArr[locA];
    const groupLocB = this.idArr[locB];

    this.idArr = this.idArr.map((locGroup) => {
      if (locGroup === groupLocA) return groupLocB;
      return locGroup;
    });
  }

  connected(locA, locB) {
    return this.idArr[locA] === this.idArr[locB];
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
