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
});
