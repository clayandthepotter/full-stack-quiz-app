import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function HiddenNav({ show, handleHide, quizzes, currentQuizId, setCurrentQuizId}) {
	// State to track hovered button
	const [hoveredButton, setHoveredButton] = useState(null);

	// Styles
	const normalStyle = {
		background: 'transparent',
		border: '0 none transparent',
		marginBottom: '5px',
		fontSize: '24px',
	};

	const hoverStyle = {
		...normalStyle,
		background: '#f0f0f0', // Example hover background
		color: '#333', // Example hover text color
		cursor: 'pointer',
		borderRadius: '3px',
		textDecoration: 'underline',
		fontWeight: 'bold'
	};

	return (
		<>
			<Offcanvas show={show} onHide={handleHide}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title style={{fontSize:'30px', fontWeight:'bold' }}>Quiz Topics</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<ul style={{ listStyle: 'none' }}>
						{quizzes.map((quiz) => (
							<li key={quiz.quiz_id}>
								<button
									style={
										hoveredButton === quiz.quiz_id
											? hoverStyle
											: normalStyle
									}
									onMouseEnter={() => setHoveredButton(quiz.quiz_id)}
									onMouseLeave={() => setHoveredButton(null)}
									onClick={() => setCurrentQuiz(quiz.quiz_id)}
								>
									{quiz.topic}
								</button>
							</li>
						))}
					</ul>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export default HiddenNav;
