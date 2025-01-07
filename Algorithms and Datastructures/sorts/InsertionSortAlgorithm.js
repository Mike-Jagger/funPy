function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let curr = array[i];
		for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
			array[j + 1] = array[j];
		}
		array[j + 1] = curr;
	}
	return array;
}

let arr = [5, 4, 3, 2, 1];

function reverseInsertion(arr) {
	for (let i = arr.length - 2; i >= 0; i--) {
		let curr = arr[i];

		let j;

		for (j = i + 1; j < arr.length && arr[j] < curr; j++) {
			arr[j - 1] = arr[j];
		}

		arr[j - 1] = curr;
	}

	return arr;
}

console.log(reverseInsertion(arr));
