//Swapping array elements via ES6 array destructuring
function swap(arr, x, y) {
	[arr[x], arr[y]] = [arr[y], arr[x]];
}

//Pivot function returns the fixed pivot point
function pivot(arr, left = 0, right = arr.length - 1) {
	let shift = left;
	for (let i = left + 1; i <= right; i++) {
		//Move all the small elements on the left side
		if (arr[i] < arr[left]) swap(arr, i, ++shift);
	}

	//Finally swapping the last element with the left
	swap(arr, left, shift);
	return shift;
}

function quickSort(array, left = 0, right = array.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(array, left, right);

		//Recusrively calling the function to the left of the pivot and to the right of the pivot
		quickSort(array, left, pivotIndex - 1);
		quickSort(array, pivotIndex + 1, right);
	}
	return array;
}

function partition(arr, lo, hi) {
	let pivot = arr[lo];

	idx = hi + 1;

	for (let i = hi; i >= lo; i--) {
		if (arr[i] > pivot) {
			idx--;
			let temp = arr[i];
			arr[i] = arr[idx];
			arr[idx] = temp;
		}
	}

	idx--;
	temp = arr[idx];
	arr[idx] = pivot;
	arr[lo] = temp;

	// console.log(arr);
	return idx;
}

function lowerPivotQuickSort(arr, lo, hi) {
	if (lo >= hi) {
		return;
	}

	pivot = partition(arr, lo, hi);

	lowerPivotQuickSort(arr, lo, pivot - 1);
	lowerPivotQuickSort(arr, pivot + 1, hi);
}

let array = [5, 6, 7, 2];
lowerPivotQuickSort(array, 0, 3);

console.log(array);

// bubble sort

function bubbleSort(arr) {}
