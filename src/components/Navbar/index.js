import React from "react";
import {
	NavContainer,
	MobileMenuIcon,
	NavMenu,
	MenuItem,
	MenuLink,
} from "./NavbarElements";
import { BsList } from "react-icons/bs";

const Navbar = ({ toggleHome }) => {
	return (
		<NavContainer>
			<MobileMenuIcon onClick={toggleHome}>
				<BsList color="white" />
			</MobileMenuIcon>

			<NavMenu>
				<MenuItem>
					<MenuLink to="/">Home</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink to="/graph">Graph</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink to="/calculator">Calculator</MenuLink>
				</MenuItem>
			</NavMenu>
		</NavContainer>
	);
};

export default Navbar;
