import React from 'react';
import './NavBarComponent.css';

import { RoutePath } from '../enums';

import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
				<Navbar expanded={this.state.expanded} bg="light" expand="lg">
					<Navbar.Brand>
						<Link to={RoutePath.Home}>uOttaHack 3</Link>
					</Navbar.Brand>
					<Navbar.Toggle
						aria-controls="basic-navbar-nav"
						onClick={this.toggle}
					/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Link to={RoutePath.Home} onClick={this.collapse}>
								Information
							</Link>
							<Link
								to={RoutePath.Schedule}
								onClick={this.collapse}
							>
								Schedule
							</Link>
							<Link to={RoutePath.Map} onClick={this.collapse}>
								Floor Plan
							</Link>
							<Link to={RoutePath.Food} onClick={this.collapse}>
								Food Menu
							</Link>
							<Link
								to={RoutePath.Contact}
								onClick={this.collapse}
							>
								Contact
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<div
					id="navbar-hidden-overlay"
					style={{
						display: this.state.expanded ? 'block' : 'none'
					}}
					onClick={this.collapse}
				></div>
			</>
		);
	}
}

export default NavBarComponent;
