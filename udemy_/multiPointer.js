// MULTIPLE POINTERS
// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

// Very efficient for solving problems with minimal space complexity as well

// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

function sumZero(arr) {
  let end = arr.length - 1;
  let start = 0;

  while (start !== end) {
    const diff = arr[start] + arr[end];
    if (diff === 0) {
      return [arr[start], arr[end]];
    } else if (diff > 0) {
      end--;
    } else {
      start++;
    }
  }
}
// console.group('sumZero');
// console.log(sumZero([-4, -2, -1, 0, 1, 2, 3])); // [-3,3]
// console.log(sumZero([-2, 0, 1, 3])); // undefined
// console.log(sumZero([1, 2, 3])); // undefined
// console.groupEnd('sumZero');

// countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  if (arr.length < 2) return arr.length;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[start] !== arr[i]) {
      start++;
      arr[start] = arr[i];
    }
  }

  return start + 1;
}

// console.group('countUniqueValues');
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
// console.groupEnd('countUniqueValues');

//  Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

function averagePair(arr, match) {
  if (arr.length < 2) return false;
  let start = 0;
  let end = arr.length - 1;

  while (start !== end) {
    const average = (arr[start] + arr[end]) / 2;
    if (average === match) {
      return true;
    } else if (average > match) {
      end--;
    } else {
      start++;
    }
  }

  return false;
}

// console.group('averagePair');
// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false
// console.groupEnd('averagePair');

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(find, str) {
  if (str.length < find.length) return false;
  let j = 0;

  for (let i = 0; i < str.length; i++) {
    const strChar = str.charAt(i);
    const findChar = find.charAt(j);

    if (strChar === findChar) {
      j++;
    }
  }

  if (j === find.length) return true;

  return false;
}

// console.group('isSubsequence');
// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'string')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false
// console.groupEnd('isSubsequence');

//Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

export function countZeroes(arr) {
  if (arr.length === 0) return 0;
  let count = 0;

  for (let i = arr.length; i > 0; i--) {
    const el = arr[i - 1];

    if (el !== 0) return count;
    count++;
  }

  return count;
}

// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

export function sortedFrequency(arr, find) {
  if (arr.length === 0) return -1;
  let left = 0;
  let right = arr.length - 1;
  let count = 0;

  while (left <= right) {
    const leftVal = arr[left];
    const rightVal = arr[right];

    if ((leftVal > find && rightVal > find) || (leftVal < find && rightVal < find)) break;
    if (left !== right) {
      if (leftVal === find) count++;
      if (rightVal === find) count++;
    } else {
      if (leftVal === find) count++;
    }

    left++;
    right--;
  }

  return count === 0 ? -1 : count;
}

// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.

export function findRotatedIndex(arr, find) {
  if (arr.length === 0) return -1;

  const left = 0;
  const right = arr.length - 1;
  let prevLeftVal = arr[left];
  let prevRightVal = arr[right];
  if (prevLeftVal === find) {
    return left;
  } else if (prevRightVal === find) {
    return right;
  }
  // if the last index is bigger then the find it should be in the part of the arr
  if (prevLeftVal > find) {
    // start form end
    for (let i = arr.length; i > 0; i--) {
      const el = arr[i - 1];
      // if we hit the other rotate part we exit
      if (el > prevLeftVal) return -1;
      if (el === find) return i - 1;
      prevRightVal = el;
    }
  } else if (prevRightVal < find) {
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      // if we hit the other rotate part we exit
      if (el < prevLeftVal) return -1;
      if (el === find) return i;
      prevLeftVal = el;
    }
  }
}
