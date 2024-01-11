import Accordion from 'react-bootstrap/Accordion';
import CompareYourAnswer from './Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function QuestionAccordion({questionId, questionText, questionChoices}) {	

	const [choiceSelected, setChoiceSelected] = useState([null, null]);
	const [isAnswer, setIsAnswer] = useState(null);
	const [isCorrect, setIsCorrect] = useState(null);

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
						<Form>
							{questionChoices.map((choice) => (
								<Form.Check
									type='radio'
									id={choice.choice_id}
									label={choice.choice_text}
									value={choice.choice_id}
									checked={choiceSelected === choice.choice_id}
									onChange={() => (
										setChoiceSelected(choice.choice_id), 
										setIsAnswer(choice.choice_text), 
										setIsCorrect(choice.is_correct)
										)}
								/>
							))}
						</Form>
					</div>
					<div className='display-block mt-3'>
						
							<CompareYourAnswer
								choiceSelected={choiceSelected}
								isAnswer={isAnswer}
								isCorrect={isCorrect}
							/>
						
					</div>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}

export default QuestionAccordion;
