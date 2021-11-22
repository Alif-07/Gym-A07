import { initializeApp } from 'firebase/app';
import firebaseConfig from './Firebase.config';
const initAuthFirebase = () => {
	initializeApp(firebaseConfig);
};
export default initAuthFirebase;
