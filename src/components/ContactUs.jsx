import React from 'react';
import { contact } from '../assets';

function ContactUs() {
	return (
		<div className="contact mg-top-exlg" id='contact-us'>
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
					<form action="" className='mg-top-lg'>
						<div className="form-double">
							<div className="form-item">
								<label htmlFor="firstname">First Name</label>
								<input type="text" name="firstname" />
							</div>
							<div className="form-item">
								<label htmlFor="lastname">Last Name</label>
								<input type="text" name="lastname" />
							</div>
						</div>
						<div className="form-single">
							<div className="form-item">
								<label htmlFor="email">Email</label>
								<input type="email" name="email" />
							</div>
						</div>
						<div className="form-double">
							<div className="form-item">
								<label htmlFor="tel">Phone</label>
								<input type="tel" name="tel" />
							</div>
							<div className="form-item">
								<label htmlFor="address">Address</label>
								<input type="text" name="address" />
							</div>
						</div>
						<div className="form-single">
							<div className="form-item">
								<label htmlFor="datetime">Date And Time</label>
								<input type="datetime-local" name="datetime" />
							</div>
						</div>
						<div className="form-single">
							<div className="form-item">
								<label htmlFor="message">Message</label>
								<textarea rows={5} name="message"></textarea>
							</div>
						</div>
						<button type="submit" className='btn btn-primary'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
