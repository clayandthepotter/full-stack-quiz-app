import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function MultipleChoice({	quizChoices }) {
	
	const [answer, setAnswer] = useState('');
	const [isSelected, setIsSelected] = useState(false);

	// const handleChange = (e) => {
	// 	setAnswer(e.target.value);
	// 	if (answer === correctAnswer) {
	// 		setIsCorrect(true);
	// 	} else {
	// 		setIsCorrect(false);
	// 	}
	// };




	return (
		<div>
			
			{/* 				
				<Form.Check
					type='radio'
					id='A'
					label={A}
					value='A'
					checked={isSelected === 'A'}
					onChange={() => setIsSelected('A')}
				/>
				<Form.Check
					type='radio'
					id='B'
					label={B}
					value='B'
					checked={isSelected === 'B'}
					onChange={() => setIsSelected('B')}
				/>
				<Form.Check
					type='radio'
					id='C'
					label={C}
					value='C'
					checked={isSelected === 'C'}
					onChange={() => setIsSelected('C')}
				/>
				<Form.Check
					type='radio'
					id='D'
					label={D}
					value='D'
					checked={isSelected === 'D'}
					onChange={() => setIsSelected('D')}
				/> */}
		</div>
	);
}

export default MultipleChoice;
