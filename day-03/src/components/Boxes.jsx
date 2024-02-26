import React from "react";
import Box from "./Box.jsx";

// using array state of boxes
// class Boxes extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			boxes: [],
// 		};
// 	}

// 	addBox() {
// 		this.setState({
// 			boxes: [...this.state.boxes, 0],
// 		});
// 		console.log(this.state.boxes);
// 	}

// 	removeBox() {
// 		this.setState({
// 			boxes: this.state.boxes.slice(0, -2),
// 		});
// 		console.log(this.state.boxes);
// 	}

// 	increaseBoxNumber(boxIndex) {
// 		this.setState((prev) => {
// 			console.log("Prev State", prev);
// 			return {
// 				boxes: [
// 					...prev.boxes.slice(0, boxIndex),
// 					prev.boxes[boxIndex] + 1,
// 					...prev.boxes.slice(boxIndex + 1),
// 				],
// 			};
// 		});
// 	}

// 	decreaseBoxNumber(boxIndex) {
// 		this.setState((prev) => {
// 			return {
// 				boxes: [
// 					...prev.boxes.slice(0, boxIndex),
// 					prev.boxes[boxIndex] - 1,
// 					...prev.boxes.slice(boxIndex + 1),
// 				],
// 			};
// 		});
// 	}

// 	getBoxes() {
// 		const arr = [];
// 		for (let i = 0; i < this.state.boxes.length; i++) {
// 			const increaseBtn = this.increaseBoxNumber.bind(this, i);
// 			const decreaseBtn = this.decreaseBoxNumber.bind(this, i);
// 			arr.push(
// 				<Box
// 					currentNumber={this.state.boxes[i]}
// 					increaseFn={increaseBtn}
// 					decreaseFn={decreaseBtn}
// 				></Box>
// 			);
// 		}
// 		return arr;
// 	}

// 	render() {
// 		const addBoxBounded = this.addBox.bind(this);
// 		const removeBoxBounded = this.removeBox.bind(this);
// 		return (
// 			<div>
// 				<div className="flex margin-auto w-75 flex-row justify-content-between">
// 					<button onClick={addBoxBounded}>Add Counter</button>
// 					<button onClick={removeBoxBounded}>Remove Counter</button>
// 				</div>
// 				<div className="w-75 grid">{this.getBoxes()}</div>
// 			</div>
// 		);
// 	}
// }

// using object state of boxes
// class Boxes extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			boxes: {},
// 			numberOfBoxes: 0,
// 		};
// 	}

// 	componentDidMount() {
// 		console.log("Component Have been mounted");
// 	}

// 	componentDidUpdate() {
// 		console.log("Component have been updated");
// 	}

// 	addBox() {
// 		this.setState({
// 			boxes: { ...this.state.boxes, [this.state.numberOfBoxes]: 0 },
// 		});
// 		this.setState({
// 			numberOfBoxes: this.state.numberOfBoxes + 1,
// 		});
// 	}

// 	removeBox() {
// 		const oldState = this.state.boxes;
// 		delete oldState[this.state.numberOfBoxes];
// 		this.setState({
// 			boxes: { ...oldState },
// 		});
// 		this.setState({
// 			numberOfBoxes: this.state.numberOfBoxes - 1,
// 		});
// 	}

// 	increaseBoxNumber(boxIndex) {
// 		console.log(this.state.boxes);
// 		this.setState({
// 			boxes: {
// 				...this.state.boxes,
// 				[boxIndex]: this.state.boxes[boxIndex] + 1,
// 			},
// 		});
// 	}

// 	decreaseBoxNumber(boxIndex) {
// 		console.log(this.state.boxes);

// 		this.setState({
// 			boxes: {
// 				...this.state.boxes,
// 				[boxIndex]: this.state.boxes[boxIndex] - 1,
// 			},
// 		});
// 	}

// 	getBoxes() {
// 		const arr = [];
// 		console.log(this.state);
// 		for (let i = 0; i < this.state.numberOfBoxes; i++) {
// 			const increaseBtn = this.increaseBoxNumber.bind(this, i);
// 			const decreaseBtn = this.decreaseBoxNumber.bind(this, i);
// 			arr.push(
// 				<Box
// 					currentNumber={this.state.boxes[i]}
// 					increaseFn={increaseBtn}
// 					decreaseFn={decreaseBtn}
// 				></Box>
// 			);
// 		}
// 		return arr;
// 	}

// 	render() {
// 		const addBoxBounded = this.addBox.bind(this);
// 		const removeBoxBounded = this.removeBox.bind(this);
// 		return (
// 			<div>
// 				<div className="flex margin-auto w-75 flex-row justify-content-between">
// 					<button onClick={addBoxBounded}>Add Counter</button>
// 					<button onClick={removeBoxBounded}>Remove Counter</button>
// 				</div>
// 				<div className="w-75 grid">{this.getBoxes()}</div>
// 			</div>
// 		);
// 	}
// }
const age = 4;

function Boxes() {
	const [boxes, setBoxes] = React.useState({});
	const [numberOfBoxes, setNumberOfBoxes] = React.useState(0);

	function addBox() {
		setBoxes({ ...boxes, [numberOfBoxes]: 0 });
		setNumberOfBoxes(numberOfBoxes + 1);
	}

	function removeBox() {
		this.setState({
			boxes: { ...oldState },
		});
		delete boxes[numberOfBoxes - 1];
		setBoxes();
		setNumberOfBoxes();
	}

	function getBoxes() {
		const arr = [];
		for (let i = 0; i < numberOfBoxes; i++) {
			arr.push(<Box></Box>);
		}
		return arr;
	}

	const arr = [<p>hello</p>, <p>hello</p>, <p>hello</p>, <p>hello</p>];

	return (
		<div>
			<div className="flex margin-auto w-75 flex-row justify-content-between">
				<button onClick={addBoxBounded}>Add Counter</button>
				<button onClick={removeBoxBounded}>Remove Counter</button>
			</div>
			<div className="w-75 grid">{getBoxes()}</div>
			{arr}
		</div>
	);
}

const person = {
	username: "dfdf",
	password: "dvc45f4x",
};

const info = person;

// class Boxes extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			numberOfBoxes: 0,
// 		};
// 	}

// 	getBoxes() {
// 		const arr = [];
// 		for (let i = 0; i < this.state.numberOfBoxes; i++) {
// 			arr.push(<Box></Box>);
// 		}
// 		return arr;
// 	}

// 	addBox() {
// 		this.setState({
// 			numberOfBoxes: this.state.numberOfBoxes + 1,
// 		});
// 	}

// 	removeBox() {
// 		this.setState({
// 			numberOfBoxes: this.state.numberOfBoxes - 1,
// 		});
// 	}

// 	render() {
// 		const addBoxBounded = this.addBox.bind(this);
// 		const removeBoxBounded = this.removeBox.bind(this);
// 		return (
// 			<div>
// 				<div className="flex margin-auto w-75 flex-row justify-content-between">
// 					<button onClick={addBoxBounded}>Add Counter</button>
// 					<button onClick={removeBoxBounded}>Remove Counter</button>
// 				</div>
// 				<div className="w-75 grid">{this.getBoxes()}</div>
// 			</div>
// 		);
// 	}
// }

export default Boxes;
