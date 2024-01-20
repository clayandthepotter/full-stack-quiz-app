import Accordion from 'react-bootstrap/Accordion';
import CompareYourAnswer from './AnswerModal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function QuestionAccordion({questionText, questionChoices, index}) {
	const [choiceSelected, setChoiceSelected] = useState([null, null]);
	const [isAnswer, setIsAnswer] = useState(null);
	const [isCorrect, setIsCorrect] = useState(false);

	
	const number = (index + 1).toString()
	// create map of accordion items. use {index.toString()} for eventKey


	return (
		<Accordion style={{ marginBottom: '15px' }}>
			<Accordion.Item eventKey='0' className='swirlyBackground2'>
				<Accordion.Button
					style={{
						background: '#c5acec',
					}}
				>
					<h5
						style={{
							margin: 'auto 0px',
							color: '#20022d',
							fontWeight: '700',
						}}
					>
						Question {number}
					</h5>
				</Accordion.Button>
				<Accordion.Body
					style={{ paddingLeft: '30px', paddingRight: '30px' }}
				>
					<div className='display-block my-4'>
						<h3 style={{ fontWeight: '700' }}>{questionText}</h3>
						{/* <hr /> */}
					</div>
					<div className='display-inline my-4'>
						<Form>
							{questionChoices.map((choice) => (
								<Form.Check
									style={{ fontSize: '20px', color: '#20022d' }}
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
					{/* <hr /> */}
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
