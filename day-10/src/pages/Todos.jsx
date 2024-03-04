import React from "react";

function Todos() {
	let [data, setData] = React.useState([]);

	const fetchDataFromApi = async function () {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/todos/",
			{
				method: "GET",
			}
		);
		const todos = await response.json();
		setData(todos);
		console.log(todos);
	};

	// useEffect(() => {}); // ComponentDidUpdate

	React.useEffect(() => {
		// Request to Server -> Data may come - OR - Error Will happen
		// Reading from Database or File -> Data may Come - OR - Error will happen

		fetchDataFromApi();
	}, []); // ComponentDidMount

	// useEffect(() => {
	// 	return () => {};
	// }); // ComponentWillUnmount

	return (
		<div className="flex flex-column max-w-50 margin-auto gap-sm">
			{data.map((todo) => (
				<div key={todo.id} className="box">
					<div>
						{todo.title} -
						{todo.completed === true ? (
							<div className="green-box">Completed</div>
						) : (
							<div className="red-box">Not Completed</div>
						)}
					</div>
				</div>
			))}
		</div>
	);
}

export default Todos;
