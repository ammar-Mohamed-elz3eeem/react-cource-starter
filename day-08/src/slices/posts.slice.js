import { createSlice, nanoid } from "@reduxjs/toolkit";

export const postSlice = createSlice({
	name: "posts",
	initialState: [],
	reducers: {
		onAddPost: {
			reducer: (state, action) => {
				state.push(action.payload);
			},
			prepare: (title, content, userId) => {
				return {
					payload: {
						id: nanoid(),
						created_by: userId,
						created_at: new Date().toISOString(),
						title,
						content,
						reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
					},
				};
			},
		},
		onEditPost(state, action) {
			const idx = state.findIndex((value) => value.id === action.payload.id);
			console.log(idx);
			if (idx < state.length) {
				state[idx].title = action.payload.title;
				state[idx].content = action.payload.content;
				state[idx].created_by = action.payload.author;
			}
		},
		onAddReaction(state, action) {
			const { postId, reaction } = action.payload;
			const existingPost = state.find((post) => post.id === postId);
			if (existingPost) {
				existingPost.reactions[reaction]++;
			}
		},
	},
});

export const selectPosts = (state) => state.posts;

export const { onAddPost, onEditPost, getPosts, onAddReaction } =
	postSlice.actions;

export default postSlice.reducer;
