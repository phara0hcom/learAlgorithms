const { countZeroes, sortedFrequency, findRotatedIndex } = require('./multiPointer');

describe('multiPointer', () => {
  test('countZeroes', () => {
    expect(countZeroes([1, 1, 1, 1, 0, 0])).toEqual(2);
  });

  test('sortedFrequency', () => {
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toEqual(4);
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)).toEqual(1);
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)).toEqual(2);
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)).toEqual(-1);
  });

  test('findRotatedIndex', () => {
    expect(findRotatedIndex([3, 4, 1, 2], 4)).toEqual(1);
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toEqual(2);
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toEqual(6);
    expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)).toEqual(-1);
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)).toEqual(-1);
    expect(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)).toEqual(5);
  });
});
