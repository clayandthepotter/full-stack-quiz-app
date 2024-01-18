import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const RegisterModal = ({
	setUsername,
	setEmail,
	setPassword,
	setToken,
	setIsLoggedIn,
	username,
	email,
	password,
	setCurrentUser,
}) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [confirmPassword, setConfirmPassword] = useState('');

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] =
		useState(false);

	const formControlStyle = {
		boxShadow: 'inset 0px 2px 5px rgba(0, 0, 0, 0.1)',
	};

	const handleRegister = async () => {
		// check if fields are empty
		if (!username || !email || !password) {
			alert('Please fill in all fields');
			return;
		}
		// validate email
		if (!/\S+@\S+\.\S+/.test(email)) {
			alert('Please enter a valid email address');
			return;
		}
		// check if passwords match
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			// send post request to register route
			const response = await fetch('http://localhost:3001/register', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({ username, email, password }),
			});
			// check if fetch was successful
			if (response.ok) {
				const data = response.json();
				setToken(data.token);
				setIsLoggedIn(true);
				alert('You have been registered');
				handleClose();
			} else {
				const errorText = await response.text();
				alert(`Registration failed: ${errorText}`);
			}
		} catch (error) {
			// const errorText = await response.text();
			alert(error);
		}
	};

	// console.log(confirmPassword);

	return (
		<>
			<Button
				variant='primary'
				size='lg'
				onClick={handleShow}
			>
				Register
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title style={{ textAlign: 'center' }}>
						Create your account
					</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ background: '#eee' }}>
					<InputGroup className='mb-3'>
						<Form.Control
							style={formControlStyle}
							type='username'
							placeholder='Create username'
							onChange={(e) => setUsername(e.target.value)}
						/>
					</InputGroup>
					<InputGroup className='mb-3'>
						<Form.Control
							style={formControlStyle}
							type='email'
							placeholder='name@example.com'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</InputGroup>
					<InputGroup className='mb-3'>
						<Form.Control
							style={formControlStyle}
							type={showPassword ? 'text' : 'password'}
							placeholder='Create password'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Button onClick={() => setShowPassword(!showPassword)}>
							{showPassword === false ? 'Show' : 'Hide'}
						</Button>
					</InputGroup>

					<InputGroup className='mb-3'>
						<Form.Control
							style={formControlStyle}
							type={showConfirmPassword ? 'text' : 'password'}
							placeholder='Confirm Password'
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						<Button
							onClick={() =>
								setShowConfirmPassword(!showConfirmPassword)
							}
						>
							{showConfirmPassword === false ? 'Show' : 'Hide'}
						</Button>
					</InputGroup>
				</Modal.Body>
				<Modal.Footer style={{ background: '#eee' }}>
					<Button size='lg' variant='primary' onClick={handleRegister}>
						Register
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default RegisterModal;
