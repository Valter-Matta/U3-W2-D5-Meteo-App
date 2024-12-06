import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarMeteo from "./components/NavbarMeteo";
import { useState } from "react";
import MeteoCard from "./components/MeteoCard";
import SearchNavigation from "./components/SearchNavigation";
import Footer from "./components/FooterMeteo";

function App() {
	const [optionSelected, setOptionSelected] = useState("Roma");
	const [input, setInput] = useState("");
	const [button, setButton] = useState(false);

	return (
		<BrowserRouter className=" body bg-body-secondary">
			<header>
				<NavbarMeteo
					setOptionSelected={setOptionSelected}
					setInput={setInput}
					setButton={setButton}
					button={button}
					input={input}
				/>
			</header>
			<Routes>
				<Route
					path="/"
					element={<MeteoCard optionSelected={optionSelected} />}
				/>
			</Routes>
			<Routes>
				<Route
					path="/:nome"
					element={
						<SearchNavigation
							input={input}
							setInput={setInput}
							button={button}
							setButton={setButton}
						/>
					}
				/>
			</Routes>
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;
