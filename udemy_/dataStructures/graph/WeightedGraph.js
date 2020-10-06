const { default: PriorityQueue } = require('../Trees/PriorityQueue');

class Node {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (this.adjacencyList[name]) return 'Vertex already excises';
    this.adjacencyList[name] = [];
  }

  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
      return 'One or both vertexes not found';
    }
    const vertex1 = new Node(v1, weight);
    const vertex2 = new Node(v2, weight);

    this.adjacencyList[v1].push(vertex2);
    this.adjacencyList[v2].push(vertex1);
  }

  shortestRoute(from, to) {
    const priorityQueue = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];

    for (let vertex in this.adjacencyList) {
      distances[vertex] = vertex === from ? 0 : Infinity;
      priorityQueue.enqueue(vertex, vertex === from ? 0 : Infinity);

      previous[vertex] = null;
    }

    while (priorityQueue.values.length) {
      const { val } = priorityQueue.dequeue();
      if (val === to) {
        path.push(val);
        while (previous[val]) {
          val = previous[val];
          path.push(val);
        }

        path.reverse();
        break;
      }

      const vArr = this.adjacencyList[val];
      for (let i = 0; i < vArr.length; i++) {
        const { vertex, weight } = vArr[i];
        // calculate new distance to neighboring vertex
        const candidate = distances[val] + weight;
        if (candidate < distances[vertex]) {
          distances[vertex] = candidate;
          previous[vertex] = val;
          priorityQueue.enqueue(vertex, candidate);
        }
      }
    }

    return path;
  }
}

export default WeightedGraph;
