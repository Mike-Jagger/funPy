const dictionary = new Map();

dictionary.set("apple", "apple");
dictionary.set("banana", "banana");
dictionary.set("cup", "cup");
dictionary.set("dog", "dog");
dictionary.set("dpl", "dpl");

words = [
	["b", "p", "p", "l", "e", "z"],
	["a", "p", "p", "l", "e", "z"],
	["n", "c", "p", "l", "e", "z"],
	["a", "g", "u", "l", "e", "z"],
	["n", "o", "h", "p", "e", "z"],
	["a", "d", "p", "l", "e", "z"],
];

match = {};

function formWords(curPos, initPos, M, N, words, dir) {
	if (curPos[0] < 0 || curPos[1] < 0) {
		return;
	}
	if (curPos[0] >= N || curPos[1] >= N) {
		return;
	}

	let word = [];

	switch (dir) {
		case "left":
			word = words[initPos[0]].slice(curPos[1], initPos[1] + 1);
			break;
		case "right":
			word = words[initPos[0]].slice(initPos[1], curPos[1] + 1);
			break;
		case "up":
			for (let row = initPos[0]; row >= curPos[0]; row--) {
				word.push(words[row][initPos[1]]);
			}
			break;
		case "down":
			for (let row = initPos[0]; row <= curPos[0]; row++) {
				word.push(words[row][initPos[1]]);
			}
			break;
		case "se":
			for (
				let [y, x] = initPos;
				y <= curPos[0] && x <= curPos[1];
				x++, y++
			) {
				word.push(words[y][x]);
			}
			break;
		case "ne":
			for (
				let [y, x] = initPos;
				y >= curPos[0] && x <= curPos[1];
				x++, y--
			) {
				word.push(words[y][x]);
			}
			break;
		case "nw":
			for (
				let [y, x] = initPos;
				y >= curPos[0] && x >= curPos[1];
				x--, y--
			) {
				word.push(words[y][x]);
			}
			break;
		case "sw":
			for (
				let [y, x] = initPos;
				y <= curPos[0] && x >= curPos[1];
				x--, y++
			) {
				word.push(words[y][x]);
			}
			break;
	}

	word = word.join("");

	if (
		dictionary.get(word) === word &&
		(dir === "left" || dir === "up" || dir === "sw" || dir === "nw")
	) {
		match[word] = [curPos, initPos];
	} else if (
		dictionary.get(word) === word &&
		(dir === "right" || dir === "down" || dir === "se" || dir === "ne")
	) {
		match[word] = [initPos, curPos];
	}

	switch (dir) {
		case "left":
			formWords([curPos[0], curPos[1] - 1], initPos, M, N, words, dir);
			break;
		case "right":
			formWords([curPos[0], curPos[1] + 1], initPos, M, N, words, dir);
			break;
		case "up":
			formWords([curPos[0] - 1, curPos[1]], initPos, M, N, words, dir);
			break;
		case "down":
			formWords([curPos[0] + 1, curPos[1]], initPos, M, N, words, dir);
			break;
		case "ne":
			formWords(
				[curPos[0] - 1, curPos[1] + 1],
				initPos,
				M,
				N,
				words,
				dir
			);
			break;
		case "se":
			formWords(
				[curPos[0] + 1, curPos[1] + 1],
				initPos,
				M,
				N,
				words,
				dir
			);
			break;
		case "nw":
			formWords(
				[curPos[0] - 1, curPos[1] - 1],
				initPos,
				M,
				N,
				words,
				dir
			);
			break;
		case "sw":
			formWords(
				[curPos[0] + 1, curPos[1] - 1],
				initPos,
				M,
				N,
				words,
				dir
			);
			break;
	}
}

let dirs = ["up", "down", "left", "right", "se", "sw", "ne", "nw"];

function wordMapSolver(words, M, N, dirs) {
	for (let x = 0, y = 0; x < M && y < N; ) {
		initPos = [y, x];
		dirs.forEach((dir) => {
			formWords(initPos, initPos, M, N, words, dir);
		});
		if (x === M - 1) {
			y++;
			x = 0;
		} else {
			x++;
		}
	}
}

wordMapSolver(words, words[0].length, words.length, dirs);
console.log(match);

// Longest running time should be O((M * N) * sqrt(M^2, N^2)) (looking at the words
// formed diagonally from the edges of the box)
// Counting dictionary size, worst space should be O(n + sqrt(M^2, N^2)) (where all
// words in the dictionary are present in the puzzle and longest word formed diagonally)
