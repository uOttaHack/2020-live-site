import React from 'react';
import './NavBarComponent.css';

import { RoutePath } from '../enums';

import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const routesWithTitles = [
	[RoutePath.Home, 'Information'],
	[RoutePath.Schedule, 'Schedule'],
	[RoutePath.Map, 'Floor Plan'],
	[RoutePath.Food, 'Food Menu'],
	[RoutePath.Contact, 'Contact']
];

class NavBarComponent extends React.Component {
	state: any;

	constructor(props: any) {
		super(props);

		this.state = {
			expanded: false
		};

		this.toggle = this.toggle.bind(this);
		this.collapse = this.collapse.bind(this);
	}

	toggle() {
		this.setState({ expanded: !this.state.expanded });
	}

	collapse() {
		this.setState({ expanded: false });
	}

	render() {
		return (
			<>
				<div
					id="navbar-hidden-overlay"
					style={{
						display: this.state.expanded ? 'block' : 'none'
					}}
					onClick={this.collapse}
				/>
				<Navbar id="navbar-main" expanded={this.state.expanded} bg="dark" variant="dark" expand="lg">
					<Navbar.Brand id="brand">
						<img src="./logo512.png" alt="uOttaHack 3 Logo" />
						<Link id="wordmark" to={RoutePath.Home} onClick={this.collapse}>
							uOttaHack<span>3</span>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.toggle} style={{ color: 'white' }} />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							{routesWithTitles.map((pair, index) => (
								<Link key={`route-path-link-${index}`} to={pair[0]} onClick={this.collapse}>
									{pair[1]}
								</Link>
							))}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</>
		);
	}
}

export default NavBarComponent;
