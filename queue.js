console.log('imported.')
function Queue() {
	'use strict';
	var self = this;
	self.dataStore = [];
}

Queue.prototype.enqueue = function (element) {
	return this.dataStore.push(element);
}

Queue.prototype.dequeue = function (element) {
	return this.dataStore.shift();
}

Queue.prototype.front = function () {
	return this.dataStore[0];
}

Queue.prototype.back = function () {
	return this.dataStore[this.dataStore.length - 1];
}

Queue.prototype.isEmpty = function () {
	if (this.dataStore.length == 0) {
		return true;
	}
	return false;
}

module.exports = Queue;

