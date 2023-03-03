import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
	background-color: transparent;
	background-color: maroon;
	width: 100%;
	height: 80px;
	position: sticky;
	font-size: 1.2rem;
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 375px) {
		display: none;
	}
`;

export const MenuItem = styled.li`
	height: 80px;
`;

export const MenuLink = styled(NavLink)`
	color: white;
	display: flex;
	align-items: center;
	text-decoration: none !important;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	border-bottom-width: 3px;
	border-bottom-style: solid;
	border-bottom-color: transparent;
	transition: all 0.2s ease;

	&.active {
		color: white;
		border-bottom-color: white;
		transition: border-bottom-color 0.2s ease;
	}
	&:hover {
		color: #1e90ff;
	}
`;
