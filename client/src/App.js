// imports
import React, { useState, useEffect } from 'react';
import HiddenNav from './Components/Nav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import QuestionAccordion from './Components/Accordion.jsx';
import Header from './Components/Header.jsx';
import {
	fetchQuestions,
	fetchChoices,
	fetchQuizzes,
} from './Services/APIs.js';
import Button from 'react-bootstrap/Button';


export default function App() {
	// initialize state variables
	const [show, setShow] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [choices, setChoices] = useState([]);
	const [quizzes, setQuizzes] = useState([]);
	const [currentQuiz, setCurrentQuiz] = useState([]);
	const [currentQuizQuestions, setCurrentQuizQuestions] = useState([]);
	const [answer, setAnswer] = useState([]);
	const [isCorrect, setIsCorrect] = useState(null);

	// get questions
	useEffect(() => {
		const getQuestions = async () => {
			const response = await fetchQuestions();
			setQuestions(response);
			console.log(questions);
		};
		getQuestions();
	}, []);

	// get choices
	useEffect(() => {
		const getChoices = async () => {
			const response = await fetchChoices();
			setChoices(response);
			console.log(choices);
		};
		getChoices();
	}, []);

	// get quizzes
	useEffect(() => {
		const getQuizzes = async () => {
			const response = await fetchQuizzes();
			setQuizzes(response);
			console.log(quizzes);
		};
		getQuizzes();
	}, []);

	// filters for current quiz questions and choices 
	const quizQuestions = questions.filter((q) => q.quiz_id === currentQuiz.quiz_id);
	console.log(`quizQuestions`, quizQuestions);

	const quizChoices = choices.filter((c) => c.quiz_id === currentQuiz.quiz_id);
	console.log(`quizChoices`, quizChoices);

	const questionsWithChoices = quizQuestions.map((question) => {
		return {
			...question,
			choices: quizChoices.filter(
				(c) => c.question_id === question.question_id
			),
		};
	});

	console.log(`questionsWithChoices`, questionsWithChoices)

	// quiz description variable
	const quizDescription = currentQuiz.description;

	// handle show and hide
	const handleHide = () => setShow(false);
	const handleShow = () => setShow(true);

	// handle next button click
	const handleNextQuiz = () => {
		// find index of currentQuiz
		const currentIndex = quizzes.findIndex(
			(quiz) => quiz.quiz_id === currentQuiz.quiz_id
		);
		// loop back to the first quiz if at the end
		const nextIndex = (currentIndex + 1) % quizzes.length;
		// set current quiz to next quiz index
		setCurrentQuiz(quizzes[nextIndex]);
		// scroll to the top of the page
		window.scrollTo(0, 0);
	};

	return (
		<div id='app'>
			<div id='header'>
				<Header handleShow={handleShow} />
			</div>
			{currentQuiz.quiz_id > 0 ? (
				<main id='main'>
					<HiddenNav
						show={show}
						handleHide={handleHide}
						quizzes={quizzes}
						currentQuiz={currentQuiz}
						setCurrentQuiz={setCurrentQuiz}
					/>
					<div id='quiz'>{currentQuiz.topic}</div>
					<div id='description'>{quizDescription}</div>
					<div id='accordionList'>
						{questionsWithChoices.map((q) => (
							<QuestionAccordion
								questionId={q.question_id}
								questionText={q.question_text}
								questionChoices={q.choices}
								answer={answer}
							/>
						))}
					</div>
					<div
						style={{
							width: '90%',
							maxWidth: '800px',
							display: 'grid',
							gridAutoColumns: '12',
							margin: '25px auto 50px auto',
						}}
					>
						{currentQuiz.quiz_id > 0 ? (
							<Button
								variant='primary'
								style={{ gridColumn: '12' }}
								onClick={() => handleNextQuiz()}
							>
								Next Quiz
							</Button>
						) : (
							''
						)}
					</div>
				</main>
			) : (
				<main id='main'>
					<HiddenNav
						show={show}
						handleHide={handleHide}
						quizzes={quizzes}
						currentQuiz={currentQuiz}
						setCurrentQuiz={setCurrentQuiz}
					/>
					<h1
						style={{
							textAlign: 'center',
							marginBottom: '40px',
							marginTop: '20px',
							fontWeight: 'bold',
						}}
					>
						Welcome to BrainFood!
					</h1>
					<strong>
						<p>
							A full stack, interactive, multiple choice quiz app
							built to test your knowledge on coding fundamentals of
							topics like Javascript, React, SQL, and several more.
						</p>
					</strong>
					<br />
					<p>BrainFood was built using the PERN stack.</p>
					<strong>
						<p>PostgreSQL, Express, React, and Node.</p>
					</strong>
					<br />
					<p>
						BrainFood is an open soource project started by Clayton
						Prickett and the codebase can be found by following this{' '}
						<a href='https://github.com/clayandthepotter/full-stack-quiz-app'>
							link.
						</a>{' '}
					To get started, just click the hamburger menu on the top left of your screen, select a quiz topic, and begin!</p>
				</main>
			)}
		</div>
	);
}
