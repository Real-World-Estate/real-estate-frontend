import React from 'react';
import { appLogo, image } from '../assets';
import Button from './Button';

function NavBar() {
	return (
		<nav className="nav">
			<img src={appLogo.logo_cut} className="logo" alt={'Application Logo'} />
			<div className="nav-items res">
				<a href={'#home'}>Home</a>
				<a href={'#about'}>About</a>
				<a href={'#services'}>Services</a>
				<a href={'#blog'}>Blog</a>
				<a href={'#testimonials'}>Testimonials</a>
			</div>
			<Button
				STYLE="res"
				color={'primary'}
				text={'Contact Us'}
				link={'/#contact-us'}
			/>
			<Button
				STYLE="btn-secondary-short show"
				color={'secondary'}
				text={<img src={image.menu} alt="" />}
				link={'#'}
			/>
		</nav>
	);
}

export default NavBar;
