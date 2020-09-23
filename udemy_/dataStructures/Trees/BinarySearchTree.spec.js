import BinarySearchTree from './BinarySearchTree';

describe('BinarySearchTree', () => {
  test('Test Insert method', () => {
    const tree = new BinarySearchTree();

    expect(tree).toEqual({ root: null });

    expect(tree.insert(10)).toEqual({ root: { value: 10, left: null, right: null } });
    expect(tree.insert(15)).toEqual({
      root: { value: 10, left: null, right: { value: 15, left: null, right: null } }
    });
    expect(tree.insert(20)).toEqual({
      root: {
        value: 10,
        left: null,
        right: { value: 15, left: null, right: { value: 20, left: null, right: null } }
      }
    });
    expect(tree.insert(15)).toEqual(undefined);
    expect(tree.insert(6)).toEqual({
      root: {
        value: 10,
        left: { value: 6, left: null, right: null },
        right: { value: 15, left: null, right: { value: 20, left: null, right: null } }
      }
    });
    expect(tree.insert(8)).toEqual({
      root: {
        value: 10,
        left: { value: 6, left: null, right: { value: 8, left: null, right: null } },
        right: { value: 15, left: null, right: { value: 20, left: null, right: null } }
      }
    });
    expect(tree.insert(6)).toEqual(undefined);

    expect(tree.insert(3)).toEqual({
      root: {
        value: 10,
        left: {
          value: 6,
          left: { value: 3, left: null, right: null },
          right: { value: 8, left: null, right: null }
        },
        right: { value: 15, left: null, right: { value: 20, left: null, right: null } }
      }
    });

    expect(tree.insert(13)).toEqual({
      root: {
        value: 10,
        left: {
          value: 6,
          left: { value: 3, left: null, right: null },
          right: { value: 8, left: null, right: null }
        },
        right: {
          value: 15,
          left: { value: 13, left: null, right: null },
          right: { value: 20, left: null, right: null }
        }
      }
    });
  });

  test('Test Find method', () => {
    const tree = new BinarySearchTree();

    expect(tree).toEqual({ root: null });
    expect(tree.find(10)).toEqual(undefined);

    tree.insert(10);
    tree.insert(15);
    tree.insert(20);
    tree.insert(6);
    tree.insert(8);
    tree.insert(3);
    tree.insert(13);

    expect(tree.find(10)).toEqual({
      value: 10,
      left: {
        value: 6,
        left: { value: 3, left: null, right: null },
        right: { value: 8, left: null, right: null }
      },
      right: {
        value: 15,
        left: { value: 13, left: null, right: null },
        right: { value: 20, left: null, right: null }
      }
    });
    expect(tree.find(15)).toEqual({
      value: 15,
      left: { value: 13, left: null, right: null },
      right: { value: 20, left: null, right: null }
    });
    expect(tree.find(3)).toEqual({ value: 3, left: null, right: null });
    expect(tree.find(28)).toEqual(false);
    expect(tree.find(2)).toEqual(false);
  });

  test('Test Find method', () => {
    const tree = new BinarySearchTree();

    expect(tree).toEqual({ root: null });
    expect(tree.contains(10)).toEqual(false);

    tree.insert(10);
    tree.insert(15);
    tree.insert(20);
    tree.insert(6);
    tree.insert(8);
    tree.insert(3);
    tree.insert(13);

    expect(tree.contains(10)).toEqual(true);
    expect(tree.contains(15)).toEqual(true);
    expect(tree.contains(3)).toEqual(true);
    expect(tree.contains(28)).toEqual(false);
    expect(tree.contains(2)).toEqual(false);
  });

  test('Test Breadth First Search method', () => {
    const tree = new BinarySearchTree();

    expect(tree).toEqual({ root: null });

    expect(tree.breadthFirstSearch()).toEqual(undefined);

    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);

    expect(tree.breadthFirstSearch()).toEqual([10, 6, 15, 3, 8, 20]);

    tree.insert(14);
    expect(tree.breadthFirstSearch()).toEqual([10, 6, 15, 3, 8, 14, 20]);
  });

  test('Test Depth First Search Pre Order method', () => {
    const tree = new BinarySearchTree();

    expect(tree).toEqual({ root: null });

    expect(tree.depthFirstSearchPreOrder()).toEqual(undefined);

    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);

    expect(tree.depthFirstSearchPreOrder()).toEqual([10, 6, 3, 8, 15, 20]);

    tree.insert(14);
    expect(tree.depthFirstSearchPreOrder()).toEqual([10, 6, 3, 8, 15, 14, 20]);
  });

  test("Test Tamer's Depth First Search Pre Order method", () => {
    const tree = new BinarySearchTree();

    expect(tree).toEqual({ root: null });

    expect(tree.DFSPreOrder()).toEqual(undefined);

    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);

    expect(tree.DFSPreOrder()).toEqual([10, 6, 3, 8, 15, 20]);

    tree.insert(14);
    expect(tree.DFSPreOrder()).toEqual([10, 6, 3, 8, 15, 14, 20]);
  });

  test("Test Tamer's Depth First Search Pre Order method", () => {
    const tree = new BinarySearchTree();

    expect(tree).toEqual({ root: null });

    expect(tree.depthFirstSearchPostOrder()).toEqual(undefined);

    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);

    expect(tree.depthFirstSearchPostOrder()).toEqual([3, 8, 6, 20, 15, 10]);

    tree.insert(14);
    expect(tree.depthFirstSearchPostOrder()).toEqual([3, 8, 6, 14, 20, 15, 10]);
  });

  test('Test Depth First Search In Order method', () => {
    const tree = new BinarySearchTree();

    expect(tree).toEqual({ root: null });

    expect(tree.depthFirstSearchInOrder()).toEqual(undefined);

    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);

    expect(tree.depthFirstSearchInOrder()).toEqual([3, 6, 8, 10, 15, 20]);
    tree.insert(14);
    expect(tree.depthFirstSearchInOrder()).toEqual([3, 6, 8, 10, 14, 15, 20]);
  });
});
