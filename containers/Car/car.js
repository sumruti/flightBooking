import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';



class car extends Component {

  componentDidMount(){
    document.title = "Car"
     $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider){
          $('body').removeClass('loading');
      },
      flexDirectionNav: false,
      controlNav: false,
    });
    $("#owl-car-offers").owlCarousel({
    items : 3,
    itemsCustom : false,
    itemsDesktop : [1199,2],
    itemsDesktopSmall : [991,2],
    itemsTablet: [768,2],
    itemsTabletSmall: [767,1],
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
  
    //Autoplay
    autoPlay : true,
    stopOnHover : true,
   
    // Navigation
    navigation : true,
    navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    rewindNav : true,
    scrollPerPage : false,
   
    //Pagination
    pagination : false,
    paginationNumbers: false,
   
    // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,    
  });
  }
render () {

 return (


    <div>
     {/*======== SEARCH-OVERLAY =========*/}       
     {/* <Search/>*/}
    {/* end overlay */}
        {/*============= TOP-BAR ===========*/}
        <TopBar/>
        {/*========================= FLEX SLIDER =====================*/}
        {/* end flexslider-container */}
        {/*================= CAR OFFERS =============*/}
        <section className="flexslider-container" id="flexslider-container-3">
          <Header/>
        {/* end mySidenav */}
         {/* end sidenav-content */}
          <div className="flexslider slider" id="slider-3">
            <ul className="slides">
              <li className="item-1 back-size" style={{background: 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(../../Dist/images/2013-Mercedes-Benz-C-Class.jpg) 50% 65%', backgroundSize: 'cover', height: '100%'}}>
              </li>{/* end item-1 */}
              <li className="item-2 back-size" style={{background: 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(../../Dist/images/2018-bmw-m4-cs-71-1920x1080.jpg) 50% 65%', backgroundSize: 'cover', height: '100%'}}>
              </li>{/* end item-2 */}
            </ul>
          </div>{/* end slider */}
          <div className="search-tabs" id="search-tabs-3">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-pd-r">
                  <ul className="nav nav-tabs">
                    {/*<li><a href="#flights" data-toggle="tab"><span><i className="fa fa-plane" /></span><span className="st-text">Flights</span></a></li>*/}
                    <li><a href={null} data-toggle="tab"><span><i className="fa fa-building" /></span><span className="st-text">Hotels</span></a></li>
                    <li><a href={null} data-toggle="tab"><span><i className="fa fa-suitcase" /></span><span className="st-text">Tours</span></a></li>
                    <li><a href={null} data-toggle="tab"><span><i className="fa fa-ship" /></span><span className="st-text">Cruise</span></a></li>
                    <li className="active"><a href={null} data-toggle="tab"><span><i className="fa fa-car" /></span><span className="st-text">Cars</span></a></li>
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
                                <option defaultValue>01</option>
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
                    <div id="hotels" className="tab-pane">
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
                                    <option defaultValue>01</option>
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
                                    <option defaultValue>01</option>
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
                                    <option defaultValue>01</option>
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
                                <option defaultValue>January</option>
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
                                    <option defaultValue>01</option>
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
                                    <option defaultValue>01</option>
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
                                <option defaultValue>01</option>
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
                    <div id="cars" className="tab-pane in active">
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
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end search-tabs */}
        </section>
        {/* end flexslider-container */}
        {/*================= CAR OFFERS =============*/}
        <section id="car-offers" className="section-padding"> 
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">           
                <div className="page-heading">
                  <h2>Car Offers</h2>
                  <hr className="heading-line" />
                </div>{/* end page-heading */}
                <div className="owl-carousel owl-theme owl-custom-arrow" id="owl-car-offers">
                  <div className="item">
                    <div className="main-block car-offer-block">
                      <div className="main-img car-offer-img">
                        <a href='/carDetails'>
                          <img src="../../Dist/images/2017-Audi-Q5-2L-TFSI-S-Line-Black-SUV-grey-press-image-1200x800-(1).webp" className="img-responsive" alt="car-img" />
                        </a>
                      </div>{/* end car-offer-img */}
                      <div className="car-offer-info">
                        <ul className="list-unstyled">
                          <li><a href={null}><h4>Audi</h4></a><span className="car-offer-price">$68.00<span className="limit"><span className="divider">|</span>Per Day</span></span></li>
                        </ul>
                      </div>{/* end car-offer-info */}
                    </div>{/* end car-offer-block */}
                  </div>{/* end item */}
                  <div className="item">
                    <div className="main-block car-offer-block">
                      <div className="main-img car-offer-img">
                        <a href='/carDetails'>
                          <img src="../../Dist/images/range-rover-evoque-1-front-tracking.jpg" className="img-responsive" alt="car-img" />
                        </a>
                      </div>{/* end car-offer-img */}
                      <div className="car-offer-info">
                        <ul className="list-unstyled">
                          <li><a href={null}><h4>Range Rover</h4></a><span className="car-offer-price">$95.00<span className="limit"><span className="divider">|</span>Per Day</span></span></li>
                        </ul>
                      </div>{/* end car-offer-info */}
                    </div>{/* end car-offer-block */}
                  </div>{/* end item */}
                  <div className="item">
                    <div className="main-block car-offer-block">
                      <div className="main-img car-offer-img">
                        <a href='/carDetails'>

                          <img src="../../Dist/images/2016_mercedes_benz_sl-wide.jpg" className="img-responsive" alt="car-img" />
                        </a>
                      </div>{/* end car-offer-img */}
                      <div className="car-offer-info">
                        <ul className="list-unstyled">
                          <li><a href={null}><h4>Mercedese</h4></a><span className="car-offer-price">$78.00<span className="limit"><span className="divider">|</span>Per Day</span></span></li>
                        </ul>
                      </div>{/* end car-offer-info */}
                    </div>{/* end car-offer-block */}
                  </div>{/* end item */}
                  <div className="item">
                    <div className="main-block car-offer-block">
                      <div className="main-img car-offer-img">
                        <a href='/carDetails'>
                          <img src="../../Dist/images/images1111.jpg" className="img-responsive" alt="car-img" />
                        </a>
                      </div>{/* end car-offer-img */}
                      <div className="car-offer-info">
                        <ul className="list-unstyled">
                          <li><a href={null}><h4>Audi</h4></a><span className="car-offer-price">$68.00<span className="limit"><span className="divider">|</span>Per Day</span></span></li>
                        </ul>
                      </div>{/* end car-offer-info */}
                    </div>{/* end car-offer-block */}
                  </div>{/* end item */}
                </div>{/* end owl-car-offers */}
                <div className="view-all text-center">
                  <a href={null} className="btn btn-orange">View All</a>
                </div>{/* end view-all */}
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>
        {/* end car-offers */}
        {/*========================= BEST FEATURES =======================*/}
        <section id="best-features" className="banner-padding lightgrey-features">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-dollar" /></span>
                  <h3>Best Price Guarantee</h3>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-lock" /></span>
                  <h3>Safe and Secure</h3>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-thumbs-up" /></span>
                  <h3>Best Travel Agents</h3>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-bars" /></span>
                  <h3>Travel Guidelines</h3>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end best-features */}
        {/*================ LUXURY CAR ==============*/}
        <section id="luxury-car" className="section-padding"> 
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-pd-r luxury-img">
                <img src="../../Dist/images/phantom-iv-1.jpg" className="img-responsive" alt="luxury-car" />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-pd-l luxury-text">
                <div className="luxury-car-text">
                  <h2>Luxurious Car</h2>
{/*                  <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri.</p>
                  */}                  <a href={null} className="btn btn-black">From $99/Day</a>
                  <a href={null} className="btn btn-o-border">View Details</a>
                </div>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end luxury-car */}
        {/*================== PACKAGES ================*/}
        <section id="car-packages" className="section-padding"> 
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">           
                <div className="page-heading white-heading">
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
        </section>{/* end car-packages */}
        {/*===================== MESSAGE BANNER ===================*/}
        {/*<section id="message-banner" className="section-padding back-size"> 
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10">
                        <h2>Lorem ipsum dolor sit amet aeque fabulas.</h2>  
                        <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 message-btn">
                        <a href={null} className="btn btn-white">Read More</a>
                      </div>{/* end columns 
                    </div>{/* end row 
                  </div>{/* end container 
                </section>
        end message-banner */}
        {/*=============== TESTIMONIALS-2 ===============*/}
       <Testimonials/>
        {/* end testimonials */}
        {/*============= NEWSLETTER-2 ============*/}
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
       <FooterBottom/>
      </div>




  )
  }


}

export default connect(state => state)(car);