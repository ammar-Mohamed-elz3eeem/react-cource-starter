import React from "react";

export class Calculator extends React.Component {
	render() {
		return (
			<div className="calculator">
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
