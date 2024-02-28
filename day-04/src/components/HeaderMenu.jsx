import React, { Component } from "react";

// binary operators: + - / * % && ||
// unary operators: ++ -- !
// ternary operator: (condition) ? (code to run if codition is true) : (code to run if codition is false);

export default class HeaderMenu extends Component {
	constructor() {
		super();
		this.state = {
			isLoggedIn: false,
		};
	}
	loginOrLogout() {
		this.setState({ isLoggedIn: !this.state.isLoggedIn });
	}
	render() {
		return (
			<div className="flex flex-column justify-content-center items-center">
				<ul className="flex flex-row gap-sm list-style-none">
					<li>Home</li>
					<li>About us</li>
					<li>contact</li>

					{this.state.isLoggedIn ? (
						<li>Profile</li>
					) : (
						<>
							<li>Login</li>
							<li>Sign up</li>
						</>
					)}
				</ul>
				<button onClick={this.loginOrLogout.bind(this)}>
					{this.state.isLoggedIn ? "Logout" : "Login"}
				</button>
			</div>
		);
	}
}
