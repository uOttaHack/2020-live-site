import React from 'react';
import './TimelineComponent.css';

const labelSpace = 100;
const timeLabels = Array.from(Array(25).keys()).map(
	i => `${i % 12 === 0 ? 12 : i % 12}${i % 24 < 12 ? 'AM' : 'PM'}`
);
const labelScrollSpace = 1;
const oneMinute = 60000;

class TimelineComponent extends React.Component {
	scrollContainerRef: React.RefObject<HTMLDivElement>;
	interval: NodeJS.Timeout;
	state: any;

	constructor(props: any) {
		super(props);
		this.scrollContainerRef = React.createRef();

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
				labelSpace * (this.state.hours - labelScrollSpace);
		}
	}

	render() {
		this.updateScroll();

		return (
			<div id="timeline" ref={this.scrollContainerRef}>
				<div id="timeline-label-container">
					{timeLabels.map((label, index) => (
						<div
							className="timeline-label"
							key={index}
							style={{
								position: 'absolute',
								left: index * labelSpace
							}}
						>
							{label}
						</div>
					))}
				</div>
				<div
					id="timeline-slider"
					style={{
						left:
							labelSpace * this.state.hours +
							(labelSpace * this.state.minutes) / 60
					}}
				></div>
			</div>
		);
	}
}

export default TimelineComponent;
