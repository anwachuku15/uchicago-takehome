import React from "react";
import { BtnText, BtnWrapper, Icon } from "./ButtonElements";

const Button = ({ icon, text, _page, _onClick, _isShown }) => {
	return (
		<BtnWrapper onClick={_onClick} isShown={_isShown}>
			<BtnText page={_page}>{text}</BtnText>
			<Icon>{icon}</Icon>
		</BtnWrapper>
	);
};

export default Button;
