// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

function same(arr, squareArr) {
  if (arr.length !== squareArr.length) return false;

  const freqArr = {};
  for (const nr of arr) {
    freqArr[nr] = ++freqArr[nr] || 1;
  }

  const freqSquare = {};
  for (const nr of squareArr) {
    freqSquare[nr] = ++freqSquare[nr] || 1;
  }

  for (const key in freqArr) {
    const square = key ** 2;
    if (!freqSquare[square] || freqArr[key] !== freqSquare[square]) return false;
  }

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)

// ANAGRAMS
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookup = {};
  for (const str of str1) {
    lookup[str] = ++lookup[str] || 1;
  }

  for (const str of str2) {
    if (!lookup[str]) return false;
    lookup[str] -= 1;
  }

  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false) // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true

function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  const arr = [...arguments];
  if (arr.length < 2) return true;
  const lookup = {};

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (lookup[el]) return true;
    lookup[el] = 1;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 1));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
