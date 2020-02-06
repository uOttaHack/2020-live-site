import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const ChallengeView: React.FC = () => {
	return (
		<Container id="contact-view" fluid>
			<Col>
				<h2>Tracks & Challenges</h2>
				<p>
					At uOttaHack 3, we’re encouraging hackers to enter into one of our three hacking tracks, broad
					categories that represent real life industries in tech and build their projects around them. Hackers
					still have complete creative freedom with what their project actually does, but they should be
					making an effort to relate it to the specific track.
				</p>
				<h5>Details</h5>
				<ul>
					<li>Teams are allowed to enter ONE and ONLY one track.</li>
					<li>
						Your project must relate somehow to problems, challenges, and new ideas relevant to the track
						found in the real world.
					</li>
				</ul>
				<h4>
					FinTech Track{' '}
					<span role="img" aria-label="bank">
						🏦
					</span>
				</h4>
				<p>
					Financial technology has become a rapidly growing industry that serves both consumers and
					businesses. Recent years have seen the rise of products aimed at improving financial literacy,
					mobile banking, cryptocurrency, investing apps, and more. Projects in this track should aim to
					improve on existing financial infrastructure, bring new innovations in the sector for consumers, and
					apply modern technology to the traditional financial world.
				</p>
				<h4>
					HealthTech Track{' '}
					<span role="img" aria-label="hospital emoji">
						🏥
					</span>
				</h4>
				<p>
					Health technology is a broad industry that includes any products or services that improve the
					delivery, payment, and consumption of care. Companies in this sector aim at innovating the crucial
					patient-practitioner relationship with a modern approach. Products can include fitness and lifestyle
					improvement apps, patient care systems, e-commerce based pharmaceuticals, and more. Projects in this
					track should aim to improve the average patient’s quality of life, increase the efficiency of
					medical practitioners, and bring new concepts to an industry where patient safety is the highest
					priority.
				</p>
				<h4>
					Smart Delivery Track - Sponsored by InnovaPost{' '}
					<span role="img" aria-label="truck emoji">
						🚚
					</span>
				</h4>
				<p>
					Today’s extremely fast pace of e-commerce has created an even greater demand for highly efficient
					delivery systems, where consumers expect short delivery times without any risk of delays. Delivery
					technology has evolved to grow beyond just traditional shipments, now it can connect restaurants
					with customers all across the city, bring groceries to your doorstep, and even bring thousands of
					items to your doorstep in a matter of hours. Projects in this track should aim at taking delivery to
					its' innovation, introducing delivery tech to completely new industry, and applying modern
					technology (hardware or software) to the delivery pipeline.
				</p>
			</Col>
		</Container>
	);
};

export default ChallengeView;
