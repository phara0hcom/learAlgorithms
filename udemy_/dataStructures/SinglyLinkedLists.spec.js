import SinglyLinkedLists from './SinglyLinkedLists';

describe('SinglyLinkedLists', () => {
  test('Test Push method', () => {
    const testList = new SinglyLinkedLists();
    expect(testList.head).toEqual(null);
    expect(testList.tail).toEqual(null);
    expect(testList.length).toEqual(0);

    expect(testList.push('1')).toEqual({
      head: { next: null, val: '1' },
      length: 1,
      tail: { next: null, val: '1' }
    });

    expect(testList.push('2')).toEqual({
      head: { next: { next: null, val: '2' }, val: '1' },
      length: 2,
      tail: { next: null, val: '2' }
    });

    expect(testList.push('three')).toEqual({
      head: { next: { next: { next: null, val: 'three' }, val: '2' }, val: '1' },
      length: 3,
      tail: { next: null, val: 'three' }
    });
  });

  test('Test Pop method', () => {
    const testList = new SinglyLinkedLists();

    expect(testList.pop()).toEqual(undefined);

    expect(testList.push('1')).toEqual({
      head: { next: null, val: '1' },
      length: 1,
      tail: { next: null, val: '1' }
    });
    expect(testList.pop()).toEqual({ next: null, val: '1' });
    expect(testList.head).toEqual(null);
    expect(testList.tail).toEqual(null);
    expect(testList.length).toEqual(0);

    expect(testList.push('1')).toEqual({
      head: { next: null, val: '1' },
      length: 1,
      tail: { next: null, val: '1' }
    });
    expect(testList.push('2')).toEqual({
      head: { next: { next: null, val: '2' }, val: '1' },
      length: 2,
      tail: { next: null, val: '2' }
    });
    expect(testList.pop()).toEqual({ next: null, val: '2' });
    expect(testList).toEqual({
      head: { next: null, val: '1' },
      length: 1,
      tail: { next: null, val: '1' }
    });
  });

  test('Test Shift method', () => {
    const testList = new SinglyLinkedLists();

    expect(testList.shift()).toEqual(undefined);

    expect(testList.push('1')).toEqual({
      head: { next: null, val: '1' },
      length: 1,
      tail: { next: null, val: '1' }
    });
    expect(testList.shift()).toEqual({ next: null, val: '1' });
    expect(testList).toEqual({
      head: null,
      length: 0,
      tail: null
    });

    expect(testList.push('1')).toEqual({
      head: { next: null, val: '1' },
      length: 1,
      tail: { next: null, val: '1' }
    });
    expect(testList.push('2')).toEqual({
      head: { next: { next: null, val: '2' }, val: '1' },
      length: 2,
      tail: { next: null, val: '2' }
    });
    expect(testList.shift()).toEqual({ next: { next: null, val: '2' }, val: '1' });
    expect(testList).toEqual({
      head: { next: null, val: '2' },
      length: 1,
      tail: { next: null, val: '2' }
    });

    expect(testList.push(3)).toEqual({
      head: { next: { next: null, val: 3 }, val: '2' },
      length: 2,
      tail: { next: null, val: 3 }
    });
    expect(testList.push('four')).toEqual({
      head: { next: { next: { next: null, val: 'four' }, val: 3 }, val: '2' },
      length: 3,
      tail: { next: null, val: 'four' }
    });

    expect(testList.shift()).toEqual({
      next: { next: { next: null, val: 'four' }, val: 3 },
      val: '2'
    });
    expect(testList).toEqual({
      head: { next: { next: null, val: 'four' }, val: 3 },
      length: 2,
      tail: { next: null, val: 'four' }
    });
  });

  test('Test Un-Shift method', () => {
    const testList = new SinglyLinkedLists();

    expect(testList.unshift('well')).toEqual({
      head: { next: null, val: 'well' },
      length: 1,
      tail: { next: null, val: 'well' }
    });

    expect(testList.unshift('it')).toEqual({
      head: { next: { next: null, val: 'well' }, val: 'it' },
      length: 2,
      tail: { next: null, val: 'well' }
    });

    expect(testList.unshift('test')).toEqual({
      head: { next: { next: { next: null, val: 'well' }, val: 'it' }, val: 'test' },
      length: 3,
      tail: { next: null, val: 'well' }
    });
  });

  test('Test Get method', () => {
    const testList = new SinglyLinkedLists();

    expect(testList.get(0)).toEqual(undefined);
    expect(testList.get('1')).toEqual(new Error('pass a "number" as an argument'));
    expect(testList.get('one')).toEqual(new Error('pass a "number" as an argument'));
    expect(testList.get({ val: 1 })).toEqual(new Error('pass a "number" as an argument'));

    expect(testList.push('1')).toEqual({
      head: { next: null, val: '1' },
      length: 1,
      tail: { next: null, val: '1' }
    });
    expect(testList.push('2')).toEqual({
      head: { next: { next: null, val: '2' }, val: '1' },
      length: 2,
      tail: { next: null, val: '2' }
    });
    expect(testList.get(3)).toEqual(undefined);
    expect(testList.get(30)).toEqual(undefined);
    expect(testList.get(0)).toEqual({ next: { next: null, val: '2' }, val: '1' });
    expect(testList.get(1)).toEqual({ next: null, val: '2' });
  });

  test('Test Set method', () => {
    const testList = new SinglyLinkedLists();

    expect(testList.set(0, 'set 1')).toEqual(false);
    expect(testList.set(10, 'set 1')).toEqual(false);

    expect(testList.push('1')).toEqual({
      head: { next: null, val: '1' },
      length: 1,
      tail: { next: null, val: '1' }
    });
    expect(testList.push('2')).toEqual({
      head: { next: { next: null, val: '2' }, val: '1' },
      length: 2,
      tail: { next: null, val: '2' }
    });
    expect(testList.set('1', 'set 1')).toEqual(false);
    expect(testList.set({ val: 1 }, 'set 1')).toEqual(false);

    expect(testList.set(1, 'set 1')).toEqual(true);
    expect(testList).toEqual({
      head: { next: { next: null, val: 'set 1' }, val: '1' },
      length: 2,
      tail: { next: null, val: 'set 1' }
    });

    expect(testList.set(0, 'index 0')).toEqual(true);
    expect(testList).toEqual({
      head: { next: { next: null, val: 'set 1' }, val: 'index 0' },
      length: 2,
      tail: { next: null, val: 'set 1' }
    });
  });

  test('Test Insert method', () => {
    const testList = new SinglyLinkedLists();

    expect(testList.insert('index 2', 'insert "2"')).toEqual(false);
    expect(testList.insert(10, 'insert 10')).toEqual(false);

    expect(testList.insert(0, 'insert 0')).toEqual(true);
    expect(testList).toEqual({
      head: { next: null, val: 'insert 0' },
      length: 1,
      tail: { next: null, val: 'insert 0' }
    });

    expect(testList.insert(1, 'insert 1')).toEqual(true);
    expect(testList).toEqual({
      head: { next: { next: null, val: 'insert 1' }, val: 'insert 0' },
      length: 2,
      tail: { next: null, val: 'insert 1' }
    });

    expect(testList.insert(3, 'insert 2')).toEqual(false);
    expect(testList.insert('2', 'insert "2"')).toEqual(false);

    expect(testList.insert(0, 'new head')).toEqual(true);
    expect(testList).toEqual({
      head: { next: { next: { next: null, val: 'insert 1' }, val: 'insert 0' }, val: 'new head' },
      length: 3,
      tail: { next: null, val: 'insert 1' }
    });

    expect(testList.insert(1, 1)).toEqual(true);
    expect(testList).toEqual({
      head: {
        next: { next: { next: { next: null, val: 'insert 1' }, val: 'insert 0' }, val: 1 },
        val: 'new head'
      },
      length: 4,
      tail: { next: null, val: 'insert 1' }
    });
  });

  test('Test Remove method', () => {
    const testList = new SinglyLinkedLists();

    expect(testList.remove(0)).toEqual(undefined);
    expect(testList.remove(10)).toEqual(undefined);
    expect(testList.remove('0')).toEqual(undefined);

    expect(testList.push('1')).toEqual({
      head: { next: null, val: '1' },
      length: 1,
      tail: { next: null, val: '1' }
    });
    expect(testList.remove(1)).toEqual(undefined);
    expect(testList.remove(0)).toEqual({ next: null, val: '1' });
    expect(testList).toEqual({
      head: null,
      length: 0,
      tail: null
    });

    expect(testList.push('1')).toEqual({
      head: { next: null, val: '1' },
      length: 1,
      tail: { next: null, val: '1' }
    });
    expect(testList.push('2')).toEqual({
      head: { next: { next: null, val: '2' }, val: '1' },
      length: 2,
      tail: { next: null, val: '2' }
    });

    expect(testList.remove(3)).toEqual(undefined);
    expect(testList.remove(2)).toEqual(undefined);
    expect(testList.remove(0)).toEqual({ next: { next: null, val: '2' }, val: '1' });
    expect(testList).toEqual({
      head: { next: null, val: '2' },
      length: 1,
      tail: { next: null, val: '2' }
    });
    expect(testList.remove(0)).toEqual({ next: null, val: '2' });
    expect(testList).toEqual({
      head: null,
      length: 0,
      tail: null
    });
  });

  test('Test Reverse method', () => {
    const testList = new SinglyLinkedLists();

    expect(testList.reverse()).toEqual(undefined);

    expect(testList.push('1')).toEqual({
      head: { next: null, val: '1' },
      length: 1,
      tail: { next: null, val: '1' }
    });

    expect(testList.reverse()).toEqual(undefined);

    expect(testList.push('2')).toEqual({
      head: { next: { next: null, val: '2' }, val: '1' },
      length: 2,
      tail: { next: null, val: '2' }
    });

    expect(testList.push('three')).toEqual({
      head: { next: { next: { next: null, val: 'three' }, val: '2' }, val: '1' },
      length: 3,
      tail: { next: null, val: 'three' }
    });

    expect(testList.reverse()).toEqual({
      head: { next: { next: { next: null, val: '1' }, val: '2' }, val: 'three' },
      length: 3,
      tail: { next: null, val: '1' }
    });

    expect(testList.unshift(4)).toEqual({
      head: { next: { next: { next: { next: null, val: '1' }, val: '2' }, val: 'three' }, val: 4 },
      length: 4,
      tail: { next: null, val: '1' }
    });

    expect(testList.reverse()).toEqual({
      head: { next: { next: { next: { next: null, val: 4 }, val: 'three' }, val: '2' }, val: '1' },
      length: 4,
      tail: { next: null, val: 4 }
    });
  });
});
