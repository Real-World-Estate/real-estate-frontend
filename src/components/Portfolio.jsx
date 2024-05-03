import React from 'react';
import { image, pictures, vector } from '../assets';
import { Link } from 'react-router-dom';

function Portfolio() {
	return (
		<div className="portfolio mg-top-lg" id="portfolio">
			<div className="title mg-top-lg">
				<h4>PORTFOLIO</h4>
				<h2>Our Amazing Works</h2>
				<p className="mg-top">
					Features which will build your trust back on Real Estate
				</p>
			</div>
			<div className="portfolio-content">
				<div className="item">
					<Link to="/our-apartments">
						<img src={image.houseHeader} alt={'House images'} />
						<div className="portfolio-text">
							<h5> Apartments</h5>
							<span className="text">13+ Properties</span>
						</div>
					</Link>
				</div>
				<div className="item">
					<Link to="/our-bungalows">
						<img src={image.housePic1} alt={'House images'} />
						<div className="portfolio-text">
							<h5>Bungalow</h5>
							<span className="text">6+ Properties</span>
						</div>
					</Link>
				</div>
				<div className="item">
					<Link to="/our-detergents">
						<img src={vector.portfolioDetergent} alt={'House images'} />
						<div className="portfolio-text">
							<h5>Detergent</h5>
							<span className="text">10+ Types</span>
						</div>
					</Link>
				</div>
				<div className="item">
					<Link to="/our-cleanings">
						<img src={image.manPic2} alt={'House images'} />
						<div className="portfolio-text">
							<h5>Cleaning Services</h5>
							<span className="text">50+ Properties</span>
						</div>
					</Link>
				</div>
				<div className="item">
					<Link to="/our-hotels">
						<img src={pictures.hotel4} alt={'House images'} />
						<div className="portfolio-text">
							<h5>Hotels</h5>
							<span className="text">13+ Properties</span>
						</div>
					</Link>
				</div>
				<div className="item">
					<Link to="/our-stores">
						<img src={image.manPic7} alt={'House images'} />
						<div className="portfolio-text">
							<h5>Stores</h5>
							<span className="text">5+ Properties</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
