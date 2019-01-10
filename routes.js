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
import TravelGuide from './containers/TravelGuide/TravelGuide';
import UserProfile from './containers/UserProfile/UserProfile';
import PaymentSuccess from './containers/PaymentSuccess/PaymentSuccess';
import Services from './containers/Services/Services';
import Holidays from './containers/Holidays/Holidays';
import Travelinsurance from './containers/Travelinsurance/Travelinsurance';


import HotelDetail from './containers/HotelHomePage/HotelDetail';
import carDetails from './containers/Car/carDetails';
import cruiseDetail from './containers/Cruise/CruiseDetail';


/*Admin routes*/

import Dashboard from './Admin/Dashboard/Dashboard';
import ManageHotel from './Admin/ManageHotel/ManageHotel';
import Addhotel from './Admin/ManageHotel/AddHotel';
import ManageCar from './Admin/ManageCar/ManageCar';
import ManagePost from './Admin/ManagePost/ManagePost';
import AddPost from './Admin/ManagePost/AddPost';
import addCar from './Admin/ManageCar/addCar';


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
			  <Route path='/TravelGuide' component={TravelGuide}/>
			  <Route path='/UserProfile' component={UserProfile}/>
			  <Route path='/PaymentSuccess' component={PaymentSuccess}/>
			  <Route path='/Services' component={Services}/>
			  <Route path='/Holidays' component={Holidays}/>
			  <Route path='/Travelinsurance' component={Travelinsurance}/>
			  <Route path='/HotelDetail' component={HotelDetail}/>
			  <Route path='/carDetails' component={carDetails}/>
			  <Route path='/cruiseDetail' component={cruiseDetail}/>

			  
			  <Route  path='/admin/AddPost' component={AddPost}/>
              <Route  path='/admin/addCar' component={addCar}/>
              <Route  path='/admin/Addhotel' component={Addhotel}/>

			  {/*admin Routes*/}
              <Route  path='/admin/dashboard' component={Dashboard}/>
              <Route  path='/admin/managehotel' component={ManageHotel}/>
              <Route  path='/admin/ManageCar' component={ManageCar}/>
              <Route  path='/admin/managepost' component={ManagePost}/>

			</Switch>
		</BrowserRouter>
	)
}
