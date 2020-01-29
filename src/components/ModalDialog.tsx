import React from 'react';

import Modal from 'react-bootstrap/Modal';

interface PropTypes {
	show: boolean;
	onHide: () => void;
	heading?: string;
	time?: string;
	body?: string;
}

const ModalDialog: React.FC<PropTypes> = props => {
	return (
		<Modal show={props.show} onHide={props.onHide} centered>
			<Modal.Header closeButton>
				<Modal.Title>{props.heading}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>{props.time}</p>
				<p>{props.body}</p>
			</Modal.Body>
		</Modal>
	);
};

export default ModalDialog;
