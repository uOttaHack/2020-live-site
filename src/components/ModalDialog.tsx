import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface PropTypes {
	show: boolean;
	onHide: () => void;
	heading?: string;
	time?: string;
	body?: string;
}

const ModalDialog: React.FC<PropTypes> = props => {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{props.heading}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>{props.time}</p>
				<p>{props.body}</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalDialog;
