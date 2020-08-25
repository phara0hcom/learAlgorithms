(function () {
  /**
   *
   * @param {Array} arr a sorted array of numbers
   * @param {Number} searchNr the number that is present in the array
   *
   * @returns {Number} the searchNr that is found
   */
  function binarySearch(arr, searchNr) {
    // length of the array
    const lengthArr = arr.length;
    // if arr length is one
    if (lengthArr === 1 && arr[0] === searchNr) {
      return searchNr;
    } else if (lengthArr === 1) {
      return false;
    }

    // Get the middle index of the array
    const middleIndex = Math.round(lengthArr / 2);
    const middleValue = arr[middleIndex];

    // Check the value of that key
    // If middleValue equals the searchNr return the index
    if (middleValue === searchNr) {
      return searchNr;
    }
    // if middleValue is lower then call binarySearch with a new array with all index's above the middle index
    else if (middleValue < searchNr) {
      const newArr = arr.slice(middleIndex - 1);

      return binarySearch(newArr, searchNr);
    }
    // if middleValue is higher then call binarySearch with a new array with all index's below the middle index
    else if (middleValue > searchNr) {
      const newArr = arr.slice(0, middleIndex - 1);

      return binarySearch(newArr, searchNr);
    }
  }

  const primes = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97
  ];

  console.log(binarySearch(primes, 3));
  console.log(binarySearch(primes, 53));
  console.log(binarySearch(primes, 8));
})();
