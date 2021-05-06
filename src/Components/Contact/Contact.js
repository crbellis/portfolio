import React from "react";
import ghub from "../../assets/SVGs/github.svg";
import linkedin from "../../assets/SVGs/LinkedIn.svg";
import google from "../../assets/SVGs/google.svg";
import classes from "./Contact.module.css";
const Contact = () => {
	return (
		<div className={classes.Links} id="contact">
			<a
				href="https://github.com/crbellis?tab=repositories"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img className={classes.Icon} src={ghub} alt="github" />
			</a>
			<a
				href="https://linkedin.com/in/chasebellisime"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img className={classes.Icon} src={linkedin} alt="linkedIn" />
			</a>
			<a href="mailto:bellischase@gmail.com">
				<img className={classes.Icon} src={google} alt="email" />
			</a>
		</div>
	);
};

export default Contact;
