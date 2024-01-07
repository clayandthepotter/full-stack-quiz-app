import React, { useState, useEffect } from 'react';
import HiddenNav from './Components/Nav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import database from './database.js';
import QuestionAccordion from './Components/Accordion.jsx';
import Header from './Components/Header.jsx';
import {
	fetchQuestions,
	fetchChoices,
	fetchQuizzes,
} from './Services/APIs.js';
// import fetchChoices from './Services/APIs.js';
// import fetchQuizzes from './Services/APIs.js';

export default function App() {
	// initialize state variables
	const [show, setShow] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [choices, setChoices] = useState([]);
	const [quizzes, setQuizzes] = useState([]);
	const [currentQuiz, setCurrentQuiz] = useState([]);
	const [currentQuizId, setCurrentQuizId] = useState([]);
	const [currentQuestions, setCurrentQuestions] = useState([]);
	const [currentChoices, setCurrentChoices] = useState([]);

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

	// handle information display
	useEffect(() => {
		const getCurrQuiz = async () => {
			const response = await fetchQuizzes();
		};
	}, [currentQuizId]);

	// handle show and hide
	const handleHide = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div id='app'>
			<div id='header'>
				<Header handleShow={handleShow} />
			</div>
			<main id='main'>
				<HiddenNav
					show={show}
					handleHide={handleHide}
					quizzes={quizzes}
					currentQuizId={currentQuizId}
					setCurrentQuizId={setCurrentQuizId}
				/>
				<div id='accordionList'>
					{database.map((item) => (
						<QuestionAccordion
							key={item.id}
							id={item.id}
							question={item.question}
							answer={item.answer}
							correctAnswer={item.correctAnswer}
							A={item.A}
							B={item.B}
							C={item.C}
							D={item.D}
						/>
					))}
				</div>
			</main>
		</div>
	);
}
