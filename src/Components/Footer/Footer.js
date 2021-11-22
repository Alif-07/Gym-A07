import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './Footer.css';
import logo from '../../images/logo.png';

const Footer = () => {
	return (
		<Container fluid className="bg-dark">
			<div className="footer-container">
				<div className="text-center d-flex flex-row justify-content-center align-items-center">
					<h4 className="me-3">&copy; </h4>
					<Image fluid src={logo} />
				</div>
				<div className="container">
					<div className="row d-flex flex-column justify-content-center align-items-center">
						<div className="col-md-6">
							<ul className="d-flex flex-row justify-content-center align-items-center">
								<li className="footer-menu mx-4">
									<i class="fab fa-facebook-square fa-3x"></i>{' '}
								</li>
								<li className="footer-menu mx-4">
									<i class="fab fa-twitter-square fa-3x"></i>
								</li>

								<li className="footer-menu mx-4">
									<i class="fab fa-instagram-square fa-3x"></i>
								</li>
								<li className="footer-menu mx-4">
									<i class="fab fa-youtube-square fa-3x"></i>
								</li>
							</ul>
						</div>
						<div className="col-md-6">
							<div className="footer-menu-container">
								<ul className="d-flex flex-row justify-content-center align-items-center text-white">
									<li className="footer-menu mx-3">Home</li>
									<li className="footer-menu mx-3">Services</li>
									<li className="footer-menu mx-3">Contact us</li>
									<li className="footer-menu mx-3"> About us</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Footer;
