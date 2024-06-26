import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CompareYourAnswer = ({ isAnswer, isCorrect }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant='secondary' onClick={handleShow}>
				Check your answer
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				style={{ fontFamily: 'Montserrat' }}
			>
				<Modal.Header closeButton style={{ background: '#eee' }}>
					<Modal.Title
						style={{ fontWeight: '700', color: '#20022d' }}
					>
						Answer
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<br />
					<strong>
						<p style={{ fontSize: '26px', color: '#20022d' }}>
							You selected the option:
						</p>
					</strong>
					<p>"{isAnswer}"</p>
					<br />
					<hr style={{ width: '60%', margin: 'auto' }} />
					<br />
					<div>
						{isCorrect === false ? (
							<strong>
								<p style={{ color: '#9d3978', fontSize: '24px' }}>
									That's Incorrect.
								</p>
								<p>Please try again.</p>
							</strong>
						) : (
							<strong>
								<p
									className='gradientText'
									style={{ fontSize: '24px' }}
								>
									That's Correct!
								</p>
								<p>Continue to the next question.</p>
							</strong>
						)}
					</div>
					<br />
				</Modal.Body>
				<Modal.Footer>
					{isCorrect === false ? (
						<Button variant='secondary' onClick={handleClose}>
							Try Again
						</Button>
					) : (
						<Button variant='secondary' onClick={handleClose}>
							Continue
						</Button>
					)}
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default CompareYourAnswer;
