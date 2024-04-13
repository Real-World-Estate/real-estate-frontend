import React from 'react';
import Header from '../components/Header';
import Partners from '../components/Partners';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import Feedback from '../components/Feedback';

function Home() {
	return (
		<div>
			<Header />
			<Partners />
			<About />
			<Services />
			<Portfolio />
			<Experience />
			<Feedback />
		</div>
	);
}

export default Home;
