import React from 'react';
import './ScheduleView.css';

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
			<EventListComponent day={day} />
		</div>
	);
};

export default ScheduleView;
