import React, { useState } from 'react';

function Question() {
	const [isFaqOpen, setIsFaqOpen] = useState(false);
	return (
		<div className="section">
			<div className="question" onClick={() => setIsFaqOpen((prev) => !prev)}>
				<span>How do I get a house without getting much attention?</span>
				{isFaqOpen && <span>x</span>}
				{!isFaqOpen && <span>+</span>}
			</div>
			<p className={`answer ${isFaqOpen ? 'open' : ''}`}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. In praesentium
				id ipsa. Aut maiores magni aliquid optio, mollitia autem totam quod
				facere corrupti ipsum ut eos quasi laborum, cum odit, hic quas nobis
				culpa minus reprehenderit dolore sint? Ab et exercitationem iure iusto
				molestias omnis facere natus inventore sunt amet ex quae odio pariatur,
				aperiam neque sapiente suscipit esse molestiae.
			</p>
		</div>
	);
}

export default Question;
