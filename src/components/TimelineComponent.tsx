import React from 'react';
import './TimelineComponent.css';

import { IEvent, ICategoryEventList } from '../interfaces';
import { EventCategoryColor } from '../enums';
import { identity } from '../utils';

import ModalDialog from '../components/ModalDialog';

const minutes = 60;
const labelMarkerOffset = 4;
const labelSpace = 90;
const trackSpace = 40;
const trackStartHeight = 60;
const timeLabels = Array.from(Array(25).keys()).map(i => `${i % 12 === 0 ? 12 : i % 12}${i % 24 < 12 ? 'AM' : 'PM'}`);
const oneMinute = 60000;

const overflowColor = 'deepskyblue';

function to12HourTime(date: Date) {
	const hours = date.getHours();
	const minutes = date.getMinutes();

	return `${hours % 12 === 0 ? 12 : hours % 12}:${minutes < 10 ? '0' : ''}${minutes}${hours % 24 < 12 ? 'AM' : 'PM'}`;
}

function processCategoryBuckets(events: IEvent[]) {
	return events.reduce((collect, event) => {
		collect[event.category] = event.category in collect ? collect[event.category].concat(event) : [event];
		return collect;
	}, identity<ICategoryEventList>({}));
}

interface PropTypes {
	day: any;
}

class TimelineComponent extends React.Component<PropTypes> {
	scrollContainerRef: React.RefObject<HTMLDivElement>;
	interval: NodeJS.Timeout;
	state: {
		categoryBuckets: ICategoryEventList;
		hours: number;
		minutes: number;
		width: number;
		height: number;
		modalShow: boolean;
		modalHeading: string;
		modalTime: string;
		modalBody: string;
	};

	constructor(props: PropTypes) {
		super(props);
		this.scrollContainerRef = React.createRef();

		// TODO: fix workaround typed initialization
		this.interval = setInterval(() => ({}), 0);
		clearInterval(this.interval);

		this.state = {
			categoryBuckets: {},
			hours: new Date().getHours(),
			minutes: new Date().getMinutes(),
			width: window.innerWidth,
			height: window.innerHeight,
			modalShow: false,
			modalHeading: '',
			modalTime: '',
			modalBody: ''
		};
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);

		this.updateScroll();

		this.interval = setInterval(
			() =>
				this.setState({
					hours: new Date().getHours(),
					minutes: new Date().getMinutes()
				}),
			oneMinute
		);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);

		clearInterval(this.interval);
	}

	updateDimensions = () => {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	};

	updateScroll() {
		if (this.scrollContainerRef.current) {
			this.scrollContainerRef.current.scrollLeft = this.computeSliderPos() - labelSpace;
		}
	}

	computeSliderPos() {
		return labelSpace * (this.state.hours + this.state.minutes / minutes);
	}

	computeMinutesPassedInDay(date: Date) {
		return minutes * date.getHours() + date.getMinutes();
	}

	computeMinutesDifferenceInDay(date1: Date, date2: Date) {
		return Math.abs(date1.getTime() - date2.getTime()) / 60000;
	}

	render() {
		this.state.categoryBuckets = processCategoryBuckets(this.props.day.events);

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
							<div
								className="timeline-label"
								style={{
									left: index * labelSpace + labelMarkerOffset
								}}
							>
								{label}
							</div>
							<div className="timeline-label-marker" style={{ left: index * labelSpace }} />
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
					{Object.keys(this.state.categoryBuckets).map((activityKey, activityIndex) => (
						<div key={`timeline-track-${activityKey}-container`}>
							{this.state.categoryBuckets[activityKey].map((event, eventIndex) => (
								<div
									key={`timeline-track-${activityKey}-${eventIndex}`}
									className="timeline-track-item"
									style={{
										width: (labelSpace / minutes) * event.duration,
										left: (labelSpace / minutes) * this.computeMinutesPassedInDay(event.start),
										top: trackStartHeight + trackSpace * activityIndex
									}}
									onClick={() =>
										this.setState({
											modalShow: true,
											modalHeading: event.name,
											modalTime:
												event.duration === 0
													? to12HourTime(event.start)
													: `${to12HourTime(event.start)} - ${to12HourTime(
															new Date(event.start.getTime() + event.duration * 60000)
													  )}`,
											modalBody: event.description
										})
									}
								>
									<p
										style={{
											width: event.duration === 0 ? labelSpace : '100%'
										}}
									>
										{event.name}
									</p>
									<div
										key={`timeline-track-${activityKey}-${eventIndex}`}
										className="timeline-track-line"
										style={{
											background: EventCategoryColor[activityKey] || overflowColor
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
													fill={EventCategoryColor[activityKey] || overflowColor}
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
