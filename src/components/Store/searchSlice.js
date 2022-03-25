import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
	name: "search",
	initialState: {
		items: [],
	},
	reducers: {
		searchData: (state, actions) => {
			state.items = actions.payload.items;
		},
	},
});
export const searchActions = searchSlice.actions;

export default searchSlice;
