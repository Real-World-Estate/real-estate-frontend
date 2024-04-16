import React from 'react';
import { faqs } from '../assets';
import Question from './Question';

function Faqs() {
	return (
		<div className="faqs" id='faqs'>
			<div className="title">
				<img src={faqs.faqsMain} alt="Faqs Icon" />
				<h4>Frequently Asked Questions</h4>
			</div>
			<div className="faqs-content mg-top-lg">
				{Array.from({ length: 7 }).map((_, index) => (
					<Question />
				))}
			</div>
			<img src={faqs.iconBrownDown} alt="down icon" className="icon-down" />
			<img src={faqs.iconBrownUp} alt="down icon" className="icon-up" />
		</div>
	);
}

export default Faqs;
