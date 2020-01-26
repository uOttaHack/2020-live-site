import React from 'react';
import './MapView.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const floorImages = [
	require('../assets/images/floor1.png'),
	require('../assets/images/floor2.png'),
	require('../assets/images/floor3.png'),
	require('../assets/images/floor4.png'),
	require('../assets/images/floor5.png')
];

const MapView: React.FC = () => {
	return (
		<Container id="map-view" fluid>
			<Col>
				<h2>Learning Crossroads (CRX)</h2>
				<h4>100 Louis-Pasteur Private, Ottawa, ON K1N 9N3</h4>
				<div className="floor-layouts">
					{floorImages.map((img, index) => (
						<img key={`floor-${index}`} src={img} alt={`Floor ${index + 1} layout`} />
					))}
				</div>
			</Col>
		</Container>
	);
};

export default MapView;
