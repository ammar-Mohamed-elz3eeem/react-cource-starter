import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App(props) {
	const [counter, setCounter] = useState(0);
	const [error, setError] = useState("");

	const handleClick = function () {
		setCounter(function (prev) {
			return prev + 1;
		});
	};

	const decreaseFn = function () {
		setCounter(counter - 1);
	};

	return (
		<div>
			<Message myCount={counter} myError={error}></Message>
			<div className="flex flex-row justify-content-center gap-lg">
				<button onClick={handleClick}>Increase</button>
				<button onClick={decreaseFn}>Decrease</button>
			</div>
		</div>
	);
}

function Message(props) {
	return (
		<div>
			{props.myError && (
				<div className="bg-red-400 text-white py-3 px-3">{props.myError}</div>
			)}
			<div className="text-6xl text-center">{props.myCount}</div>
		</div>
	);
}

export default App;
