import React from 'react';
import { Container } from 'react-bootstrap';

const Benefits = () => {
	return (
		<Container className="d-lg-flex flex-column justify-content-center my-5 py-5 text-white">
			<h2>5 Reasons Why You Should Go to the Gym</h2>
			<h5>Reason #1: It’s plain healthy</h5>
			<p className="lead">
				If you’re just starting and feel like you aren’t making progress, give
				yourself a pat on the back for at least making the effort.
			</p>
			<h5>Reason #2: Feel better about yourself</h5>
			<p className="lead">
				You start lifting, you start to look better. When you start feeling
				better about the way you look, you’re going to gain confidence. A lot of
				confidence.
			</p>
			<h5>Reason #3: Great way to relieve stress</h5>
			<p className="lead">
				For me, the gym is my getaway, it’s my place to forget everything that’s
				going on in my life and focus on myself.
			</p>
			<h5>Reason #4: It’s something to do</h5>
			<p className="lead">
				Hitting the gym will not only keep you entertained but also keep you
				from doing things you shouldn’t.
			</p>
			<h5>Reason #5: Live longer</h5>
			<p className="lead">
				It may seem obvious, but I am often shocked at how many people just
				stand by, idle, while their life slips between their fingertips.
			</p>
		</Container>
	);
};

export default Benefits;
