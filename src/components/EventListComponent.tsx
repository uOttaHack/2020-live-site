import React from 'react';
import './EventListComponent.css';

import { PropTypesDay, IEvent } from '../interfaces';
import { to12HourTime } from '../utils';

import EventListItem from './EventListItem';
import ModalDialog from '../components/ModalDialog';

const EventListComponent: React.FC<PropTypesDay> = props => {
	const [modalShow, setModalShow] = React.useState(false);
	const [modalHeading, setModalHeading] = React.useState('');
	const [modalTime, setModalTime] = React.useState('');
	const [modalBody, setModalBody] = React.useState('');

	const handleEventListItemClick = (event: IEvent) => {
		setModalShow(true);
		setModalHeading(event.name);
		setModalTime(
			event.duration === 0
				? to12HourTime(event.start)
				: `${to12HourTime(event.start)} - ${to12HourTime(
						new Date(event.start.getTime() + event.duration * 60000)
				  )}`
		);
		setModalBody(event.description);
	};

	return (
		<div id="event-list">
			<ModalDialog
				show={modalShow}
				onHide={() => setModalShow(false)}
				heading={modalHeading}
				time={modalTime}
				body={modalBody}
			/>
			{props.day.events.map((event, index) => (
				<div key={`event-list-item-${index}`} onClick={() => handleEventListItemClick(event)}>
					<EventListItem event={event} />
				</div>
			))}
		</div>
	);
};

export default EventListComponent;
