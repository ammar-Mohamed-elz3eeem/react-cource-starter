import React from "react";

export class Calculator extends React.Component {
	constructor() {
		super();
		this.state = {
			screenText: "0",
		};
	}

	onBtnClick() {
		this.setState({
			screenText: `${this.state.screenText} Hello from this state`,
		});
	}

	render() {
		const btnClickFn = this.onBtnClick.bind(this);
		return (
			<div className="calculator">
				<div className="screen border">{this.state.screenText}</div>
				<button onClick={btnClickFn}>Click to greet</button>
				<CalculatorBox
					first="="
					second="C"
					third="AC"
					fourth="DEL"
				></CalculatorBox>
				<CalculatorBox
					first="+"
					second="-"
					third="/"
					fourth="*"
				></CalculatorBox>
				<CalculatorBox
					first="1"
					second="2"
					third="3"
					fourth="sin"
				></CalculatorBox>
				<CalculatorBox
					first="4"
					second="5"
					third="6"
					fourth="cos"
				></CalculatorBox>
				<CalculatorBox
					first="7"
					second="8"
					third="9"
					fourth="tan"
				></CalculatorBox>
			</div>
		);
	}
}

export class CalculatorBox extends React.Component {
	render() {
		console.log(this.state);
		return (
			<div>
				<button>{this.props.first}</button>
				<button>{this.props.second}</button>
				<button>{this.props.third}</button>
				<button>{this.props.fourth}</button>
			</div>
		);
	}
}
