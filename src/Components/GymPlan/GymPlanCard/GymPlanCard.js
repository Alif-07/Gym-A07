import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './GynPlanCard.css';

const GymPlanCard = ({ plan }) => {
	const { id, name, img, fee } = plan;
	return (
		<Col md={4} id="card" className="py-4 pt-2 text-white">
			<div className="d-flex flex-column justify-content-center align-items-center">
				<Image src={img} className="w-50 rounded" fluid />
				<div className="pt-3">
					<h5>{name}</h5>
					<p>
						Price: <b>{fee}</b>
					</p>
				</div>
				<Link to={`info/${id}`}>
					<button className="btn btn-outline-danger text-white">
						Learn More
					</button>
				</Link>
			</div>
		</Col>
	);
};

export default GymPlanCard;
