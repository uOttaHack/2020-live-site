import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import { CLOCK_EMOJI_HOUR_LIST, CLOCK_EMOJI_THIRTY_LIST } from '../constants';
import { EventCategory } from '../enums';
import { IEvent } from '../interfaces';
import { firstDay, secondDay, thirdDay } from '../data/schedule';
import { formattedEventTime } from '../utils';

const days = [firstDay, secondDay, thirdDay];
const blackListNames = ['Workshop'];

const WorkshopView: React.FC = () => {
	const dayEvents = (events: IEvent[], index: number) =>
		events
			.filter(
				event =>
					[EventCategory.Workshop1, EventCategory.Workshop2].includes(event.category) &&
					!blackListNames.includes(event.name)
			)
			.map(event => (
				<div key={`workshop-day-${index}-${event.name}`}>
					<h5>
						{event.name} {event.subtitle && `- ${event.subtitle}`}
					</h5>
					<p>
						<span role="img" aria-label="clock emoji">
							{
								(event.start.getMinutes() < 30 ? CLOCK_EMOJI_HOUR_LIST : CLOCK_EMOJI_THIRTY_LIST)[
									event.start.getHours() % 12
								]
							}
						</span>
						&nbsp;{formattedEventTime(event)}
					</p>
					<p>{event.description}</p>
				</div>
			));

	const showWorkshopDayIfNotEmpty = (dayEvents: JSX.Element[], index: number, longTitle: string = '') => {
		if (dayEvents.length !== 0) {
			return (
				<div>
					<h3>
						Day {index + 1} {longTitle && `- ${longTitle}`}
					</h3>
					{dayEvents}
				</div>
			);
		}
	};

	return (
		<Container id="workshop-view" fluid>
			<Col>
				<h2>Workshops</h2>
				{days.map((day, index) => (
					<div key={`workshop-day-${index}`}>
						{showWorkshopDayIfNotEmpty(dayEvents(day.events, index), index, day.longTitle)}
					</div>
				))}
			</Col>
		</Container>
	);
};

export default WorkshopView;
