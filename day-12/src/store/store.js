import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "users",
	initialState: [],
	reducers: {
		addUserReducer: function (state, action) {
			return [...state, action.payload];
		},
		deleteUserReducer: function (state, action) {
			const { userId } = action.payload;
			return [...state.filter((user) => user.id != userId)];
		},
		editUserReducer: function (state, action) {
			const { username, password, userId } = action.payload;
			const user = {
				...state.find((user) => user.id == userId),
				username: username,
				password,
				password,
			};
			return state.map((item) => {
				return item.id == userId ? user : item;
			});
		},
	},
});

const postSlice = createSlice({
	name: "posts",
	initialState: [
		{ id: 1, title: "Hello World", content: "Hello from Reduxjs" },
		{ id: 2, title: "we are learning reduxjs", content: "This is awesome" },
	],
	reducers: {
		addPostReducer: function (state, action) {
			return [...state, action.payload];
		},
		deletePostReducer: function (state, action) {
			const { postId } = action.payload;
			return [...state.filter((post) => post.id != postId)];
		},
		editPostReducer: function (state, action) {
			const { title, content, postId } = action.payload;
			const post = {
				...state.find((post) => post.id == postId),
				title: title,
				content: content,
			};
			return state.map((item) => {
				return item.id == postId ? post : item;
			});
		},
	},
});

export default configureStore({
	reducer: {
		user: userSlice.reducer,
		post: postSlice.reducer,
	},
});

export const { addUserReducer, editUserReducer, deleteUserReducer } =
	userSlice.actions;

export const { addPostReducer, editPostReducer, deletePostReducer } =
	postSlice.actions;
