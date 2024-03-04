import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

function Post({ post, isPostPage }) {
	return (
		<article className={!isPostPage && "post-excerpt"} key={post.id}>
			<h3>{post.title}</h3>
			<div>
				<PostAuthor userId={post.created_by} />
				<TimeAgo timestamp={post.created_at} />
			</div>
			<p className="post-content">
				{isPostPage ? post.content : post.content.substring(0, 100)}
			</p>
			<ReactionButtons post={post}></ReactionButtons>
			<Link to={`/posts/${post.id}`} className="button muted-button">
				View Post
			</Link>
			<Link to={`/posts/${post.id}/edit`} className="button muted-button">
				Edit Post
			</Link>
		</article>
	);
}

export default Post;
