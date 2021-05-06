import React from "react";
import classes from "./About.module.css";
import FadeIn from "../HOC/FadeIn";
import code from "../../assets/PNGs/Code.png";

const About = () => {
	return (
		<div className={classes.About}>
			<FadeIn>
				<div className={classes.AboutContent} id="about">
					<div className={classes.AboutText}>
						<h1>About</h1>
						<div className={classes.Text}>
							I'm currently working as a Trading Strategist/Data
							Analyst. My current responsibilities include
							creating automated analysis, developing internal
							tools, and compiling guidelines to assist in the
							execution of ad campaigns.
							<br />
							<br />
							I also work on individual and freelance projects.
							These projects range from developing deep learning
							models in Python to full-stack web development.
							<br />
							<br />
							I've found projects to be a useful resource to gain
							practical knowledge of concepts and tools. In
							addition, to these projects I've decided to further
							my education my pursuing a Master's of Science in
							Computer Science at UCI, which I will start in Fall
							2021.
						</div>
					</div>
					<img src={code} alt="code" />
				</div>
			</FadeIn>
		</div>
	);
};

export default About;
