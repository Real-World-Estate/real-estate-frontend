import React from 'react';
import Footer from '../components/Footer';
import { image } from '../assets';
import ContactUs from '../components/ContactUs';
import { useParams } from 'react-router-dom';
import { data } from '../assets/DATA/store';

const picsArr = [
	image.houseHeader,
	image.housePic1,
	image.housePic2,
	image.housePic3,
	image.housePic4,
	image.housePic5,
	image.housePic6,
];
function Properties() {
	const params = useParams();
	console.log(params);

	const property = data.filter((dt) => dt.id === params.propertyID)[0];
	const statsProp = Object.entries(property.statistics);
	return (
		<div className="property">
			<h1>our {property?.category}</h1>
			<div className="property-pics">
				{property?.photos?.map((val, index) => (
					<img src={val} alt="" key={index} />
				))}
			</div>
			<div className="property-title">
				<div className="title">
					<h2 className="primary">
						Bustani Villas – 5 Bedroom Villas In Zanzibar
					</h2>
					<h2 className="secondary">Avg: $40, 000</h2>
				</div>
			</div>
			<div className="property-desc">
				<h3 className="secondary">Description</h3>
				<div className="desc">
					{Array.from({ length: 3 }).map((_, index) => (
						<p key={index}>
							{
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod dolor alias, earum totam suscipit possimus nesciunt. Deleniti fuga natus aut, quae id, numquam quibusdam tempora ullam laboriosam dolore nihil eveniet dolores deserunt veniam? Distinctio sint iure ex sed minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod dolor alias, earum totam suscipit possimus nesciunt. Deleniti fuga natus aut, quae id, numquam quibusdam tempora ullam laboriosam dolore nihil eveniet dolores deserunt veniam? Distinctio sint iure ex sed minima.'
							}
						</p>
					))}
				</div>
			</div>

			<div className="property-overview">
				<h3 className="primary">Overview</h3>
				<div className="overview">
					{statsProp.map((val, index) => (
						<div className="item">
							<span>
								<b>{val[1]}</b>
							</span>
							<span style={{ textTransform: 'capitalize' }}>{val[0]}</span>
						</div>
					))}
				</div>
			</div>

			<ContactUs />

			<Footer />
		</div>
	);
}

export default Properties;
