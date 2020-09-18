import DoublyLinkedLists from './DoublyLinkedLists';

describe('DoublyLinkedLists', () => {
  test('Test Push method', () => {
    const testList = new DoublyLinkedLists();

    expect(testList.push('1')).toEqual({
      head: { prev: null, next: null, val: '1' },
      length: 1,
      tail: { prev: null, next: null, val: '1' }
    });

    // we can not test this because the there is a infinite loop
    // where the values next to each other link to each
    testList.push(2);
    expect(testList.head.val).toEqual('1');
    expect(testList.head.next.val).toEqual(2);
    expect(testList.head.next.next).toEqual(null);
    expect(testList.head.prev).toEqual(null);
    expect(testList.tail.val).toEqual(2);
    expect(testList.tail.prev.val).toEqual('1');
    expect(testList.tail.prev.prev).toEqual(null);
    expect(testList.tail.next).toEqual(null);
    expect(testList.length).toEqual(2);

    testList.push([3]);
    expect(testList.head.prev).toEqual(null);
    expect(testList.head.val).toEqual('1');
    expect(testList.head.next.val).toEqual(2);
    expect(testList.head.next.next.val).toEqual([3]);
    expect(testList.head.next.next.next).toEqual(null);
    expect(testList.tail.val).toEqual([3]);
    expect(testList.tail.prev.val).toEqual(2);
    expect(testList.tail.prev.prev.val).toEqual('1');
    expect(testList.tail.prev.prev.prev).toEqual(null);
    expect(testList.tail.next).toEqual(null);
    expect(testList.length).toEqual(3);
  });

  test('Test Pop method', () => {
    const testList = new DoublyLinkedLists();

    expect(testList.pop()).toEqual(undefined);

    expect(testList.push('1')).toEqual({
      head: { prev: null, next: null, val: '1' },
      length: 1,
      tail: { prev: null, next: null, val: '1' }
    });
    expect(testList.pop()).toEqual({ prev: null, next: null, val: '1' });
    expect(testList).toEqual({
      head: null,
      length: 0,
      tail: null
    });

    expect(testList.push('1')).toEqual({
      head: { prev: null, next: null, val: '1' },
      length: 1,
      tail: { prev: null, next: null, val: '1' }
    });

    // we can not test this because the there is a infinite loop
    // where the values next to each other link to each
    testList.push(2);
    expect(testList.head.val).toEqual('1');
    expect(testList.head.next.val).toEqual(2);
    expect(testList.head.next.next).toEqual(null);
    expect(testList.head.prev).toEqual(null);
    expect(testList.tail.val).toEqual(2);
    expect(testList.tail.prev.val).toEqual('1');
    expect(testList.tail.prev.prev).toEqual(null);
    expect(testList.tail.next).toEqual(null);
    expect(testList.length).toEqual(2);

    expect(testList.pop()).toEqual({
      prev: null,
      next: null,
      val: 2
    });

    expect(testList).toEqual({
      head: { prev: null, next: null, val: '1' },
      length: 1,
      tail: { prev: null, next: null, val: '1' }
    });
  });

  test('Test Shift method', () => {
    const testList = new DoublyLinkedLists();

    expect(testList.shift()).toEqual(undefined);

    expect(testList.push('first')).toEqual({
      head: { prev: null, next: null, val: 'first' },
      length: 1,
      tail: { prev: null, next: null, val: 'first' }
    });
    expect(testList.shift()).toEqual({ prev: null, next: null, val: 'first' });
    expect(testList).toEqual({
      head: null,
      length: 0,
      tail: null
    });

    expect(testList.push('1')).toEqual({
      head: { prev: null, next: null, val: '1' },
      length: 1,
      tail: { prev: null, next: null, val: '1' }
    });
    // we can not test this because the there is a infinite loop
    // where the values next to each other link to each
    testList.push(2);
    expect(testList.shift()).toEqual({ prev: null, next: null, val: '1' });
    expect(testList).toEqual({
      head: { prev: null, next: null, val: 2 },
      length: 1,
      tail: { prev: null, next: null, val: 2 }
    });

    testList.push('three');
    testList.push([4]);
    expect(testList.shift()).toEqual({ prev: null, next: null, val: 2 });
    expect(testList.head.val).toEqual('three');
    expect(testList.head.prev).toEqual(null);
    expect(testList.head.next.val).toEqual([4]);
    expect(testList.head.next.next).toEqual(null);
    expect(testList.tail.val).toEqual([4]);
    expect(testList.tail.next).toEqual(null);
    expect(testList.tail.prev.val).toEqual('three');
    expect(testList.tail.prev.prev).toEqual(null);
  });

  test('Test Unshift method', () => {
    const testList = new DoublyLinkedLists();
    expect(testList.unshift('1')).toEqual({
      head: { prev: null, next: null, val: '1' },
      length: 1,
      tail: { prev: null, next: null, val: '1' }
    });

    // we can not test this because the there is a infinite loop
    // where the values next to each other link to each
    testList.unshift('first');
    expect(testList.head.val).toEqual('first');
    expect(testList.head.next.val).toEqual('1');
    expect(testList.head.next.next).toEqual(null);
    expect(testList.head.prev).toEqual(null);
    expect(testList.tail.val).toEqual('1');
    expect(testList.tail.prev.val).toEqual('first');
    expect(testList.tail.prev.prev).toEqual(null);
    expect(testList.tail.next).toEqual(null);
    expect(testList.length).toEqual(2);

    testList.unshift("I'm");
    expect(testList.head.val).toEqual("I'm");
    expect(testList.head.next.val).toEqual('first');
    expect(testList.head.next.next.val).toEqual('1');
    expect(testList.head.next.next.next).toEqual(null);
    expect(testList.head.prev).toEqual(null);
    expect(testList.tail.val).toEqual('1');
    expect(testList.tail.prev.val).toEqual('first');
    expect(testList.tail.prev.prev.val).toEqual("I'm");
    expect(testList.tail.prev.prev.prev).toEqual(null);
    expect(testList.tail.next).toEqual(null);
    expect(testList.length).toEqual(3);
  });

  test('Test Get method', () => {
    const testList = new DoublyLinkedLists();

    expect(testList.get(0)).toEqual(undefined);
    expect(testList.push('1')).toEqual({
      head: { prev: null, next: null, val: '1' },
      length: 1,
      tail: { prev: null, next: null, val: '1' }
    });
    // we can not test this because the there is a infinite loop
    // where the values next to each other link to each
    testList.push(2);

    expect(testList.get(3)).toEqual(undefined);
    expect(testList.get(2)).toEqual(undefined);
    expect(testList.get(100)).toEqual(undefined);
    expect(testList.get('0')).toEqual(new Error('pass a "number" as an argument'));

    testList.push('three');
    testList.push([4]);
    testList.push({ five: true });

    const get0 = testList.get(0);
    expect(get0.val).toEqual('1');
    expect(get0.prev).toEqual(null);
    expect(get0.next.val).toEqual(2);
    expect(get0.next.next.val).toEqual('three');
    expect(get0.next.next.next.val).toEqual([4]);
    expect(get0.next.next.next.next.val).toEqual({ five: true });
    expect(get0.next.next.next.next.next).toEqual(null);

    const get1 = testList.get(1);
    expect(get1.val).toEqual(2);
    expect(get1.next.val).toEqual('three');
    expect(get1.next.next.val).toEqual([4]);
    expect(get1.next.next.next.val).toEqual({ five: true });
    expect(get1.next.next.next.next).toEqual(null);
    expect(get1.prev.val).toEqual('1');
    expect(get1.prev.prev).toEqual(null);

    const get4 = testList.get(3);
    expect(get4.val).toEqual([4]);
    expect(get4.next.val).toEqual({ five: true });
    expect(get4.next.next).toEqual(null);
    expect(get4.prev.val).toEqual('three');
    expect(get4.prev.prev.val).toEqual(2);
    expect(get4.prev.prev.prev.val).toEqual('1');
    expect(get4.prev.prev.prev.prev).toEqual(null);
  });

  test('Test Set method', () => {
    const testList = new DoublyLinkedLists();

    expect(testList.set(0, 'set 0')).toEqual(false);
    expect(testList.set('0', 'set 0')).toEqual(false);

    expect(testList.push('1')).toEqual({
      head: { prev: null, next: null, val: '1' },
      length: 1,
      tail: { prev: null, next: null, val: '1' }
    });
    // we can not test this because the there is a infinite loop
    // where the values next to each other link to each
    testList.push(2);
    testList.push('three');
    testList.push([4]);
    testList.push({ five: true });

    expect(testList.set(0, 'set 0')).toEqual(true);
    expect(testList.get(0).val).toEqual('set 0');

    expect(testList.set(4, 4)).toEqual(true);
    expect(testList.get(4).val).toEqual(4);
  });

  test('Test Set method', () => {
    const testList = new DoublyLinkedLists();

    expect(testList.insert(-10, 'test')).toEqual(false);
    expect(testList.insert(1, 'test')).toEqual(false);

    expect(testList.insert(0, 'first')).toEqual(true);
    expect(testList).toEqual({
      head: { prev: null, next: null, val: 'first' },
      length: 1,
      tail: { prev: null, next: null, val: 'first' }
    });

    expect(testList.insert(1, 'last')).toEqual(true);
    expect(testList.length).toEqual(2);
    expect(testList.head.val).toEqual('first');
    expect(testList.head.prev).toEqual(null);
    expect(testList.head.next.val).toEqual('last');

    expect(testList.tail.val).toEqual('last');
    expect(testList.tail.prev.val).toEqual('first');
    expect(testList.tail.prev.prev).toEqual(null);
    expect(testList.tail.next).toEqual(null);

    expect(testList.insert(1, 'second')).toEqual(true);
    expect(testList.length).toEqual(3);
    expect(testList.head.val).toEqual('first');
    expect(testList.head.prev).toEqual(null);
    expect(testList.head.next.val).toEqual('second');
    expect(testList.head.next.next.val).toEqual('last');
    expect(testList.head.next.next.next).toEqual(null);
    expect(testList.tail.val).toEqual('last');
    expect(testList.tail.next).toEqual(null);
    expect(testList.tail.prev.val).toEqual('second');
    expect(testList.tail.prev.prev.val).toEqual('first');
    expect(testList.tail.prev.prev.prev).toEqual(null);

    expect(testList.insert(2, 4)).toEqual(true);
    expect(testList.length).toEqual(4);
    expect(testList.head.val).toEqual('first');
    expect(testList.head.prev).toEqual(null);
    expect(testList.head.next.val).toEqual('second');
    expect(testList.head.next.next.val).toEqual(4);
    expect(testList.head.next.next.next.val).toEqual('last');
    expect(testList.head.next.next.next.next).toEqual(null);
    expect(testList.tail.val).toEqual('last');
    expect(testList.tail.next).toEqual(null);
    expect(testList.tail.prev.val).toEqual(4);
    expect(testList.tail.prev.prev.val).toEqual('second');
    expect(testList.tail.prev.prev.prev.val).toEqual('first');
    expect(testList.tail.prev.prev.prev.prev).toEqual(null);

    expect(testList.insert(2, { tres: 'si' })).toEqual(true);
    expect(testList.length).toEqual(5);
    expect(testList.head.val).toEqual('first');
    expect(testList.head.prev).toEqual(null);
    expect(testList.head.next.val).toEqual('second');
    expect(testList.head.next.next.val).toEqual({ tres: 'si' });
    expect(testList.head.next.next.next.val).toEqual(4);
    expect(testList.head.next.next.next.next.val).toEqual('last');
    expect(testList.head.next.next.next.next.next).toEqual(null);
    expect(testList.tail.val).toEqual('last');
    expect(testList.tail.next).toEqual(null);
    expect(testList.tail.prev.val).toEqual(4);
    expect(testList.tail.prev.prev.val).toEqual({ tres: 'si' });
    expect(testList.tail.prev.prev.prev.val).toEqual('second');
    expect(testList.tail.prev.prev.prev.prev.val).toEqual('first');
    expect(testList.tail.prev.prev.prev.prev.prev).toEqual(null);
  });

  test('Test Remove method', () => {
    const testList = new DoublyLinkedLists();

    expect(testList.remove(0)).toEqual(undefined);
    expect(testList.remove(-10)).toEqual(undefined);

    testList.push('0');
    testList.push(1);
    testList.push('remove');
    testList.push({ what: 'what' });
    testList.push('last');

    expect(testList.remove(5)).toEqual(undefined);
    expect(testList.remove('3')).toEqual(undefined);

    expect(testList.remove(2)).toEqual({ prev: null, next: null, val: 'remove' });
    expect(testList.length).toEqual(4);
    expect(testList.head.val).toEqual('0');
    expect(testList.head.prev).toEqual(null);
    expect(testList.head.next.val).toEqual(1);
    expect(testList.head.next.next.val).toEqual({ what: 'what' });
    expect(testList.head.next.next.next.val).toEqual('last');
    expect(testList.head.next.next.next.next).toEqual(null);
    expect(testList.tail.val).toEqual('last');
    expect(testList.tail.next).toEqual(null);
    expect(testList.tail.prev.val).toEqual({ what: 'what' });
    expect(testList.tail.prev.prev.val).toEqual(1);
    expect(testList.tail.prev.prev.prev.val).toEqual('0');
    expect(testList.tail.prev.prev.prev.prev).toEqual(null);

    expect(testList.remove(2)).toEqual({ prev: null, next: null, val: { what: 'what' } });
    expect(testList.length).toEqual(3);
    expect(testList.head.val).toEqual('0');
    expect(testList.head.prev).toEqual(null);
    expect(testList.head.next.val).toEqual(1);
    expect(testList.head.next.next.val).toEqual('last');
    expect(testList.head.next.next.next).toEqual(null);
    expect(testList.tail.val).toEqual('last');
    expect(testList.tail.next).toEqual(null);
    expect(testList.tail.prev.val).toEqual(1);
    expect(testList.tail.prev.prev.val).toEqual('0');
    expect(testList.tail.prev.prev.prev).toEqual(null);

    expect(testList.remove(0)).toEqual({ prev: null, next: null, val: '0' });
    expect(testList.length).toEqual(2);
    expect(testList.head.val).toEqual(1);
    expect(testList.head.prev).toEqual(null);
    expect(testList.head.next.val).toEqual('last');
    expect(testList.head.next.next).toEqual(null);
    expect(testList.tail.val).toEqual('last');
    expect(testList.tail.next).toEqual(null);
    expect(testList.tail.prev.val).toEqual(1);
    expect(testList.tail.prev.prev).toEqual(null);

    expect(testList.remove(1)).toEqual({ prev: null, next: null, val: 'last' });
    expect(testList.length).toEqual(1);
    expect(testList.head.val).toEqual(1);
    expect(testList.head.prev).toEqual(null);
    expect(testList.head.next).toEqual(null);
    expect(testList.tail.val).toEqual(1);
    expect(testList.tail.next).toEqual(null);
    expect(testList.tail.prev).toEqual(null);

    expect(testList.remove(0)).toEqual({ prev: null, next: null, val: 1 });
    expect(testList.length).toEqual(0);
    expect(testList.head).toEqual(null);
    expect(testList.tail).toEqual(null);
  });

  test('Test Reverse 1 method', () => {
    const testList = new DoublyLinkedLists();

    expect(testList.reverse()).toEqual(undefined);
    testList.push('0');
    expect(testList.reverse()).toEqual(undefined);
    testList.push(1);

    const testReverse1 = testList.reverse();

    expect(testReverse1.length).toEqual(2);
    expect(testReverse1.head.prev).toEqual(null);
    expect(testReverse1.head.val).toEqual(1);
    expect(testReverse1.head.next.val).toEqual('0');
    expect(testReverse1.head.next.next).toEqual(null);
    expect(testReverse1.tail.val).toEqual('0');
    expect(testReverse1.tail.next).toEqual(null);
    expect(testReverse1.tail.prev.val).toEqual(1);
    expect(testReverse1.tail.prev.prev).toEqual(null);
  });

  test('Test Reverse 2 method', () => {
    const testList = new DoublyLinkedLists();

    expect(testList.reverse()).toEqual(undefined);
    testList.push('0');
    expect(testList.reverse()).toEqual(undefined);
    testList.push(1);
    testList.push('two');
    testList.push({ three: true });

    const testReverse2 = testList.reverse();

    expect(testReverse2.length).toEqual(4);
    expect(testReverse2.head.prev).toEqual(null);
    expect(testReverse2.head.val).toEqual({ three: true });
    expect(testReverse2.head.next.val).toEqual('two');
    expect(testReverse2.head.next.next.val).toEqual(1);
    expect(testReverse2.head.next.next.next.val).toEqual('0');
    expect(testReverse2.head.next.next.next.next).toEqual(null);
    expect(testReverse2.tail.next).toEqual(null);
    expect(testReverse2.tail.val).toEqual('0');
    expect(testReverse2.tail.prev.val).toEqual(1);
    expect(testReverse2.tail.prev.prev.val).toEqual('two');
    expect(testReverse2.tail.prev.prev.prev.val).toEqual({ three: true });
    expect(testReverse2.tail.prev.prev.prev.prev).toEqual(null);
  });
});
