import React from "react";
import Data from "./Data";

//create your first component
const Home = () => {
	return (
		<>
			<h1 className="p-3">Numerology</h1>
			<div className="d-flex p-3">
				<Data />
			</div>
		</>
	);
};

export default Home;
