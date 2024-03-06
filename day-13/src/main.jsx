import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login.jsx";
import store from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<Login></Login>
	</Provider>
);
