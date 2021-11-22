import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img1 from '../../../images/1.svg';
import img2 from '../../../images/2.svg';
import img3 from '../../../images/3.svg';
import img4 from '../../../images/4.svg';

const SecondBanner = () => {
	return (
		<Container fluid className="pb-3 mb-3">
			<div className="text-center display-5 text-white mb-4">Features</div>
			<Row>
				<div className="d-flex flex-row flex-wrap justify-content-evenly align-items-evenly">
					<Col sm={6} lg={3}>
						<div className="d-flex flex-column justify-content-center align-items-center">
							<Image src={img1} fluid />
							<h4 className="text-white mt-5">Weightlifting</h4>
						</div>
					</Col>
					<Col sm={6} lg={3}>
						<div className="d-flex flex-column justify-content-center align-items-center">
							<Image src={img2} fluid />
							<h4 className="text-white mt-5">Specific Muscle</h4>
						</div>
					</Col>
					<Col sm={6} lg={3}>
						<div className="d-flex flex-column justify-content-center align-items-center">
							<Image src={img3} fluid />
							<h4 className="text-white mt-5">Flex Your Muscle</h4>
						</div>
					</Col>
					<Col sm={6} lg={3}>
						<div className="d-flex flex-column justify-content-center align-items-center">
							<Image src={img4} fluid />
							<h4 className="text-white mt-5">Cardio Exercise</h4>
						</div>
					</Col>
				</div>
			</Row>
		</Container>
	);
};

export default SecondBanner;
