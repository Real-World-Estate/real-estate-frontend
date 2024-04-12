import React from 'react';
import { NavLink } from 'react-router-dom';

function Button({ color, text, link, STYLE = '' }) {
	return (
		<button className={`btn btn-${color} ${STYLE}`}>
			<NavLink to={link}>{text}</NavLink>
		</button>
	);
}

export default Button;
