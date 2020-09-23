const { getDigit, digitCount, mostDigits, radixSort } = require('./radixSort');

describe('Radix Sort Algorithms', () => {
  test('getDigit', () => {
    expect(getDigit(12345, 0)).toEqual(5);
    expect(getDigit(12345, 1)).toEqual(4);
    expect(getDigit(12345, 2)).toEqual(3);
    expect(getDigit(12345, 3)).toEqual(2);
    expect(getDigit(12345, 4)).toEqual(1);
    expect(getDigit(12345, 5)).toEqual(0);
  });

  test('digitCount', () => {
    expect(digitCount(12345)).toEqual(5);
    expect(digitCount(15)).toEqual(2);
    expect(digitCount(-15)).toEqual(2);
    expect(digitCount(-949590315)).toEqual(9);
    expect(digitCount(949590315)).toEqual(9);
    expect(digitCount(100001)).toEqual(6);
    expect(digitCount(0)).toEqual(1);
  });

  test('mostDigits', () => {
    expect(mostDigits([1234, 56, 7])).toEqual(4);
    expect(mostDigits([1, 1, 11111, 1])).toEqual(5);
    expect(mostDigits([12, 34, 56, 78])).toEqual(2);
  });

  test('Radix Sort', () => {
    expect(radixSort([1, 4, 10, 40, 9, 33])).toEqual([1, 4, 9, 10, 33, 40]);
    expect(radixSort([4, 7, 11, 5, 8, 9, 10, 1])).toEqual([1, 4, 5, 7, 8, 9, 10, 11]);
    expect(radixSort([10, 50, 2, 1, 14, 99, 100])).toEqual([1, 2, 10, 14, 50, 99, 100]);
  });
});
