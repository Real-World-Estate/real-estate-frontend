import React from 'react';
import { appLogo } from '../assets';
import { NavLink } from 'react-router-dom';
import Button from './Button';

function NavBar() {
	return (
		<nav className="nav">
			<img src={appLogo.logo_cut} className="logo" alt={'Application Logo'} />
			<div className="nav-items">
				<a href={'#home'}>Home</a>
				<a href={'#about'}>About</a>
				<a href={'#services'}>Services</a>
				<a href={'#blog'}>Blog</a>
				<a href={'#testimonials'}>Testimonials</a>
			</div>
			<Button color={'primary'} text={'Contact Us'} link={'/#contact-us'} />
		</nav>
	);
}

export default NavBar;
