import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home/Home';
import Flighthomepage from './containers/FlightHomePage/Flight-homepage';
import HotelHomePage from './containers/HotelHomePage/HotelHomePage';
import aboutus from './containers/aboutus/aboutus';
import contact from './containers/contact/contact';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Cruise from './containers/Cruise/Cruise';
import car from './containers/car/car';

export default () => {
	return (
		<BrowserRouter>
			<Switch>
			  <Route exact path='/' component={Home}/>
			  <Route path='/flights' component={Flighthomepage}/>
			  <Route path='/hotels' component={HotelHomePage}/>
			  <Route path='/aboutus' component={aboutus}/>
			  <Route path='/contact' component={contact}/>
			  <Route path='/login' component={Login}/>
			  <Route path='/register' component={Register}/>
			  <Route path='/Cruise' component={Cruise}/>
			  <Route path='/car' component={car}/>
			</Switch>
		</BrowserRouter>
	)
}
