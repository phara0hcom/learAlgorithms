import Graph from './Graph';

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
});
