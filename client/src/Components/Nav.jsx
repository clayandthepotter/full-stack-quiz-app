import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function HiddenNav({ show, handleHide, quizzes, isLoggedIn, setCurrentQuiz}) {
	// State to track hovered button
	const [hoveredButton, setHoveredButton] = useState(null);

	// Styles
	const normalStyle = {
		background: 'transparent',
		border: '0 none transparent',
		marginBottom: '5px',
		fontSize: '24px',
		color: '#ccc',
	};

	const hoverStyle = {
		...normalStyle,
		color: '#333',
		fontWeight: '700',
		cursor: 'pointer',
		textDecoration: 'underline',
		webkitTextFillColor: 'transparent',
    backgrounCcolor: '#f3ec78',
    backgroundImage: 'linear-gradient(45deg, #f3ec78, #af4261)',
    backgroundSize: '100%',
    backgroundClip: 'text',
    webkitBackgroundClip: 'text',
    mozBackgroundClip: 'text',
    webkitTextFillColor: 'transparent', 
    mozTextFillColor: 'transparent',
	};

	const handleOnClick = (quiz) => {
		setCurrentQuiz(quiz);
		handleHide();
	}

	return (
		<>
			{isLoggedIn === false ? null : (
				<Offcanvas show={show} onHide={handleHide}>
					<Offcanvas.Header
						style={{
							backgroundColor: 'rgb(190, 190, 190)',
							backgroundImage:
								'linear-gradient(45deg, #af426157, #f3ed785c)',
							boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
							height: '89px',
						}}
						closeButton
					>
						<Offcanvas.Title
							style={{
								fontSize: '40px',
								fontWeight: '900',
								color: '#120a24',
							}}
						>
							Quiz Topics
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body
						className='swirlyBackground'
						style={{ background: 'fff' }}
					>
						<ul style={{ listStyle: 'none' }}>
							<br />
							{quizzes.map((quiz) => (
								<li key={quiz.quiz_id}>
									<button
										value={quiz.quiz_id}
										style={
											hoveredButton === quiz.quiz_id
												? hoverStyle
												: normalStyle
										}
										onMouseEnter={() =>
											setHoveredButton(quiz.quiz_id)
										}
										onMouseLeave={() => setHoveredButton(null)}
										onClick={() => handleOnClick(quiz)}
									>
										{quiz.topic}
									</button>
								</li>
							))}
							<hr style={{ background: 'white' }} />
							<button
								style={
									hoveredButton === quizzes.quiz_id
										? hoverStyle
										: normalStyle
								}
								onMouseEnter={() => setHoveredButton(quizzes.quiz_id)}
								onMouseLeave={() => setHoveredButton(null)}
								onClick={() => window.location.reload()}
							>
								Home
							</button>
						</ul>
					</Offcanvas.Body>
				</Offcanvas>
			)}
		</>
	);
}

export default HiddenNav;
