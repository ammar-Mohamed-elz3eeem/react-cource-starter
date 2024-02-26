import React from "react";

export class Calculator extends React.Component {
	render() {
		return (
			<div className="calculator">
				<CalculatorBox></CalculatorBox>
				<CalculatorBox></CalculatorBox>
				<CalculatorBox></CalculatorBox>
				<CalculatorBox></CalculatorBox>
			</div>
		);
	}
}

export class CalculatorBox extends React.Component {
	render() {
		return (
			<div>
				<button>+</button>
				<button>-</button>
				<button>/</button>
				<button>*</button>
			</div>
		);
	}
}
