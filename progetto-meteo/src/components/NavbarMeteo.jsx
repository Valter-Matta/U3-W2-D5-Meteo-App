import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarMeteo = ({
	setOptionSelected,
	setInput,
	setButton,
	input,
	button,
}) => {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			className="bg-dark-subtle m-0 p-0 d-flex justify-content-between"
		>
			<Container fluid>
				<Navbar.Brand className="ps-3">
					<img
						src="https://t1.pixers.pics/img-d5043af1/adesivi-modificata-yin-yang-simbolo-giornata-di-sole-contro-luna-di-notte.png?H4sIAAAAAAAAA5VQS26DMBC9DkiEGYMNtg-QbY6AJsYkFAOWTZq2p6-tquqmXVSj0fzf0xt4bJEmC8Zuhw2wzuPoLEyzS1XUwcb5wxZY9chLnbquQMRS7682mLD74iRllb1XTfZSPykdrhSW4n4cPmqA2NZ-fktoKZgIZo3QIOsBOxBKdAwtF0ohGzZaXNo8LU8aAx21324VZis1ee_eh2ATbbQDOX-nf-ALlKr7wf-Fp_xWyhErnhVOe1JxFHkGfzB95ZDW4XwBpTIjYyBzZzhfkqaOMTkoYsZwfpUivW5qG8MQaWrHq2kbjlzUL_72CQRblwiGAQAA"
						alt="logo"
						width="60px"
						height="60px"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ps-5">
						<Nav.Link href="/">Home</Nav.Link>
					</Nav>
					<Nav className="w-50 d-flex justify-content-center align-items-center">
						<Form.Label className="mb-0">Citta Principali</Form.Label>
						<Form.Select
							className="mx-2 px-3 w-50"
							size="md"
							aria-label="Seleziona Città"
							onChange={e => {
								setOptionSelected(e.target.value);
							}}
						>
							<option>Roma</option>
							<option>Tokyo</option>
							<option>Napoli</option>
							<option>Torino</option>
							<option>Berlino</option>
						</Form.Select>
					</Nav>
					<li className=" list-group-item me-4">Oppure</li>
					<Form.Group className="d-flex">
						<Form.Control
							onChange={e => {
								setInput(e.target.value);
							}}
							type="text"
							placeholder="...Cerca una città"
						/>
						<Link to={"/" + input}>
							<Button onClick={setButton(true)}> Vai!</Button>
						</Link>
					</Form.Group>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarMeteo;
