import React from "react";

export class Calculator extends React.Component {
	constructor() {
		super();
		this.state = {
			screenText: "",
		};
		this.usernameRef = React.createRef();
		this.emailRef = React.createRef();
		this.passwordRef = React.createRef();
	}

	onBtnClick(value) {
		this.setState({
			screenText: `${this.state.screenText} ${value}`,
		});
	}

	handleFormSubmission(event) {
		event.preventDefault();
		console.log({
			username: this.usernameRef.current.value,
			password: this.passwordRef.current.value,
			email: this.emailRef.current.value,
		});
	}

	render() {
		return (
			<div className="calculator flex flex-column gap-sm">
				<div className="screen border">{this.state.screenText}</div>
				<form>
					<div>
						<input type="text" ref={this.usernameRef} />
					</div>
					<div>
						<input type="email" ref={this.emailRef} />
					</div>
					<div>
						<input type="password" ref={this.passwordRef} />
					</div>
					<div>
						<button onClick={this.handleFormSubmission.bind(this)}>
							Send Data
						</button>
					</div>
				</form>
				<CalculatorBox
					className="blue-buttons"
					first="="
					second="C"
					third="AC"
					fourth="DEL"
					disabled={this.state.screenText === ""}
					myButtonClickFn={this.onBtnClick.bind(this)}
				></CalculatorBox>
				<CalculatorBox
					first="+"
					second="-"
					third="/"
					fourth="*"
					myButtonClickFn={this.onBtnClick.bind(this)}
				></CalculatorBox>
				<CalculatorBox
					first="1"
					second="2"
					third="3"
					fourth="sin"
					myButtonClickFn={this.onBtnClick.bind(this)}
				></CalculatorBox>
				<CalculatorBox
					first="4"
					second="5"
					third="6"
					fourth="cos"
					myButtonClickFn={this.onBtnClick.bind(this)}
				></CalculatorBox>
				<CalculatorBox
					first="7"
					second="8"
					third="9"
					fourth="tan"
					myButtonClickFn={this.onBtnClick.bind(this)}
				></CalculatorBox>
			</div>
		);
	}
}

export class CalculatorBox extends React.Component {
	render() {
		return (
			<div
				className={
					"flex justify-content-between gap-sm " + this.props.className
				}
			>
				<button
					onClick={() => {
						this.props.myButtonClickFn(this.props.second);
					}}
					disabled={this.props.disabled && "disabled"}
				>
					{this.props.first}
				</button>
				<button
					onClick={() => {
						this.props.myButtonClickFn(this.props.second);
					}}
					disabled={this.props.disabled && "disabled"}
				>
					{this.props.second}
				</button>
				<button
					onClick={() => {
						this.props.myButtonClickFn(this.props.third);
					}}
					disabled={this.props.disabled && "disabled"}
				>
					{this.props.third}
				</button>
				<button
					onClick={() => {
						this.props.myButtonClickFn(this.props.fourth);
					}}
					disabled={this.props.disabled && "disabled"}
				>
					{this.props.fourth}
				</button>
			</div>
		);
	}
}
