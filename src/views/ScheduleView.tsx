import React from 'react';
import './ScheduleView.css';

import TimelineComponent from '../components/TimelineComponent';
import EventList from '../components/EventList';

const ScheduleView: React.FC = () => {
	return (
		<div id="schedule">
			<TimelineComponent />
			<EventList />
		</div>
	);
};

export default ScheduleView;
