import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
	const {
		googleSignIn,
		handleEmailSignIn,
		emailHandle,
		passwordHandle,
		error,
		setIsLoading,
	} = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_url = location.state?.from || '/home';
	const handleGoogleSignIn = (e) => {
		e.preventDefault();
		googleSignIn()
			.then((res) => history.push(redirect_url))
			.finally(() => setIsLoading(false));
	};
	const handlePath = (event) => {
		// event.preventDefault();
		handleEmailSignIn()
			.then(() => history.push(redirect_url))
			.finally(() => setIsLoading(false));
		// console.log('ok');
	};

	const element = <FontAwesomeIcon icon={faSignInAlt} />;

	return (
		<div className="mt-5 pt-5">
			<div className="text-center">
				<h1 className="text-white">Login here</h1>
			</div>
			<div className="w-50 mx-auto mt-2 pt-2 text-center">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label text-white">
						Email address
					</label>
					<input
						onBlur={emailHandle}
						type="email"
						className="form-control w-50 mx-auto"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text text-white">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label
						htmlFor="exampleInputPassword1"
						className="form-label text-white"
					>
						Password
					</label>
					<input
						onBlur={passwordHandle}
						type="password"
						className="form-control w-50 mx-auto"
						id="exampleInputPassword1"
					/>
				</div>
				<button
					onClick={handlePath}
					type="submit"
					className="btn btn-outline-danger text-white"
				>
					Login
				</button>
				<br />

				<br />
				<button
					onClick={handleGoogleSignIn}
					className="btn btn-success text-white"
				>
					{element} Sign in by Google
				</button>
			</div>
			<div className="text-white my-3 py-3 text-center">
				<Link className="h2 text-danger" to="/register">
					Not a Member yet Sign Up Here!
				</Link>
			</div>
		</div>
	);
};

export default Login;
