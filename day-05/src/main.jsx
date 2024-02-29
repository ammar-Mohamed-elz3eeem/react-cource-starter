import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Todo from "./components/Todo.jsx";
import HeaderMenu from "./components/HeaderMenu.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HeaderMenu></HeaderMenu>
		<Todo></Todo>
	</React.StrictMode>
);
