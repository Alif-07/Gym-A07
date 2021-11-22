import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import initAuthFirebase from '../Firebase/Firebase.init';

initAuthFirebase();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const history = useHistory();

	const auth = getAuth();

	const googleProvider = new GoogleAuthProvider();

	const handleEmailSignIn = (e) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const handleRegister = (e) => {
		if (password.length < 6) {
			setError('Must be atleast 6 characters');
		}
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const emailHandle = (e) => {
		setEmail(e.target.value);
	};
	const passwordHandle = (e) => {
		setPassword(e.target.value);
	};
	const nameHandle = (e) => {
		setName(e.target.value);
	};
	const googleSignIn = () => {
		setIsLoading(true);
		return signInWithPopup(auth, googleProvider);
	};
	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then((res) => {
				setUser({});
			})
			.finally(() => setIsLoading(false));
	};
	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribed;
	}, []);
	return {
		googleSignIn,
		logOut,
		user,
		handleRegister,
		emailHandle,
		passwordHandle,
		error,
		handleEmailSignIn,
		nameHandle,
		isLoading,
		setIsLoading,
	};
};

export default useFirebase;
