import Stack from './Stack';

describe('Stack', () => {
  const stack = new Stack();
  test('Test Push method', () => {
    expect(stack.push('google')).toEqual(1);
    expect(stack.push('amazon')).toEqual(2);
    expect(stack.push('instagram')).toEqual(3);
    expect(stack.push('reddit')).toEqual(4);
  });
  test('Test Pop method', () => {
    expect(stack.pop()).toEqual('reddit');
    expect(stack.pop()).toEqual('instagram');
    expect(stack.pop()).toEqual('amazon');
    expect(stack.pop()).toEqual('google');
    expect(stack.pop()).toEqual(null);
  });
});
