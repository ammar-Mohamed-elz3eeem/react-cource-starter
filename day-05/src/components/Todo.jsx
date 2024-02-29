import React, { useRef, useState } from "react";

// Make add todo disabled if user not logged in
// use provided menu array to build the menu according to user conditions
// use action key defined in menus to put onClick for elements that need it
// Bounes: add button beside every todo that deletes the todo - 100

function Todo(props) {
	const todoRef = useRef();
	const [todos, setTodos] = useState([]);
}

export default Todo;
