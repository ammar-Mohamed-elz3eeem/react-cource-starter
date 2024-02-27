import React from "react";
import Message from "./Message.jsx";

// Falsy Values: null, undefined, empty string, number 0, false ========> false
// otherwise: True

export default class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0,
			error: "",
		};
	}

	increase() {
		this.setState({ count: this.state.count + 1 });
		this.setState({ error: "" });
	}
	decrease() {
		if (this.state.count === 0) {
			this.setState({ error: "number must be greater than 0" });
		} else {
			this.setState({ count: this.state.count - 1 });
		}
	}
	render() {
		const increaseFn = this.increase.bind(this);
		const decreaseFn = this.decrease.bind(this);
		return (
			<div>
				<Message
					myCount={this.state.count}
					myError={this.state.error}
				></Message>
				<div className="flex flex-row justify-content-center gap-lg">
					<button disabled onClick={increaseFn}>
						Increase
					</button>
					<button onClick={decreaseFn}>Decrease</button>
				</div>
			</div>
		);
	}
}
