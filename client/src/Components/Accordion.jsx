import Accordion from 'react-bootstrap/Accordion';
import CompareYourAnswer from './Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function QuestionAccordion({questionText, questionChoices, index}) {
	const [choiceSelected, setChoiceSelected] = useState([null, null]);
	const [isAnswer, setIsAnswer] = useState(null);
	const [isCorrect, setIsCorrect] = useState(false);

	
	const number = (index + 1).toString()
	// create map of accordion items. use {index.toString()} for eventKey


	return (
		<Accordion>
			<Accordion.Item eventKey='0'>
				<Accordion.Button style={{ background: '#eee' }}>
					<h5 style={{ margin: 'auto 0px' }}>
						Question {number}
					</h5>
				</Accordion.Button>
				<Accordion.Body style={{ backgroundColor: '#fff' }}>
					<div className='display-block my-4'>
						<h3>{questionText}</h3>
						<hr />
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
					<hr />
					<div
						style={{ display: 'flex', flexDirection: 'row-reverse' }}
					>
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
