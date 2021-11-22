import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
	const {
		handleRegister,
		emailHandle,
		passwordHandle,
		error,
		nameHandle,
		setIsLoading,
	} = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_url = location.state?.from || '/home';

	const handlePath = () => {
		handleRegister()
			.then(() => history.push(redirect_url))
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<div className="mt-5 pt-5">
			<div className="text-center">
				<h1 className="text-white">Register here</h1>
			</div>
			<div className="w-50 mx-auto mt-2 pt-2 text-center">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label text-white">
						Name
					</label>
					<input
						onBlur={nameHandle}
						type="name"
						className="form-control w-50 mx-auto"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
				</div>
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
				{error}
				<button
					onClick={handlePath}
					type="submit"
					className="btn btn-outline-danger text-white"
				>
					Register
				</button>
			</div>
			<div className="text-white my-3 py-3 text-center">
				<Link className="h2 text-danger" to="/login">
					Want to Login?
				</Link>
			</div>
		</div>
	);
};

export default Register;
