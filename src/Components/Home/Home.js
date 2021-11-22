import React from 'react';
import Banner from '../Banner/Banner';
import SecondBanner from '../Banner/SecondBanner/SecondBanner';
import GymPlan from '../GymPlan/GymPlan';
import JoinUs from '../JoinUs/JoinUs';

const Home = () => {
	return (
		<div>
			<Banner />
			<SecondBanner />
			<GymPlan />
			<JoinUs />
		</div>
	);
};

export default Home;
