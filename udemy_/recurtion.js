// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of <code>Math.pow()</code> - do not worry about negative bases and exponents.

function power(num, pow) {
  if (pow === 0) return 1;
  if (pow === 1) return num;

  return num * power(num, pow - 1);
}

console.group('powers of');
console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
console.log(power(22, 4)); // 234256
console.groupEnd('powers of');

/* Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four 4! is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1. */

function factorial(num) {
  if (num < 2) return 1;

  return num * factorial(num - 1);
}

console.group('factorial');
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
console.groupEnd('factorial');

// Write a function called <code>productOfArray</code> which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
  if (arr.length < 1) return 0;
  if (arr.length === 1) return arr[0];

  return arr[0] * productOfArray(arr.slice(1));
}

console.group('productOfArray');
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
console.groupEnd('productOfArray');

// Write a function called <strong>recursiveRange</strong> which accepts a number and adds up all the numbers from 0 to the number passed to the function.

function recursiveRange(num) {
  if (num < 1) return 0;

  return num + recursiveRange(num - 1);
}

console.group('recursiveRange');
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
console.groupEnd('recursiveRange');

// Write a recursive function called <strong>fib</strong> which accepts a number and returns the <em>n</em>th number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(num) {
  // We store 0 and 1 of the Fibonacci sequence so we have something to calculate the rest with
  const fibArr = [0, 1];
  /**
   *
   * @param {number} n location in the Fibonacci Sequence
   *
   * @returns {number} the number that is in that location in the Fibonacci Sequence
   */
  function calc(n) {
    // When we call this function but the calculation is already done
    // It will return the previously saved location
    if (fibArr[n]) return fibArr[n];

    const pre = fibArr[fibArr.length - 2];
    const next = fibArr[fibArr.length - 1];
    // We take the last to calculated location and add them up and save them in the fibArr

    fibArr.push(pre + next);

    // We call the calc function again until we are at the n location
    return calc(n);
  }

  return calc(num);
}

console.group('Fibonacci');
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
console.groupEnd('Fibonacci');

function fib2(n) {
  if (n <= 2) return 1;
  return fib2(n - 1) + fib2(n - 2);
}

console.group('Fibonacci 2');
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
console.groupEnd('Fibonacci 2');
