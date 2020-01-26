import React from 'react';
import './TimelineComponent.css';

import { PropTypesDay, IEvent, ICategoryEventList } from '../interfaces';
import { EventCategoryColor } from '../enums';
import { identity, to12HourTime, getRelativeEventTime, dateToMinutesInDay } from '../utils';
import Color from '../colors';
import { ONE_MINUTE_MILLISECOND } from '../constants';

import ModalDialog from '../components/ModalDialog';

const minutes = 60;
const timeLabelOffset = 4;
const timeMarkerOffset = 1;
const labelSpace = 90;
const trackSpace = 40;
const trackStartHeight = 60;
const timeLabels = Array.from(Array(24).keys()).map(i => `${i % 12 === 0 ? 12 : i % 12}${i % 24 < 12 ? 'AM' : 'PM'}`);

function processCategoryBuckets(events: IEvent[]) {
	return events.reduce((collect, event) => {
		collect[event.category] = event.category in collect ? collect[event.category].concat(event) : [event];
		return collect;
	}, identity<ICategoryEventList>({}));
}

class TimelineComponent extends React.Component<PropTypesDay> {
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
		if (this.scrollContainerRef.current) {
			this.scrollContainerRef.current.scrollLeft = this.computeSliderPos() - labelSpace;
		}
	}

	computeSliderPos() {
		const now = new Date();
		return labelSpace * (now.getHours() + now.getMinutes() / minutes);
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

	render() {
		const categoryBuckets = processCategoryBuckets(this.props.day.events);

		return (
			<div id="timeline" ref={this.scrollContainerRef}>
				<ModalDialog
					show={this.state.modalShow}
					onHide={() => this.setState({ modalShow: false })}
					heading={this.state.modalHeading}
					time={this.state.modalTime}
					body={this.state.modalBody}
				/>
				<div id="timeline-label-container">
					{timeLabels.map((label, index) => (
						<div key={`timeline-label-${index}`}>
							<p
								className="timeline-label"
								style={{
									left: index * labelSpace + timeLabelOffset,
									width: labelSpace
								}}
							>
								{label}
							</p>
							<div
								className="timeline-label-marker"
								style={{ left: index * labelSpace - timeMarkerOffset }}
							/>
						</div>
					))}
				</div>
				<div
					id="timeline-slider"
					style={{
						left: this.computeSliderPos()
					}}
				></div>
				<div id="timeline-tracks-container">
					{Object.keys(categoryBuckets).map((activityKey, activityIndex) => (
						<div key={`timeline-track-${activityKey}-container`}>
							{categoryBuckets[activityKey].map((event, eventIndex) => (
								<div
									key={`timeline-track-${activityKey}-${eventIndex}`}
									className={`timeline-track-item ${getRelativeEventTime(event)}`}
									style={{
										width: (labelSpace / minutes) * event.duration,
										left: (labelSpace / minutes) * dateToMinutesInDay(event.start),
										top: trackStartHeight + trackSpace * activityIndex
									}}
									onClick={() => this.handleEventListItemClick(event)}
								>
									<p
										style={{
											minWidth: labelSpace
										}}
									>
										{event.name}
									</p>
									<div
										key={`timeline-track-${activityKey}-${eventIndex}`}
										className="timeline-track-line"
										style={{
											background: EventCategoryColor[activityKey] || Color.Overflow
										}}
									>
										{['left', 'right'].map(lineEnd => (
											<svg
												key={`timeline-line-${lineEnd}`}
												className={`timeline-track-line-end-${lineEnd}`}
												height="10"
												width="10"
											>
												<circle
													className={`timeline-track-line-end-${lineEnd}`}
													cx="5"
													cy="5"
													r="5"
													fill={EventCategoryColor[activityKey] || Color.Overflow}
												/>
											</svg>
										))}
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default TimelineComponent;
