(function () {
  /**
   *
   * @param {Array} arr a sorted array of numbers
   * @param {Number} searchNr the number that is present in the array
   * @param {Number} startInd the starting index where we need to search
   * @param {Number} endInd the ending index where we need to search
   *
   * @returns {Number} the index where searchNr is found
   */
  function binarySearch(arr, searchNr, startInd = 0, endInd = null) {
    // initialize endIndex
    let endIndex = endInd;
    if (!endIndex) endIndex = arr.length - 1;

    // get the middle search index
    const searchIndex = Math.floor((startInd + endIndex) / 2);
    const searchedVal = arr[searchIndex];

    if (startInd === endIndex && searchedVal !== searchNr) {
      return false;
    }

    // Check the value of that key
    // If searchedVal equals the searchNr return the index
    if (searchedVal === searchNr) {
      return searchIndex;
    }
    // if searchedVal is lower then call binarySearch with a new array with all index's above the middle index
    else if (searchNr < searchedVal) {
      return binarySearch(arr, searchNr, startInd, searchIndex - 1);
    }
    // if searchedVal is higher then call binarySearch with a new array with all index's below the middle index
    else if (searchNr > searchedVal) {
      return binarySearch(arr, searchNr, searchIndex + 1, endIndex);
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
