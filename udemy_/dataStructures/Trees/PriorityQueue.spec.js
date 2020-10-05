import PriorityQueue from './PriorityQueue';

describe('PriorityQueue', () => {
  test('Test Enqueue method', () => {
    const priorityQueue = new PriorityQueue();

    expect(priorityQueue.values).toEqual([]);
    expect(priorityQueue.enqueue('val 55', 55)).toEqual([{ priority: 55, val: 'val 55' }]);
    expect(priorityQueue.enqueue('val 18', 18)).toEqual([
      { priority: 18, val: 'val 18' },
      { priority: 55, val: 'val 55' }
    ]);
    expect(priorityQueue.enqueue('val 41', 41)).toEqual([
      { priority: 18, val: 'val 18' },
      { priority: 55, val: 'val 55' },
      { priority: 41, val: 'val 41' }
    ]);
    expect(priorityQueue.enqueue('val 12', 12)).toEqual([
      { priority: 12, val: 'val 12' },
      { priority: 18, val: 'val 18' },
      { priority: 41, val: 'val 41' },
      { priority: 55, val: 'val 55' }
    ]);

    expect(priorityQueue.enqueue('val 1', 1)).toEqual([
      { priority: 1, val: 'val 1' },
      { priority: 12, val: 'val 12' },
      { priority: 41, val: 'val 41' },
      { priority: 55, val: 'val 55' },
      { priority: 18, val: 'val 18' }
    ]);
    expect(priorityQueue.enqueue('val 33', 33)).toEqual([
      { priority: 1, val: 'val 1' },
      { priority: 12, val: 'val 12' },
      { priority: 33, val: 'val 33' },
      { priority: 55, val: 'val 55' },
      { priority: 18, val: 'val 18' },
      { priority: 41, val: 'val 41' }
    ]);
    expect(priorityQueue.enqueue('val 39', 39)).toEqual([
      { priority: 1, val: 'val 1' },
      { priority: 12, val: 'val 12' },
      { priority: 33, val: 'val 33' },
      { priority: 55, val: 'val 55' },
      { priority: 18, val: 'val 18' },
      { priority: 41, val: 'val 41' },
      { priority: 39, val: 'val 39' }
    ]);

    expect(priorityQueue.enqueue('val 5', 5)).toEqual([
      { priority: 1, val: 'val 1' },
      { priority: 5, val: 'val 5' },
      { priority: 33, val: 'val 33' },
      { priority: 12, val: 'val 12' },
      { priority: 18, val: 'val 18' },
      { priority: 41, val: 'val 41' },
      { priority: 39, val: 'val 39' },
      { priority: 55, val: 'val 55' }
    ]);
  });

  test('Test Dequeue method', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.enqueue('val 55', 55);
    priorityQueue.enqueue('val 18', 18);
    priorityQueue.enqueue('val 41', 41);
    priorityQueue.enqueue('val 12', 12);
    priorityQueue.enqueue('val 1', 1);
    priorityQueue.enqueue('val 33', 33);
    priorityQueue.enqueue('val 39', 39);
    priorityQueue.enqueue('val 5', 5);

    expect(priorityQueue.dequeue()).toEqual({ priority: 1, val: 'val 1' });
    expect(priorityQueue.values).toEqual([
      { priority: 5, val: 'val 5' },
      { priority: 12, val: 'val 12' },
      { priority: 33, val: 'val 33' },
      { priority: 55, val: 'val 55' },
      { priority: 18, val: 'val 18' },
      { priority: 41, val: 'val 41' },
      { priority: 39, val: 'val 39' }
    ]);

    expect(priorityQueue.dequeue()).toEqual({ priority: 5, val: 'val 5' });
    expect(priorityQueue.values).toEqual([
      { priority: 12, val: 'val 12' },
      { priority: 18, val: 'val 18' },
      { priority: 33, val: 'val 33' },
      { priority: 55, val: 'val 55' },
      { priority: 39, val: 'val 39' },
      { priority: 41, val: 'val 41' }
    ]);

    expect(priorityQueue.dequeue()).toEqual({ priority: 12, val: 'val 12' });
    expect(priorityQueue.values).toEqual([
      { priority: 18, val: 'val 18' },
      { priority: 39, val: 'val 39' },
      { priority: 33, val: 'val 33' },
      { priority: 55, val: 'val 55' },
      { priority: 41, val: 'val 41' }
    ]);

    expect(priorityQueue.dequeue()).toEqual({ priority: 18, val: 'val 18' });
    expect(priorityQueue.values).toEqual([
      { priority: 33, val: 'val 33' },
      { priority: 39, val: 'val 39' },
      { priority: 41, val: 'val 41' },
      { priority: 55, val: 'val 55' }
    ]);

    expect(priorityQueue.dequeue()).toEqual({ priority: 33, val: 'val 33' });
    expect(priorityQueue.values).toEqual([
      { priority: 39, val: 'val 39' },
      { priority: 55, val: 'val 55' },
      { priority: 41, val: 'val 41' }
    ]);

    expect(priorityQueue.dequeue()).toEqual({ priority: 39, val: 'val 39' });
    expect(priorityQueue.values).toEqual([
      { priority: 41, val: 'val 41' },
      { priority: 55, val: 'val 55' }
    ]);

    expect(priorityQueue.dequeue()).toEqual({ priority: 41, val: 'val 41' });
    expect(priorityQueue.values).toEqual([{ priority: 55, val: 'val 55' }]);

    expect(priorityQueue.dequeue()).toEqual({ priority: 55, val: 'val 55' });
    expect(priorityQueue.values).toEqual([]);

    expect(priorityQueue.dequeue()).toEqual(undefined);
    expect(priorityQueue.values).toEqual([]);
  });
});
