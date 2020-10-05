class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (this.adjacencyList[name]) return 'Vertex already excises';
    this.adjacencyList[name] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return 'One or both vertexes not found';
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return 'One or both vertexes not found';
    }
    const v1Arr = this.adjacencyList[vertex1];
    const v1Index = v1Arr.indexOf(vertex2);

    const v2Arr = this.adjacencyList[vertex2];
    const v2Index = v2Arr.indexOf(vertex1);

    if (v1Index === -1 || v2Index === -1) {
      return `connection not found between ${vertex1} and ${vertex2}`;
    }
    v1Arr.splice(v1Index, 1);
    v2Arr.splice(v2Index, 1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return 'Vertex not found';
    }

    const vArr = this.adjacencyList[vertex];
    for (let i = 0; i < vArr.length; i++) {
      const element = vArr[i];
      this.adjacencyList[element] = this.adjacencyList[element].filter((el) => el !== vertex);
    }

    delete this.adjacencyList[vertex]
  }
}

export default Graph;
