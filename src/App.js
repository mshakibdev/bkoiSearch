import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import DemoBar from "./components/SearchBar/demoBar";
import BkoiGlMap from "./components/Map/Map";
import Box from "@mui/material/Box";
import {Fragment} from "react";

function App() {
	return (
		<Fragment>
			<Box sx={{display: "flex"}}>
				<SearchBar />
				{/* <DemoBar /> */}
				<BkoiGlMap />
			</Box>
		</Fragment>
	);
}

export default App;
