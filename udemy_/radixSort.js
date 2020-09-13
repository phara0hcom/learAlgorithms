/**
 * getDigit(num, place) - returns the digit in num at the given place value
 * @param {number} num the number where we should look
 * @param {number} place the index of the number of num
 */
export function getDigit_(num, place) {
  const str = `${num}`;
  const index = str.length - 1 - place;
  if (index < 0) return 0;
  return parseInt(str.charAt(index));
}

export function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

export function digitCount(num) {
  return (Math.log10((num ^ (num >> 31)) - (num >> 31)) | 0) + 1;
}

export function mostDigits(arr) {
  let most = 0;
  for (let i = 0; i < arr.length; i++) {
    most = Math.max(digitCount(arr[i]), most);
  }

  return most;
}

export function radixSort(arr) {
  let newArr = [...arr];
  const mostDig = mostDigits(newArr);

  for (let i = 0; i < mostDig; i++) {
    const table = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < newArr.length; j++) {
      const digitAt = getDigit(newArr[j], i);
      // set is in the table
      table[digitAt].push(newArr[j]);
    }
    // flatten table
    newArr = [].concat(...table);
  }

  return newArr;
}
