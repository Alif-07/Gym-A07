import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import GymPlanCard from './GymPlanCard/GymPlanCard';
import './GymPlan.css';

const GymPlan = () => {
	const [gymplans, setGymPlans] = useState([]);
	useEffect(() => {
		fetch(`./plans.json`)
			.then((res) => res.json())
			.then((data) => setGymPlans(data));
	}, []);
	return (
		<div id="gymplans" className="py-3">
			<Container>
				<div className="text-center display-5 text-white mb-4">Services</div>
				<Row>
					{gymplans.map((plan) => (
						<GymPlanCard plan={plan} key={plan.id} />
					))}
				</Row>
			</Container>
		</div>
	);
};

export default GymPlan;
