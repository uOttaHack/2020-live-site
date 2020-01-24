import React from 'react';
import './EventListItem.css';

import { EventCategoryColor } from '../enums';
import Color from '../colors';

import { IEvent } from '../interfaces';
import { to12HourTime } from '../utils';

interface PropTypes {
	event: IEvent;
}

const EventListItem: React.FC<PropTypes> = props => {
	return (
		<div className="event-item">
			<div className="event-item-content">
				<svg height="12" width="12">
					<circle cx="6" cy="6" r="6" fill={EventCategoryColor[props.event.category] || Color.Overflow} />
				</svg>
				<h6>{props.event.name}</h6>
				<p>
					{props.event.duration === 0
						? to12HourTime(props.event.start)
						: `${to12HourTime(props.event.start)} - ${to12HourTime(
								new Date(props.event.start.getTime() + props.event.duration * 60000)
						  )}`}
				</p>
			</div>
		</div>
	);
};

export default EventListItem;
