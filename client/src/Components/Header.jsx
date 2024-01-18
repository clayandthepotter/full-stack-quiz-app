import React from 'react';
import Logo from '../assets/logo.png';
import Button from 'react-bootstrap/esm/Button';
import LoginModal from './LoginModal';

const Header = ({
	handleShow,
	setToken,
	setIsLoggedIn,
	setCurrentUser,
	currentUser,
	email,
	setEmail,
	password,
	setPassword,
	token,
	isLoggedIn
}) => {
	
	const handleMouseEnter = (e) => {
		e.target.style.cursor = 'pointer';
	};

	const handleMouseLeave = (e) => {
		e.target.style.cursor = 'default'; // Or you can use '' to clear the inline style
	};


	return (
		<header
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				width: '100%',
				// paddingTop: '10px',
			}}
		>
			<div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='36'
					height='36'
					fill='currentColor'
					className='bi bi-list'
					viewBox='0 0 17 10'
					style={{ margin: 'auto 10px', cursor: 'pointer' }}
					onClick={handleShow}
				>
					<path
						fillRule='evenodd'
						d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
					/>
				</svg>
			</div>
			<div
				style={{
					display: 'flex',
					alignContent: 'center',
					paddingLeft: '50px',
				}}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={() => (window.location.href = '/')}
			>
				<h1
					style={{
						textAlign: 'center',
						margin: 'auto 5px',
						fontWeight: '900',
						color: '#120a24',
					}}
				>
					BrainFood
				</h1>
				<img
					src={Logo}
					alt='BrainFood Logo'
					style={{ width: '45px', height: '45px' }}
				/>
			</div>

			<div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
				<LoginModal
					email={email}
					setEmail={setEmail}
					password={password}
					setPassword={setPassword}
					token={token}
					setToken={setToken}
					setIsLoggedIn={setIsLoggedIn}
					setCurrentUser={setCurrentUser}
					currentUser={currentUser}
					isLoggedIn={isLoggedIn}
				/>
			</div>
		</header>
	);
};

export default Header;
