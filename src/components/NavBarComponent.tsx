import React from 'react';
import './NavBarComponent.css';

import { RoutePath } from '../enums';

import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBarComponent: React.FC = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand>
				<Link to={RoutePath.Home}>uOttaHack 3</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Link to={RoutePath.Home}>Information</Link>
					<Link to={RoutePath.Schedule}>Schedule</Link>
					<Link to={RoutePath.Map}>Floor Plan</Link>
					<Link to={RoutePath.Food}>Food Menu</Link>
					<Link to={RoutePath.Contact}>Contact</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBarComponent;
