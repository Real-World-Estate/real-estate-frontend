import React from 'react';

function Location() {
	return (
		<div className="location" id='location'>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11936.582389073383!2d9.253346420050901!3d4.16231228489525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061339035136365%3A0x225efcfd32aa93a9!2sMolyko%2C%20Buea!5e0!3m2!1sen!2scm!4v1713147314647!5m2!1sen!2scm"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				title="A map for the location of competent property real estate"
        ></iframe>
		</div>
	);
}

export default Location;
