import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const LoginModal = ({
	setEmail,
	setPassword,
	setToken,
	setIsLoggedIn,
	email,
	password,
	setCurrentUser,
	currentUser,
	isLoggedIn,
}) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [showPassword, setShowPassword] = useState(false);

	// create login handler
	const handleLogin = async () => {
		try {
			// send post request to login route
			const response = await fetch('http://localhost:3001/login', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});

			// check if fetch was successful
			if (response.ok) {
				const data = await response.json();
				// set localStorage to the logged in user
				localStorage.setItem('token', data.token);
				localStorage.setItem('username', data.username);
				// console.log(`data`, data);
				setToken(data.token);
				// console.log(`data.token`, data.token);
				setCurrentUser(data.username);
				// console.log(`currentUser`, currentUser)
				setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
				// console.log(`isLoggedIn`, isLoggedIn);
				alert('Login Successful!\n\nWelcome back '+data.username);
				handleClose();
			} else {
				alert('Login failed');
			}
		} catch (error) {
			alert('An error occurred');
		}
	};

	// create logout handler
	const handleLogOut = () => {
		// Clear the token
		setToken(null);
		// Update the logged-in state
		setIsLoggedIn(false);
		// clear current user data
		setCurrentUser(null);
		// clear localStorage
		localStorage.removeItem('token');
		// redirect user to home page
		window.location.href = '/';
		// Display a message
		alert('Logout successful!');
	};

	// console.log(`currentUser`, currentUser);
	return (
		<>
			{isLoggedIn === false ? (
				<>
					<Button variant='secondary' onClick={handleShow}>
						Login
					</Button>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton style={{background: '#fff'}} >
							<Modal.Title style={{ textAlign: 'center' }}>
								Login
							</Modal.Title>
						</Modal.Header>
						<Modal.Body style={{ background: '#eee' }}>
							<Form>
								<InputGroup className='mb-3'>
									<Form.Control
										style={{
											boxShadow:
												'inset 0px 2px 5px rgba(0, 0, 0, 0.1)',
										}}
										type='email'
										placeholder='name@example.com'
										autoComplete='email'
										onChange={(e) => setEmail(e.target.value)}
									/>
								</InputGroup>
								<InputGroup className='mb-3'>
									<Form.Control
										style={{
											boxShadow:
												'inset 0px 2px 5px rgba(0, 0, 0, 0.1)',
										}}
										type={showPassword ? 'text' : 'password'}
										placeholder='Password'
										autoComplete='current-password'
										onChange={(e) => setPassword(e.target.value)}
									/>
									<Button variant='secondary'
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword === false ? 'Show' : 'Hide'}
									</Button>
								</InputGroup>
							</Form>
						</Modal.Body>
						<Modal.Footer style={{ background: '#eee' }}>
							<Button variant='secondary' onClick={handleLogin}>
								Login
							</Button>
						</Modal.Footer>
					</Modal>
				</>
			) : (
				
					<Button
						variant='secondary'
						onClick={() => handleLogOut()}
					>
						Log Out
					</Button>
				
			)}
		</>
	);
};

export default LoginModal;
