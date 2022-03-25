import React from "react";
import {config, Map} from "bkoi-gl";
import "./style.css";
function BkoiMap() {
	config.accessToken = "MzEwNTo1TlhYODBKUVFQ";

	const map = config.map({
		container: "map",
		center: [90.3938010872331, 23.821600277500405],
		zoom: 12,
	});

	return <div id='map'></div>;
}

export default BkoiMap;
