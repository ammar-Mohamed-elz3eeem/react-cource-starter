import React from "react";
import { useDispatch } from "react-redux";
import { onAddReaction } from "../slices/posts.slice";

const reactionEmoji = {
	thumbsUp: "👍",
	hooray: "🎉",
	heart: "❤️",
	rocket: "🚀",
	eyes: "👀",
};

export default function ReactionButtons({ post }) {
	const dispatch = useDispatch();
	const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
		return (
			<button
				key={name}
				type="button"
				onClick={() =>
					dispatch(onAddReaction({ postId: post.id, reaction: name }))
				}
				className="muted-button reaction-button"
			>
				{emoji} {post.reactions[name]}
			</button>
		);
	});

	return <div>{reactionButtons}</div>;
}
