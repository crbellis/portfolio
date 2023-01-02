import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
	return (
		<nav>
			<header className={classes.Header}>
				<div className={classes.DesktopLogo}>
					<a className={classes.Logo} href="#home">
						Chase Bellisime
					</a>
				</div>
				<div className={classes.MobileLogo}>
					<a className={classes.Logo} href="#home">
						CB
					</a>
				</div>
				<div className={classes.RightGroup}>
					<a className={classes.NavLink} href="#about">
						About
					</a>
					<a className={classes.NavLink} href="#projects">
						Projects
					</a>
					<a className={classes.NavLink} href="#contact">
						Contact
					</a>
				</div>
			</header>
		</nav>
	);
};

export default Header;
