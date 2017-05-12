function List() {
	'use strict';
	var self = this;
	this.data = [];
	this.length = this.data.length;
	this.now = 0;
	List.prototype.getPointer = function () {
		return this.now;
	};
	List.prototype.getElement = function () {
		return this.data[this.now];
	};
	List.prototype.insert = function () {
		var args, _process;
		args = [].slice.call(arguments);
		args.unshift(this.now, 0);
		_process = [].splice.apply(this.data, args);
		this.refreshLength();
		this.moveTo();
		return _process;

	};
	List.prototype.abandon = function (n) {
		n = !n ? 1 : n;
		var _process = this.data.splice(this.now, n);
		this.refreshLength();
		return _process;
	};
	List.prototype.next = function () {
		if (!this.hasNext()) {
			return this.now;
		}
		this.now += 1;
		return this.now;
	};
	List.prototype.hasNext = function () {
		return this.now < this.length;
	};
	List.prototype.prev = function () {
		if (!this.hasPrev()) {
			return this.now;
		}
		this.now -= 1;
		return this.now;
	};
	List.prototype.hasPrev = function () {
		return this.now > 0;
	};
	List.prototype.moveTo = function (n) {
		if (n <= this.length && n >= 0) {
			this.now = n;
			return n;
		}
		return this.now = this.length;
	};
	List.prototype.refreshLength = function () {
		return this.length = this.data.length;	
	};
	List.prototype.getLength = function () {
		return this.length;
	}
	List.prototype.watcher = function (obj, prop, callback) {
		var args = [].slice.call(arguments),
			_value = obj[prop];
		Object.defineProperty(obj, prop, {
			get: function () {
				return _value;
			},
			set: function (value) {
				_value = value;
				callback.apply(null, args);
				return _value;
			}
		});
	};
}
