import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPostReducer } from "../store/store.js";

function AddPost() {
	const titleRef = useRef();
	const contentRef = useRef();
	const dispatch = useDispatch();
	// const posts = useSelector((state) => state.posts.posts);

	const submit = function (e) {
		e.preventDefault();
		dispatch(
			addPostReducer({
				id: posts[posts.length - 1].id + 1,
				title: titleRef.current.value,
				content: contentRef.current.value,
			})
		);
		titleRef.current.value = "";
		contentRef.current.value = "";
	};

	return (
		<div className="container mt-4">
			<Form onSubmit={submit}>
				<Form.Group className="mb-3">
					<Form.Control
						type="text"
						ref={titleRef}
						placeholder="Enter Post Title"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Control
						as="textarea"
						ref={contentRef}
						rows={3}
						placeholder="Enter Post Content"
					></Form.Control>
				</Form.Group>
				<Button variant="primary" type="submit">
					Add New Post
				</Button>
			</Form>
		</div>
	);
}

export default AddPost;
