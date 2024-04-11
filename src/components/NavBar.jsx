import React from 'react';
import { appLogo } from '../assets';
import { NavLink } from 'react-router-dom';
import Button from './Button';

function NavBar() {
	return (
		<nav className="nav">
			<img src={appLogo.logo_cut} className="logo" alt={'Application Logo'} />
			<div className="nav-items">
				<NavLink to={'/#home'}>Home</NavLink>
				<NavLink to={'/#about'}>About</NavLink>
				<NavLink to={'/#services'}>Services</NavLink>
				<NavLink to={'/#blog'}>Blog</NavLink>
				<NavLink to={'/#testimonial'}>Testimonials</NavLink>
			</div>
			<Button color={'primary'} text={'Contact Us'} link={'/#contact-us'} />
		</nav>
	);
}

export default NavBar;
