function defaultSort(a, b, test) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

export function bubbleSort(arr, sortFunc = defaultSort) {
  if (arr.length === 0) return [];
  const newArr = [...arr];
  let noSwap = true;

  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (sortFunc(newArr[j], newArr[j + 1]) >= 0) {
        noSwap = false;
        const temp = newArr[j + 1];
        newArr[j + 1] = newArr[j];
        newArr[j] = temp;
      }
    }
    if (noSwap) break;
  }

  return newArr;
}

export function insertionSort(arr, sortFunc = defaultSort) {
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    let place = i - 1;
    const curVal = arr[i];
    for (j = i - 1; j > -1; j--) {
      if (sortFunc(curVal, arr[j]) <= 0) {
        place = j;
      } else {
        break;
      }
    }

    if (j !== place) {
      // move
      arr.splice(i, 1);
      arr.splice(place, 0, curVal);
    }
  }

  return arr;
}

/**
 * In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
 * Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
 * This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
 * @param {array} arr1 of number that is sorted
 * @param {array} arr2 of number that is sorted
 *
 * @returns {array} of numbers that is sorted small to big
 */
export function mergingArray(arr1, arr2, sortFunc) {
  let i1 = 0;
  let i2 = 0;
  let newArr = [];

  // While we are not passed the end index of either array
  while (i2 < arr2.length && i1 < arr1.length) {
    // we select the item that is smaller from arr1 or 2
    // and add them the newArr
    if (sortFunc(arr1[i1], arr2[i2]) >= 0) {
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
 * @param {function} sortFunc (a, b) => number
 *
 * @returns {array} sorted array of number small to big
 */
export function mergeSort(arr, sortFunc = defaultSort) {
  // we return arrays with length of 1
  if (arr.length <= 1) return arr;
  // if length > 1 then we select the middle index
  const mid = Math.floor(arr.length / 2);
  // recursively split the half's
  const left = mergeSort(arr.slice(0, mid), sortFunc);
  const right = mergeSort(arr.slice(mid), sortFunc);
  // sort them together
  return mergingArray(left, right, sortFunc);
}

/**
 * In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
 * Given an array, this helper function should designate an element as the pivot
 * It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
 * The order of elements on either side of the pivot doesn't matter!
 * The helper should do this in place, that is, it should not create a new array
 * When complete, the helper should return the index of the pivot
 * @param {array} arr of number
 * @param {number} start index
 * @param {number} end index
 *
 * @returns {object} pivotI: the index of the pivot or sorted element
 *
 */
export function pivot(arr, comparator = defaultSort, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (comparator(pivot, arr[i]) > 0) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

/**
 * Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
 * Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
 * Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot
 * @param {array} arr numbered array
 */

export function quickSort(arr, comparator = defaultSort, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotI = pivot(arr, comparator, left, right);
    // left
    quickSort(arr, comparator, left, pivotI - 1);
    // right
    quickSort(arr, comparator, pivotI + 1, right);
  }

  return arr;
}
