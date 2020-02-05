import React from 'react';
import './InfoView.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const InfoView: React.FC = () => {
	return (
		<Container id="info-view" fluid>
			<Col>
				<Row className="links">
					<Col>
						<a href="https://uottahack2020.slack.com">
							<img
								className="rounded"
								src={require('../assets/images/slack.png')}
								alt="Slack channel link"
							/>
						</a>
					</Col>
				</Row>
				<div>
					<h2>WiFi Networks</h2>
					<h4>eduroam</h4>
					<p>
						eduroam is a campus-wide network. Feel free to join this network if your school email supports
						it.
					</p>
					<h4>guOttawa</h4>
					<p>
						This network is in the CRX building only. It is an open connection with no authentication
						required.
					</p>
					<h2>Challenges</h2>
					<p>To be announced during the event.</p>
				</div>
			</Col>
		</Container>
	);
};

export default InfoView;
