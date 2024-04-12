import React from 'react';
import Header from '../components/Header';
import Partners from '../components/Partners';
import About from '../components/About';
import Services from '../components/Services';

function Home() {
	return (
		<div>
			<Header />
			<Partners />
			<About />
			<Services />
		</div>
	);
}

export default Home;
