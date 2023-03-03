import styled from "styled-components";

export const GreetingText = styled.p`
	color: maroon;
	margin-top: -38px;
	margin-bottom: 0;
	font-size: 24px;
	font-weight: bold;
	padding: 4px 15px 4px 15px;
	transition: opacity 300ms ease-in-out;
	opacity: ${({ isShown }) => (isShown ? 1 : 0)};
	cursor: default;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;
