// SLIDING WINDOW
// This pattern involves creating a window which can either be an array or number from one position to another

// Depending on a certain condition, the window either increases or closes (and a new window is created)

// Very useful for keeping track of a subset of data in an array/string etc.

// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null

// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - 1] + arr[j];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.group('maxSubarraySum');
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 2)); // 5
console.groupEnd('maxSubarraySum');

// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

function minSubArrayLen(arr, match) {
  if (arr.length === 0) return null;
  let end = 0;
  let i = 0;
  let sum = 0;
  let subLength = 0;
  while (sum < match && end < arr.length) {
    sum += arr[end];
    end++;
    console.log({ end, sum });
  }

  if (arr.length === end && sum < match) return 0;

  subLength = end;
  end = end - 1;
  while (end < arr.length) {
    const sumMinFirst = sum - arr[i];
    if (sumMinFirst >= match) {
      sum = sumMinFirst;
      subLength--;
      i++;
    } else {
      end++;
      i++;
      sum = sumMinFirst + arr[end];
    }
  }

  return subLength;
}

console.group('maxSubarraySum');
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 2
console.groupEnd('maxSubarraySum');
