import styled from "styled-components";

export const BtnWrapper = styled.div`
	display: flex;
	width: max-content;
	align-self: center;
	align-items: center;
	justify-content: center;
	padding: 4px 15px 4px 15px;
	border-radius: 50px;
	border: 2px solid maroon;
	background-color: transparent;
	transition: background-color 150ms, border 150ms, opacity 150ms ease;
	position: relative;
	z-index: 9;
	opacity: ${({ isShown }) => (isShown ? 1 : 0)};
	cursor: pointer;

	&:hover {
		background-color: maroon;
		border: 2px solid transparent;
		align-items: center;
	}
`;

export const BtnText = styled.p`
	display: flex;
	color: maroon;
	margin: 0;
	text-decoration: none;
	font-weight: ${({ page }) => {
		if (page === "home") {
			return "900";
		} else return "normal";
	}};
	font-size: 24px;
	transition: color 150ms ease;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;

	${BtnWrapper}:hover & {
		color: white;
	}
`;

export const Icon = styled.div`
	position: relative;
	bottom: -2px;
	margin-left: -23px;
	color: transparent;
	opacity: 0;
	transition: all 200ms;
	${BtnWrapper}:hover & {
		margin-left: 10px !important;
		color: #1e90ff;
		opacity: 1;
	}
`;
