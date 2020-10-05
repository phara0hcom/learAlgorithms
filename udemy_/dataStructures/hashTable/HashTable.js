class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    const node = new Node(key, val);
    const hashKey = this._hash(key);
    if (!this.keyMap[hashKey]) {
      this.keyMap[hashKey] = [];
    }

    this.keyMap[hashKey].push(node);
  }

  get(key) {
    const hashKey = this._hash(key);
    if (this.keyMap[hashKey]) {
      for (let i = 0; i < this.keyMap[hashKey].length; i++) {
        if (this.keyMap[hashKey][i].key === key) return this.keyMap[hashKey][i].value;
      }
    }

    return undefined;
  }

  keys() {
    const allKeys = [];
    for (const index in this.keyMap) {
      if (this.keyMap.hasOwnProperty(index)) {
        const element = this.keyMap[index];
        for (let i = 0; i < element.length; i++) {
          allKeys.push(element[i].key);
        }
      }
    }

    return allKeys;
  }

  values() {
    const allValues = [];
    for (const index in this.keyMap) {
      if (this.keyMap.hasOwnProperty(index)) {
        const element = this.keyMap[index];
        for (let i = 0; i < element.length; i++) {
          if (!allValues.includes(element[i].value)) {
            allValues.push(element[i].value);
          }
        }
      }
    }

    return allValues;
  }
}

export default HashTable;
