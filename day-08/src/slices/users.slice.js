import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{ id: "0", name: "Tianna Jenkins" },
	{ id: "1", name: "Kevin Grant" },
	{ id: "2", name: "Madison Price" },
];

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
