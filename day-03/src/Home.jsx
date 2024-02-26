import React from "react";
import Header from "./components/Header.jsx";
import LeftSideBar from "./components/LeftSideBar.jsx";
import Content from "./components/Content.jsx";
import RightSideBar from "./components/RightSideBar.jsx";

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			isDark: false,
		};
	}

	switchToDark() {
		this.setState({
			isDark: !this.state.isDark,
		});
	}

	render() {
		console.log(this.setState);
		const changer = this.switchToDark.bind(this);
		if (this.state.isDark) {
			return (
				<div className="dark">
					<div className="flex flex-row w-75 margin-auto align-items-center justify-content-between">
						<div>
							<h1>Friendy</h1>
						</div>
						<div>
							<input type="search" placeholder="type for search" />
						</div>
						<div>
							<button onClick={changer} className="darkMode">
								Dark Mode
							</button>
						</div>
					</div>
					<div className="flex flex-row justify-content-between">
						<LeftSideBar className="flex flex-column"></LeftSideBar>
						<Content></Content>
						<RightSideBar></RightSideBar>
					</div>
				</div>
			);
		} else {
			return (
				<div className="light">
					<div className="flex flex-row w-75 margin-auto align-items-center justify-content-between">
						<div>
							<h1>Friendy</h1>
						</div>
						<div>
							<input type="search" placeholder="type for search" />
						</div>
						<div>
							<button onClick={changer} className="darkMode">
								Dark Mode
							</button>
						</div>
					</div>
					<div className="flex flex-row justify-content-between">
						<LeftSideBar className="flex flex-column"></LeftSideBar>
						<Content></Content>
						<RightSideBar></RightSideBar>
					</div>
				</div>
			);
		}
	}
}
