import React from "react";
import Container from "../components/Container";

const Calculator = () => {
	return (
		<Container>
			<iframe
				title="Embedded Calculator"
				src="https://ahfarmer.github.io/calculator/"
				width={"90%"}
				height={"90%"}
				style={{ borderColor: "transparent", borderRadius: 10 }}
			/>
		</Container>
	);
};

export default Calculator;
