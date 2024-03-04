import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import Post from "./Post";

function SinglePost() {
	const { postId } = useParams();
	const post = useSelector((state) => {
		return state.posts.find((post) => post.id == postId);
	});

	if (!post) {
		return (
			<section>
				<h2>Post not found!</h2>
			</section>
		);
	}

	return (
		<section>
			<Post isPostPage={true} post={post}></Post>
		</section>
	);
}

export default SinglePost;
