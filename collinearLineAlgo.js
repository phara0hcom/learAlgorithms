(function () {
  /**
   * calculate factorial of a single number
   * @param {number} n number to calculate the factorial of
   *
   * @returns {number}
   */
  function factorial(n) {
    const f = [];
    const num = parseInt(n);
    return (() => {
      if (num === 0 || num === 1) return 1;
      if (f[num] > 0) return f[num];
      return (f[num] = factorial(num - 1) * num);
    })();
  }
  /**
   * Will return the amount of lines of 3 points or can made with 3 unique points
   * @param {number} dotsInLine number of points in a line
   *
   *  @returns {number} of lines of 3 points found
   */
  function countLineOf3(dotsInLine) {
    if (dotsInLine === 3) return 1;
    const factor = dotsInLine - 3;
    if (dotsInLine > 3) return factorial(dotsInLine) / (factorial(3) * factorial(factor));
    return 0;
  }

  /**
   * will go trough the array of found points on 1 axes and return the count of 3 point lines found
   * @param {array} foundInArr array of 3 or more point in a line
   * @param {object} matrix object of 3 or more point in a line
   *
   * @returns {number}
   */
  function foundInAddToCount(foundInArr, matrix) {
    let count = 0;
    for (let i = 0; i < foundInArr.length; i++) {
      count += countLineOf3(matrix[foundInArr[i]]);
    }

    return count;
  }

  function solution(A) {
    let count = 0;
    let maxX = 0;
    let maxY = 0;

    const yStrait = {};
    const yStraitFound = [];

    const lineUp = {};
    const lineUpFound = [];
    const lineDown = {};
    const lineDownFound = [];

    for (let i = 0; i < A.length; i++) {
      if (maxX < A[i][0]) maxX = A[i][0];
      if (maxY < A[i][1]) maxY = A[i][1];

      // find strait horizontal points
      const yAxe = A[i][1];
      if (!yStrait[yAxe]) yStrait[yAxe] = 0;
      yStrait[yAxe]++;
      if (yStrait[yAxe] === 3) {
        yStraitFound.push(yAxe);
      }

      // find points bottom left to top right
      const x = A[i][0];
      const y = A[i][1];

      const xMinY = x - y;
      const yMinx = y - x;
      //middle line
      let key;
      if (xMinY >= 0 && yMinx >= 0) {
        key = `${xMinY}${yMinx}`;
      } else if (xMinY >= 0 && yMinx < 0) {
        // y zero UP
        key = `${xMinY}0`;
      } else if (xMinY < 0 && yMinx >= 0) {
        // x zero UP
        key = `0${yMinx}`;
      }

      if (key) {
        if (!lineUp[key]) lineUp[key] = 0;
        lineUp[key]++;
        if (lineUp[key] === 3) {
          lineUpFound.push(key);
        }
      }

      const xPlusY = x + y;
      //find points top left to bottom right
      if (!lineDown[`0${xPlusY}`]) lineDown[`0${xPlusY}`] = 0;
      lineDown[`0${xPlusY}`]++;
      if (lineDown[`0${xPlusY}`] === 3) {
        lineDownFound.push(`0${xPlusY}`);
      }
    }

    count += foundInAddToCount(yStraitFound, yStrait);

    count += foundInAddToCount(lineUpFound, lineUp);
    count += foundInAddToCount(lineDownFound, lineDown);
    return count;
  }

  console.log(
    solution([
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [3, 2],
      [4, 2],
      [5, 1]
    ])
  );
})();
