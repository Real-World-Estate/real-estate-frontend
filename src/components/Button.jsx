import React from 'react';

function Button({ onClick = 'default', color, text, link, STYLE = '' }) {
	let returnValue =
		onClick === 'default' ? (
			<button className={`btn btn-${color} ${STYLE}`}>
				<a href={link}>{text}</a>
			</button>
		) : (
			<button onClick={onClick} className={`btn btn-${color} ${STYLE}`}>
				<a href={link}>{text}</a>
			</button>
		);
	return returnValue;
}

export default Button;
