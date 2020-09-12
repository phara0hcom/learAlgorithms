const { bubbleSort, selectionSort, insertionSort } = require('./sorting');

describe('Sorting Algorithms', () => {
  test('Bubble Sort', () => {
    expect(bubbleSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([5, 1, 2, 3, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([9, 11, 24, 2, 4])).toEqual([2, 4, 9, 11, 24]);
  });

  test('Selection Sort', () => {
    expect(selectionSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([5, 1, 2, 3, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([9, 11, 24, 2, 4])).toEqual([2, 4, 9, 11, 24]);
    expect(selectionSort([1, 2, 3, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  test('Insertion Sort', () => {
    expect(insertionSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionSort([5, 1, 2, 3, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionSort([9, 11, 24, 2, 4])).toEqual([2, 4, 9, 11, 24]);
    expect(insertionSort([1, 2, 3, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
