import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAddPost } from "../slices/posts.slice";
import { nanoid } from "@reduxjs/toolkit";

function AddNewPost() {
	const [title, setTitle] = React.useState("");
	const [content, setContent] = React.useState("");
	const [userId, setUserId] = React.useState("");
	const dispatch = useDispatch();

	const users = useSelector((state) => state.users);

	const handleUserChange = (e) => setUserId(e.target.value);
	const handleTitleChange = (e) => setTitle(e.target.value);
	const handleContentChange = (e) => setContent(e.target.value);

	const onSavePost = (e) => {
		dispatch(onAddPost(title, content, userId));
	};

	const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

	const usersOptions = users.map((user) => {
		return (
			<option key={user.id} value={user.id}>
				{user.name}
			</option>
		);
	});

	return (
		<section>
			<h2>Add a New Post</h2>
			<form>
				<label htmlFor="postTitle">Post Title:</label>
				<input
					id="postTitle"
					name="title"
					type="text"
					value={title}
					onChange={handleTitleChange}
				/>
				<label htmlFor="postAuthor">Author:</label>
				<select id="postAuthor" value={userId} onChange={handleUserChange}>
					<option value=""></option>
					{usersOptions}
				</select>
				<label htmlFor="postContent">Post Content:</label>
				<textarea
					id="postContent"
					name="content"
					value={content}
					onChange={handleContentChange}
				></textarea>
				<button type="button" onClick={onSavePost} disabled={!canSave}>
					Save Post
				</button>
			</form>
		</section>
	);
}

export default AddNewPost;
