import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Job from "./components/Job.jsx";
import { getJobs } from "./utils/api.js";

// const browserRouter = createBrowserRouter([
// 	{ path: "/", element: <Jobs></Jobs> },
// 	{ path: "/jobs/:slug", element: <SingleJobPage></SingleJobPage> },
// 	{},
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<RouterProvider router={browserRouter}></RouterProvider>
// );

function MyComponent() {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		getJobs()
			.then((rows) => {
				setData(rows);
				console.log(rows);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []); // ComponentDidMount

	return (
		<div>
			{data.map((job) => (
				<Job job={job}></Job>
			))}
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<MyComponent></MyComponent>}></Route>
		</Routes>
	</BrowserRouter>
);
