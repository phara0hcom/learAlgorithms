/**
 * Problems with it is:
 * - It loops
 * - Only works on strings
 * -
 * @param {string} val key to has to a number
 * @param {number} arrLength max length of the arr
 *
 * @returns {number}
 */
export function simpleHash(val, arrLength) {
  let total = 0;

  for (let i = 0; i < val.length; i++) {
    const value = val.charCodeAt(i) - 96;
    total = (total + value) % arrLength;
  }

  return total;
}

/**
 * Problems with it is:
 * - It loops less
 * - Only works on strings
 * - still can gets collisions even with primes
 * @param {string} val key to has to a number
 * @param {number} arrLength max length of the arr
 *
 * @returns {number}
 */
export function simpleHash2(val, arrLength) {
  let total = 0;
  let weirdPrime = 31;

  for (let i = 0; i < Math.min(val.length, 100); i++) {
    const value = val.charCodeAt(i) - 96;
    total = (total * weirdPrime + value) % arrLength;
  }

  return total;
}
