import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SinglePostPage from "./pages/postId/SinglePostPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import EditPost from "./component/EditPost.jsx";
import DeletePost from "./component/DeletePost.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route
					path="/:postId"
					element={<SinglePostPage></SinglePostPage>}
				></Route>
				<Route path="/:postId/edit" element={<EditPost></EditPost>}></Route>
				<Route
					path="/:postId/delete"
					element={<DeletePost></DeletePost>}
				></Route>
			</Routes>
		</BrowserRouter>
	</Provider>
);
