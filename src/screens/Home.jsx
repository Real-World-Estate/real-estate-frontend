import React from 'react';
import Header from '../components/Header';
import Partners from '../components/Partners';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import Feedback from '../components/Feedback';
import ContactUs from '../components/ContactUs';
import Faqs from '../components/Faqs';
import Blogs from '../components/Blogs';
import Location from '../components/Location';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';

function Home({isClose, setIsClose}) {
	return (
		<div>
			<Header />
			<Partners />
			<About />
			<Services />
			<Portfolio />
			<Experience />
			<Feedback />
			<ContactUs />
			<Faqs />
			<Blogs />
			<Location />
			<Footer />
			<MobileNav isClose={isClose} setIsClose={setIsClose} />
		</div>
	);
}

export default Home;
