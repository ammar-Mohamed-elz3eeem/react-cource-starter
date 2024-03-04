import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slices/posts.slice";
import usersSlice from "../slices/users.slice";

export default configureStore({
	reducer: {
		posts: postsReducer,
		users: usersSlice,
	},
});
