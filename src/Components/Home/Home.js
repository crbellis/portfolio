import React from "react";
import classes from "./Home.module.css";
import { Chart, LineSeries } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
const Home = () => {
	let values = [
		103.970551,
		125.45327,
		124.424088,
		126.116135,
		124.608498,
		124.406647,
		128.625549,
		133.749039,
		130.977966,
		140.491753,
		140.571503,
		142.457649,
		146.943192,
		153.125496,
		151.640282,
		164.989487,
		165.168915,
		171.769859,
		189.985611,
	];
	let array = [];
	if (values) {
		values.map((price, index) => {
			array.push({ lineValue: price, argument: index });
		});
	}
	return (
		<div className={classes.Home}>
			<div className={classes.Chart}>
				<Chart className={classes.Chart} data={array}>
					<LineSeries
						name="line"
						valueField="lineValue"
						argumentField="argument"
						color="#FFF"
					/>
					{/* <Animation /> */}
				</Chart>
			</div>
		</div>
	);
};

export default Home;
