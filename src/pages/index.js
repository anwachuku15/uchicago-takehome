import React, { useState } from "react";
import Button from "../components/Button";
import { Text } from "../components/GreetingText/GreetingTextElements";
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
				icon={<BsGlobe fontSize={24} />}
				_page="home"
				_onClick={displayHelloWorld}
				_isShown={!showGreeting}
			/>
			<Text page="home" isShown={showGreeting}>
				Hello World!
			</Text>
		</Container>
	);
};

export default Home;
