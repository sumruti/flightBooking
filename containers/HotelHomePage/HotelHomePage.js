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

    $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider){
          $('body').removeClass('loading');
      },
      flexDirectionNav: false,
      controlNav: false,
    });

    
  $("#owl-hotel-offers").owlCarousel({
    items : 3,
    itemsCustom : false,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [991,2],
    itemsTablet: [768,2],
    itemsTabletSmall: [600,1],
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
        {/*====== LOADER =====*/}
        {/*======== SEARCH-OVERLAY =========*/}       
        {/*<Search/>*/}
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
                <li className="item-1 back-size hotel-banners1" >
                </li>{/* end item-1 */}
                <li className="item-2 back-size hotel-banners2" >
                </li>{/* end item-2 */}
              </ul>
          </div>{/* end slider */}
          <div className="search-tabs" id="search-tabs-3">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-pd-r">
                  <ul className="nav nav-tabs">
                    <li className="active"><a href={null} data-toggle="tab"><span><i className="fa fa-building" /></span><span className="st-text">Hotels</span></a></li>
                    <li><a href={null} data-toggle="tab"><span><i className="fa fa-suitcase" /></span><span className="st-text">Tours</span></a></li>
                    <li><a href={null} data-toggle="tab"><span><i className="fa fa-ship" /></span><span className="st-text">Cruise</span></a></li>
                    <li><a href={null} data-toggle="tab"><span><i className="fa fa-car" /></span><span className="st-text">Cars</span></a></li>
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
{/*                    <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper, imeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                                  <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
                    */}      <a href={null} className="btn btn-w-border">Explore More</a>
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
        </section>
        {/* end best-features */}
        {/*=============== HOTEL OFFERS ===============*/}
        <section id="hotel-offers" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-heading">
                  <h2>Hotels Offers</h2>
                  <hr className="heading-line" />
                </div>{/* end page-heading */}
                <div className="owl-carousel owl-theme owl-custom-arrow" id="owl-hotel-offers">
                  <div className="item">
                    <div className="main-block hotel-block">
                      <div className="main-img">
                        <a href='/HotelDetail'>
                          <img src="../../Dist/images/123294690.jpg" className="img-responsive" alt="hotel-img" />
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
                          <a href={null}><span><i className="fa fa-angle-right" /></span></a>
                        </div>{/* end arrow */}
                        <div className="main-title hotel-title">
                          <a href={null}>Herta Berlin Hotel</a>
                          <p>From: Scotland</p>
                        </div>{/* end hotel-title */}
                      </div>{/* end hotel-info */}
                    </div>{/* end hotel-block */}
                  </div>{/* end item */}
                  <div className="item">
                    <div className="main-block hotel-block">
                      <div className="main-img">
                        <a href='/HotelDetail'>
                          <img src="../../Dist/images/3.jpg" className="img-responsive" alt="hotel-img" />
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
                          <a href={null}><span><i className="fa fa-angle-right" /></span></a>
                        </div>{/* end arrow */}
                        <div className="main-title hotel-title">
                          <a href="#">Roosevelt Hotel</a>
                          <p>From: Germany</p>
                        </div>{/* end hotel-title */}
                      </div>{/* end hotel-info */}
                    </div>{/* end hotel-block */}
                  </div>{/* end item */}
                  <div className="item">
                    <div className="main-block hotel-block">
                      <div className="main-img">
                        <a href='/HotelDetail'>
                          <img src="../../Dist/images/swimming-pool.jpg" className="img-responsive" alt="hotel-img" />
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
                          <a href={null}><span><i className="fa fa-angle-right" /></span></a>
                        </div>{/* end arrow */}
                        <div className="main-title hotel-title">
                          <a href={null}>Hotel Fort De</a>
                          <p>From: Austria</p>
                        </div>{/* end hotel-title */}
                      </div>{/* end hotel-info */}
                    </div>{/* end hotel-block */}
                  </div>{/* end item */}
                  <div className="item">
                    <div className="main-block hotel-block">
                      <div className="main-img">
                        <a href='/HotelDetail'>
                          <img src="../../Dist/images/1.jpg" className="img-responsive" alt="hotel-img" />
                        </a>
                        <div className="main-mask">1
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
                          <a href="#"><span><i className="fa fa-angle-right" /></span></a>
                        </div>{/* end arrow */}
                        <div className="main-title hotel-title">
                          <a href="#">Roosevelt Hotel</a>
                          <p>From: Germany</p>
                        </div>{/* end hotel-title */}
                      </div>{/* end hotel-info */}
                    </div>{/* end hotel-block */}
                  </div>{/* end item */}
                </div>{/* end owl-hotel-offers */}
                <div className="view-all text-center">
                  <a href="#" className="btn btn-orange">View All</a>
                </div>{/* end view-all */}
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>
        {/* end hotel-offers */}
        {/*=============== LUXURY ROOMS ===============*/}
        <section id="luxury-rooms" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 luxury-img luxury-room-imgs">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 luxury-room-block">
                    <a href="../../Dist/images/luxury-room-1.jpg" title="image-7" className="with-caption gallery image-link">
                      <img className="img-responsive" src="../../Dist/images/midcentury-living-room_0.jpg" alt="luxury-room-img" />
                    </a>
                  </div>
                  <div className="col-xs-6 col-sm-6 luxury-room-block">
                    <a href="../../Dist/images/luxury-room-2.jpg" title="image-7" className="with-caption gallery image-link">
                      <img className="img-responsive" src="../../Dist/images/c7beb487b2b54736cfcb842d02463724.jpg" alt="luxury-room-img" />
                    </a>
                  </div>
                  <div className="col-xs-6 col-sm-6 luxury-room-block">
                    <a href="../../Dist/images/luxury-room-3.jpg" title="image-7" className="with-caption gallery image-link">
                      <img className="img-responsive" src="../../Dist/images/171102-lavish-hotel-ro.jpg" alt="luxury-room-img" />
                    </a>
                  </div>
                  <div className="col-xs-6 col-sm-6 luxury-room-block">
                    <a href="../../Dist/images/luxury-room-4.jpg" title="image-7" className="with-caption gallery image-link">
                      <img className="img-responsive" src="../../Dist/images/images (1).jpg" alt="luxury-room-img" />
                    </a>
                  </div>
                </div>
              </div>{/* end columns */}
              <div className="col-sm-12 col-md-12 col-lg-6 luxury-text luxury-room-text">
                <h2>Luxurious Rooms</h2>
                <p>Well-appointed comfortable & spacious room with an area of 320 sq. ft. Luxury comes with a complete range of upscale amenities including, Wireless Internet access (Chargeable), Complimentary Mineral Water Bottle, Flat-screen TV, Cable connection, Direct Dialing, Sofa bed, Mini Bar, Tea/Coffee Maker, Express Laundry Service, In-room Safe, Bathrobe, Complimentary Newspaper, Parallel phone line in bathroom, Bath Tub, Bedside lamp, Full length Mirror, Hair Dryer, Safety Lockers, Shower Cubicle, Table lamp, Temp Control, Wooden flooring etc. Child Policy One child below the age of 6 years can stay in parents room without an extra bed on complimentary basis</p>
                <a href={null} className="btn btn-black">From $99/Day</a>
                <a href={null} className="btn btn-o-border">View Details</a>
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
       <FooterBottom/>
       {/* end footer */}
      </div>
    );
  }
}

export default connect(state => state)(HotelHomepge);