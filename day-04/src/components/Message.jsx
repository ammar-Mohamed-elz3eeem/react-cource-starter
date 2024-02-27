import React from "react";

// Short circut Evaluation

// const weatherISGood = false;
// const gasInCar = true;

// weatherISGood && gasInCar;
// false && true;

export default class Message extends React.Component {
	render() {
		return (
			<div>
				{this.props.myError && (
					<div className="bg-red-400 text-white py-3 px-3">
						{this.props.myError}
					</div>
				)}
				<div className="text-6xl text-center">{this.props.myCount}</div>
			</div>
		);
	}
}
