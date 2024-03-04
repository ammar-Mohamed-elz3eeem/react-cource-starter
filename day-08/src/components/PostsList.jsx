import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../slices/posts.slice";

function PostsList() {
	const dispatcher = useDispatch();
	const postsState = useSelector((state) => state.posts);
	console.log(postsState);
	const orderedPosts = [...postsState].sort((a, b) =>
		b.created_at.localeCompare(a.created_at)
	);

	return orderedPosts.map((post) => <Post key={post.id} post={post}></Post>);
}

export default PostsList;
