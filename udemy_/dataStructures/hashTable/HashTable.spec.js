import HashTable from './HashTable';

describe('HashTable', () => {
  test('Test set Method', () => {
    const table = new HashTable(5);

    table.set('apple', 'green');
    table.set('hi', 'bye');
    table.set('dogs', 'woof');
    table.set('cats', 'meow');

    expect(table.keyMap).toEqual([
      [
        { key: 'apple', value: 'green' },
        { key: 'dogs', value: 'woof' }
      ],
      undefined,
      [{ key: 'hi', value: 'bye' }],
      [{ key: 'cats', value: 'meow' }],
      undefined
    ]);
  });

  test('Test get Method', () => {
    const table = new HashTable(5);

    table.set('apple', 'green');
    table.set('hi', 'bye');
    table.set('dogs', 'woof');
    table.set('cats', 'meow');

    expect(table.keyMap).toEqual([
      [
        { key: 'apple', value: 'green' },
        { key: 'dogs', value: 'woof' }
      ],
      undefined,
      [{ key: 'hi', value: 'bye' }],
      [{ key: 'cats', value: 'meow' }],
      undefined
    ]);

    expect(table.get('')).toEqual(undefined);
    expect(table.get('hi')).toEqual('bye');
    expect(table.get('cats')).toEqual('meow');
    expect(table.get('apple')).toEqual('green');
    expect(table.get('dogs')).toEqual('woof');
    expect(table.get('test')).toEqual(undefined);
  });

  test('Test values Method', () => {
    const table = new HashTable(5);

    table.set('apple', 'green');
    table.set('pear', 'green');
    table.set('hi', 'bye');
    table.set('dogs', 'woof');
    table.set('cats', 'meow');

    expect(table.values()).toEqual(['green', 'woof', 'bye', 'meow']);
  });

  test('Test values Method', () => {
    const table = new HashTable(5);

    table.set('apple', 'green');
    table.set('pear', 'green');
    table.set('hi', 'bye');
    table.set('dogs', 'woof');
    table.set('cats', 'meow');

    expect(table.keys()).toEqual(['apple', 'pear', 'dogs', 'hi', 'cats']);
  });
});
