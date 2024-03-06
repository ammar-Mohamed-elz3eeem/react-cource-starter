import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logUserIn, logUserInAsync } from "../store.js";

export default function Login() {
	const emailRef = useRef();
	const passwordRef = useRef("");
	const dispatch = useDispatch();
	const state = useSelector((initialState) => {
		console.log("initialState", initialState);
		return initialState.user;
	});

	function onSubmit(e) {
		e.preventDefault();
		console.log(state);
		dispatch(logUserInAsync(emailRef.current.value, passwordRef.current.value));
		console.log(state);
	}

	return (
		<div className="container mt-5">
			<h1 className="text-center mb-5">Login Form</h1>
			<div className="offset-sm-3 col-sm-6  d-flex align-items-center justify-content-center">
				<Form onSubmit={onSubmit} className="w-100">
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Control
							ref={emailRef}
							type="email"
							placeholder="Enter email"
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control
							ref={passwordRef}
							type="password"
							placeholder="Password"
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
			<div className="col-1"></div>
		</div>
	);
}
