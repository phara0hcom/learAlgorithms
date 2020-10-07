const { bubbleSort, insertionSort, mergeSort } = require('./section30Sort');

const sortAge = (a, b, test) => {
  console.log({ test, bAge: b.age, aAge: a.age, result: b.age - a.age });
  return b.age - a.age;
};

describe('section 30: Sorting exercise', () => {
  // test('bubbleSort ', () => {
  //   expect(bubbleSort([4, 20, 12, 10, 7, 9])).toEqual([4, 7, 9, 10, 12, 20]);
  //   expect(bubbleSort([0, -10, 7, 4])).toEqual([-10, 0, 4, 7]);
  //   expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  //   expect(bubbleSort([])).toEqual([]);

  //   expect(bubbleSort(['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'])).toEqual([
  //     'Blue',
  //     'Garfield',
  //     'Grumpy',
  //     'Heathcliff',
  //     'LilBub'
  //   ]);

  //   expect(
  //     bubbleSort(
  //       [
  //         { name: 'LilBub', age: 7 },
  //         { name: 'Garfield', age: 40 },
  //         { name: 'Heathcliff', age: 45 },
  //         { name: 'Blue', age: 1 },
  //         { name: 'Grumpy', age: 6 }
  //       ],
  //       sortAge
  //     )
  //   ).toEqual([
  //     { name: 'Heathcliff', age: 45 },
  //     { name: 'Garfield', age: 40 },
  //     { name: 'LilBub', age: 7 },
  //     { name: 'Grumpy', age: 6 },
  //     { name: 'Blue', age: 1 }
  //   ]);
  // });

  test('insertionSort ', () => {
    // expect(insertionSort([4, 20, 12, 10, 7, 9])).toEqual([4, 7, 9, 10, 12, 20]);
    // expect(insertionSort([0, -10, 7, 4])).toEqual([-10, 0, 4, 7]);
    // expect(insertionSort([1, 2, 3])).toEqual([1, 2, 3]);
    // expect(insertionSort([])).toEqual([]);

    // expect(insertionSort(['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'])).toEqual([
    //   'Blue',
    //   'Garfield',
    //   'Grumpy',
    //   'Heathcliff',
    //   'LilBub'
    // ]);

    expect(
      insertionSort(
        [
          { name: 'LilBub', age: 7 },
          { name: 'Garfield', age: 40 },
          { name: 'Heathcliff', age: 45 },
          { name: 'Blue', age: 1 },
          { name: 'Grumpy', age: 6 }
        ],
        sortAge
      )
    ).toEqual([
      { name: 'Heathcliff', age: 45 },
      { name: 'Garfield', age: 40 },
      { name: 'LilBub', age: 7 },
      { name: 'Grumpy', age: 6 },
      { name: 'Blue', age: 1 }
    ]);
  });

  test('mergeSort ', () => {
    expect(mergeSort([4, 20, 12, 10, 7, 9])).toEqual([4, 7, 9, 10, 12, 20]);
    expect(mergeSort([0, -10, 7, 4])).toEqual([-10, 0, 4, 7]);
    expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(mergeSort([])).toEqual([]);

    expect(mergeSort(['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'])).toEqual([
      'Blue',
      'Garfield',
      'Grumpy',
      'Heathcliff',
      'LilBub'
    ]);

    expect(
      mergeSort(
        [
          { name: 'LilBub', age: 7 },
          { name: 'Garfield', age: 40 },
          { name: 'Heathcliff', age: 45 },
          { name: 'Blue', age: 1 },
          { name: 'Grumpy', age: 6 }
        ],
        sortAge
      )
    ).toEqual([
      { name: 'Heathcliff', age: 45 },
      { name: 'Garfield', age: 40 },
      { name: 'LilBub', age: 7 },
      { name: 'Grumpy', age: 6 },
      { name: 'Blue', age: 1 }
    ]);
  });
});
