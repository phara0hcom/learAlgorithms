export function fibonacci(n) {
  const fibMem = {};
  let count = 0;

  function fib(n) {
    if (fibMem[n]) {
      console.log('it works', ++count);
      return fibMem[n];
    }
    if (n <= 2) return (fibMem[n] = 1);
    return (fibMem[n] = fib(n - 1) + fib(n - 2));
  }

  const test = fib(n);

  console.log({ fibMem });
  return test;
}

export function fibTabulation(n) {
  if (n <= 2) return 1;
  const fibNrs = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNrs[i] = fibNrs[i - 1] + fibNrs[i - 2];
  }

  return fibNrs[n];
}
