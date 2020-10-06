import WeightedGraph from './WeightedGraph';

describe('WeightedGraph', () => {
  test('Test Dijkstra', () => {
    const g = new WeightedGraph();

    g.addVertex('A');
    g.addVertex('B');
    g.addVertex('C');
    g.addVertex('D');
    g.addVertex('E');
    g.addVertex('F');

    g.addEdge('A', 'B', 4);
    g.addEdge('A', 'C', 2);
    g.addEdge('C', 'D', 2);
    g.addEdge('C', 'F', 4);
    g.addEdge('B', 'E', 3);
    g.addEdge('D', 'E', 3);
    g.addEdge('D', 'F', 1);
    g.addEdge('F', 'E', 1);

    expect(g.shortestRoute('A', 'E')).toEqual(['A', 'C', 'D', 'F', 'E']);
  });
});
