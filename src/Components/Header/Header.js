import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
	return (
		<div>
			<header className={classes.Header}>
				<NavLink className={classes.Logo} to="/">
					Zero Capital Trading
				</NavLink>
				<div className={classes.RightGroup}>
					<NavLink className={classes.NavLink} to="/">
						Home
					</NavLink>
					<NavLink className={classes.NavLink} to="/faq">
						FAQ
					</NavLink>
					<NavLink className={classes.NavLink} to="/login">
						Login
					</NavLink>
					<NavLink className={classes.CaNav} to="/signup">
						Create an account
					</NavLink>
				</div>
			</header>
		</div>
	);
};

export default Header;
