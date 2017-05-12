function selectSort(arr) {
	var min,
		temp;
	for (var i = 0; i < arr.length - 1; i++) {
		min = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		temp = arr[min];
		arr[min] = arr[i];
		arr[i] = temp;
	}
	return arr;
}
