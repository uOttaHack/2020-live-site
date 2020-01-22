import React from 'react';
import './App.css';

import {
	Redirect,
	Route,
	BrowserRouter as Router,
	Switch
} from 'react-router-dom';

import InfoView from './views/InfoView';
import ScheduleView from './views/ScheduleView';
import MapView from './views/MapView';

import NavBarComponent from './components/NavBarComponent';

const App: React.FC = () => {
	return (
		<div className="App">
			<Router>
				<NavBarComponent />
				<Switch>
					<Route exact path="/" component={InfoView} />
					<Route path="/schedule" component={ScheduleView} />
					<Route path="/map" component={MapView} />
					<Redirect from="*" to="/" />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
