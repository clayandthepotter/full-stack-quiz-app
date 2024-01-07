import React from 'react';
import Button from 'react-bootstrap/Button';

const Header = ({ handleShow }) => {
	return (
		<header
			style={{
				display: 'flex',
				alignContent: 'center',
				paddingTop: '10px',
			}}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='36'
				height='36'
				fill='currentColor'
				class='bi bi-list'
				viewBox='0 0 20 20'
				onClick={handleShow}
			>
				<path
					fill-rule='evenodd'
					d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
				/>
			</svg>
			<h2>Knowledge Check</h2>
		</header>
	);
};

export default Header;
