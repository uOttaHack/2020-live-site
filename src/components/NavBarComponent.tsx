import React from 'react';

import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBarComponent: React.FC = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand>
				<Link to="/">uOttaHack 3</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Link to="/">Home</Link>
					<Link to="/schedule">Schedule</Link>
					<Link to="/map">Map</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBarComponent;
