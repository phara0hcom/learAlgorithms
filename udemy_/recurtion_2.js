// Write a recursive function called <strong>reverse</strong> which accepts a string and returns a new string in reverse.

function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  let reverse = '';

  function rev(string, index) {
    if (index < 0) return reverse;

    reverse += string.charAt(index);

    return rev(string, index - 1);
  }

  return rev(str, str.length - 1);
}

console.group('reverse');
console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
console.groupEnd('reverse');

// Write a recursive function called <strong>isPalindrome</strong> which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(strPal) {
  // add whatever parameters you deem necessary - good luck!
  function reverse(str) {
    // add whatever parameters you deem necessary - good luck!
    let reverse = '';

    function rev(string, index) {
      if (index < 0) return reverse;

      reverse += string.charAt(index);

      return rev(string, index - 1);
    }

    return rev(str, str.length - 1);
  }

  return strPal === reverse(strPal);
}

console.group('isPalindrome');
console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
console.groupEnd('isPalindrome');

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

// Write a recursive function called <strong>someRecursive</strong> which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(arr, callback, i = 0) {
  // add whatever parameters you deem necessary - good luck!
  if (i >= arr.length) return false;

  if (callback(arr[i]) === true) return true;

  return someRecursive(arr, callback, i + 1);
}

console.group('someRecursive');
console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
console.groupEnd('someRecursive');

// Write a recursive function called <strong>flatten</strong> which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  let ret = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ret = ret.concat(flatten(arr[i]));
    } else {
      ret.push(arr[i]);
    }
  }

  return ret;
}

console.group('someRecursive');
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
console.groupEnd('someRecursive');

// Write a recursive function called <strong>capitalizeFirst</strong>. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  // add whatever parameters you deem necessary - good luck!
  const ret = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ret = ret.concat(capitalizeFirst(arr[i]));
    } else {
      ret.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
  }

  return ret;
}

console.group('capitalizeFirst');
console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
console.groupEnd('capitalizeFirst');

// Write a recursive function called <strong>nestedEvenSum</strong>. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  let total = 0;
  for (const key in obj) {
    if (obj[key].constructor.name === 'Object') {
      total += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      total += obj[key];
    }
  }

  return total;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup'
    }
  }
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

console.group('nestedEvenSum');
console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
console.groupEnd('nestedEvenSum');

// Write a recursive function called <strong>capitalizeWords</strong>. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  const ret = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ret = ret.concat(capitalizeWords(arr[i]));
    } else {
      ret.push(arr[i].toUpperCase());
    }
  }

  return ret;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.group('capitalizeWords');
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.groupEnd('capitalizeWords');

// Write a function called <code>stringifyNumbers</code> which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
  const newObj = {};

  for (const key in obj) {
    if (obj[key].constructor.name === 'Object') {
      newObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === 'number') {
      newObj[key] = `${obj[key]}`;
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

let obj3 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

console.group('stringifyNumbers');
console.log(stringifyNumbers(obj3));
console.groupEnd('stringifyNumbers');

// Write a function called <code>collectStrings</code> which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(obj) {
  let strArr = [];

  for (const key in obj) {
    if (obj[key].constructor.name === 'Object') {
      strArr = strArr.concat(collectStrings(obj[key]));
    } else if (typeof obj[key] === 'string') {
      strArr.push(obj[key]);
    }
  }

  return strArr;
}

const obj4 = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz'
          }
        }
      }
    }
  }
};

console.group('collectStrings');
console.log(collectStrings(obj4)); // ["foo", "bar", "baz"])
console.groupEnd('collectStrings');
