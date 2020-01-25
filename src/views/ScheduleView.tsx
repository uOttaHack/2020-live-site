import React from 'react';
import './ScheduleView.css';

import { ONE_MINUTE_MILLISECOND } from '../constants';
import { IEventDay } from '../interfaces';
import { firstDay, secondDay, thirdDay } from '../data/schedule';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import TimelineComponent from '../components/TimelineComponent';
import EventListComponent from '../components/EventListComponent';

const days: [IEventDay, IEventDay, IEventDay] = [firstDay, secondDay, thirdDay];

const ScheduleView: React.FC = () => {
	const [day, setDay] = React.useState(firstDay);
	const [button, setButton] = React.useState(0);
	const setDummy = React.useState(-1)[1];

	React.useEffect(() => {
		const interval = setInterval(() => {
			setDummy(new Date().getMinutes());
		}, ONE_MINUTE_MILLISECOND);

		return () => {
			clearInterval(interval);
		};
	});

	const updateDay = (day: IEventDay, button: number) => {
		setDay(day);
		setButton(button);
	};

	return (
		<div id="schedule">
			<div className="d-flex flex-column">
				<ButtonGroup>
					{days.map((day, index) => (
						<Button
							key={`btn-group-${index}`}
							onClick={() => updateDay(day, index)}
							variant={index === button ? 'dark' : 'light'}
						>
							{day.title}
						</Button>
					))}
				</ButtonGroup>
			</div>
			<TimelineComponent day={day} />
			<EventListComponent key={day.title} day={day} />
		</div>
	);
};

export default ScheduleView;
