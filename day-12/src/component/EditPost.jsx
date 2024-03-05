import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editPostReducer } from "../store/store";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
	const titleRef = useRef();
	const contentRef = useRef();
	const dispatch = useDispatch();
	const { postId } = useParams();
	const currentPost = useSelector((state) => {
		return state.posts.posts.find((post) => post.id == postId);
	});
	const navigate = useNavigate();
	const submit = function (e) {
		e.preventDefault();
		dispatch(
			editPost({
				id: postId,
				title: titleRef.current.value,
				content: contentRef.current.value,
			})
		);
		navigate("/");
	};

	return (
		<div className="container mt-4">
			<Form onSubmit={submit}>
				<Form.Group className="mb-3">
					<Form.Control
						type="text"
						ref={titleRef}
						defaultValue={currentPost.title}
						placeholder="Enter Post Title"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Control
						as="textarea"
						ref={contentRef}
						defaultValue={currentPost.content}
						rows={3}
						placeholder="Enter Post Content"
					></Form.Control>
				</Form.Group>
				<Button variant="primary" type="submit">
					Edit Post
				</Button>
			</Form>
		</div>
	);
}

export default EditPost;
