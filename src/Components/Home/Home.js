import React from "react";
import classes from "./Home.module.css";
import scroll from "../../assets/scroll.json";
import Lottie from "react-lottie";
import About from "../About/About";
import Projects from "../Projects/Projects";
const Home = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: scroll,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div className={classes.Home}>
			<div className={classes.Wrapper}>
				<div className={classes.Main} id="home">
					<h1>Chase Bellisime</h1>
					<h2>Software Engineer</h2>
					<Lottie
						className={classes.Lottie}
						options={defaultOptions}
						width={100}
						height={100}
					/>
				</div>
				<About />
				<Projects />
			</div>
		</div>
	);
};

export default Home;
