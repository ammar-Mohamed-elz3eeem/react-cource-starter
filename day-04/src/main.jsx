import React from "react";
import ReactDOM from "react-dom/client";
// import Counter from "./components/Counter.jsx";
import { Calculator } from "./components/Calculator.jsx";
import "./index.css";
import "./App.css";
import Search from "./components/Search.jsx";

// const myFunction = () => {
// 	console.log("My Name is PC");
// };

// console.log("MyFunction = ", myFunction());

// const myFunction2 = function () {
// 	console.log("My Name is PC");
// };

// function myFunction3() {
// 	console.log("My Name is PC");
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<div>
// 		<button onClick={myFunction}>Click Me</button>
// 		<button onClick={myFunction2}>Click Me</button>
// 		<button onClick={myFunction3}>Click Me</button>
// 		<button
// 			onClick={() => {
// 				console.log("My Name is PC");
// 			}}
// 		>
// 			Click Me
// 		</button>
// 		<button
// 			onClick={function () {
// 				console.log("My Name is PC");
// 			}}
// 		>
// 			Click Me
// 		</button>
// 		<button>Click Me</button>
// 		<button>Click Me</button>
// 	</div>
// );

ReactDOM.createRoot(document.getElementById("root")).render(<Search />);
