import React from 'react';
import './EventListComponent.css';

import { ONE_MINUTE_MILLISECOND, EVENT_LIST_ITEM_HEIGHT } from '../constants';
import { PropTypesDay, IEvent } from '../interfaces';
import { to12HourTime, dateToMinutesInDay } from '../utils';

import EventListItem from './EventListItem';
import ModalDialog from '../components/ModalDialog';

class EventListComponent extends React.Component<PropTypesDay> {
	scrollContainerRef: React.RefObject<HTMLDivElement>;
	state: {
		modalShow: boolean;
		modalHeading: string;
		modalTime: string;
		modalBody: string;
	};

	constructor(props: PropTypesDay) {
		super(props);
		this.scrollContainerRef = React.createRef();

		this.state = {
			modalShow: false,
			modalHeading: '',
			modalTime: '',
			modalBody: ''
		};
	}

	componentDidMount() {
		this.updateScroll();
	}

	updateScroll() {
		window.requestAnimationFrame(() => {
			if (this.scrollContainerRef.current) {
				this.scrollContainerRef.current.scrollTop =
					this.computeFirstActiveEventIndex() * EVENT_LIST_ITEM_HEIGHT;
			}
		});
	}

	handleEventListItemClick(event: IEvent) {
		this.setState({
			modalShow: true,
			modalHeading: event.name,
			modalTime:
				event.duration === 0
					? to12HourTime(event.start)
					: `${to12HourTime(event.start)} - ${to12HourTime(
							new Date(event.start.getTime() + event.duration * ONE_MINUTE_MILLISECOND)
					  )}`,
			modalBody: event.description
		});
	}

	computeFirstActiveEventIndex() {
		const now = dateToMinutesInDay(new Date());
		let i = 0;
		for (; i < this.props.day.events.length; ++i) {
			const event = this.props.day.events[i];
			const start = dateToMinutesInDay(event.start);
			const end = start + event.duration;

			if (now <= end) {
				break;
			}
		}
		return i;
	}

	render() {
		return (
			<div id="event-list" ref={this.scrollContainerRef}>
				<ModalDialog
					show={this.state.modalShow}
					onHide={() => this.setState({ modalShow: false })}
					heading={this.state.modalHeading}
					time={this.state.modalTime}
					body={this.state.modalBody}
				/>
				{this.props.day.events.map((event, index) => (
					<div key={`event-list-item-${index}`} onClick={() => this.handleEventListItemClick(event)}>
						<EventListItem event={event} />
					</div>
				))}
			</div>
		);
	}
}

export default EventListComponent;
