import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
	createBrowserRouter,
	BrowserRouter,
	Routes,
	Route,
	RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Error404 from "./pages/Error404.jsx";

const router = createBrowserRouter([
	{ path: "/", element: <Home></Home> },
	{ path: "/about", element: <About></About> },
	{ path: "/contact", element: <Contact></Contact> },
	{ path: "*", element: <Error404></Error404> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
