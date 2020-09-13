import { mergeSort, mergingArray } from './mergeSort';

describe('Merge Sort Algorithms', () => {
  test('Test Merging', () => {
    expect(mergingArray([1, 4, 7, 11], [5, 8, 9, 10])).toEqual([1, 4, 5, 7, 8, 9, 10, 11]);
    expect(mergingArray([1, 10, 50], [2, 14, 99, 100])).toEqual([1, 2, 10, 14, 50, 99, 100]);
  });

  test('Test Merge Sort', () => {
    expect(mergeSort([1, 4, 7, 11, 5, 8, 9, 10])).toEqual([1, 4, 5, 7, 8, 9, 10, 11]);
    expect(mergeSort([1, 10, 50, 2, 14, 99, 100])).toEqual([1, 2, 10, 14, 50, 99, 100]);
  });
});
