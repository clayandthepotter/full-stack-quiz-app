import Accordion from 'react-bootstrap/Accordion';
import CompareYourAnswer from './Modal';
import { useState } from 'react';
import MultipleChoice from './MultipleChoice';

function QuestionAccordion({questionId, questionText, quizChoices, answer}) {	



	return (
		<Accordion>
			<Accordion.Item eventKey='0'>
				<Accordion.Header>
					<h5>Question {questionId}</h5>
				</Accordion.Header>
				<Accordion.Body style={{ backgroundColor: '#fff' }}>
					<div className='display-block my-4'>
						<h3>{questionText}</h3>
					</div>
					<div className='display-inline my-4'>
						{quizChoices.filter()}
					</div>
					<div className='display-block mt-3'>
						<CompareYourAnswer
						// answer={answer}
						// isCorrect={isCorrect}
						// setIsCorrect={setIsCorrect}
						/>
					</div>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}

export default QuestionAccordion;
