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
	fetchUsers,
} from './Services/APIs.js';
import Button from 'react-bootstrap/Button';
import LoginModal from './Components/LoginModal.jsx';
import RegisterModal from './Components/RegisterModal.jsx';
import { jwtDecode } from 'jwt-decode';

export default function App() {
	// initialize state variables
	const [show, setShow] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [choices, setChoices] = useState([]);
	const [quizzes, setQuizzes] = useState([]);
	const [currentQuiz, setCurrentQuiz] = useState([]);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [token, setToken] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState('');
	const [users, setUsers] = useState('');

	// get questions
	useEffect(() => {
		const getQuestions = async () => {
			const response = await fetchQuestions();
			setQuestions(response);
			// console.log(questions);
		};
		getQuestions();
	}, []);

	// get choices
	useEffect(() => {
		const getChoices = async () => {
			const response = await fetchChoices();
			setChoices(response);
			// console.log(choices);
		};
		getChoices();
	}, []);

	// get quizzes
	useEffect(() => {
		const getQuizzes = async () => {
			const response = await fetchQuizzes();
			setQuizzes(response);
			// console.log(quizzes);
		};
		getQuizzes();
	}, []);

	// get users
	useEffect(() => {
		const getUsers = async () => {
			const response = await fetchUsers();
			setUsers(response);
			// console.log(users);
		};
		getUsers();
	}, []);

	// check if user is logged in
	useEffect(() => {
		const token = localStorage.getItem('token');
		const username = localStorage.getItem('username');
		if (token && typeof token === 'string') {
			try {
				const decoded = jwtDecode(token);
				setCurrentUser(localStorage.getItem('username'));
				setIsLoggedIn(true);
				console.log(decoded, username);
			} catch (error) {
				console.error('Error decoding token:', error);
				localStorage.removeItem('token');
				localStorage.removeItem('username');
			}
		}
	}, []);

	// filters for current quiz questions and choices
	const quizQuestions = questions.filter(
		(q) => q.quiz_id === currentQuiz.quiz_id
	);
	// console.log(`quizQuestions`, quizQuestions);

	const quizChoices = choices.filter(
		(c) => c.quiz_id === currentQuiz.quiz_id
	);
	// console.log(`quizChoices`, quizChoices);

	const questionsWithChoices = quizQuestions.map((question) => {
		return {
			...question,
			choices: quizChoices.filter(
				(c) => c.question_id === question.question_id
			),
		};
	});

	// console.log(`questionsWithChoices`, questionsWithChoices);

	// quiz description variable
	const quizDescription = currentQuiz.description;

	// handle show and hide
	const handleHide = () => setShow(false);
	const handleShow = () => {
		if (isLoggedIn) {
			setShow(true);
		} else {
			alert('Please log in to access this content :)');
		}
	};

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
				<Header
					handleShow={handleShow}
					setToken={setToken}
					setIsLoggedIn={setIsLoggedIn}
					setCurrentUser={setCurrentUser}
					currentUser={currentUser}
					email={email}
					setEmail={setEmail}
					password={password}
					setPassword={setPassword}
					token={token}
					isLoggedIn={isLoggedIn}
				/>
			</div>
			{currentQuiz.quiz_id > 0 ? (
				<main id='main'>
					<HiddenNav
						show={show}
						handleHide={handleHide}
						quizzes={quizzes}
						currentQuiz={currentQuiz}
						setCurrentQuiz={setCurrentQuiz}
						isLoggedIn={isLoggedIn}
					/>
					<div id='quiz'>
						<h1 style={{ fontSize: '60px', fontWeight: '900' }}>
							{currentQuiz.topic}
						</h1>
					</div>
					<div
						id='description'
						style={{
							maxWidth: '1000px',
							margin: 'auto',
							marginBottom: '50px',
						}}
					>
						{quizDescription}
						<hr />
					</div>

					<div id='accordionList'>
						{questionsWithChoices.map((q, index) => (
							<QuestionAccordion
								index={index}
								questionId={q.question_id}
								questionText={q.question_text}
								questionChoices={q.choices}
								quizQuestions={quizQuestions}
								currentQuiz={currentQuiz}
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
					<div style={{ height: '100vh', margin: 'auto' }}>
						<HiddenNav
							show={show}
							handleHide={handleHide}
							quizzes={quizzes}
							currentQuiz={currentQuiz}
							setCurrentQuiz={setCurrentQuiz}
						/>
						<div style={{ maxWidth: '800px', margin: 'auto' }}>
							<h1
								style={{
									textAlign: 'center',
									marginBottom: '40px',
									marginTop: '20px',
									fontWeight: '900',
									fontSize: '50px',
								}}
							>
								Welcome to BrainFood!
							</h1>

							<hr />
							<strong>
								<p style={{ fontSize: '26px', fontWeight: '700' }}>
									A full stack, interactive, multiple choice quiz app
									built to test your knowledge on coding fundamentals
									of topics like Javascript, React, SQL, and more.
								</p>
							</strong>
							<hr />

							<p style={{ fontSize: '26px', fontWeight: '500' }}>
								BrainFood was built using the PERN stack.
							</p>
							<strong>
								<p style={{ fontSize: '26px', fontWeight: '700' }}>
									PostgreSQL, Express, React, and Node.
								</p>
							</strong>
							<br />
							<p style={{ fontSize: '22px', fontWeight: '500' }}>
								BrainFood is an open source project started by Clayton
								Prickett.
							</p>
							<p style={{ fontSize: '22px', fontWeight: '500' }}>
								If you would like to contribute or copy the project,
								the codebase can be found by following this{' '}
								<a href='https://github.com/clayandthepotter/full-stack-quiz-app'>
									link.
								</a>{' '}
							</p>
							<br />
							<p style={{ fontSize: '22px', fontWeight: '500' }}>
								To get started, register an account. This will also
								log you in. Then simply click the menu icon in the top
								left corner of your screen, select a quiz topic, and
								begin!
							</p>
						</div>
						<br />
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								margin: 'auto',
							}}
						>
							<RegisterModal
								setUsername={setUsername}
								setEmail={setEmail}
								setPassword={setPassword}
								setToken={setToken}
								setIsLoggedIn={setIsLoggedIn}
								setCurrentUser={setCurrentUser}
								username={username}
								email={email}
								password={password}
							/>
							
						</div>
					</div>
				</main>
			)}
		</div>
	);
}
