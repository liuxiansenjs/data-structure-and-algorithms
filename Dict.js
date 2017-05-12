function $dict() {
	'use strict';
	var dataStore = [],
		that = {},
		inspectLengthChange;

	that.length = 0;
	that.newData = function (index, value) {
		var item = dataStore[index] = value;
		return item;
	};
	that.deleteData = function (index) {
		if (!that.hasIndex(index)) {
			return false;
		}
		var item = dataStore[index];
		delete dataStore[index];
		return item;
	};
	that.hasIndex = function (index) {
		return dataStore.hasOwnProperty(index);
	};
	that.triversal = function (callback) {
		var index;
		for (index in dataStore) {
			if (that.hasIndex(index)) {
				callback.apply(that, [dataStore[index], index, dataStore]);
			}
		}
	};
	that.getData = function () {
		return dataStore;
	};
	that.getLength = function () {
		var arr = [];
		that.triversal(function (val, index, array) {
			arr.push(index);
		});
		return arr.length;
	};
	
	inspectLengthChange = (function () {
		var tc = null;
		return function foo() {
			tc = null;
			var oldLength = that.getLength(),
				nowLength = 0;
			tc = setTimeout(function () {
				nowLength = that.getLength();
				if (nowLength !== oldLength) {
					that.length = that.getLength();
				}
				foo();
			}, 200);
		};
	}());
	inspectLengthChange();

	return that;
}
