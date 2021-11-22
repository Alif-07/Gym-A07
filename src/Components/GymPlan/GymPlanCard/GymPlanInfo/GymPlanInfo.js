import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const GymPlanInfo = () => {
	const { id } = useParams();
	const [gymInfo, setGymInfo] = useState([]);
	useEffect(() => {
		fetch(`/plans.json`)
			.then((res) => res.json())
			.then((data) => setGymInfo(data));
	}, []);
	const myData = gymInfo.find((info) => info.id == id);

	return (
		<Container className="my-5 py-5 text-white text-start d-flex justify-content-center align-items-center">
			<Row className="d-flex justify-content-center align-items-center mt-3 pt-3">
				<Col md={6}>
					<div className="display-3">{myData?.name}</div>
					<p className="lead">Purpose is to {myData?.purpose}</p>
					<p className="lead">This is divided by {myData?.course} courses</p>
					<h4>
						Subscription Fee: <b>{myData?.fee}</b> <br /> or By joining our Club
						you can get discount on <span className="text-danger">Yearly</span>{' '}
						fee.
					</h4>
				</Col>
				<Col md={6}>
					<Image
						fluid
						src={myData?.img}
						rounded
						className="p-2 shadow border-3"
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default GymPlanInfo;
