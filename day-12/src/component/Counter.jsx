import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseCounter, increaseCounter } from "../store/store.js";

function Counter() {
	const inputRef = React.useRef();
	const hamada = useSelector((store) => {
		return store.counter.value;
	});
	const dispatch = useDispatch();

	return (
		<div>
			<div
				style={{
					fontSize: "120px",
				}}
			>
				{hamada}
			</div>
			<div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
				<input ref={inputRef} type="number" placeholder="Enter a number" />
				<button
					onClick={() =>
						dispatch(
							increaseCounter({ number: parseInt(inputRef.current.value) })
						)
					}
				>
					Increase
				</button>
				<button
					onClick={() =>
						dispatch(
							decreaseCounter({ number: parseInt(inputRef.current.value) })
						)
					}
				>
					Decrease
				</button>
			</div>
		</div>
	);
}

export default Counter;
