import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import GymPlan from './Components/GymPlan/GymPlan';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import GymPlanInfo from './Components/GymPlan/GymPlanCard/GymPlanInfo/GymPlanInfo';
import Register from './Components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';
import JoinUs from './Components/JoinUs/JoinUs';
import Benefits from './Components/Benefits/Benefits';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/home">
						<Home />
					</Route>
					<Route exact path="/gymplan">
						<GymPlan />
					</Route>
					<PrivateRoute exact path="/info/:id">
						<GymPlanInfo />
					</PrivateRoute>
					<PrivateRoute exact path="/join">
						<JoinUs />
					</PrivateRoute>
					<PrivateRoute exact path="/benefits">
						<Benefits />
					</PrivateRoute>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</AuthProvider>
	);
}

export default App;
