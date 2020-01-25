import React from 'react';
import './EventListItem.css';

import { ONE_MINUTE_MILLISECOND, EVENT_LIST_ITEM_HEIGHT } from '../constants';
import { EventCategoryColor } from '../enums';
import Color from '../colors';

import { IEvent } from '../interfaces';
import { to12HourTime, getRelativeEventTime } from '../utils';

interface PropTypes {
	event: IEvent;
}

const EventListItem: React.FC<PropTypes> = props => {
	return (
		<div className={`event-item ${getRelativeEventTime(props.event)}`}>
			<div className="event-item-content" style={{ height: EVENT_LIST_ITEM_HEIGHT }}>
				<svg height="12" width="12">
					<circle cx="6" cy="6" r="6" fill={EventCategoryColor[props.event.category] || Color.Overflow} />
				</svg>
				<h6>{props.event.name}</h6>
				<p>
					{props.event.duration === 0
						? to12HourTime(props.event.start)
						: `${to12HourTime(props.event.start)} - ${to12HourTime(
								new Date(props.event.start.getTime() + props.event.duration * ONE_MINUTE_MILLISECOND)
						  )}`}
				</p>
			</div>
		</div>
	);
};

export default EventListItem;
