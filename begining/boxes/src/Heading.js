import React from "react";

export class Heading extends React.Component {
	render() {
		return (
			<h1>
				Hello From {this.props.framework}, I love {this.props.hoppy}
			</h1>
		);
	}
}
