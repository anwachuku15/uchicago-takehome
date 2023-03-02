import React, { useState } from "react";
import Button from "../components/Button";
import { GreetingText } from "../components/GreetingTextElements";
import Container from "../components/Container";
import { BsGlobe } from "react-icons/bs";

const Home = () => {
	const [showGreeting, setShowGreeting] = useState(false);

	const displayHelloWorld = () => {
		setShowGreeting(!showGreeting);
	};
	return (
		<Container>
			<Button
				text="Click"
				icon={<BsGlobe fontSize={24} color="dodgerblue" />}
				_page="home"
				_onClick={displayHelloWorld}
				_isShown={!showGreeting}
			/>
			<GreetingText page="home" isShown={showGreeting}>
				Hello World!
			</GreetingText>
		</Container>
	);
};

export default Home;
