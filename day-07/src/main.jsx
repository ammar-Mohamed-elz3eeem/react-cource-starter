import { createRoot } from "react-dom/client";
import {
	RouterProvider,
	createBrowserRouter,
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./index.css";
import Sidebar from "./component/Sidebar.jsx";
import About from "./pages/About.jsx";
import NormalPagesLayout from "./pages/NormalPagesLayout.jsx";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import Contact from "./routes/contact.jsx";
import SingleSneaker from "./component/SingleSneaker.jsx";

const htmlToRenderVirtualDomIN = document.getElementById("root");

const root = createRoot(htmlToRenderVirtualDomIN);

const browserRoutes = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		children: [{ path: "/contacts/:cid", element: <Contact></Contact> }],
	},
	,
	{ path: "/sneakers", element: <Home></Home> },
	{ path: "/sneakers/:sneakerId", element: <SingleSneaker></SingleSneaker> },
]);

root.render(
	<RouterProvider router={browserRoutes}></RouterProvider>
	// <BrowserRouter>
	// 	<Routes>
	// 		<Route path="/" element={<Root></Root>}></Route>
	// 		<Route path="/contacts/:cid" element={<Contact></Contact>}></Route>
	// 		<Route
	// 			path="*"
	// 			element={<ErrorPage></ErrorPage>}
	// 			errorElement={<ErrorPage></ErrorPage>}
	// 		></Route>
	// 	</Routes>
	// </BrowserRouter>
);

// Pages: login, register -> AuthLayout
// Pages: overview, guide, tutorial -> RootLayout
