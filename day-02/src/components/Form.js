import React from "react";

class Form extends React.Component {
	render() {
		let jsx = "";
		for (const type in this.props) {
			jsx += <input type={type} name={this.props[type]} />;
		}
		return (
			<div className="form">
				<form action="/" method="get">
					{jsx}
				</form>
			</div>
		);
	}
}
