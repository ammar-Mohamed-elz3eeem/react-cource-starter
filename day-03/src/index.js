import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home.jsx";
import Boxes from "./components/Boxes.jsx";

console.log("HOME");
const container = document.getElementById("app-container");
const root = createRoot(container);

root.render(<Boxes></Boxes>);
