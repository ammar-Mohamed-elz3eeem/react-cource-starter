import React from "react";

function Sidebar({ isInAboutOrContact }) {
	return (
		<div className="sidebar flex h-100">
			<ul className="list-style-none flex-column flex gap-lg">
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
				{isInAboutOrContact ? "" : <li>Error 404</li>}
			</ul>
		</div>
	);
}

export default Sidebar;
