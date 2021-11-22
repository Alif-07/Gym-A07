import React from 'react';
import { Container, Image } from 'react-bootstrap';
import logo from '../../images/404.jpg';

const NotFound = () => {
	return (
		<div>
			<Container className="mt-5 pt-5">
				<Image src={logo} className="img-fluid w-75" />
			</Container>
		</div>
	);
};

export default NotFound;
