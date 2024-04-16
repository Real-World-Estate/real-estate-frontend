import React from 'react';
import Button from './Button';
import { image } from '../assets';

function MobileNav({ isClose, setIsClose }) {
	return (
		<nav className={`mobile-nav ${isClose && 'mobile-nav-close'}`}>
			<div className="mobile-nav-content">
				<button
					onClick={() => setIsClose(true)}
					className="btn btn-secondary btn-secondary-short close"
				>
					<img src={image.close} alt="The close btn" />
				</button>
				<div className="mobile-nav-items">
					<a onClick={() => setIsClose(true)} href={'#home'}>
						Home
					</a>
					<a onClick={() => setIsClose(true)} href={'#about'}>
						About
					</a>
					<a onClick={() => setIsClose(true)} href={'#services'}>
						Services
					</a>
					<a onClick={() => setIsClose(true)} href={'#blog'}>
						Blog
					</a>
					<a onClick={() => setIsClose(true)} href={'#testimonials'}>
						Testimonials
					</a>
					<Button
						STYLE="res"
						color={'primary'}
						text={'Contact Us'}
						link={'/#contact-us'}
						onClick={() => setIsClose(true)}
					/>
				</div>
			</div>
		</nav>
	);
}

export default MobileNav;
