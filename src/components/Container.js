import React from "react";

const Container = ({ children, styles }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "calc(100vh - 80px)",
			}}
		>
			{children}
		</div>
	);
};

export default Container;
