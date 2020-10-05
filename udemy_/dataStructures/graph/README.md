# Graph

## What is a Graph

A **graph data structure** consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected **graph** or a set of ordered pairs for a directed **graph**.

Nodes with connections.

## Where to use them

- Social Networks
- Location / Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- Recommendations
- EVERYWHERE!

## ESSENTIAL GRAPH TERMS

- Vertex - a node
- Edge - connection between nodes
- Weighted/Unweighted - values assigned to the Edges (connections) like distance etc / no value
- Directed/Undirected - directions assigned to the Edges (connections) / Edges works both ways

## How to store connections

Different ways of storing the connections between Nodes/Vertex's

### ADJACENCY MATRIX

|       | **A** | **B** | **C** | **D** |
| ----- | ----- | ----- | ----- | ----- |
| **A** | 0     | **1** | 0     | 0     |
| **B** | **1** | 0     | **1** | 0     |
| **C** | 0     | **1** | 0     | **1** |
| **D** | 0     | 0     | **1** | 0     |

### ADJACENCY LIST

```javaScript
[
 [1,5], // 0
 [0,2], // 1
 [1,3], // 2
 [2,4], // 3
 [3,5], // 4
 [4,0]  // 5
]
```

As an object:

```javaScript
{
    A: ["B", "F"],
    B: ["A", "C"],
    C: ["B", "D"],
    D: ["C", "E"],
    E: ["D", "F"],
    F: ["E", "A"]
}
```

### DIFFERENCES & BIG O

**V** = number of vertices

**E** = number of edges
| OPERATION | ADJACENCY LIST | ADJACENCY MATRIX |
|--- |--- |--- |
| Add Vertex | `O(1)` | ​`O( V^2 )` |
| Add Edge | `O(1)` | `O(1)` |
| Remove Vertex |`O(V + E )`| `O( V^2 )` |
| Remove Edge |`O( E )` | `O(1)` |
| Query |`O(V + E )`| `O(1)` |
| Storage |`O(V + E )`| `O( V^2 )` |

### Adjacency List

- <span style="color:green">Can take up less space (in sparse graphs)</span>
- <span style="color:green">Faster to iterate over all edges</span>
- <span style="color:red">Can be slower to lookup specific edge</span>

### Adjacency Matrix

- <span style="color:red">Takes up more space (in sparse graphs)</span>
- <span style="color:red">Slower to iterate over all edges</span>
- <span style="color:green">Faster to lookup specific edge</span>
