// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages";
import Graph from "./pages/graph";
import Calculator from "./pages/calculator";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/graph" element={<Graph />} />
				<Route path="/calculator" element={<Calculator />} />
			</Routes>
		</Router>
	);
}

export default App;
