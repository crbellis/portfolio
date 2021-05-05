import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
	return (
		<nav>
			<header className={classes.Header}>
				<a className={classes.Logo} href="#home">
					Chase Bellisime
				</a>
				<div className={classes.RightGroup}>
					<a className={classes.NavLink} href="#about">
						About
					</a>
					<NavLink className={classes.NavLink} to="/analysts">
						Contact
					</NavLink>
				</div>
			</header>
		</nav>
	);
};

export default Header;
