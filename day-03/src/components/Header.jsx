import React from "react";

export default class Header extends React.Component {
	render() {
		return (
			<div className="flex flex-row w-75 margin-auto align-items-center justify-content-between">
				<div>
					<h1>Friendy</h1>
				</div>
				<div>
					<input type="search" placeholder="type for search" />
				</div>
				<div>
					<button onClick className="darkMode">
						Dark Mode
					</button>
				</div>
			</div>
		);
	}
}
