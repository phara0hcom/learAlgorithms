export function linearSearch(arr, toFind) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === toFind) return i;
  }

  return -1;
}

export function binarySearch(arr, toFind, start = 0, j) {
  if (arr.length < 1) return -1;
  const end = typeof j === 'number' ? j : arr.length - 1;
  const mid = Math.floor((end - start) / 2) + start;

  if (start === end && arr[mid] !== toFind) {
    return -1;
  }

  if (arr[mid] === toFind) {
    return mid;
  } else if (toFind < arr[mid]) {
    return binarySearch(arr, toFind, start, mid - 1);
  } else if (toFind > arr[mid]) {
    return binarySearch(arr, toFind, mid + 1, end);
  }
}

/**
 * Search find in str and count the abound of times it is found
 * @param {string} str long string
 * @param {string} find in long string
 */
export function naiveStringSearch(str, find) {
  if (str.length < find.length) return 0;
  let j = 0; // index of find
  let count = 0; // count

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < find.length; j++) {
      if (str.charAt(i + j) !== find.charAt(j)) break;
      if (j === find.length - 1) count++;
    }
  }
  return count;
}

export function kmpSearch(long, short) {
  const subTable = [0];

  let i = 0;
  for (let j = 1; j < short.length; j++) {
    if (short.charAt(i) === short.charAt(j)) {
      subTable.push(i);
      i++;
    } else {
      subTable.push(0);
    }
  }

  let li = 0;
  let si = 0;
  while (li < long.length) {
    if (long.charAt(li) === short.charAt(si)) {
      li++;
      si++;
    } else if (si === 0) {
      li++;
    } else {
      console.log({ si, li });
      si = subTable[si - 1];
    }

    if (si === short.length) {
      return true;
    }
  }

  return false;
}
