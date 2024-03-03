function loopAgainPromise() {
	return new Promise((resolve, reject) => {
		for (let i = 0; i < 100000; i++) {
			for (let i = 0; i < 100000; i++) {}
		}
		const text = "i run a lot of times";
		resolve(text);
	});
}

const quota = 5000;

console.log(quota);
console.log("Hello I am here");
