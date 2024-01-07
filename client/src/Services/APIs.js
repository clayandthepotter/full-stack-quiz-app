import axios from 'axios';

const BASE_URL = 'http://localhost:3001'

// fetch questions from database server
export const fetchQuestions = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/questions`);
    console.log(response.data);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

// fetch choices from database server
export const fetchChoices = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/choices`);
    console.log(response.data);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

// fetch quizzes from database server
export const fetchQuizzes = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/quizzes`);
    console.log(response.data);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};


