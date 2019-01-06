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
import car from './containers/Car/car';


/*Admin routes*/

import Dashboard from './Admin/Dashboard/Dashboard';
import ManageHotel from './Admin/ManageHotel/ManageHotel';
import ManageCar from './Admin/ManageCar/ManageCar';
import ManagePost from './Admin/ManagePost/ManagePost';

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

			  {/*admin Routes*/}
              <Route  path='/admin/dashboard' component={Dashboard}/>
              <Route  path='/admin/managehotel' component={ManageHotel}/>
              <Route  path='/admin/ManageCar' component={ManageCar}/>
              <Route  path='/admin/managepost' component={ManagePost}/>

			</Switch>
		</BrowserRouter>
	)
}
