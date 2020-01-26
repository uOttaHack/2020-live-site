import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const ContactView: React.FC = () => {
	return (
		<Container id="contact-view" fluid>
			<Col>
				<h2>General Inquiries</h2>
				<h4>Paul Lee - Organizer</h4>
				<p>(519) - 410 - 8070</p>
				<h4>Hamza Basari - Organizer</h4>
				<p>(416) - 803 - 7665</p>
				<h4>Natesh Kukreja - Organizer</h4>
				<p>(613) - 858 - 3897</p>
				<b>*For life threatening emergencies please call 911</b>
			</Col>
		</Container>
	);
};

export default ContactView;
