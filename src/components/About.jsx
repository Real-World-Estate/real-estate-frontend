import React from 'react';
import { about, icon, profile, vector } from '../assets';
import Button from './Button';

function About() {
	return (
		<div className="about mg-top-lg">
			<div className="about-content">
				<div className="about-images">
					<img className="pic1" src={about.rect49} alt={'About pics'} />
					<img className="pic2" src={about.rect51} alt={'About pics'} />
					<img className="pic3" src={about.rect50} alt={'About pics'} />
					<div className="about-review">
						<div className="about-review-people">
							<img src={profile.profile1} alt={'Some profile pics'} />
							<img src={profile.profile2} alt={'Some profile pics'} />
							<img src={profile.profile3} alt={'Some profile pics'} />
							<img src={profile.profile4} alt={'Some profile pics'} />
							<img src={profile.profile5} alt={'Some profile pics'} />
						</div>
						<h3>
							<span className="num">15K</span>
							<span className="text">+ Positive Reviews</span>
						</h3>
						<img className="icon-star" src={icon.iconStar} alt="My Icon Star" />
					</div>
				</div>
				<div className="about-us">
					<img src={about.aboutLogo} alt="About us logo" />
					<h4>• WHO WE ARE</h4>
					<h2>We Are Offering The Best Real Estate Property For All</h2>
					<p>
						At Real Estate, we understand the profound impact finding the right
						property has on your life. That's why we leverage cutting-edge
						technology to curate a personalized selection of exceptional homes
						tailored to your unique needs and aspirations. Our dedicated team of
						experts provides unparalleled support, guiding you through every
						step of the real estate journey. We don't just help you find a place
						to live; we empower you to discover a home you'll truly love.
					</p>
					<div className="about-us-icons">
						<div className="content">
							<div className="icon-container">
								<img
									src={icon.iconPerson}
									alt="A persons logo"
									className="icon"
								/>
							</div>
							<div className="text">
								<span className="num">55K</span>
								<span className="main">Satisfied People</span>
							</div>
						</div>
						<div className="content">
							<div className="icon-container">
								<img
									src={icon.iconVerified}
									alt="A verified icon"
									className="icon"
								/>
							</div>
							<div className="text">
								<span className="num">11K</span>
								<span className="main">Verified Property</span>
							</div>
						</div>
					</div>
					<Button
						STYLE="mb-top-lg"
						color={'primary'}
						text={'Contact Us'}
						link={'/#contact-us'}
					/>
				</div>
			</div>
			<img
				src={vector.vectorDots}
				alt={'Beautiful pictures'}
				className="vector-top"
			/>
			<img
				src={vector.vectorDots}
				alt={'Beautiful pictures'}
				className="vector-btm"
			/>
			<img
				src={icon.iconBatch}
				alt={'Beautiful pictures'}
				className="icon-batch"
			/>
		</div>
	);
}

export default About;
