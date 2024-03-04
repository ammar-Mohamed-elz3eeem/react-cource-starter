import React from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { Outlet } from "react-router-dom";

function NormalPagesLayout() {
	return (
		<>
			<Header></Header>
			<div className="flex w-100 h-100">
				<Sidebar></Sidebar>
				<Outlet></Outlet>
			</div>
		</>
	);
}

export default NormalPagesLayout;
