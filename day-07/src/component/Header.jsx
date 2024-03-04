import React from "react";

function Header() {
	return (
		<div className="flex py-2 px-3 flex-row justify-content-between w-100 bg-light">
			<img src="../../public/vite.svg" height={50} />
			<h1 className="p-0 m-0">Welcome to Magic in React</h1>
		</div>
	);
}

export default Header;
