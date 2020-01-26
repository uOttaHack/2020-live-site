import React from 'react';
import './ScheduleView.css';

import { ONE_MINUTE_MILLISECOND } from '../constants';
import { IEventDay } from '../interfaces';
import { firstDay, secondDay, thirdDay } from '../data/schedule';

import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import TimelineComponent from '../components/TimelineComponent';
import EventListComponent from '../components/EventListComponent';

const days: [IEventDay, IEventDay, IEventDay] = [firstDay, secondDay, thirdDay];
days.forEach(day => day.events.forEach(event => (event.duration = Math.abs(event.duration))));

const ScheduleView: React.FC = () => {
	const [day, setDay] = React.useState(firstDay);
	const setDummy = React.useState(-1)[1];

	React.useEffect(() => {
		const interval = setInterval(() => {
			setDummy(new Date().getMinutes());
		}, ONE_MINUTE_MILLISECOND);

		return () => {
			clearInterval(interval);
		};
	});

	return (
		<Container id="schedule" fluid>
			<div className="d-flex flex-column">
				<ButtonGroup>
					{days.map((dayInfo, index) => (
						<Button
							key={`btn-group-${index}`}
							onClick={() => setDay(dayInfo)}
							variant={index === day.index ? 'dark' : 'light'}
						>
							{dayInfo.title}
						</Button>
					))}
				</ButtonGroup>
			</div>
			<TimelineComponent day={day} />
			<EventListComponent key={day.title} day={day} />
		</Container>
	);
};

export default ScheduleView;
