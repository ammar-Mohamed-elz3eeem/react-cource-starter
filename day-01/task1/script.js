const button = document.getElementsByClassName("darkmode")[0];
button.addEventListener("click", () => {
	document.body.classList.toggle("dark");
});
