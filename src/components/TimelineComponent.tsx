import React from 'react';
import './TimelineComponent.css';

import { IEvent } from '../interfaces';
import { EventCategoryColor } from '../enums';
import { identity } from '../utils';

import { firstDay } from '../data/schedule';

const events = firstDay.events;
const categoryBuckets = processCategoryBuckets(events);
const minutes = 60;
const labelMarkerOffset = 4;
const labelSpace = 90;
const trackSpace = 40;
const trackStartHeight = 60;
const timeLabels = Array.from(Array(25).keys()).map(
	i => `${i % 12 === 0 ? 12 : i % 12}${i % 24 < 12 ? 'AM' : 'PM'}`
);
const oneMinute = 60000;

function processCategoryBuckets(events: IEvent[]) {
	interface ICategoryEventList {
		[category: string]: IEvent[];
	}

	return events.reduce((collect, event) => {
		collect[event.category] =
			event.category in collect
				? collect[event.category].concat(event)
				: [event];
		return collect;
	}, identity<ICategoryEventList>({}));
}

class TimelineComponent extends React.Component {
	scrollContainerRef: React.RefObject<HTMLDivElement>;
	interval: NodeJS.Timeout;
	state: any;

	constructor(props: any) {
		super(props);
		this.scrollContainerRef = React.createRef();

		// TODO: fix workaround typed initialization
		this.interval = setInterval(() => ({}), 0);
		clearInterval(this.interval);

		this.state = {
			hours: new Date().getHours(),
			minutes: new Date().getMinutes(),
			width: window.innerWidth,
			height: window.innerHeight
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
			this.scrollContainerRef.current.scrollLeft =
				this.computeSliderPos() - labelSpace;
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
		return (
			<div id="timeline" ref={this.scrollContainerRef}>
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
							<div
								className="timeline-label-marker"
								style={{ left: index * labelSpace }}
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
					{events.map((event, index) => (
						<div
							key={`timeline-track-${event.category}-${index}`}
						/>
					))}
					{Object.keys(categoryBuckets).map(
						(activityKey, activityIndex) => (
							<div
								key={`timeline-track-${activityKey}-container`}
							>
								{categoryBuckets[activityKey].map(
									(event, eventIndex) => (
										<div
											className="timeline-track-item"
											style={{
												width:
													(labelSpace / minutes) *
													this.computeMinutesDifferenceInDay(
														event.start,
														event.end
													),
												left:
													(labelSpace / minutes) *
													this.computeMinutesPassedInDay(
														event.start
													),
												top:
													trackStartHeight +
													trackSpace * activityIndex
											}}
										>
											<p>{event.name}</p>
											<div
												key={`timeline-track-${activityKey}-${eventIndex}`}
												className="timeline-track-line"
												style={{
													background:
														EventCategoryColor[
															activityKey
														]
												}}
											>
												<svg
													className="timeline-track-line-end-left"
													height="10"
													width="10"
												>
													<circle
														className="timeline-track-line-end-left"
														cx="5"
														cy="5"
														r="4"
														fill={
															EventCategoryColor[
																activityKey
															]
														}
													/>
												</svg>
												<svg
													className="timeline-track-line-end-right"
													height="10"
													width="10"
												>
													<circle
														className="timeline-track-line-end-right"
														cx="5"
														cy="5"
														r="4"
														fill={
															EventCategoryColor[
																activityKey
															]
														}
													/>
												</svg>
											</div>
										</div>
									)
								)}
							</div>
						)
					)}
				</div>
			</div>
		);
	}
}

export default TimelineComponent;