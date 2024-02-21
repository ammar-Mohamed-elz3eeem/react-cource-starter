import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { Box } from "./src/components/Box";

let container = document.getElementsByClassName("hamada")[0];
console.log(container);
const application = createRoot(container);
console.log(application);
application.render(
	<>
		<Box className="fancy-box"></Box>
		<Box className="outlined-box"></Box>
		<Box className="not-box"></Box>
		<Box className="i-am-box"></Box>
	</>
);
