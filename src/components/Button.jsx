import React from 'react';
import { NavLink } from 'react-router-dom';

function Button({ color, text, link }) {
	return (
		<button className={`btn btn-${color}`}>
			<NavLink to={link}>{text}</NavLink>
		</button>
	);
}

export default Button;
