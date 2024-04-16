import React from 'react';
import Button from './Button';
import { image } from '../assets';

function Header() {
	return (
		<header className="header mg-top" id='home'>
			<div className="header-main">
				<h4>Smile to a home with</h4>
				<h1>
					<span className="main">Real</span>
					<span className="sub">ESTATE</span>
				</h1>
				<p className="text">
					Ditch the disappointment of endless listings. We've curated a
					collection of stunning homes that reflect your unique personality.
					Imagine waking up in a space that feels like an extension of you, not
					just another apartment. Find your perfect fit and move in with the
					confidence of knowing you've found home.
				</p>
				<Button
					STYLE={'bold'}
					color={'primary'}
					text={'BOOK NOW'}
					link={'/#contact-us'}
				/>
			</div>
			<div className="header-pic">
				<img src={image.houseHeader} alt="Landing page house" />
			</div>
		</header>
	);
}

export default Header;
