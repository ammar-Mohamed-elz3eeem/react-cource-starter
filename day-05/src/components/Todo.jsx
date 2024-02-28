import React, { useRef, useState } from "react";

function Todo(props) {
	const todoRef = useRef();
	const [todos, setTodos] = useState([]);

	function handleSubmit(event) {
		event.preventDefault();
		console.log(todoRef.current);
		console.log(todoRef.current.value);
		setTodos([...todos, todoRef.current.value]);
		console.log(todos);
	}
	return (
		<div className="flex flex-column gap-5">
			<div className="">
				<form className="flex flex-row" onSubmit={handleSubmit}>
					<div>
						<input ref={todoRef} type="text" placeholder="Enter your todo" />
					</div>
					<div>
						<input type="submit" value="Add Todo" />
					</div>
				</form>
			</div>
			{todos.map(function (value, index) {
				return (
					<div key={index} className="todo">
						{value}
					</div>
				);
			})}
		</div>
	);
}

export default Todo;
