import React from 'react';
import './ScheduleView.css';

import { IEventDay } from '../interfaces';
import { firstDay, secondDay, thirdDay } from '../data/schedule';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import TimelineComponent from '../components/TimelineComponent';
import EventList from '../components/EventList';

const days: [IEventDay, IEventDay, IEventDay] = [firstDay, secondDay, thirdDay];

const ScheduleView: React.FC = () => {
	const [day, setDay] = React.useState(firstDay);
	const [button, setButton] = React.useState(0);

	const updateDay = (day: IEventDay, button: number) => {
		setDay(day);
		setButton(button);
	};

	return (
		<div id="schedule">
			<div className="d-flex flex-column">
				<ButtonGroup>
					{days.map((day, index) => (
						<Button onClick={() => updateDay(day, index)} variant={index === button ? 'dark' : 'light'}>
							Day {index + 1}
						</Button>
					))}
				</ButtonGroup>
			</div>
			<TimelineComponent day={day} />
			<EventList />
		</div>
	);
};

export default ScheduleView;
