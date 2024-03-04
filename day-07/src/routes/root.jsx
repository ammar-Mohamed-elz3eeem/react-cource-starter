import { useParams, Outlet, Link } from "react-router-dom";

// Asynchronous Programming
// synchronous Programming

// synchronous Programming
// Task 1 (2 seconds to finish)
// Task 2 (2 seconds to finish)
// Task 3 (2 seconds to finish)
// Task 4 (2 seconds to finish)

// Asynchronous Programming
// Task 1 // Task 2 // Task 3 // Task 4

export default function Root() {
	const { cid, myRole } = useParams();
	console.log("This is my cid", cid, "and my role is " + myRole);

	return (
		<>
			<div id="sidebar" className="h-100">
				<h1>React Router Contacts</h1>
				<div>
					<form id="search-form" role="search">
						<input id="q" placeholder="Search" type="search" name="q" />
						<div id="search-spinner" hidden={true} />
						<div className="sr-only"></div>
					</form>
					<form method="post">
						<button type="submit">New</button>
					</form>
				</div>
				<nav>
					<ul>
						<li>
							<Link to={`/contacts/1`}>Your Name</Link>
						</li>
						<li>
							<Link to={`/contacts/2`}>Your Friend</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div id="detail">
				<Outlet></Outlet>
			</div>
		</>
	);
}
