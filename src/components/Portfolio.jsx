import React from 'react';
import { image } from '../assets';

function Portfolio() {
	return (
		<div className="portfolio mg-top-lg">
			<div className="title mg-top-lg">
				<h4>PORTFOLIO</h4>
				<h2>Our Amazing Works</h2>
				<p className="mg-top">
					Features which will build your trust back on Real Estate
				</p>
			</div>
			<div className="portfolio-content">
				<div className="item">
					<img src={image.houseHeader} alt={'House images'} />
					<div className="portfolio-text">
						<h5>Pent House</h5>
						<span className="text">2 Property</span>
					</div>
				</div>
				<div className="item">
					<img src={image.housePic1} alt={'House images'} />
					<div className="portfolio-text">
						<h5>Pent House</h5>
						<span className="text">2 Property</span>
					</div>
				</div>
				<div className="item">
					<img src={image.housePic2} alt={'House images'} />
					<div className="portfolio-text">
						<h5>Pent House</h5>
						<span className="text">2 Property</span>
					</div>
				</div>
				<div className="item">
					<img src={image.housePic4} alt={'House images'} />
					<div className="portfolio-text">
						<h5>Pent House</h5>
						<span className="text">2 Property</span>
					</div>
				</div>
				<div className="item">
					<img src={image.housePic5} alt={'House images'} />
					<div className="portfolio-text">
						<h5>Pent House</h5>
						<span className="text">2 Property</span>
					</div>
				</div>
				<div className="item">
					<img src={image.housePic6} alt={'House images'} />
					<div className="portfolio-text">
						<h5>Pent House</h5>
						<span className="text">2 Property</span>
					</div>
				</div>
				<div className="item">
					<img src={image.housePic3} alt={'House images'} />
					<div className="portfolio-text">
						<h5>Pent House</h5>
						<span className="text">2 Property</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
