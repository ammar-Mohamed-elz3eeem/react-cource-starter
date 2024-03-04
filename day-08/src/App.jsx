import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, selectPosts } from "./slices/posts.slice";
import Post from "./components/Post";
import PostsList from "./components/PostsList";
import AddNewPost from "./components/AddNewPost";
import SinglePost from "./components/SinglePost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import EditPost from "./components/EditPost";

function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Routes>
					<Route Component={Layout}>
						<Route
							path="/"
							element={
								<div className="container">
									<AddNewPost />
									<PostsList />
								</div>
							}
						></Route>
						<Route path="/posts/:postId" element={<SinglePost />}></Route>
						<Route path="/posts/:postId/edit" element={<EditPost />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
