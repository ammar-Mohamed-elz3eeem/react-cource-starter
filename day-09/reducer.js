const arr = [10, 20, 30, 50, -50, -10];

// arr.map((value) => {

// })

const sum = arr.reduce((acc, value) => {
	return value + acc;
}, 0);

const arr2 = [
	["likes", 2],
	["love", 2],
	["care", 0],
	["angry", 0],
	["sad", 0],
	["haha", 30],
];
// let obj = {};
// for (let item of arr2) {
// 	const [emotion, noOfEmotions] = item;
// 	console.log(obj);
// 	obj = { ...obj, [emotion]: noOfEmotions };
// }
// console.log(obj);

// INPUT ["name", "my", "ammar", "programming", "js", "my", "role", "name"]
// OUTPUT { name: 2, my: 2, ammar: 1, programming: 1, js: 1, "role": 1 }

// const input = [
// 	"name",
// 	"name",
// 	"ammar",
// 	"programming",
// 	"js",
// 	"my",
// 	"role",
// 	"name",
// ];
// const output1 = input.reduce((acc, val) => {
// 	return { ...acc, [val]: (acc[val] || 0) + 1 };
// }, {});
// const output2 = input.reduce((acc, val) => {
// 	return { ...acc, [val]: acc[val] ? acc[val] + 1 : 1 };
// }, {});
// const output3 = input.reduce((acc, val) => {
// 	if (acc[val] == true) {
// 		acc[val] += 1;
// 	} else {
// 		acc[val] = 1;
// 	}
// 	return acc;
// }, {});

// const obj = {
// 	a: {
// 		c: 3,
// 	},
// 	b: 2,
// };
// console.log({ ...obj, a: { ...obj.a, c: 45 } });

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: counterReducer });

console.log(store.getState());

// Array.prototype.myReducer = function (func, initialValue) {
// 	let acc = initialValue;
// 	for (let item of this) {
// 		acc = func(item, acc);
// 	}
// 	return acc;
// };4

// const sum2 = [1, 2, 3, 4, 5].myReducer((current, initial) => {
// 	return initial + current;
// }, 0);

// console.log(sum);
// console.log(sum2);
