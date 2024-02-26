import React from "react";

export class Counter extends React.Component {
	render() {
		return (
			<div className="flex flex-column items-center">
				<p className="text-center f-10xl">0</p>
				<div className="flex gap-sm flex-row justify-content-center">
					<button>Increase</button>
					<button>Decrease</button>
				</div>
			</div>
		);
	}
}
