import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
	name: "loginStatus",
	initialState: {
		isLoggedIn: false,
		loggedInUser: null,
	},
	reducers: {
		logUserIn: function (state, action) {
			return {
				loggedInUser: action.payload,
				isLoggedIn: true,
			};
		},
	},
});

export const logUserInAsync = (email, password) => {
	return async (dispatch, getState) => {
		const response = await axios.post(
			"https://friendy-social-bc47307e1168.herokuapp.com/login",
			{
				email: email,
				password: password,
			}
		);
		dispatch(logUserIn(response.data));
	};
};

export const { logUserIn } = userSlice.actions;

export default configureStore({
	reducer: {
		user: userSlice.reducer,
	},
});
