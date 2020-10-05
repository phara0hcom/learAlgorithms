import { simpleHash, simpleHash2 } from './hashFunctions';

describe('hashFunctions', () => {
  test('Test simpleHash', () => {
    expect(simpleHash('pink', 10)).toEqual(0);
    expect(simpleHash('blue', 10)).toEqual(0);
    expect(simpleHash('red', 10)).toEqual(7);
    expect(simpleHash('bluegreen', 10)).toEqual(9);
    expect(simpleHash('green', 10)).toEqual(9);
    expect(simpleHash('white', 10)).toEqual(5);
  });
  test('Test simpleHash2', () => {
    expect(simpleHash2('pink', 13)).toEqual(5);
    expect(simpleHash2('red', 13)).toEqual(11);
    expect(simpleHash2('bluegreen', 13)).toEqual(1);
    expect(simpleHash2('white', 13)).toEqual(1);
    expect(simpleHash2('hello', 13)).toEqual(7);
  });
});
