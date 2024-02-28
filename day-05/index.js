// const arr = ["amr", "ali", "Hussien", "Bahaa", "Wael"]; // this code equal to new Array("amr", "ali", "Hussien", "Bahaa", "Wael")

// arr.forEach(function (value) {
// 	console.log(value);
// });

// arr.forEveryItem(function (value, value2) {
// 	console.log(value, value2);
// });

// function sum(arr) {}

// sum([1, 2, 3, 4, 5]);
const arr = ["amr", "ali", "Hussien", "Bahaa", "Wael"]; // this code equal to new Array("amr", "ali", "Hussien", "Bahaa", "Wael")

// arr.map(function (val, i, list) {
// 	console.log(val, i, list);
// });

Array.prototype.myMap = function (callback) {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		result[i] = callback(this[i], i, this);
	}
	return result;
};

Array.prototype.myForEach = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this);
	}
};

Array.prototype.myFilteration = function (callback) {};

const numbers = [1, 5, 64, 7, 9, 3, 1, 4];
numbers.myFilteration(function () {}); //
numbers.myFilteration(function () {}); //

const newShapeForArray = arr.myMap(function (value, index, names) {
	return "Hello, " + value;
});

const newShapeForArrayWithForEach = arr.myForEach(function (
	value,
	index,
	names
) {
	console.log(value, index, names);
});

console.log(newShapeForArray);
console.log(newShapeForArrayWithForEach);

console.log(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function (value) {
		return value % 2 === 0;
	})
);

console.log(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function (value) {
		return value % 3 === 0;
	})
);

console.log(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function (value) {
		return value % 2 !== 0;
	})
);
