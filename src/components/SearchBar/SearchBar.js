import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {Stack} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {fetchSearchData} from "./../Store/searchActionCreator";
import {useDispatch, useSelector} from "react-redux";

function SearchBar() {
	const jsonResults = useSelector((state) => state.search);
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState([]);
	const [inputValue, setInputValue] = React.useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSearchData(inputValue));
	}, [dispatch, inputValue]);
	console.log("OOOh", inputValue);
	console.log("Options", jsonResults.items);
	console.log("NewValue", value);
	return (
		<Stack sx={{width: 300}}>
			<h1>Barikoi</h1>
			<Autocomplete
				open={open}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				inputValue={inputValue}
				onInputChange={(event, newInputValue) => {
					if (newInputValue.length === 0) {
						if (open) setOpen(false);
					} else {
						if (!open) setOpen(true);
					}
					setInputValue(newInputValue);
				}}
				filterOptions={(x) => x}
				id='places_demo'
				getOptionLabel={(jsonResult) => `${jsonResult.address}`}
				options={jsonResults.items}
				sx={{width: 300}}
				isOptionEqualToValue={(option, value) => option.address === value.address}
				noOptionsText={"No Data Found!"}
				renderOption={(props, jsonResult) => (
					<Box component='li' {...props} key={jsonResult.id}>
						{jsonResult.address}
						{jsonResult.pType}
					</Box>
				)}
				renderInput={(params) => <TextField {...params} label='Search for places' />}
			/>
			<CardContent>
				<Typography variant='h5' component='div'>
					{`${value !== null && value.length !== 0 ? `'${value.address}${value.postCode}'` : ""}`}
				</Typography>
			</CardContent>
		</Stack>
	);
}

export default SearchBar;
