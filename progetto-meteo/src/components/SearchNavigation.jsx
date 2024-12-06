import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const apiKey = "8f6cfdee89828a762d2fc0e9157104af";

function SearchNavigation({ input, button, setButton }) {
	const [city, setCity] = useState({});

	const [IsLoading, setIsLoading] = useState(true);

	const getCustomMeteo = () => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`,
		)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("errore nella fetch");
				}
			})
			.then(cityData => {
				console.log(cityData);
				setCity(cityData);
				setIsLoading(false);
				// setButton(false);
			})
			.catch(err => {
				console.log(err);
			});
	};

	useEffect(() => {
		getCustomMeteo();
	}, [button]);
	useEffect(() => {
		setButton(!button);
	}, [input]);

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
			{!IsLoading && (
				<>
					<Card.Img
						variant="top"
						src={
							city.sys.country === "IT"
								? "https://staticgeopop.akamaized.net/wp-content/uploads/sites/32/2022/05/iStock-1212397487.jpg"
								: "https://i.pinimg.com/236x/6e/ae/29/6eae2951043c14d2463c9e297204a515.jpg"
						}
						width="500px"
						height="450px"
					/>

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

export default SearchNavigation;
