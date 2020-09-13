/**
 * In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
 * Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
 * This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
 * @param {array} arr1 of number that is sorted
 * @param {array} arr2 of number that is sorted
 *
 * @returns {array} of numbers that is sorted small to big
 */
export function mergingArray(arr1, arr2) {
  let i1 = 0;
  let i2 = 0;
  let newArr = [];

  // While we are not passed the end index of either array
  while (i2 < arr2.length && i1 < arr1.length) {
    // we select the item that is smaller from arr1 or 2
    // and add them the newArr
    if (arr1[i1] > arr2[i2]) {
      newArr.push(arr2[i2]);
      i2++;
    } else {
      newArr.push(arr1[i1]);
      i1++;
    }
  }
  // PUSH THE REST
  // when we only have numbers in one array
  while (i1 < arr1.length) {
    newArr.push(arr1[i1]);
    i1++;
  }

  while (i2 < arr2.length) {
    newArr.push(arr2[i2]);
    i2++;
  }

  return newArr;
}

/**
 * It's a combination of two things - merging and sorting!
 * Exploits the fact that arrays of 0 or 1 element are always sorted
 * Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
 * @param {array} arr array of numbers
 *
 * @returns {array} sorted array of number small to big
 */
export function mergeSort(arr) {
  // we return arrays with length of 1
  if (arr.length === 1) return arr;
  // if length > 1 then we select the middle index
  const mid = Math.floor(arr.length / 2);
  // recursively split the half's
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  // sort them together
  return mergingArray(left, right);
}
