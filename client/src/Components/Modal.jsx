import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import database from '../database.js';
// import CodeEditor from './CodeEditor';

const CompareYourAnswer = ({ choiceSelected, isAnswer, isCorrect }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	return (
		<>
			<Button variant='primary' onClick={handleShow}>
				Check your answer
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Answer</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<strong>
						<p>You selected option {choiceSelected}:</p>
					</strong>
					<p>"{isAnswer}"</p>
					<br />
					<br />
					<div>
						{isCorrect === false ? (
							<strong>
								<p>That is Incorrect. Please try again.</p>
							</strong>
						) : (
							<strong>
								<p>Correct!</p>
								<p>Continue to the next question.</p>
							</strong>
						)}
					</div>
					<br />
				</Modal.Body>
				<Modal.Footer>
					{isCorrect === false ? (
						<Button variant='primary' onClick={handleClose}>
							Close
						</Button>
					) : (
						<Button variant='primary' onClick={handleClose}>
							Continue
						</Button>
					)}
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default CompareYourAnswer;
