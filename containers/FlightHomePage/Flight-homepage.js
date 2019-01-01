import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';




class FlightHomepge extends Component {

 componentDidMount(){
    document.title = "Flights"
  }

render () {


    

 return (

 	        <div>
		        {/*====== LOADER =====*/}
		       
		        {/*======== SEARCH-OVERLAY =========*/}       
		        <Search/>
		        {/* end overlay */}
		        {/*============= TOP-BAR ===========*/}
		        <TopBar/>
		        {/* end top-bar */}
		        <Header/>
		        {/* end navbar */}
		        {/* end sidenav-content */}
		        {/*========================= FLEX SLIDER =====================*/}
		        <section className="flexslider-container" id="flexslider-container-2">
		          <div className="flexslider slider" id="slider-2">
		            <ul className="slides">
		              <li className="item-1 back-size" style={{background: 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(../../Dist/images/flight-slider-1.jpg) 50% 15%', backgroundSize: 'cover', height: '100%'}}>
		                <div className="meta">         
		                  <div className="container">
		                    <h2>Best Flight Offers</h2>
		                    <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
		                  </div>{/* end container */}  
		                </div>{/* end meta */}
		              </li>{/* end item-1 */}
		              <li className="item-2 back-size" style={{background: 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(../../Dist/images/flight-slider-1.jpg) 50% 15%', backgroundSize: 'cover', height: '100%'}}>
		                <div className=" meta">         
		                  <div className="container">
		                    <h2>Best Flight Offers</h2>
		                    <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
		                  </div>{/* end container */}  
		                </div>{/* end meta */}
		              </li>{/* end item-2 */}
		            </ul>
		          </div>{/* end slider */}
		          <div className="search-tabs" id="search-tabs-2">
		            <div className="container">
		              <div className="row">
		                <div className="col-sm-12">
		                  <ul className="nav nav-tabs">
		                    <li className="active"><a href="#flights" data-toggle="tab"><span><i className="fa fa-plane" /></span><span className="st-text">Flights</span></a></li>
		                    <li><a href="#hotels" data-toggle="tab"><span><i className="fa fa-building" /></span><span className="st-text">Hotels</span></a></li>
		                    <li><a href="#tours" data-toggle="tab"><span><i className="fa fa-suitcase" /></span><span className="st-text">Tours</span></a></li>
		                    <li><a href="#cruise" data-toggle="tab"><span><i className="fa fa-ship" /></span><span className="st-text">Cruise</span></a></li>
		                    <li><a href="#cars" data-toggle="tab"><span><i className="fa fa-car" /></span><span className="st-text">Cars</span></a></li>
		                  </ul>
		                  <div className="tab-content">
		                    <div id="flights" className="tab-pane in active">
		                      <form>
		                        <div className="row">
		                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
		                            <div className="row">
		                              <div className="col-xs-12 col-sm-6 col-md-6">
		                                <div className="form-group left-icon">
		                                  <input type="text" className="form-control" placeholder="From" />
		                                  <i className="fa fa-map-marker" />
		                                </div>
		                              </div>{/* end columns */}
		                              <div className="col-xs-12 col-sm-6 col-md-6">
		                                <div className="form-group left-icon">
		                                  <input type="text" className="form-control" placeholder="To" />
		                                  <i className="fa fa-map-marker" />
		                                </div>
		                              </div>{/* end columns */}
		                            </div>{/* end row */}								
		                          </div>{/* end columns */}
		                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
		                            <div className="row">
		                              <div className="col-xs-6 col-sm-6 col-md-6">
		                                <div className="form-group left-icon">
		                                  <input type="text" className="form-control dpd1" placeholder="Check In" />
		                                  <i className="fa fa-calendar" />
		                                </div>
		                              </div>{/* end columns */}
		                              <div className="col-xs-6 col-sm-6 col-md-6">
		                                <div className="form-group left-icon">
		                                  <input type="text" className="form-control dpd2" placeholder="Check Out" />
		                                  <i className="fa fa-calendar" />
		                                </div>
		                              </div>{/* end columns */}
		                            </div>{/* end row */}								
		                          </div>{/* end columns */}
		                          <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
		                            <div className="form-group right-icon">
		                              <select className="form-control">
		                                <option defaultValue>Adults</option>
		                                <option>1</option>
		                                <option>2</option>
		                                <option>3</option>
		                              </select>
		                              <i className="fa fa-angle-down" />
		                            </div>
		                          </div>{/* end columns */}
		                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
		                            <button className="btn btn-orange">Search</button>
		                          </div>{/* end columns */}
		                        </div>{/* end row */}
		                      </form>
		                    </div>{/* end flights */}
		                    <div id="hotels" className="tab-pane">
		                      <form>
		                        <div className="row">
		                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5">
		                            <div className="row">
		                              <div className="col-xs-12 col-sm-6">
		                                <div className="form-group left-icon">
		                                  <input type="text" className="form-control dpd1" placeholder="Check In" />
		                                  <i className="fa fa-calendar" />
		                                </div>
		                              </div>{/* end columns */}
		                              <div className="col-xs-12 col-sm-6">
		                                <div className="form-group left-icon">
		                                  <input type="text" className="form-control dpd2" placeholder="Check Out" />
		                                  <i className="fa fa-calendar" />
		                                </div>
		                              </div>{/* end columns */}
		                            </div>{/* end row */}								
		                          </div>{/* end columns */}
		                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5">
		                            <div className="row">
		                              <div className="col-xs-12 col-sm-12 col-md-4">
		                                <div className="form-group right-icon">
		                                  <select className="form-control">
		                                    <option defaultValue>Rooms</option>
		                                    <option>1</option>
		                                    <option>2</option>
		                                    <option>3</option>
		                                  </select>
		                                  <i className="fa fa-angle-down" />
		                                </div>
		                              </div>{/* end columns */}
		                              <div className="col-xs-6 col-sm-6 col-md-4">
		                                <div className="form-group right-icon">
		                                  <select className="form-control">
		                                    <option defaultValue>Adults</option>
		                                    <option>1</option>
		                                    <option>2</option>
		                                    <option>3</option>
		                                  </select>
		                                  <i className="fa fa-angle-down" />
		                                </div>
		                              </div>{/* end columns */}
		                              <div className="col-xs-6 col-sm-6 col-md-4">
		                                <div className="form-group right-icon">
		                                  <select className="form-control">
		                                    <option defaultValue>Kids</option>
		                                    <option>0</option>
		                                    <option>1</option>
		                                    <option>2</option>
		                                  </select>
		                                  <i className="fa fa-angle-down" />
		                                </div>
		                              </div>{/* end columns */}
		                            </div>{/* end row */}
		                          </div>{/* end columns */}
		                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
		                            <button className="btn btn-orange">Search</button>
		                          </div>{/* end columns */}
		                        </div>{/* end row */}
		                      </form>
		                    </div>{/* end hotels */}
		                    <div id="tours" className="tab-pane">
		                      <form>
		                        <div className="row">
		                          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4">
		                            <div className="form-group left-icon">
		                              <input type="text" className="form-control" placeholder="City,Country" />
		                              <i className="fa fa-map-marker" />
		                            </div>
		                          </div>{/* end columns */}
		                          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
		                            <div className="form-group right-icon">
		                              <select className="form-control">
		                                <option defaultValue>Month</option>
		                                <option>January</option>
		                                <option>February</option>
		                                <option>March</option>
		                                <option>April</option>
		                                <option>May</option>
		                                <option>June</option>
		                                <option>July</option>
		                                <option>August</option>
		                                <option>September</option>
		                                <option>October</option>
		                                <option>November</option>
		                                <option>December</option>
		                              </select>
		                              <i className="fa fa-angle-down" />
		                            </div>
		                          </div>{/* end columns */}
		                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
		                            <div className="row">
		                              <div className="col-xs-12 col-sm-6">
		                                <div className="form-group right-icon">
		                                  <select className="form-control">
		                                    <option defaultValue>Adults</option>
		                                    <option>1</option>
		                                    <option>2</option>
		                                    <option>3</option>
		                                  </select>
		                                  <i className="fa fa-angle-down" />
		                                </div>
		                              </div>{/* end columns */}
		                              <div className="col-xs-12 col-sm-6">
		                                <div className="form-group right-icon">
		                                  <select className="form-control">
		                                    <option defaultValue>Kids</option>
		                                    <option>0</option>
		                                    <option>1</option>
		                                    <option>2</option>
		                                  </select>
		                                  <i className="fa fa-angle-down" />
		                                </div>
		                              </div>{/* end columns */}
		                            </div>{/* end row */}
		                          </div>{/* end columns */}
		                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
		                            <button className="btn btn-orange">Search</button>
		                          </div>{/* end columns */}
		                        </div>{/* end row */}
		                      </form>
		                    </div>{/* end tours */}
		                    <div id="cruise" className="tab-pane">
		                      <form>
		                        <div className="row">
		                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
		                            <div className="row">
		                              <div className="col-xs-12 col-sm-6 col-md-6">
		                                <div className="form-group left-icon">
		                                  <input type="text" className="form-control" placeholder="From" />
		                                  <i className="fa fa-map-marker" />
		                                </div>
		                              </div>{/* end columns */}
		                              <div className="col-xs-12 col-sm-6 col-md-6">
		                                <div className="form-group left-icon">
		                                  <input type="text" className="form-control" placeholder="To" />
		                                  <i className="fa fa-map-marker" />
		                                </div>
		                              </div>{/* end columns */}
		                            </div>{/* end row */}								
		                          </div>{/* end columns */}
		                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
		                            <div className="row">
		                              <div className="col-xs-6 col-sm-6 col-md-6">
		                                <div className="form-group left-icon">
		                                  <input type="text" className="form-control dpd1" placeholder="Check In" />
		                                  <i className="fa fa-calendar" />
		                                </div>
		                              </div>{/* end columns */}
		                              <div className="col-xs-6 col-sm-6 col-md-6">
		                                <div className="form-group left-icon">
		                                  <input type="text" className="form-control dpd2" placeholder="Check Out" />
		                                  <i className="fa fa-calendar" />
		                                </div>
		                              </div>{/* end columns */}
		                            </div>{/* end row */}								
		                          </div>{/* end columns */}
		                          <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
		                            <div className="form-group right-icon">
		                              <select className="form-control">
		                                <option defaultValue>Adults</option>
		                                <option>1</option>
		                                <option>2</option>
		                                <option>3</option>
		                              </select>
		                              <i className="fa fa-angle-down" />
		                            </div>
		                          </div>{/* end columns */}
		                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
		                            <button className="btn btn-orange">Search</button>
		                          </div>{/* end columns */}
		                        </div>{/* end columns */}
		                      </form>
		                    </div>{/* end cruises */}
		                    <div id="cars" className="tab-pane">
		                      <form>					
		                        <div className="row">
		                          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6">
		                            <div className="row">
		                              <div className="col-sm-6 col-md-4">
		                                <div className="form-group left-icon">
		                                  <input type="text" className="form-control" placeholder="Country" />
		                                  <i className="fa fa-globe" />
		                                </div>
		                              </div>{/* end columns */}
		                              <div className="col-sm-6 col-md-4">
		                                <div className="form-group left-icon">
		                                  <input type="text" className="form-control" placeholder="City" />
		                                  <i className="fa fa-map-marker" />
		                                </div>
		                              </div>{/* end columns */}
		                              <div className="col-sm-12 col-md-4">
		                                <div className="form-group left-icon">
		                                  <input type="text" className="form-control" placeholder="Location" />
		                                  <i className="fa fa-street-view" />
		                                </div>
		                              </div>{/* end columns */}
		                            </div>{/* end row */}
		                          </div>{/* end columns */}
		                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
		                            <div className="row">
		                              <div className="col-xs-6 col-sm-6 col-md-6">
		                                <div className="form-group left-icon">
		                                  <input type="text" className="form-control dpd1" placeholder="Check In" />
		                                  <i className="fa fa-calendar" />
		                                </div>
		                              </div>{/* end columns */}
		                              <div className="col-xs-6 col-sm-6 col-md-6">
		                                <div className="form-group left-icon">
		                                  <input type="text" className="form-control dpd2" placeholder="Check Out" />
		                                  <i className="fa fa-calendar" />
		                                </div>
		                              </div>{/* end columns */}
		                            </div>{/* end row */}
		                          </div>{/* end columns */}
		                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
		                            <button className="btn btn-orange">Search</button>
		                          </div>{/* end columns */}
		                        </div>{/* end row */}					
		                      </form>
		                    </div>{/* end cars */}
		                  </div>{/* end tab-content */}
		                </div>{/* end columns */}
		              </div>{/* end row */}
		            </div>{/* end container */}
		          </div>{/* end search-tabs */}
		        </section>{/* end flexslider-container */}
		        {/*================= FLIGHT OFFERS =============*/}
		        <section id="flight-offers" className="section-padding">
		          <div className="container">
		            <div className="row">
		              <div className="col-sm-12">
		                <div className="page-heading">
		                  <h2>Flight Offers</h2>
		                  <hr className="heading-line" />
		                </div>{/* end page-heading */}
		                <div className="row">
		                  <div className="col-sm-6 col-md-4">
		                    <div className="main-block flight-block">
		                      <a href="flight-detail-right-sidebar.html">
		                        <div className="flight-img">
		                          <img src="../../Dist/images/flight-1.jpg" className="img-responsive" alt="flight-img" />
		                        </div>{/* end flight-img */}
		                        <div className="flight-info">
		                          <div className="flight-title">
		                            <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
		                          </div>{/* end flight-title */}
		                          <div className=" flight-timing">
		                            <ul className="list-unstyled">
		                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
		                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
		                            </ul>
		                          </div>{/* end flight-timing */}
		                          <ul className="list-unstyled list-inline offer-price-1">
		                            <li className="price">$568.00<span className="pkg">Avg/Person</span></li>
		                            <li className="rating">
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star lightgrey" /></span>
		                            </li>
		                          </ul>
		                        </div>{/* end flight-info */}
		                      </a>
		                    </div>{/* end flight-block */}
		                  </div>{/* end columns */}
		                  <div className="col-sm-6 col-md-4">
		                    <div className="main-block flight-block">
		                      <a href="flight-detail-right-sidebar.html">
		                        <div className="flight-img">
		                          <img src="../../Dist/images/flight-2.jpg" className="img-responsive" alt="flight-img" />
		                        </div>{/* end flight-img */}
		                        <div className="flight-info">
		                          <div className="flight-title">
		                            <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
		                          </div>{/* end flight-title */}
		                          <div className=" flight-timing">
		                            <ul className="list-unstyled">
		                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
		                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
		                            </ul>
		                          </div>{/* end flight-timing */}
		                          <ul className="list-unstyled list-inline offer-price-1">
		                            <li className="price">$568.00<span className="pkg">Avg/Person</span></li>
		                            <li className="rating">
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star lightgrey" /></span>
		                            </li>
		                          </ul>
		                        </div>{/* end flight-info */}
		                      </a>
		                    </div>{/* end flight-block */}
		                  </div>{/* end columns */}
		                  <div className="col-sm-6 col-md-4">
		                    <div className="main-block flight-block">
		                      <a href="flight-detail-right-sidebar.html">
		                        <div className="flight-img">
		                          <img src="../../Dist/images/flight-3.jpg" className="img-responsive" alt="flight-img" />
		                        </div>{/* end flight-img */}
		                        <div className="flight-info">
		                          <div className="flight-title">
		                            <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
		                          </div>{/* end flight-title */}
		                          <div className=" flight-timing">
		                            <ul className="list-unstyled">
		                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
		                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
		                            </ul>
		                          </div>{/* end flight-timing */}
		                          <ul className="list-unstyled list-inline offer-price-1">
		                            <li className="price">$568.00<span className="pkg">Avg/Person</span></li>
		                            <li className="rating">
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star lightgrey" /></span>
		                            </li>
		                          </ul>
		                        </div>{/* end flight-info */}
		                      </a>
		                    </div>{/* end flight-block */}
		                  </div>{/* end columns */}
		                  <div className="col-sm-6 col-md-4">
		                    <div className="main-block flight-block">
		                      <a href="flight-detail-right-sidebar.html">
		                        <div className="flight-img">
		                          <img src="../../Dist/images/flight-4.jpg" className="img-responsive" alt="flight-img" />
		                        </div>{/* end flight-img */}
		                        <div className="flight-info">
		                          <div className="flight-title">
		                            <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
		                          </div>{/* end flight-title */}
		                          <div className=" flight-timing">
		                            <ul className="list-unstyled">
		                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
		                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
		                            </ul>
		                          </div>{/* end flight-timing */}
		                          <ul className="list-unstyled list-inline offer-price-1">
		                            <li className="price">$568.00<span className="pkg">Avg/Person</span></li>
		                            <li className="rating">
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star lightgrey" /></span>
		                            </li>
		                          </ul>
		                        </div>{/* end flight-info */}
		                      </a>
		                    </div>{/* end flight-block */}
		                  </div>{/* end columns */}
		                  <div className="col-sm-6 col-md-4">
		                    <div className="main-block flight-block">
		                      <a href="flight-detail-right-sidebar.html">
		                        <div className="flight-img">
		                          <img src="../../Dist/images/flight-5.jpg" className="img-responsive" alt="flight-img" />
		                        </div>{/* end flight-img */}
		                        <div className="flight-info">
		                          <div className="flight-title">
		                            <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
		                          </div>{/* end flight-title */}
		                          <div className=" flight-timing">
		                            <ul className="list-unstyled">
		                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
		                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
		                            </ul>
		                          </div>{/* end flight-timing */}
		                          <ul className="list-unstyled list-inline offer-price-1">
		                            <li className="price">$568.00<span className="pkg">Avg/Person</span></li>
		                            <li className="rating">
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star lightgrey" /></span>
		                            </li>
		                          </ul>
		                        </div>{/* end flight-info */}
		                      </a>
		                    </div>{/* end flight-block */}
		                  </div>{/* end columns */}
		                  <div className="col-sm-6 col-md-4">
		                    <div className="main-block flight-block">
		                      <a href="flight-detail-right-sidebar.html">
		                        <div className="flight-img">
		                          <img src="../../Dist/images/flight-6.jpg" className="img-responsive" alt="flight-img" />
		                        </div>{/* end flight-img */}
		                        <div className="flight-info">
		                          <div className="flight-title">
		                            <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
		                          </div>{/* end flight-title */}
		                          <div className=" flight-timing">
		                            <ul className="list-unstyled">
		                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
		                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
		                            </ul>
		                          </div>{/* end flight-timing */}
		                          <ul className="list-unstyled list-inline offer-price-1">
		                            <li className="price">$568.00<span className="pkg">Avg/Person</span></li>
		                            <li className="rating">
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star orange" /></span>
		                              <span><i className="fa fa-star lightgrey" /></span>
		                            </li>
		                          </ul>
		                        </div>{/* end flight-info */}
		                      </a>
		                    </div>{/* end flight-block */}
		                  </div>{/* end columns */}
		                </div>{/* end row */}
		                <div className="view-all text-center">
		                  <a href="flight-grid-right-sidebar.html" className="btn btn-orange">View All</a>
		                </div>{/* end view-all */}
		              </div>{/* end columns */}
		            </div>{/* end row */}
		          </div>{/* end container */}
		        </section>{/* end flight-offers */}
		        {/*============== TOP DESTINATIONS ============*/}
		        <section id="destinations" className="section-padding">
		          <div className="container">
		            <div className="row">
		              <div className="col-sm-12">
		                <div className="page-heading">
		                  <h2>Top Destinations</h2>
		                  <hr className="heading-line" />
		                </div>{/* end page-heading */}
		                <div className="row">
		                  <div className="col-sm-6 col-md-6">
		                    <div className="main-block destination-block">
		                      <div className="row">
		                        <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
		                          <div className="main-img destination-img">
		                            <a href="tour-detail-right-sidebar.html">
		                              <img src="../../Dist/images/destination-1.jpg" className="img-responsive" alt="destination-img" />
		                            </a>
		                          </div>{/* end destination-img */}
		                        </div>{/* end columns */}
		                        <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
		                          <div className="destination-info">
		                            <div className="destination-title">
		                              <a href="tour-detail-right-sidebar.html">Blue Beach</a>
		                              <p className="country">Dubai</p>
		                              <p>Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing.</p>                                      
		                              <span className="destination-price">$899/Person</span>
		                              <a href="tour-detail-right-sidebar.html" className="btn btn-orange">Book Now</a>
		                            </div>{/* end destination-title */}
		                          </div>{/* end destination-info */}
		                        </div>{/* end columns */}
		                      </div>{/* end row */}	
		                    </div>{/* end destination-block */}
		                  </div>{/* end columns */}
		                  <div className="col-sm-6 col-md-6">
		                    <div className="main-block destination-block">
		                      <div className="row">
		                        <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
		                          <div className="main-img destination-img">
		                            <a href="tour-detail-right-sidebar.html">
		                              <img src="../../Dist/images/destination-2.jpg" className="img-responsive" alt="destination-img" />
		                            </a>
		                          </div>{/* end destination-img */}
		                        </div>{/* end columns */}
		                        <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
		                          <div className="destination-info">
		                            <div className="destination-title">
		                              <a href="tour-detail-right-sidebar.html">Sydney Tour</a>
		                              <p className="country">Australia</p>
		                              <p>Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing.</p>                                      
		                              <span className="destination-price">$899/Person</span>
		                              <a href="tour-detail-right-sidebar.html" className="btn btn-orange">Book Now</a>
		                            </div>{/* end destination-title */}
		                          </div>{/* end destination-info */}
		                        </div>{/* end columns */}
		                      </div>{/* end row */}	
		                    </div>{/* end destination-block */}
		                  </div>{/* end columns */}
		                  <div className="col-sm-6 col-md-6">
		                    <div className="main-block destination-block">
		                      <div className="row">
		                        <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
		                          <div className="main-img destination-img">
		                            <a href="tour-detail-right-sidebar.html">
		                              <img src="../../Dist/images/destination-3.jpg" className="img-responsive" alt="destination-img" />
		                            </a>
		                          </div>{/* end destination-img */}
		                        </div>{/* end columns */}
		                        <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
		                          <div className="destination-info">
		                            <div className="destination-title">
		                              <a href="tour-detail-right-sidebar.html">Wild Forest</a>
		                              <p className="country">Africa</p>
		                              <p>Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing.</p>                                      
		                              <span className="destination-price">$899/Person</span>
		                              <a href="tour-detail-right-sidebar.html" className="btn btn-orange">Book Now</a>
		                            </div>{/* end destination-title */}
		                          </div>{/* end destination-info */}
		                        </div>{/* end columns */}
		                      </div>{/* end row */}	
		                    </div>{/* end destination-block */}
		                  </div>{/* end columns */}
		                  <div className="col-sm-6 col-md-6">
		                    <div className="main-block destination-block">
		                      <div className="row">
		                        <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
		                          <div className="main-img destination-img">
		                            <a href="tour-detail-right-sidebar.html">
		                              <img src="../../Dist/images/destination-4.jpg" className="img-responsive" alt="destination-img" />
		                            </a>
		                          </div>{/* end destination-img */}
		                        </div>{/* end columns */}
		                        <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
		                          <div className="destination-info">
		                            <div className="destination-title">
		                              <a href="tour-detail-right-sidebar.html">Beautiful Paris</a>
		                              <p className="country">France</p>
		                              <p>Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing.</p>                                      
		                              <span className="destination-price">$899/Person</span>
		                              <a href="tour-detail-right-sidebar.html" className="btn btn-orange">Book Now</a>
		                            </div>{/* end destination-title */}
		                          </div>{/* end destination-info */}
		                        </div>{/* end columns */}
		                      </div>{/* end row */}	
		                    </div>{/* end destination-block */}
		                  </div>{/* end columns */}
		                </div>{/* end row */}
		                <div className="view-all text-center">
		                  <a href="tour-listing-right-sidebar.html" className="btn btn-g-border">View All</a>
		                </div>{/* end view-all */}
		              </div>{/* end columns */}
		            </div>{/* end row */}
		          </div>{/* end container */}
		        </section>{/* end destinations */}
		        {/*========================= BEST FEATURES =======================*/}
		        <section id="best-features" className="banner-padding lightgrey-features">
		          <div className="container">
		            <div className="row">
		              <div className="col-sm-6 col-md-3">
		                <div className="b-feature-block">
		                  <span><i className="fa fa-dollar" /></span>
		                  <h3>Best Price Guarantee</h3>
		                  <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
		                </div>{/* end b-feature-block */}
		              </div>{/* end columns */}
		              <div className="col-sm-6 col-md-3">
		                <div className="b-feature-block">
		                  <span><i className="fa fa-lock" /></span>
		                  <h3>Safe and Secure</h3>
		                  <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
		                </div>{/* end b-feature-block */}
		              </div>{/* end columns */}
		              <div className="col-sm-6 col-md-3">
		                <div className="b-feature-block">
		                  <span><i className="fa fa-thumbs-up" /></span>
		                  <h3>Best Travel Agents</h3>
		                  <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
		                </div>{/* end b-feature-block */}
		              </div>{/* end columns */}
		              <div className="col-sm-6 col-md-3">
		                <div className="b-feature-block">
		                  <span><i className="fa fa-bars" /></span>
		                  <h3>Travel Guidelines</h3>
		                  <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
		                </div>{/* end b-feature-block */}
		              </div>{/* end columns */}
		            </div>{/* end row */}
		          </div>{/* end container */}
		        </section>{/* end best-features */}
		        {/*=============== TESTIMONIALS ===============*/}
		         <Testimonials/>
		       {/* end testimonials */} 
		        {/*============== HIGHLIGHTS =============*/}
		        <section id="highlights" className="highlights-2"> 
		          <div className="container">
		            <div className="row">
		              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		                <div className="row">
		                  <div id="boxes">
		                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">  
		                      <div className="highlight-box">
		                        <div className="h-icon">
		                          <span><i className="fa fa-plane" /></span>
		                        </div>{/* end h-icon */}
		                        <div className="h-text">
		                          <span className="numbers">2496</span>
		                          <p>Outstanding Tours</p>
		                        </div>{/* end h-text */}                           
		                      </div>{/* end highlight-box */}                       
		                    </div>{/* end columns */}
		                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">  
		                      <div className="highlight-box">
		                        <div className="h-icon">
		                          <span><i className="fa fa-ship" /></span>
		                        </div>{/* end h-icon */}
		                        <div className="h-text cruise">
		                          <span className="numbers">1906</span>
		                          <p>Worldwide Cruise</p> 
		                        </div>{/* end h-text */}                           
		                      </div>{/* end highlight-box */}                       
		                    </div>{/* end columns */}
		                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">  
		                      <div className="highlight-box">
		                        <div className="h-icon">
		                          <span><i className="fa fa-taxi" /></span>
		                        </div>{/* end h-icon */}
		                        <div className="h-text taxi">
		                          <span className="numbers">2033</span>
		                          <p>Luxury Car Booking</p>   
		                        </div>{/* end h-text */}                           
		                      </div>{/* end highlight-box */}                       
		                    </div>{/* end columns */}
		                  </div>{/* end boxes */}
		                </div>{/* end row */}
		              </div>{/* end columns */}
		            </div>{/* end row */}
		          </div>{/* end container */}
		        </section>{/* end highlights */}
		        {/*============ NEWSLETTER-2 =============*/}
		        <section id="newsletter-2" className="newsletter"> 
		          <div className="container">
		            <div className="row">
		              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
		                <h2>Subscribe Our Newsletter</h2>	
		              </div>
		              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
		                <form>
		                  <div className="form-group">
		                    <div className="input-group">
		                      <input type="email" className="form-control input-lg" placeholder="Enter your email address" required />
		                      <span className="input-group-btn"><button className="btn btn-lg"><i className="fa fa-envelope" /></button></span>
		                    </div>
		                  </div>
		                </form>
		              </div>{/* end columns */}
		            </div>{/* end row */}
		          </div>{/* end container */}
		        </section>{/* end newsletter-2 */}
		        {/*======================= FOOTER =======================*/}
		        <section id="footer" className="ftr-heading-w ftr-heading-mgn-2">
		          <div id="footer-top" className="banner-padding ftr-top-grey">
		            <div className="container">
		              <div className="row">
		                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 footer-widget ftr-about ftr-our-company">
		                  <h3 className="footer-heading">OUR COMPANY</h3>
		                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>
		                  <ul className="social-links list-inline list-unstyled">
		                    <li><a href="#"><span><i className="fa fa-facebook" /></span></a></li>
		                    <li><a href="#"><span><i className="fa fa-twitter" /></span></a></li>
		                    <li><a href="#"><span><i className="fa fa-google-plus" /></span></a></li>
		                    <li><a href="#"><span><i className="fa fa-pinterest-p" /></span></a></li>
		                    <li><a href="#"><span><i className="fa fa-instagram" /></span></a></li>
		                    <li><a href="#"><span><i className="fa fa-linkedin" /></span></a></li>
		                    <li><a href="#"><span><i className="fa fa-youtube-play" /></span></a></li>
		                  </ul>
		                </div>{/* end columns */}
		                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 footer-widget ftr-in-touch">
		                  <h3 className="footer-heading">Get in Touch</h3>
		                  <form>
		                    <div className="row">
		                      <div className="col-sm-6 col-md-5 col-lg-5 slide-right-vis">
		                        <div className="form-group">
		                          <input type="text" className="form-control" placeholder="Name" required />
		                        </div>
		                        <div className="form-group">
		                          <input type="text" className="form-control" placeholder="Email" required />
		                        </div>
		                        <div className="form-group">
		                          <input type="text" className="form-control" placeholder="Subject" required />
		                        </div>
		                      </div>{/* end columns */}
		                      <div className="col-sm-6 col-md-7 col-lg-7 slide-left-vis">
		                        <div className="form-group">
		                          <textarea className="form-control" placeholder="Your Message" defaultValue={""} />
		                        </div>
		                      </div>{/* end columns */}
		                      <div className="col-sm-12 text-center">
		                        <button className="btn btn-orange">Send</button>
		                      </div>{/* end butn */}
		                    </div>{/* end row */}
		                  </form>
		                </div>{/* end columns */}
		              </div>{/* end row */}
		            </div>{/* end container */}
		          </div>
		          {/* end footer-top */}
		           <FooterBottom/>
                  {/* end footer-bottom */}
        </section>{/* end footer */}
      </div>

 	)
  }


}

export default connect(state => state)(FlightHomepge);