import React from "react";

export default function Box(props) {
	return (
		<div className="box flex flex-column">
			<p>{props.currentNumber}</p>
			<div className="flex flex-row justify-content-between">
				<button onClick={props.increaseFn}>increase</button>
				<button onClick={props.decreaseFn}>decrease</button>
			</div>
		</div>
	);
}

// export default class Box extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			number: 0,
// 		};
// 	}

// 	increase() {
// 		this.setState({
// 			number: this.state.number + 1,
// 		});
// 	}

// 	decrease() {
// 		this.setState({
// 			number: this.state.number - 1,
// 		});
// 	}

// 	render() {
// 		const increaseThis = this.increase.bind(this);
// 		const decreaseThis = this.decrease.bind(this);
// 		return (
// 			<div class="flex flex-column">
// 				<p>{this.state.number}</p>
// 				<div class="flex flex-row justify-content-between">
// 					<button onClick={increaseThis}>Increase</button>
// 					<button onClick={decreaseThis}>Decrease</button>
// 				</div>
// 			</div>
// 		);
// 	}
// }
