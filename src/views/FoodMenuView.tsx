import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const FoodMenuView: React.FC = () => {
	return (
		<Container id="food-menu-view" fluid>
			<Col>
				<h2>Food Menu</h2>
				<h4 style={{ textAlign: 'center' }}>
					Coffee will be served all weekend{' '}
					<span role="img" aria-label="steaming coffee emoji">
						☕️
					</span>
				</h4>
			</Col>
		</Container>
	);
};

export default FoodMenuView;
