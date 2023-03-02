import React from "react";
import { BtnText, BtnWrapper, Icon } from "./ButtonElements";

const Button = ({ icon, text, _page, _onClick, _isShown }) => {
	return (
		<BtnWrapper onClick={_onClick} isShown={_isShown}>
			<BtnText page={_page}>{text}</BtnText>
			{/* <BtnWrapper onClick={_onClick}>
			{_isShown ? (
				<BtnText page={page}>Click</BtnText>
			) : (
				<BtnText page={page}>Hello World!</BtnText>
			)} */}
			<Icon>{icon}</Icon>
		</BtnWrapper>
	);
};

export default Button;
