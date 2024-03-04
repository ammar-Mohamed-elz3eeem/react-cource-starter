import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import * as reactRedux from "react-redux";
import store from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<reactRedux.Provider store={store}>
		<App />
	</reactRedux.Provider>
);
