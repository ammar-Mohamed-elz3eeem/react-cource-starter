import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onEditPost } from "../slices/posts.slice";

function EditPost() {
	const { postId } = useParams();
	const post = useSelector((state) => {
		return state.posts.find((post) => post.id == postId);
	});

	const users = useSelector((state) => state.users);

	const [title, setTitle] = useState(post.title);
	const [content, setContent] = useState(post.content);
	const [author, setAuthor] = useState(post.created_by);

	console.log("author,author,author", author);

	const usersOptions = users.map((user) => {
		return (
			<option selected={user.id === author} key={user.id} value={user.id}>
				{user.name}
			</option>
		);
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onTitleChange = (e) => setTitle(e.target.value);
	const onContentChange = (e) => setContent(e.target.value);
	const onAuthorChange = (e) => setAuthor(e.target.value);

	const onSavePostClicked = () => {
		if (title && content && author) {
			dispatch(onEditPost({ id: postId, title, content, author }));
			navigate(`/posts/${postId}`);
		}
	};

	return (
		<section>
			<h2>Edit Post</h2>
			<form>
				<label htmlFor="postTitle">Post Title:</label>
				<input
					type="text"
					id="postTitle"
					name="postTitle"
					placeholder="What's on your mind?"
					value={title}
					onChange={onTitleChange}
				/>
				<label htmlFor="postAuthor">Author:</label>
				<select id="postAuthor" value={author} onChange={onAuthorChange}>
					<option value=""></option>
					{usersOptions}
				</select>
				<label htmlFor="postContent">Content:</label>
				<textarea
					id="postContent"
					name="postContent"
					value={content}
					onChange={onContentChange}
				/>
			</form>
			<button type="button" onClick={onSavePostClicked}>
				Save Post
			</button>
		</section>
	);
}

export default EditPost;
