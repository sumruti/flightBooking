import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';




class HotelHomepge extends Component {

 componentDidMount(){
    document.title = "Hotels"
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
        {/*========================= FLEX SLIDER =====================*/}
        <section className="flexslider-container" id="flexslider-container-3">
          <div className="header-absolute">
            <Header/>
           {/* end navbar */}
          </div>{/* end header-absolute */}
           {/* end mySidenav */}
          
          <div className="flexslider slider" id="slider-3">
	            <ul className="slides">
	              <li className="item-1 back-size" style={{background: 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(../../Dist/images/hotel-slider-1.jpg) 50% 65%', backgroundSize: 'cover', height: '100%'}}>
	              </li>{/* end item-1 */}
	              <li className="item-2 back-size" style={{background: 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(../../Dist/images/hotel-slider-1.jpg) 50% 65%', backgroundSize: 'cover', height: '100%'}}>
	              </li>{/* end item-2 */}
	            </ul>
          </div>{/* end slider */}
          <div className="search-tabs" id="search-tabs-3">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-pd-r">
                  <ul className="nav nav-tabs">
                    <li><a href="#flights" data-toggle="tab"><span><i className="fa fa-plane" /></span><span className="st-text">Flights</span></a></li>
                    <li className="active"><a href="#hotels" data-toggle="tab"><span><i className="fa fa-building" /></span><span className="st-text">Hotels</span></a></li>
                    <li><a href="#tours" data-toggle="tab"><span><i className="fa fa-suitcase" /></span><span className="st-text">Tours</span></a></li>
                    <li><a href="#cruise" data-toggle="tab"><span><i className="fa fa-ship" /></span><span className="st-text">Cruise</span></a></li>
                    <li><a href="#cars" data-toggle="tab"><span><i className="fa fa-car" /></span><span className="st-text">Cars</span></a></li>
                  </ul>
                  <div className="tab-content">
                    <div id="flights" className="tab-pane">
                      <form>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <label>From</label>
                                  <input type="text" className="form-control" placeholder="City, Country" />
                                  <i className="fa fa-map-marker" />
                                </div>
                              </div>{/* end columns */}
                              <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <label>To</label>
                                  <input type="text" className="form-control" placeholder="City, Country" />
                                  <i className="fa fa-map-marker" />
                                </div>
                              </div>{/* end columns */}
                            </div>{/* end row */}								
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="row">
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <label>Check In</label>
                                  <input type="text" className="form-control dpd1" placeholder="mm/dd/yy" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>{/* end columns */}
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <label>Check Out</label>
                                  <input type="text" className="form-control dpd2" placeholder="mm/dd/yy" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>{/* end columns */}
                            </div>{/* end row */}								
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group right-icon">
                              <label>Adults</label>
                              <select className="form-control">
                                <option selected>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                              </select>
                              <i className="fa fa-angle-down" />
                            </div>
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 search-btn">
                            <button className="btn btn-orange">Search</button>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </form>
                    </div>{/* end flights */}
                    <div id="hotels" className="tab-pane in active">
                      <form>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-6">
                                <div className="form-group left-icon">
                                  <label>Check In</label>
                                  <input type="text" className="form-control dpd1" placeholder="Check In" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>{/* end columns */}
                              <div className="col-xs-12 col-sm-6">
                                <div className="form-group left-icon">
                                  <label>Check Out</label>
                                  <input type="text" className="form-control dpd2" placeholder="Check Out" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>{/* end columns */}
                            </div>{/* end row */}								
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="form-group right-icon">
                                  <label>Rooms</label>
                                  <select className="form-control">
                                    <option selected>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                  </select>
                                  <i className="fa fa-angle-down" />
                                </div>
                              </div>{/* end columns */}
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group right-icon">
                                  <label>Adults</label>
                                  <select className="form-control">
                                    <option selected>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                  </select>
                                  <i className="fa fa-angle-down" />
                                </div>
                              </div>{/* end columns */}
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group right-icon">
                                  <label>Kids</label>
                                  <select className="form-control">
                                    <option selected>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                  </select>
                                  <i className="fa fa-angle-down" />
                                </div>
                              </div>{/* end columns */}
                            </div>{/* end row */}
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 search-btn">
                            <button className="btn btn-orange">Search</button>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </form>
                    </div>{/* end hotels */}
                    <div id="tours" className="tab-pane">
                      <form>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group left-icon">
                              <label>Your Destination</label>
                              <input type="text" className="form-control" placeholder="City, Country" />
                              <i className="fa fa-map-marker" />
                            </div>
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group right-icon">
                              <label>Month</label>
                              <select className="form-control">
                                <option selected>January</option>
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
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group right-icon">
                                  <label>Adults</label>
                                  <select className="form-control">
                                    <option selected>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                  </select>
                                  <i className="fa fa-angle-down" />
                                </div>
                              </div>{/* end columns */}
                              <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group right-icon">
                                  <label>Kids</label>
                                  <select className="form-control">
                                    <option selected>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                  </select>
                                  <i className="fa fa-angle-down" />
                                </div>
                              </div>{/* end columns */}
                            </div>{/* end row */}
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 search-btn">
                            <button className="btn btn-orange">Search</button>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </form>
                    </div>{/* end tours */}
                    <div id="cruise" className="tab-pane">
                      <form>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <label>From</label>
                                  <input type="text" className="form-control" placeholder="City, Country" />
                                  <i className="fa fa-map-marker" />
                                </div>
                              </div>{/* end columns */}
                              <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <label>To</label>
                                  <input type="text" className="form-control" placeholder="City, Country" />
                                  <i className="fa fa-map-marker" />
                                </div>
                              </div>{/* end columns */}
                            </div>{/* end row */}								
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="row">
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <label>Check In</label>
                                  <input type="text" className="form-control dpd1" placeholder="mm/dd/yy" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>{/* end columns */}
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <label>Check Out</label>
                                  <input type="text" className="form-control dpd2" placeholder="mm/dd/yy" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>{/* end columns */}
                            </div>{/* end row */}								
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group right-icon">
                              <label>Adults</label>
                              <select className="form-control">
                                <option selected>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                              </select>
                              <i className="fa fa-angle-down" />
                            </div>
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 search-btn">
                            <button className="btn btn-orange">Search</button>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </form>
                    </div>{/* end cruises */}
                    <div id="cars" className="tab-pane">
                      <form>					
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="row">
                              <div className="col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <label>Country</label>
                                  <input type="text" className="form-control" placeholder="Country" />
                                  <i className="fa fa-globe" />
                                </div>
                              </div>{/* end columns */}
                              <div className="col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <label>City</label>
                                  <input type="text" className="form-control" placeholder="City" />
                                  <i className="fa fa-map-marker" />
                                </div>
                              </div>{/* end columns */}
                              <div className="col-sm-12 col-md-12">
                                <div className="form-group left-icon">
                                  <label>Your Location</label>
                                  <input type="text" className="form-control" placeholder="Location" />
                                  <i className="fa fa-street-view" />
                                </div>
                              </div>{/* end columns */}
                            </div>{/* end row */}
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="row">
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <label>Check In</label>
                                  <input type="text" className="form-control dpd1" placeholder="mm/dd/yy" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>{/* end columns */}
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <label>Check Out</label>
                                  <input type="text" className="form-control dpd2" placeholder="mm/dd/yy" />
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
                <div className="hidden-xs hidden-sm col-md-6 no-pd-l">
                  <div className="welcome-message">
                    <h2>Find Your Perfect Plan</h2>
                    <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper, imeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                    <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
                    <a href="#" className="btn btn-w-border">Explore More</a>
                  </div>
                </div>
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end search-tabs */}
        </section>
        {/* end flexslider-container */}
        {/*======================= BEST FEATURES ======================*/}
        <section id="best-features" className="banner-padding orange-features">
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
        {/*=============== HOTEL OFFERS ===============*/}
        <section id="hotel-offers" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-heading white-heading">
                  <h2>Hotels Offers</h2>
                  <hr className="heading-line" />
                </div>{/* end page-heading */}
                <div className="owl-carousel owl-theme owl-custom-arrow" id="owl-hotel-offers">
                  <div className="item">
                    <div className="main-block hotel-block">
                      <div className="main-img">
                        <a href="hotel-detail-right-sidebar.html">
                          <img src="../../Dist/images/hotel-1.jpg" className="img-responsive" alt="hotel-img" />
                        </a>
                        <div className="main-mask">
                          <ul className="list-unstyled list-inline offer-price-1">
                            <li className="price">$568.00<span className="divider">|</span><span className="pkg">Avg/Night</span></li>
                            <li className="rating">
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star lightgrey" /></span>
                            </li>
                          </ul>
                        </div>{/* end main-mask */}
                      </div>{/* end offer-img */}
                      <div className="main-info hotel-info">
                        <div className="arrow">
                          <a href="hotel-detail-right-sidebar.html"><span><i className="fa fa-angle-right" /></span></a>
                        </div>{/* end arrow */}
                        <div className="main-title hotel-title">
                          <a href="hotel-detail-right-sidebar.html">Herta Berlin Hotel</a>
                          <p>From: Scotland</p>
                        </div>{/* end hotel-title */}
                      </div>{/* end hotel-info */}
                    </div>{/* end hotel-block */}
                  </div>{/* end item */}
                  <div className="item">
                    <div className="main-block hotel-block">
                      <div className="main-img">
                        <a href="hotel-detail-right-sidebar.html">
                          <img src="../../Dist/images/hotel-2.jpg" className="img-responsive" alt="hotel-img" />
                        </a>
                        <div className="main-mask">
                          <ul className="list-unstyled list-inline offer-price-1">
                            <li className="price">$568.00<span className="divider">|</span><span className="pkg">Avg/Night</span></li>
                            <li className="rating">
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star lightgrey" /></span>
                            </li>
                          </ul>
                        </div>{/* end main-mask */}
                      </div>{/* end offer-img */}
                      <div className="main-info hotel-info">
                        <div className="arrow">
                          <a href="hotel-detail-right-sidebar.html"><span><i className="fa fa-angle-right" /></span></a>
                        </div>{/* end arrow */}
                        <div className="main-title hotel-title">
                          <a href="hotel-detail-right-sidebar.html">Roosevelt Hotel</a>
                          <p>From: Germany</p>
                        </div>{/* end hotel-title */}
                      </div>{/* end hotel-info */}
                    </div>{/* end hotel-block */}
                  </div>{/* end item */}
                  <div className="item">
                    <div className="main-block hotel-block">
                      <div className="main-img">
                        <a href="hotel-detail-right-sidebar.html">
                          <img src="../../Dist/images/hotel-3.jpg" className="img-responsive" alt="hotel-img" />
                        </a>
                        <div className="main-mask">
                          <ul className="list-unstyled list-inline offer-price-1">
                            <li className="price">$568.00<span className="divider">|</span><span className="pkg">Avg/Night</span></li>
                            <li className="rating">
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star lightgrey" /></span>
                            </li>
                          </ul>
                        </div>{/* end main-mask */}
                      </div>{/* end offer-img */}
                      <div className="main-info hotel-info">
                        <div className="arrow">
                          <a href="hotel-detail-right-sidebar.html"><span><i className="fa fa-angle-right" /></span></a>
                        </div>{/* end arrow */}
                        <div className="main-title hotel-title">
                          <a href="hotel-detail-right-sidebar.html">Hotel Fort De</a>
                          <p>From: Austria</p>
                        </div>{/* end hotel-title */}
                      </div>{/* end hotel-info */}
                    </div>{/* end hotel-block */}
                  </div>{/* end item */}
                  <div className="item">
                    <div className="main-block hotel-block">
                      <div className="main-img">
                        <a href="hotel-detail-right-sidebar.html">
                          <img src="../../Dist/images/hotel-4.jpg" className="img-responsive" alt="hotel-img" />
                        </a>
                        <div className="main-mask">
                          <ul className="list-unstyled list-inline offer-price-1">
                            <li className="price">$568.00<span className="divider">|</span><span className="pkg">Avg/Night</span></li>
                            <li className="rating">
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star lightgrey" /></span>
                            </li>
                          </ul>
                        </div>{/* end main-mask */}
                      </div>{/* end offer-img */}
                      <div className="main-info hotel-info">
                        <div className="arrow">
                          <a href="hotel-detail-right-sidebar.html"><span><i className="fa fa-angle-right" /></span></a>
                        </div>{/* end arrow */}
                        <div className="main-title hotel-title">
                          <a href="hotel-detail-right-sidebar.html">Roosevelt Hotel</a>
                          <p>From: Germany</p>
                        </div>{/* end hotel-title */}
                      </div>{/* end hotel-info */}
                    </div>{/* end hotel-block */}
                  </div>{/* end item */}
                </div>{/* end owl-hotel-offers */}
                <div className="view-all text-center">
                  <a href="hotel-grid-right-sidebar.html" className="btn btn-orange">View All</a>
                </div>{/* end view-all */}
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end hotel-offers */}
        {/*=============== LUXURY ROOMS ===============*/}
        <section id="luxury-rooms" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 luxury-img luxury-room-imgs">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 luxury-room-block">
                    <a href="../../Dist/images/luxury-room-1.jpg" title="image-7" className="with-caption gallery image-link">
                      <img className="img-responsive" src="../../Dist/images/luxury-room-1.jpg" alt="luxury-room-img" />
                    </a>
                  </div>
                  <div className="col-xs-6 col-sm-6 luxury-room-block">
                    <a href="../../Dist/images/luxury-room-2.jpg" title="image-7" className="with-caption gallery image-link">
                      <img className="img-responsive" src="../../Dist/images/luxury-room-2.jpg" alt="luxury-room-img" />
                    </a>
                  </div>
                  <div className="col-xs-6 col-sm-6 luxury-room-block">
                    <a href="../../Dist/images/luxury-room-3.jpg" title="image-7" className="with-caption gallery image-link">
                      <img className="img-responsive" src="../../Dist/images/luxury-room-3.jpg" alt="luxury-room-img" />
                    </a>
                  </div>
                  <div className="col-xs-6 col-sm-6 luxury-room-block">
                    <a href="../../Dist/images/luxury-room-4.jpg" title="image-7" className="with-caption gallery image-link">
                      <img className="img-responsive" src="../../Dist/images/luxury-room-4.jpg" alt="luxury-room-img" />
                    </a>
                  </div>
                </div>
              </div>{/* end columns */}
              <div className="col-sm-12 col-md-12 col-lg-6 luxury-text luxury-room-text">
                <h2>Luxurious Rooms</h2>
                <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri.</p>
                <a href="hotel-detail-right-sidebar.html" className="btn btn-black">From $99/Day</a>
                <a href="hotel-detail-right-sidebar.html" className="btn btn-o-border">View Details</a>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end luxury-rooms */}
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
        {/*================ PACKAGES ==============*/}
        <section id="hotel-packages" className="section-padding"> 
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">         	
                <div className="page-heading">
                  <h2>Our Packages</h2>
                  <hr className="heading-line" />
                </div>{/* end page-heading */}
                <div className="row" id="hotel-package-tables">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-offset-1 col-lg-10 col-lg-offset-1"> 
                    <div className="row">
                      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center no-pd-r">
                        <div className="package hotel-package">        
                          <div className="h-pkg-heading">
                            <h2 className="h-pkg-title">Luxury Room</h2>
                            <h2 className="h-pkg-price">$199<span>night</span></h2>
                          </div>{/* end h-pkg-heading */}
                          <div className="pkg-features">
                            <ul className="list-unstyled text-center">
                              <li>Breakfast</li>
                              <li>Private Balcony</li>
                              <li>Sea View</li>
                              <li>Free Wifi</li>
                              <li>Bathroom</li>
                              <li>Water Heated pool</li>
                            </ul>
                          </div>{/* end features */}
                          <button className="btn">Select Package</button>  
                        </div>{/* end hotel-package */}
                      </div>{/* end columns */}
                      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center no-pd-r no-pd-l">
                        <div className="package hotel-package best-package">        
                          <div className="h-pkg-heading">
                            <h2 className="h-pkg-title">Comfort Room</h2>
                            <h2 className="h-pkg-price">$199<span>night</span></h2>
                          </div>{/* end h-pkg-heading */}
                          <div className="pkg-features">
                            <ul className="list-unstyled text-center">
                              <li>Breakfast</li>
                              <li>Private Balcony</li>
                              <li>Sea View</li>
                              <li>Free Wifi</li>
                              <li>Bathroom</li>
                              <li>Water Heated pool</li>
                            </ul>
                          </div>{/* end features */}
                          <button className="btn">Select Package</button> 
                        </div>{/* end hotel-package */}
                      </div>{/* end columns */}
                      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center no-pd-l">
                        <div className="package hotel-package">        
                          <div className="h-pkg-heading">
                            <h2 className="h-pkg-title">Deluxe Room</h2>
                            <h2 className="h-pkg-price">$199<span>night</span></h2>
                          </div>{/* end h-package-heading */}
                          <div className="pkg-features">
                            <ul className="list-unstyled text-center">
                              <li>Breakfast</li>
                              <li>Private Balcony</li>
                              <li>Sea View</li>
                              <li>Free Wifi</li>
                              <li>Bathroom</li>
                              <li>Water Heated pool</li>
                            </ul>
                          </div>{/* end features */}
                          <button className="btn">Select Package</button> 
                        </div>{/* end hotel-package */}
                      </div>{/* end columns */}
                    </div>{/* end row */}
                  </div>{/* end columns */}
                </div>{/* end row */}
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end hotel-packages */}
        {/*========================= NEWSLETTER-1 ==========================*/}
        <section id="newsletter-1" className="section-padding back-size newsletter"> 
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <h2>Subscribe Our Newsletter</h2>
                <p>Subscibe to receive our interesting updates</p>	
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
        </section>{/* end newsletter-1 */}
        {/*======================= FOOTER =======================*/}
        <section id="footer" className="ftr-heading-w ftr-heading-mgn-2">
          <div id="footer-top" className="banner-padding ftr-top-grey ftr-text-grey">
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
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 footer-widget ftr-map">
                  <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509729.487836256!2d-123.77686152799836!3d37.1864783963941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia!5e0!3m2!1sen!2s!4v1490695907554" allowFullScreen />
                  </div>
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end footer-top */}
         <FooterBottom/>
        </section>{/* end footer */}
      </div>
    );
  }
}

export default connect(state => state)(HotelHomepge);