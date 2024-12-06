import React from "react";

function Footer() {
	return (
		<footer className="footer bg-dark text-light py-3 mt-4">
			<div className="container text-center">
				<p className="mb-1">
					&copy; {new Date().getFullYear()} MeteoApp. Tutti i diritti riservati.
				</p>
				<p className="mb-0">
					Fonti dati:{" "}
					<a
						href="https://openweathermap.org/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-decoration-none text-info"
					>
						OpenWeatherMap
					</a>{" "}
					|{" "}
					<a
						href="https://www.pexels.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-decoration-none text-info"
					>
						Pexels
					</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
