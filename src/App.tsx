import React from 'react';
import './App.css';

import { RoutePath } from './enums';

import {
	Redirect,
	Route,
	BrowserRouter as Router,
	Switch
} from 'react-router-dom';

import InfoView from './views/InfoView';
import ScheduleView from './views/ScheduleView';
import MapView from './views/MapView';
import FoodMenuView from './views/FoodMenuView';
import ContactView from './views/ContactView';

import NavBarComponent from './components/NavBarComponent';

const App: React.FC = () => {
	return (
		<div className="App">
			<Router>
				<NavBarComponent />
				<div id="switch">
					<Switch>
						<Route
							exact
							path={RoutePath.Home}
							component={InfoView}
						/>
						<Route
							path={RoutePath.Schedule}
							component={ScheduleView}
						/>
						<Route path={RoutePath.Map} component={MapView} />
						<Route path={RoutePath.Food} component={FoodMenuView} />
						<Route
							path={RoutePath.Contact}
							component={ContactView}
						/>
						<Redirect from="*" to="/" />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
