import React from "react";
import classes from "./Projects.module.css";
import code from "../../assets/code.json";
import Lottie from "react-lottie";
import FadeIn from "../HOC/FadeIn";

const Projects = () => {
	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: code,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<div className={classes.Projects}>
			<FadeIn>
				<div className={classes.ProjectsContent} id="projects">
					<div className={classes.ProjectsHeader}>
						<h1>Projects</h1>
						<Lottie
							className={classes.Lottie}
							options={defaultOptions}
							width={150}
							height={150}
							style={{ margin: "0" }}
						/>
					</div>
					<div className={classes.Text}>
						<ul>
							<li>
								<a
									className={classes.Link}
									href="https://github.com/HenrikMoe/CryptoCount"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>
										CryptoCount (in developement)
									</strong>
								</a>
								- delegation address analysis for Tezos
								cryptocurrency. Built using React.js, Redux,
								Node.js, and MongoDB.
								<br />
								<br />
								Additional tools used: Storybook and Bootstrap
							</li>
							<br />
							<li>
								<a
									className={classes.Link}
									href="https://github.com/crbellis/simplynote"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>Simplynote.io</strong>
								</a>
								- note taking site built with React.js, CSS3,
								Python, Flask, and MongoDB.
								<br />
								<br />
								Additional tools used: AWS EC2 and Docker
							</li>
							<br />
							<li>
								<a
									className={classes.Link}
									href="https://github.com/crbellis/taskBoard"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>Task Board Web App</strong>
								</a>
								- task board that keeps track of pending, in
								progress, and completed tasks. Made with
								React.js, Redux, and CSS3.
								<br />
								<br />
								Additional tools used: redux-thunk for async
								state updates, axios for api calls, and json
								databases for tests
							</li>
							<br />
							<li>
								<a
									className={classes.Link}
									href="https://www.kaggle.com/chasebell/credit-card-fraud-analysis?scriptVersionId=40107021"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>
										Deep Learning Fraud Prediction
									</strong>
								</a>
								- A deep learning model developed in Python,
								Tensorflow, and Keras that detects credit card
								fraud.
								<br />
								<br />
								Additional tools used: Jupyter Notebooks and
								Kaggle
							</li>
						</ul>
					</div>
				</div>
			</FadeIn>
		</div>
	);
};

export default Projects;
