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
});
