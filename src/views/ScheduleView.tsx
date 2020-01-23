import React from 'react';
import './ScheduleView.css';

import { firstDay, secondDay, thirdDay } from '../data/schedule';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import TimelineComponent from '../components/TimelineComponent';
import EventList from '../components/EventList';

const ScheduleView: React.FC = () => {
	const [day, setDay] = React.useState(firstDay);

	return (
		<div id="schedule">
			<div className="d-flex flex-column">
				<ButtonGroup>
					<Button onClick={() => setDay(firstDay)}>Day 1</Button>
					<Button onClick={() => setDay(secondDay)}>Day 2</Button>
					<Button onClick={() => setDay(thirdDay)}>Day 3</Button>
				</ButtonGroup>
			</div>
			<TimelineComponent day={day} />
			<EventList />
		</div>
	);
};

export default ScheduleView;
