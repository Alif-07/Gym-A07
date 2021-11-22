import React from 'react';
import { Container, Image } from 'react-bootstrap';
import img from '../../images/banner.png';

const Banner = () => {
	return (
		<Container
			fluid
			id="main"
			className="d-flex justify-content-center align-item-center mb-5 shadow"
		>
			<div className="header-heading d-flex flex-column justify-content-center align-item-center text-white pt-4">
				<h1>Step up your</h1>
				<h1>
					<span className="text-danger">Fitness</span> with us
				</h1>
				<p className="details text-muted">
					Build your body and fitness with professional touch
				</p>
				<button id="join-btn" className="btn btn-outline-danger w-25 mx-auto">
					Join Us
				</button>
			</div>
		</Container>
	);
};

export default Banner;
