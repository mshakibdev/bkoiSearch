import {configureStore} from "@reduxjs/toolkit";
import mapSlice from "./mapSlice";
import searchSlice from "./searchSlice";
const store = configureStore({
	reducer: {
		search: searchSlice.reducer,
		map: mapSlice.reducer,
	},
});
export default store;
