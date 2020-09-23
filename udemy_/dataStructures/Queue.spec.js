import Queue from './Queue';

describe('Queue', () => {
  const queue = new Queue();
  test('Test Enqueue method', () => {
    expect(queue.enqueue('google')).toEqual(1);
    expect(queue.enqueue('amazon')).toEqual(2);
    expect(queue.enqueue('instagram')).toEqual(3);
    expect(queue.enqueue('reddit')).toEqual(4);
  });
  test('Test Dequeue method', () => {
    expect(queue.dequeue()).toEqual('google');
    expect(queue.dequeue()).toEqual('amazon');
    expect(queue.dequeue()).toEqual('instagram');
    expect(queue.dequeue()).toEqual('reddit');
    expect(queue.dequeue()).toEqual(null);
  });
});
