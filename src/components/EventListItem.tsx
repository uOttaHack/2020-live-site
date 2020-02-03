import React from 'react';
import './EventListItem.css';

import { ONE_MINUTE_MILLISECOND, EVENT_LIST_ITEM_HEIGHT } from '../constants';
import { EventCategoryColor, RelativeTime } from '../enums';
import Color from '../colors';

import { IEvent } from '../interfaces';
import { to12HourTime } from '../utils';

interface PropTypes {
	event: IEvent;
	showAsToday: boolean;
	relativeDayTime: RelativeTime;
}

const EventListItem: React.FC<PropTypes> = props => {
	return (
		<div className={`event-item ${props.relativeDayTime}`}>
			<div className="event-item-content" style={{ minHeight: EVENT_LIST_ITEM_HEIGHT }}>
				<svg className="category-circle" height="12" width="12">
					<circle cx="6" cy="6" r="6" fill={EventCategoryColor[props.event.category] || Color.Overflow} />
				</svg>
				{props.relativeDayTime === RelativeTime.Present && (
					<svg className="active-circle" height="12" width="12">
						<circle cx="6" cy="6" r="6" fill={Color.LiveActivity} />
					</svg>
				)}

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
