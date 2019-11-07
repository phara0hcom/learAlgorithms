(function() {
	function countLineOf3(dotsInLine) {
		if (dotsInLine === 3) return 1;
		if (dotsInLine > 3) return (dotsInLine - 3) * dotsInLine;
		return 0;
	}

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
		const xStrait = {};
		const xStraitFound = [];
		const yStrait = {};
		const yStraitFound = [];

		for (let i = 0; i < A.length; i++) {
			if (maxX < A[i][0]) maxX = A[i][0];
			if (maxY < A[i][1]) maxY = A[i][1];

			if (!xStrait[A[i][0]]) xStrait[A[i][0]] = 0;
			xStrait[A[i][0]]++;
			if (xStrait[A[i][0]] === 3) xStraitFound.push(A[i][0]);

			if (!yStrait[A[i][1]]) yStrait[A[i][1]] = 0;
			yStrait[A[i][1]]++;
			if (yStrait[A[i][1]] === 3) yStraitFound.push(A[i][1]);
		}

		count += foundInAddToCount(xStraitFound, xStrait);
		count += foundInAddToCount(yStraitFound, yStrait);

		//count lines going Up /
		const lineUp = {};
		// zero x
		for (let i = 0; i <= maxY - 2; i++) {
			lineUp[`0${i}`] = 0;
		}
		// zero y
		for (let i = 0; i <= maxX - 2; i++) {
			lineUp[`${i}0`] = 0;
		}

		//count lines going Down \
		const lineDown = {};
		for (let i = maxX + maxY - 2; i >= 2; i--) {
			lineDown[`0${i}`] = 0;
		}

		const lineUpFound = [];
		const lineDownFound = [];
		for (let i = 0; i < A.length; i++) {
			const x = A[i][0];
			const y = A[i][1];

			const xMinY = x - y;
			const yMinx = y - x;
			//middle line
			let key;
			if (
				xMinY >= 0 &&
				yMinx >= 0 &&
				typeof lineUp[`${xMinY}${yMinx}`] === 'number'
			) {
				key = `${xMinY}${yMinx}`;
			} else if (
				xMinY >= 0 &&
				yMinx < 0 &&
				typeof lineUp[`${xMinY}0`] === 'number'
			) {
				// y zero UP
				key = `${xMinY}0`;
			} else if (
				xMinY < 0 &&
				yMinx >= 0 &&
				typeof lineUp[`0${yMinx}`] === 'number'
			) {
				// x zero UP
				key = `0${yMinx}`;
			}

			if (key) {
				lineUp[key]++;
				if (lineUp[key] === 3) lineUpFound.push(key);
			}

			const xPlusY = x + y;
			if (typeof lineDown[`0${xPlusY}`] === 'number') {
				lineDown[`0${xPlusY}`]++;
				if (lineDown[`0${xPlusY}`] === 3) {
					lineDownFound.push(`0${xPlusY}`);
				}
			}

			//line Down
		}

		count += foundInAddToCount(lineUpFound, lineUp);
		count += foundInAddToCount(lineDownFound, lineDown);
		return count;
	}

	console.log(
		solution([[0, 0], [1, 1], [2, 2], [3, 3], [3, 2], [4, 2], [5, 1]])
	);
})();
