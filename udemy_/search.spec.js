import { linearSearch, binarySearch, naiveStringSearch, kmpSearch } from './search';
const testArr = [5, 8, 1, 100, 12, 3, 17];
const testArrSorted = [1, 3, 5, 8, 12, 17, 100];

describe('Search Algorithms', () => {
  test('linear search should find', () => {
    expect(linearSearch(testArr, 12)).toEqual(4);
    expect(linearSearch(testArr, 99)).toEqual(-1);
    expect(linearSearch(testArr, 1)).toEqual(2);
    expect(linearSearch(testArr, 17)).toEqual(6);
    expect(linearSearch([100], 100)).toEqual(0);
    expect(linearSearch([100], 200)).toEqual(-1);
  });

  test('binary search should find', () => {
    expect(binarySearch(testArrSorted, 12)).toEqual(4);
    expect(binarySearch(testArrSorted, 99)).toEqual(-1);
    expect(binarySearch(testArrSorted, 1)).toEqual(0);
    expect(binarySearch(testArrSorted, 17)).toEqual(5);
    expect(binarySearch([100], 100)).toEqual(0);
    expect(binarySearch([100], 200)).toEqual(-1);
  });

  test('naiveStringSearch search should find', () => {
    expect(naiveStringSearch('wowomgzomg', 'omg')).toEqual(2);
    expect(naiveStringSearch('wowoomgzomomg', 'omg')).toEqual(2);
    expect(naiveStringSearch('aaaaab', 'aaab')).toEqual(1);
  });

  test('kmpSearch', () => {
    expect(kmpSearch('wowomgzomg', 'omg')).toEqual(true);
    expect(kmpSearch('wowoomgzomomg', 'omg')).toEqual(true);
    expect(kmpSearch('wowoomgzomomg', 'omx')).toEqual(false);
    expect(kmpSearch('aaaaab', 'aaab')).toEqual(true);
    expect(kmpSearch('adsgwadsxdsgwadsgz', 'dsgwadsgz')).toEqual(true);
  });
});
