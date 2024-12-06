import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const apiKey = "8f6cfdee89828a762d2fc0e9157104af";

function MeteoCard({ optionSelected }) {
	const [city, setCity] = useState({});
	const [imgCity, setImgCity] = useState([]);
	const [monument, setMonument] = useState("colosseo");
	const [ImgLoading, setImgLoading] = useState(true);
	const [cityLoading, setCityLoading] = useState(true);

	const getMeteo = () => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${optionSelected}&appid=${apiKey}`,
		)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("errore nella fetch");
				}
			})
			.then(cityData => {
				// console.log(cityData);
				setCity(cityData);
				setCityLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	};
	// fetch immagine
	const getImage = () => {
		fetch(`https://api.pexels.com/v1/search?query=${monument}&per_page=1`, {
			headers: {
				Authorization:
					"SGRFuYeDdws8OIyzcKsA3l86T7XxJZPGdhfWqqmRcVSws5ib2p1tcG08",
			},
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("errore nella fetch foto");
				}
			})
			.then(imgData => {
				// console.log(imgData.photos);
				setImgCity(imgData.photos);
				setImgLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	};

	useEffect(() => {
		getMeteo();
		getImage();
		if (optionSelected === "Roma") {
			setMonument("colosseo");
		} else if (optionSelected.toLowerCase() === "tokyo") {
			setMonument("tokyo tower");
		} else if (optionSelected === "Napoli") {
			setMonument("stadium");
		} else if (optionSelected === "Torino") {
			setMonument("turin");
		} else if (optionSelected === "Berlino") {
			setMonument("colonna della vittoria");
		}
		getImage();
	}, [optionSelected]);

	useEffect(() => {
		getImage();
	}, [monument]);

	// console.log(monument);
	//conversione
	const temperatureCelsius = city.main
		? (city.main.temp - 273.15).toFixed(1)
		: "--";
	const feelsLikeCelsius = city.main
		? (city.main.feels_like - 273.15).toFixed(1)
		: "--";
	return (
		<Card className="w-75 mx-auto mt-5 pb-5">
			{!ImgLoading && !cityLoading && (
				<>
					<Card.Img variant="top" src={imgCity[0].src.original} width="700px" />
					<Card.Body>
						<Card.Title className="city">
							{city.name}, {city.sys.country}
						</Card.Title>
						<Card.Text className="temperature">
							🌡 Temperatura: {temperatureCelsius}°C
						</Card.Text>
						<Card.Text className="feels-like">
							🌡 Percepita: {feelsLikeCelsius}°C
						</Card.Text>
						<Card.Text className="description">
							{city.weather && city.weather[0].description
								? `Condizioni: ${city.weather[0].description}`
								: "Condizioni non disponibili"}
						</Card.Text>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroup.Item>
							💧 Umidità: {city.main.humidity || "--"}%
						</ListGroup.Item>
						<ListGroup.Item>
							🌬 Vento: {city.wind.speed || "--"} m/s
						</ListGroup.Item>
						<ListGroup.Item>
							❄️ Neve: {city.snow?.["1h"] || "0"} mm/h
						</ListGroup.Item>
					</ListGroup>
				</>
			)}
		</Card>
	);
}

export default MeteoCard;
