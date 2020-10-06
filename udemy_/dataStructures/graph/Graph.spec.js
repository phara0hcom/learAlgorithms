import Graph from './Graph';

const create_A_D_graph = () => {
  const g = new Graph();

  g.addVertex('A');
  g.addVertex('B');
  g.addVertex('C');
  g.addVertex('D');
  g.addVertex('E');
  g.addVertex('F');

  return g;
};

const createGraph = () => {
  const g = create_A_D_graph();

  g.addEdge('A', 'B');
  g.addEdge('A', 'C');
  g.addEdge('B', 'D');
  g.addEdge('C', 'E');
  g.addEdge('D', 'E');
  g.addEdge('D', 'F');
  g.addEdge('E', 'F');

  return g;
};

const createGraph2 = () => {
  const g = create_A_D_graph();

  g.addEdge('A', 'B');
  g.addEdge('A', 'E');
  g.addEdge('B', 'C');
  g.addEdge('B', 'D');
  g.addEdge('E', 'D');
  g.addEdge('E', 'F');
  g.addEdge('C', 'D');
  g.addEdge('F', 'D');

  return g;
};

describe('Graph', () => {
  test('Test addVertex method', () => {
    const g = new Graph();

    expect(g.addVertex('Dallas')).toEqual(undefined);
    expect(g.addVertex('Tokyo')).toEqual(undefined);
    expect(g.addVertex('Aspen')).toEqual(undefined);

    expect(g.adjacencyList).toEqual({
      Aspen: [],
      Dallas: [],
      Tokyo: []
    });

    expect(g.addVertex('Tokyo')).toEqual('Vertex already excises');
  });

  test('Test addEdge method', () => {
    const g = new Graph();

    g.addVertex('Dallas');
    g.addVertex('Tokyo');
    g.addVertex('Aspen');

    expect(g.adjacencyList).toEqual({
      Aspen: [],
      Dallas: [],
      Tokyo: []
    });

    expect(g.addEdge('Dallas', 'Tokyo')).toEqual(undefined);
    expect(g.addEdge('Dallas', 'Aspen')).toEqual(undefined);
    expect(g.addEdge('Dallas', 'Kyoto')).toEqual('One or both vertexes not found');

    expect(g.adjacencyList).toEqual({
      Aspen: ['Dallas'],
      Dallas: ['Tokyo', 'Aspen'],
      Tokyo: ['Dallas']
    });
  });

  test('Test addEdge method', () => {
    const g = new Graph();

    g.addVertex('Dallas');
    g.addVertex('Tokyo');
    g.addVertex('Aspen');

    expect(g.adjacencyList).toEqual({
      Aspen: [],
      Dallas: [],
      Tokyo: []
    });

    g.addEdge('Dallas', 'Tokyo');
    g.addEdge('Dallas', 'Aspen');
    g.addEdge('Dallas', 'Kyoto');

    expect(g.adjacencyList).toEqual({
      Aspen: ['Dallas'],
      Dallas: ['Tokyo', 'Aspen'],
      Tokyo: ['Dallas']
    });

    expect(g.removeEdge('Tokyo', 'Kyoto')).toEqual('One or both vertexes not found');
    expect(g.removeEdge('Dallas', 'Tokyo')).toEqual(undefined);
    expect(g.removeEdge('Dallas', 'Tokyo')).toEqual(
      'connection not found between Dallas and Tokyo'
    );

    expect(g.adjacencyList).toEqual({
      Aspen: ['Dallas'],
      Dallas: ['Aspen'],
      Tokyo: []
    });
  });

  test('Test removeVortex method', () => {
    const g = new Graph();

    g.addVertex('Dallas');
    g.addVertex('Tokyo');
    g.addVertex('Aspen');
    g.addVertex('Hong Kong');
    g.addVertex('Paris');
    g.addVertex('Kyoto');

    expect(g.adjacencyList).toEqual({
      Aspen: [],
      Dallas: [],
      Kyoto: [],
      Paris: [],
      ['Hong Kong']: [],
      Tokyo: []
    });

    g.addEdge('Dallas', 'Tokyo');
    g.addEdge('Dallas', 'Aspen');
    g.addEdge('Dallas', 'Kyoto');
    g.addEdge('Hong Kong', 'Dallas');
    g.addEdge('Paris', 'Dallas');
    g.addEdge('Hong Kong', 'Tokyo');
    g.addEdge('Tokyo', 'Paris');

    expect(g.adjacencyList).toEqual({
      Aspen: ['Dallas'],
      Dallas: ['Tokyo', 'Aspen', 'Kyoto', 'Hong Kong', 'Paris'],
      Tokyo: ['Dallas', 'Hong Kong', 'Paris'],
      Kyoto: ['Dallas'],
      Paris: ['Dallas', 'Tokyo'],
      ['Hong Kong']: ['Dallas', 'Tokyo']
    });

    expect(g.removeVertex('New York')).toEqual('Vertex not found');
    expect(g.removeVertex('Dallas')).toEqual(undefined);

    expect(g.adjacencyList).toEqual({
      Aspen: [],
      Tokyo: ['Hong Kong', 'Paris'],
      Kyoto: [],
      Paris: ['Tokyo'],
      ['Hong Kong']: ['Tokyo']
    });
  });

  test('Test dfsRecursive, dfsRecursive2 and dfsIterative method', () => {
    const g = createGraph();
    const graph2 = new Graph();

    expect(g.dfsRecursive('A')).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
    expect(g.dfsRecursive2('A')).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
    expect(g.dfsIterative('A')).toEqual(['A', 'C', 'E', 'F', 'D', 'B']);

    graph2.addVertex('Dallas');
    graph2.addVertex('Tokyo');
    graph2.addVertex('Aspen');
    graph2.addVertex('Hong Kong');
    graph2.addVertex('Paris');
    graph2.addVertex('Kyoto');

    expect(graph2.adjacencyList).toEqual({
      Aspen: [],
      Dallas: [],
      Kyoto: [],
      Paris: [],
      ['Hong Kong']: [],
      Tokyo: []
    });

    graph2.addEdge('Dallas', 'Tokyo');
    graph2.addEdge('Dallas', 'Aspen');
    graph2.addEdge('Dallas', 'Kyoto');
    graph2.addEdge('Hong Kong', 'Dallas');
    graph2.addEdge('Paris', 'Dallas');
    graph2.addEdge('Hong Kong', 'Tokyo');
    graph2.addEdge('Tokyo', 'Paris');

    expect(graph2.adjacencyList).toEqual({
      Aspen: ['Dallas'],
      Dallas: ['Tokyo', 'Aspen', 'Kyoto', 'Hong Kong', 'Paris'],
      Tokyo: ['Dallas', 'Hong Kong', 'Paris'],
      Kyoto: ['Dallas'],
      Paris: ['Dallas', 'Tokyo'],
      ['Hong Kong']: ['Dallas', 'Tokyo']
    });

    expect(graph2.dfsRecursive('Kyoto')).toEqual([
      'Kyoto',
      'Dallas',
      'Tokyo',
      'Hong Kong',
      'Paris',
      'Aspen'
    ]);
    expect(graph2.dfsRecursive2('Kyoto')).toEqual([
      'Kyoto',
      'Dallas',
      'Tokyo',
      'Hong Kong',
      'Paris',
      'Aspen'
    ]);
    expect(graph2.dfsIterative('Kyoto')).toEqual([
      'Kyoto',
      'Dallas',
      'Paris',
      'Hong Kong',
      'Aspen',
      'Tokyo'
    ]);
  });

  test('Test BREADTH Search', () => {
    const g = createGraph();
    const graph2 = createGraph2();

    expect(g.bfs('A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
    expect(graph2.bfs('A')).toEqual(['A', 'B', 'E', 'C', 'D', 'F']);
  });
});
