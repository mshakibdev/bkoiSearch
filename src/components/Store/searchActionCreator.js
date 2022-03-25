import {searchActions} from "./searchSlice";

export const fetchSearchData = (inputValue) => {
	console.log("heyyy", inputValue);
	const barikoi_API_KEY = "MzEwNTo1TlhYODBKUVFQ";

	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				`https://barikoi.xyz/v1/api/search/autocomplete/${barikoi_API_KEY}/place?q=barikoi&city=${inputValue}`
			);
			if (!response.ok) {
				throw new Error("Couldn't fetch cart data!");
			}
			const data = await response.json();

			return data;
		};

		try {
			const allData = await fetchData();
			console.log("DC", allData);
			dispatch(
				searchActions.searchData({
					items: allData?.places || [],
				})
			);
		} catch (error) {
			console.log("error");
		}
	};
};
