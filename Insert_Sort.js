function insertionSort(arr) {
	var current, prev;
	for (var i = 1; i < arr.length; ++i) {
		current = arr[i];
		prev = i - 1;
		while (prev >= 0 && arr[prev] > current) {
			arr[prev + 1] = arr[prev];
			prev--;
		}
		arr[prev + 1] = current;
	}
	return arr;
}

function extSortMethod(spec) {
	if (Object.prototype.toString.call(spec) !== "[object Array]") {
		throw new Error('argument must be an array');
	}
	spec.insertionSort = function (prop) {
		var current, prev, currentObj,
			len = spec.length;
		if (!prop) {
			for (var i = 1; i < len; i++) {
				current = spec[i];
				prev = i - 1;
				while (prev >= 0 && arr[prev] > current) {
					arr[prev + 1] = arr[prev];
					prev--;
				}
				arr[prev + 1] = current;
			}
			return spec;
		} else {
			for (var i = 1; i < len; i++) {
				currentObj = spec[i];
				current = spec[i][prop];
				prev = i - 1;
				while (prev >= 0 && arr[prev][prop] > current) {
					arr[prev + 1] = arr[prev];
					prev--;
				}
				arr[prev + 1] = currentObj;
			}
			return spec;
		}
	}
}
