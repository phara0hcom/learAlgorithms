import MaxBinaryHeap from './MaxBinaryHeap';

describe('MaxBinaryHeap', () => {
  test('Test Push method', () => {
    const maxBinaryHeap = new MaxBinaryHeap();

    expect(maxBinaryHeap.values).toEqual([]);
    expect(maxBinaryHeap.push(12)).toEqual([12]);
    expect(maxBinaryHeap.push(18)).toEqual([18, 12]);
    expect(maxBinaryHeap.push(27)).toEqual([27, 12, 18]);
    expect(maxBinaryHeap.push(41)).toEqual([41, 27, 18, 12]);
    expect(maxBinaryHeap.push(39)).toEqual([41, 39, 18, 12, 27]);
    expect(maxBinaryHeap.push(33)).toEqual([41, 39, 33, 12, 27, 18]);
    expect(maxBinaryHeap.push(55)).toEqual([55, 39, 41, 12, 27, 18, 33]);
  });

  test('Test Push method', () => {
    const maxBinaryHeap = new MaxBinaryHeap();

    expect(maxBinaryHeap.testSetValues([70, 67, 65, 45, 58, 40, 53, 44, 15, 31])).toEqual([
      70,
      67,
      65,
      45,
      58,
      40,
      53,
      44,
      15,
      31
    ]);

    expect(maxBinaryHeap.removeRoot()).toEqual(70);
    expect(maxBinaryHeap.values).toEqual([67, 58, 65, 45, 31, 40, 53, 44, 15]);

    expect(maxBinaryHeap.removeRoot()).toEqual(67);
    expect(maxBinaryHeap.values).toEqual([65, 58, 53, 45, 31, 40, 15, 44]);

    expect(maxBinaryHeap.removeRoot()).toEqual(65);
    expect(maxBinaryHeap.values).toEqual([58, 45, 53, 44, 31, 40, 15]);

    expect(maxBinaryHeap.removeRoot()).toEqual(58);
    expect(maxBinaryHeap.values).toEqual([53, 45, 40, 44, 31, 15]);

    expect(maxBinaryHeap.removeRoot()).toEqual(53);
    expect(maxBinaryHeap.values).toEqual([45, 44, 40, 15, 31]);

    expect(maxBinaryHeap.removeRoot()).toEqual(45);
    expect(maxBinaryHeap.values).toEqual([44, 31, 40, 15]);

    expect(maxBinaryHeap.removeRoot()).toEqual(44);
    expect(maxBinaryHeap.values).toEqual([40, 31, 15]);

    expect(maxBinaryHeap.removeRoot()).toEqual(40);
    expect(maxBinaryHeap.values).toEqual([31, 15]);

    expect(maxBinaryHeap.removeRoot()).toEqual(31);
    expect(maxBinaryHeap.values).toEqual([15]);

    expect(maxBinaryHeap.removeRoot()).toEqual(15);
    expect(maxBinaryHeap.values).toEqual([]);

    expect(maxBinaryHeap.removeRoot()).toEqual(undefined);
    expect(maxBinaryHeap.values).toEqual([]);

    expect(maxBinaryHeap.removeRoot()).toEqual(undefined);
    expect(maxBinaryHeap.values).toEqual([]);
  });
});
