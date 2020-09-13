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
export function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
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

export function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotI = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotI - 1);
    // right
    quickSort(arr, pivotI + 1, right);
  }

  return arr;
}
