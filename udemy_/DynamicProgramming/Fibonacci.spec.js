import { fibonacci, fibTabulation } from './Fibonacci';

describe('fibonacci', () => {
  test('fibonacci memo', () => {
    expect(fibonacci(5)).toEqual(5);
    expect(fibonacci(13)).toEqual(233);
    expect(fibonacci(14)).toEqual(377);
  });

  test('fibonacci tabulation', () => {
    expect(fibTabulation(5)).toEqual(5);
    expect(fibTabulation(13)).toEqual(233);
    expect(fibTabulation(14)).toEqual(377);
  });
});
