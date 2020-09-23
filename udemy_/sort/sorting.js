export function bubbleSort(arr) {
  const newArr = [...arr];
  let noSwap = true;

  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
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

export function selectionSort(arr) {
  const newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    let min = i;

    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[min] > newArr[j]) {
        min = j;
      }
    }

    if (min !== i) {
      const temp = newArr[i];
      newArr[i] = newArr[min];
      newArr[min] = temp;
    }
  }

  return newArr;
}
//  j, i
// [5, 3, 4, 1, 2]
export function insertionSort(arr) {
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    let place = i - 1;
    const curVal = arr[i];
    for (j = i - 1; j > -1; j--) {
      if (curVal < arr[j]) {
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
