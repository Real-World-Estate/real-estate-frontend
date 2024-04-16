import React from 'react';

function Button({ color, text, link, STYLE = '' }) {
	return (
		<button className={`btn btn-${color} ${STYLE}`}>
			<a href={link}>{text}</a>
		</button>
	);
}

export default Button;
