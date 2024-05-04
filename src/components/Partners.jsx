import React from 'react';
import { appLogo } from '../assets';

function Partners() {
	return (
		<div className="partner mg-top-lg">
			<div className="title">
				<h4>OUR PARTNERS</h4>
				<h2>Meet Our Partners</h2>
			</div>
			<div className="partner-logos mg-top-lg">
				<img src={appLogo.client_logo1} alt={'Logos for our partners'} />
				<img src={appLogo.client_logo2} alt={'Logos for our partners'} />
				<img src={appLogo.client_logo4} alt={'Logos for our partners'} />
				<img src={appLogo.client_logo5} alt={'Logos for our partners'} />
				<img src={appLogo.client_logo6} alt={'Logos for our partners'} />
			</div>
		</div>
	);
}

export default Partners;
