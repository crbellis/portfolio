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
							I'm currently working as a Machine Learning Engineer
							at Viant Technology and pursuing my M.S. in Computer
							Science at UC Irvine.
							<br />
							<br />
							I have experience building and deploying NLP and CV
							models using Tensorflow and the Hugging Face
							ecosystem.
							<br />
							<br />
							In addition to my ML and deep learning experience, I
							also have experience creating full stack
							applications using React, Express, TypeScript,
							Redux, and TailwindCSS.
						</div>
					</div>
					<img src={code} alt="code" />
				</div>
			</FadeIn>
		</div>
	);
};

export default About;
