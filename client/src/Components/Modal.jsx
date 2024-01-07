import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import database from '../database.js';
// import CodeEditor from './CodeEditor';

const CompareYourAnswer = ({ answer, isCorrect, setIsCorrect }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant='primary' onClick={handleShow}>
				Submit your answer
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Answer</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div></div>
					<br />
					<div>{answer}</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='primary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default CompareYourAnswer;
