import React from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './JoinUs.css';
import logo from '../../images/offer.png';

const JoinUs = () => {
	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm();
	const { user } = useAuth();
	const onSubmit = (data) => console.log(data);
	return (
		<Container id="join">
			<div className="display-4 text-white text-center">Join us</div>
			<Row className="d-flex flex-row justify-content-center align-items-center">
				<Col md={6}>
					<Image src={logo} fluid className="rounded" />
				</Col>
				<Col md={6}>
					<div className="d-flex flex-row justify-content-center align-items-center">
						<form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
							<input
								placeholder="Name"
								defaultValue={user?.displayName}
								{...register('name')}
							/>

							<input
								placeholder="Email"
								defaultValue={user?.email}
								{...register('email', { required: true })}
							/>
							{errors.email && (
								<span className="error">This field is required</span>
							)}
							<input
								placeholder="Address"
								defaultValue=""
								{...register('address')}
							/>
							<input
								placeholder="Gender"
								defaultValue=""
								{...register('gender')}
							/>

							<input className="btn btn-outline-danger" type="submit" />
						</form>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default JoinUs;
