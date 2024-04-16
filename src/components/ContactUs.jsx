import React, { useState } from 'react';
import { contact } from '../assets';

const data = {
	first_name: '',
	last_name: '',
	email: '',
	date: '',
	contact: '',
	address: '',
	message: '',
};
function ContactUs() {
	const [submittedState, setSubmittedState] = useState('empty');
	const [formData, setFormData] = useState(data);
	const [isLoading, setIsLoading] = useState(data);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setIsLoading(true);
			const res = await fetch('https://calendar-api-cedf.onrender.com/meet', {
				body: formData,
				method: 'post',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			console.log(res);
			console.log(formData);
		} catch (err) {
			setSubmittedState(err?.message || 'Something went wrong');
			setIsLoading(false);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className="contact mg-top-exlg" id="contact-us">
			<div className="title">
				<h4>CONTACT US</h4>
				<h2>We Want To Hear From You</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
					magnam ad at placeat laborum incidunt!
				</p>
			</div>
			<div className="contact-content mg-top-lg">
				<div className="contact-details">
					<div className="item">
						<img src={contact.location} alt="" />
						<div className="text">
							<h3>Address</h3>
							<span>20, somewhere in the world!</span>
						</div>
					</div>
					<div className="item">
						<img src={contact.phone} alt="" />
						<div className="text">
							<h3>Phone</h3>
							<span>20, somewhere in the world!</span>
						</div>
					</div>
					<div className="item">
						<img src={contact.email} alt="" />
						<div className="text">
							<h3>Email</h3>
							<span>20, somewhere in the world!</span>
						</div>
					</div>
				</div>
				<div className="form-container">
					<h2>Book Now</h2>
					<span>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
						ex.
					</span>
					<form action="" className="mg-top-lg">
						<div className="form-double">
							<div className="form-item">
								<label htmlFor="firstname">First Name</label>
								<input
									type="text"
									name="firstname"
									value={formData.first_name}
									onChange={(e) =>
										setFormData((prev) => {
											return { ...prev, first_name: e.target.value };
										})
									}
								/>
							</div>
							<div className="form-item">
								<label htmlFor="lastname">Last Name</label>
								<input
									type="text"
									name="lastname"
									value={formData.last_name}
									onChange={(e) =>
										setFormData((prev) => {
											return { ...prev, last_name: e.target.value };
										})
									}
								/>
							</div>
						</div>
						<div className="form-single">
							<div className="form-item">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={(e) =>
										setFormData((prev) => {
											return { ...prev, email: e.target.value };
										})
									}
								/>
							</div>
						</div>
						<div className="form-double">
							<div className="form-item">
								<label htmlFor="tel">Phone</label>
								<input
									type="tel"
									name="tel"
									value={formData.contact}
									onChange={(e) =>
										setFormData((prev) => {
											return { ...prev, contact: e.target.value };
										})
									}
								/>
							</div>
							<div className="form-item">
								<label htmlFor="address">Address</label>
								<input
									type="text"
									name="address"
									value={formData.address}
									onChange={(e) =>
										setFormData((prev) => {
											return { ...prev, address: e.target.value };
										})
									}
								/>
							</div>
						</div>
						<div className="form-single">
							<div className="form-item">
								<label htmlFor="datetime">Date And Time</label>
								<input
									type="datetime-local"
									name="datetime"
									value={formData.date}
									onChange={(e) =>
										setFormData((prev) => {
											return { ...prev, date: e.target.value };
										})
									}
								/>
							</div>
						</div>
						<div className="form-single">
							<div className="form-item">
								<label htmlFor="message">Message</label>
								<textarea
									rows={5}
									name="message"
									value={formData.message}
									onChange={(e) =>
										setFormData((prev) => {
											return { ...prev, message: e.target.value };
										})
									}
								></textarea>
							</div>
						</div>
						<button
							type="submit"
							className="btn btn-primary"
							onClick={handleSubmit}
						>
							Submit
						</button>

						{submittedState !== 'empty' && (
							<span className="btn btn-primary full-width">
								{submittedState}
							</span>
						)}
						{isLoading === true && (
							<span className="btn btn-primary full-width">Loading...</span>
						)}
					</form>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
