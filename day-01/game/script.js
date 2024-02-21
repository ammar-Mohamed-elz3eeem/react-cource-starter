const addBoxBtn = document.querySelector("#adder");
const removeBoxBtn = document.getElementById("remover");
const boxContainer = document.getElementsByClassName("container")[0];
const boxes = [];

addBoxBtn.addEventListener("click", () => {
	const box = document.createElement("div");
	const incrementBtn = document.createElement("button");
	const decrementBtn = document.createElement("button");
	const btnContainer = document.createElement("div");
	const textContainer = document.createElement("p");
	incrementBtn.addEventListener("click", (e) => {
		console.log(e.target.parentElement.parentElement.children);
		const text = e.target.parentNode.parentNode.children[0];
		text.textContent = parseInt(text.textContent) + 1;
	});
	decrementBtn.addEventListener("click", (e) => {
		const text = e.target.parentNode.parentNode.children[0];
		const num = parseInt(text.textContent);
		if (num <= 0) {
			const errorBox = document.createElement("div");
			errorBox.textContent = "number can't be less than 0";
			errorBox.classList.add("alert-small");
			box.appendChild(errorBox);
		} else {
			text.textContent = parseInt(text.textContent) - 1;
		}
	});
	incrementBtn.textContent = "Increase";
	decrementBtn.textContent = "Decrease";
	incrementBtn.addEventListener("click", () => {});
	btnContainer.append(incrementBtn, decrementBtn);
	textContainer.textContent = "0";
	box.append(textContainer, btnContainer);
	box.classList.add("medht");
	boxes.push(box);
	boxContainer.appendChild(box);
});

removeBoxBtn.addEventListener("click", () => {
	if (boxes.length <= 0) {
		const box = document.createElement("div");
		box.textContent = "There are no counters to remove";
		box.classList.add("alert");
		document.body.appendChild(box);
	} else {
		const len = boxes.length;
		console.log(len);
		boxes[len - 1].remove();
		boxes.pop();
	}
});
