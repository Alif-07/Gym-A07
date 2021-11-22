import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';
import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
	const { user, logOut } = useAuth();
	return (
		<Navbar
			bg="danger"
			sticky="top"
			collapseOnSelect
			expand="lg"
			id="header-nav"
			className="text-white opacity-50"
		>
			<Container>
				<Navbar.Brand href="#home" className="text-white">
					<Link className="text-white text-decoration-none" to="/home">
						Gym_A07
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end align-item-around">
					{/* <Nav className="ms-auto text-white"> */}
					<Nav.Link className="text-white" as={HashLink} to="/home#home">
						Home
					</Nav.Link>
					<Nav.Link className="text-white" as={HashLink} to="/home#gymplans">
						Services
					</Nav.Link>
					<Nav.Link className="text-white" as={HashLink} to="/home#join">
						Join Us
					</Nav.Link>
					<Nav.Link className="text-white" as={Link} to="/benefits">
						Benefits
					</Nav.Link>
					{!user.email ? (
						<Nav.Link className="text-white" as={Link} to="/login">
							Login
						</Nav.Link>
					) : (
						<div className="d-flex flex-row">
							<Navbar.Text className="mx-5 text-dark">
								{user?.displayName || user?.email}
							</Navbar.Text>
							<Nav.Link onClick={logOut} className="text-white">
								Logout
							</Nav.Link>
						</div>
					)}
					{/* </Nav> */}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
