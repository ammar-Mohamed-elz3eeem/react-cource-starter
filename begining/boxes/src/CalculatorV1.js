import React from "react";

// add onClick to every button that prints the word inside the button
// use State to hold the text that should be printed to screen

export class Calculator extends React.Component {
	render() {
		return (
			<div className="calculator">
				<div className="screen">{this.state.screenText}</div>
				<div>
					<button>+</button>
					<button>-</button>
					<button>/</button>
					<button>*</button>
				</div>
				<div>
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<button>sin</button>
				</div>
				<div>
					<button>4</button>
					<button>5</button>
					<button>6</button>
					<button>cos</button>
				</div>
				<div>
					<button>7</button>
					<button>8</button>
					<button>9</button>
					<button>tan</button>
				</div>
			</div>
		);
	}
}
