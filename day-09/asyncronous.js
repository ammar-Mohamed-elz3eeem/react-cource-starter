const fs = require("fs");

const MAX_PRIME = 10000000;

function isPrime(n) {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
	const primes = [];
	while (primes.length < quota) {
		const candidate = random(MAX_PRIME);
		if (isPrime(candidate)) {
			primes.push(candidate);
		}
	}
	return primes;
}

const quota = 10000000;

// setTimeout function -
// Promise class -
// fetch function -
// async/await

// response
// 	.then((res) => {
// 		return res.json();
// 	})
// 	.then((webContent) => {
// 		return webContent
// 	})
//   .then(())
// 	.catch((err) => {
// 		console.log(err);
// 	});

async function data() {
	const response = await fetch("http://localhost:3000/posts", {
		method: "GET",
	});
	const res = await response.json();
	console.log(res);
}

// GET
// POST
// PUT
// OPTIONS
// DELETE

// 1 second = 1000 millisecond

// setTimeout(() => {}, 0)

// setTimeout(() => {
// 	console.log("before generating primes");
// 	generatePrimes(quota); // 30 seconds
// 	console.log("after generating primes");
// }, 5000);

// the following two promises are exactly typical

// const promise = new Promise((resolve, reject) => {});
// promise.then((value) => {
//   console.log(value);
// });

// function loopAgainPromise() {
// 	return new Promise((resolve, reject) => {
// 		for (let i = 0; i < 10000000; i++) {
// 			for (let i = 0; i < 10000000; i++) {}
// 		}
// 		const text = "i run a lot of times";
// 		resolve(text);
// 	});
// }

// loopAgainPromise().then((value) => {
// 	console.log(value);
// });

// console.log(quota);
// console.log("Hello I am here");

/* **************************************************** */
/* **************************************************** */
/* **************************************************** */

/**
 * Use Fetch to get data from website
 */

// const fetchPromise = fetch(
// 	"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// console.log(fetchPromise);

// fetchPromise.then((response) => {
// 	console.log(
// 		`Received response Text: ${response.statusText}, With Code: ${response.status}`
// 	);
// });

// console.log("Started request…");

/* **************************************************** */
/* **************************************************** */
/* **************************************************** */
