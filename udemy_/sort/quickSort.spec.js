import { pivot, quickSort } from './quickSort';

describe('Quick Sort Algorithms', () => {
  test('Test pivot', () => {
    expect(pivot([5, 4, 1, 7, 11, 8, 9, 10])).toEqual(2);
    expect(pivot([10, 50, 2, 8, 14, 99, 6, 100])).toEqual(3);
  });

  test('Test Quick Sort', () => {
    expect(quickSort([1, 4, 7, 11, 5, 8, 9, 10])).toEqual([1, 4, 5, 7, 8, 9, 10, 11]);
    expect(quickSort([1, 10, 50, 2, 14, 99, 100])).toEqual([1, 2, 10, 14, 50, 99, 100]);
  });
});
