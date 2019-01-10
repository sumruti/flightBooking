import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';



class Home extends Component {

  componentDidMount(){
    document.title = "Home"
    $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider){
          $('body').removeClass('loading');
      },
      flexDirectionNav: false,
      controlNav: false,
    });

    $(document).ready(function(){
        $('.nav li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
      });
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

    $("#owl-tour-offers").owlCarousel({
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

        {/*======== SEARCH-OVERLAY =========*/} 
         {/*<Search/>*/}
        {/* end SEARCH overlay */}

        {/*============= TOP-BAR ===========*/}
         <TopBar/>
        {/* end top-bar */}

        <Header/>

        {/* end navbar */}        
        {/* end sidenav-content */}
        {/*========================= FLEX SLIDER =====================*/}
        <section className="flexslider-container" id="flexslider-container-1">
          <div className="flexslider slider" id="slider-1">
            <ul className="slides">
              <li className="item-1 fligt_show_img" >
                <div className=" meta">         
                  <div className="container">
                    <h2>Discover The </h2>
                    <h1>World</h1>
                    <a href="#" className="btn btn-default">View More</a>
                  </div>{/* end container */}  
                </div>{/* end meta */}
              </li>{/* end item-1 */}
              <li className="item-2 cruise_show_img" >
                <div className=" meta">         
                  <div className="container">
                    <h2>Discover The</h2>
                    <h1>World</h1>
                    <a href="#" className="btn btn-default">View More</a>
                  </div>{/* end container */}  
                </div>{/* end meta */}
              </li>{/* end item-2 */}
            </ul>
          </div>{/* end slider */}
          <div className="search-tabs" id="search-tabs-1">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="nav nav-tabs center-tabs">
                 {/*   <li ><a href="#flights" data-toggle="tab"><span><i className="fa fa-plane" /></span><span className="st-text">Flights</span></a></li>*/}
                    <li className="active"><a href="#hotels" data-toggle="tab"><span><i className="fa fa-building" /></span><span className="st-text">Hotels</span></a></li>
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
                        <a href="#">
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
                          <a href="#"><span><i className="fa fa-angle-right" /></span></a>
                        </div>{/* end arrow */}
                        <div className="main-title hotel-title">
                          <a href="#">Herta Berlin Hotel</a>
                          <p>From: Scotland</p>
                        </div>{/* end hotel-title */}
                      </div>{/* end hotel-info */}
                    </div>{/* end hotel-block */}
                  </div>{/* end item */}
                  <div className="item">
                    <div className="main-block hotel-block">
                      <div className="main-img">
                        <a href="#">
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
                          <a href="#"><span><i className="fa fa-angle-right" /></span></a>
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
                        <a href="#">
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
                          <a href="#"><span><i className="fa fa-angle-right" /></span></a>
                        </div>{/* end arrow */}
                        <div className="main-title hotel-title">
                          <a href="#">Hotel Fort De</a>
                          <p>From: Austria</p>
                        </div>{/* end hotel-title */}
                      </div>{/* end hotel-info */}
                    </div>{/* end hotel-block */}
                  </div>{/* end item */}
                  <div className="item">
                    <div className="main-block hotel-block">
                      <div className="main-img">
                        <a href="#">
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
        {/*======================= BEST FEATURES =====================*/}
        <section id="best-features" className="banner-padding black-features">
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
        {/*=============== TOUR OFFERS ===============*/}
        <section id="tour-offers" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-heading">
                  <h2>Tour Offers</h2>
                  <hr className="heading-line" />
                </div>{/* end page-heading */}
                <div className="owl-carousel owl-theme owl-custom-arrow" id="owl-tour-offers">
                  <div className="item">
                    <div className="main-block tour-block">
                      <div className="main-img">
                        <a href="#">
                          <img src="../../Dist/images/TOUR-PACKAGES.jpg" className="img-responsive" alt="tour-img" />
                        </a>
                      </div>{/* end offer-img */}
                      <div className="offer-price-2">
                        <ul className="list-unstyled">
                          <li className="price">$568.00<a href="#"><span className="arrow"><i className="fa fa-angle-right" /></span></a></li>
                        </ul>
                      </div>{/* end offer-price-2 */}
                      <div className="main-info tour-info">
                        <div className="main-title tour-title">
                          <a href="#">China Temple Tour</a>
                          <p>From: China</p>
                          <div className="rating">
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star grey" /></span>
                          </div>
                        </div>{/* end tour-title */}
                      </div>{/* end tour-info */}
                    </div>{/* end tour-block */}
                  </div>{/* end item */}
                  <div className="item">
                    <div className="main-block tour-block">
                      <div className="main-img">
                        <a href="#">
                          <img src="../../Dist/images/australia-new-zealand-tour-packages.jpg" className="img-responsive" alt="tour-img" />
                        </a>
                      </div>{/* end offer-img */}
                      <div className="offer-price-2">
                        <ul className="list-unstyled">
                          <li className="price">$745.00<a href="#"><span className="arrow"><i className="fa fa-angle-right" /></span></a></li>
                        </ul>
                      </div>{/* end offer-price-2 */}
                      <div className="main-info tour-info">
                        <div className="main-title tour-title">
                          <a href="#">African Safari Tour</a>
                          <p>From: Africa</p>
                          <div className="rating">
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star grey" /></span>
                          </div>
                        </div>{/* end tour-title */}
                      </div>{/* end tour-info */}
                    </div>{/* end tour-block */}
                  </div>{/* end item */}
                  <div className="item">
                    <div className="main-block tour-block">
                      <div className="main-img">
                        <a href="#">
                          <img src="../../Dist/images/romance-in-australia.jpg" className="img-responsive" alt="tour-img" />
                        </a>
                      </div>{/* end offer-img */}
                      <div className="offer-price-2">
                        <ul className="list-unstyled">
                          <li className="price">$459.00<a href="#"><span className="arrow"><i className="fa fa-angle-right" /></span></a></li>
                        </ul>
                      </div>{/* end offer-price-2 */}
                      <div className="main-info tour-info">
                        <div className="main-title tour-title">
                          <a href="#">Paris City Tour</a>
                          <p>From: Paris</p>
                          <div className="rating">
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star grey" /></span>
                          </div>
                        </div>{/* end tour-title */}
                      </div>{/* end tour-info */}
                    </div>{/* end tour-block */}
                  </div>{/* end item */}
                  <div className="item">
                    <div className="main-block tour-block">
                      <div className="main-img">
                        <a href="#">
                          <img src="../../Dist/images/special-offer-sri-lanka-tour.jpg" className="img-responsive" alt="tour-img" />
                        </a>
                      </div>{/* end offer-img */}
                      <div className="offer-price-2">
                        <ul className="list-unstyled">
                          <li className="price">$745.00<a href="#"><span className="arrow"><i className="fa fa-angle-right" /></span></a></li>
                        </ul>
                      </div>{/* end offer-price-2 */}
                      <div className="main-info tour-info">
                        <div className="main-title tour-title">
                          <a href="#">China Temple Tour</a>
                          <p>From: China</p>
                          <div className="rating">
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star grey" /></span>
                          </div>
                        </div>{/* end tour-title */}
                      </div>{/* end tour-info */}
                    </div>{/* end tour-block */}
                  </div>{/* end item */}
                </div>{/* end owl-tour-offers */}
                <div className="view-all text-center">
                  <a href="#" className="btn btn-orange">View All</a>
                </div>{/* end view-all */}
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end tour-offers */}
        {/*=============== CRUISE OFFERS ===============*/}
        <section id="cruise-offers" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-heading">
                  <h2>Cruise Offers</h2>
                  <hr className="heading-line" />
                </div>{/* end page-heading */}
                <div className="row">
                  <div className="col-sm-6 col-md-6">
                    <div className="main-block cruise-block">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                          <div className="main-img cruise-img">
                            <a href="#">
                              <img src="../../Dist/images/The-Top-Five-Australia-and-Asian-Cruise-Holidays.jpg" className="img-responsive" alt="cruise-img" />
                              <div className="cruise-mask">
                                <p>7 Nights, 6 Days</p>
                              </div>{/* end cruise-mask */}
                            </a>
                          </div>{/* end cruise-img */}
                        </div>{/* end columns */}
                        <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                          <div className=" main-info cruise-info">
                            <div className="main-title cruise-title">
                              <a href="#">Spain Boat Tour</a>
                              <p>From: Italy to Spain</p>
                              <div className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star grey" /></span>
                              </div>{/* end rating */}
                              <span className="cruise-price">$950.00</span>
                            </div>{/* end cruise-title */}
                          </div>{/* end cruise-info */}
                        </div>{/* end columns */}
                      </div>{/* end row */} 
                    </div>{/* end cruise-block */}
                  </div>{/* end columns */}
                  <div className="col-sm-6 col-md-6">
                    <div className="main-block cruise-block">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                          <div className="main-img cruise-img">
                            <a href="#">
                              <img src="../../Dist/images/thumb-1920-542931.jpg" className="img-responsive" alt="cruise-img" />
                              <div className="cruise-mask">
                                <p>7 Nights, 6 Days</p>
                              </div>{/* end cruise-mask */}
                            </a>
                          </div>{/* end cruise-img */}
                        </div>{/* end columns */}
                        <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                          <div className=" main-info cruise-info">
                            <div className="main-title cruise-title">
                              <a href="#">Spain Boat Tour</a>
                              <p>From: Italy to Spain</p>
                              <div className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star grey" /></span>
                              </div>{/* end rating */}
                              <span className="cruise-price">$950.00</span>
                            </div>{/* end cruise-title */}
                          </div>{/* end cruise-info */}
                        </div>{/* end columns */}
                      </div>{/* end row */} 
                    </div>{/* end cruise-block */}
                  </div>{/* end columns */}
                  <div className="col-sm-6 col-md-6">
                    <div className="main-block cruise-block">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                          <div className="main-img cruise-img">
                            <a href="#">
                              <img src="../../Dist/images/Outdoor-deck-party-2-.jpg" className="img-responsive" alt="cruise-img" />
                              <div className="cruise-mask">
                                <p>7 Nights, 6 Days</p>
                              </div>{/* end cruise-mask */}
                            </a>
                          </div>{/* end cruise-img */}
                        </div>{/* end columns */}
                        <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                          <div className=" main-info cruise-info">
                            <div className="main-title cruise-title">
                              <a href="#">Spain Boat Tour</a>
                              <p>From: Italy to Spain</p>
                              <div className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star grey" /></span>
                              </div>{/* end rating */}
                              <span className="cruise-price">$950.00</span>
                            </div>{/* end cruise-title */}
                          </div>{/* end cruise-info */}
                        </div>{/* end columns */}
                      </div>{/* end row */} 
                    </div>{/* end cruise-block */}
                  </div>{/* end columns */}
                  <div className="col-sm-6 col-md-6">
                    <div className="main-block cruise-block">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                          <div className="main-img cruise-img">
                            <a href="#">
                              <img src="../../Dist/images/bateaux.jpg" className="img-responsive" alt="cruise-img" />
                              <div className="cruise-mask">
                                <p>7 Nights, 6 Days</p>
                              </div>{/* end cruise-mask */}
                            </a>
                          </div>{/* end cruise-img */}
                        </div>{/* end columns */}
                        <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                          <div className=" main-info cruise-info">
                            <div className="main-title cruise-title">
                              <a href="#">Spain Boat Tour</a>
                              <p>From: Italy to Spain</p>
                              <div className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star grey" /></span>
                              </div>{/* end rating */}
                              <span className="cruise-price">$950.00</span>
                            </div>{/* end cruise-title */}
                          </div>{/* end cruise-info */}
                        </div>{/* end columns */}
                      </div>{/* end row */} 
                    </div>{/* end cruise-block */}
                  </div>{/* end columns */}
                </div>{/* end row */}
                <div className="view-all text-center">
                  <a href="#" className="btn btn-orange">View All</a>
                </div>{/* end view-all */}
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>
        {/* end cruise-offers */}
        {/*==================== VIDEO BANNER ===================*/}
        <section id="video-banner" className="banner-padding back-size"> 
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2>Take a Video Tour</h2>
{/*                <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                */}                <a href="https://youtube.com/watch?v=0O2aH4XLbto" className="popup-youtube" id="play-button"><span><i className="fa fa-play" /></span></a>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end video-banner */}
        {/*================= FLIGHT OFFERS =============*/}
        {/*<section id="flight-offers" className="section-padding">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="page-heading">
                          <h2>Flight Offers</h2>
                          <hr className="heading-line" />
                        </div>{/* end page-heading *
                        <div className="row">
                          <div className="col-sm-6 col-md-4">
                            <div className="main-block flight-block">
                              <a href="#">
                                <div className="flight-img">
                                  <img src="../../Dist/images/flight-1.jpg" className="img-responsive" alt="flight-img" />
                                </div>{/* end flight-img 
                                <div className="flight-info">
                                  <div className="flight-title">
                                    <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
                                  </div>{/* end flight-title 
                                  <div className=" flight-timing">
                                    <ul className="list-unstyled">
                                      <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
                                      <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
                                    </ul>
                                  </div>{/* end flight-timing 
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
                                </div>{/* end flight-info 
                              </a>
                            </div> end flight-block *
                          </div> end columns 
                          <div className="col-sm-6 col-md-4">
                            <div className="main-block flight-block">
                              <a href="#">
                                <div className="flight-img">
                                  <img src="../../Dist/images/flight-2.jpg" className="img-responsive" alt="flight-img" />
                                </div>{/* end flight-img 
                                <div className="flight-info">
                                  <div className="flight-title">
                                    <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
                                  </div>{/* end flight-title 
                                  <div className=" flight-timing">
                                    <ul className="list-unstyled">
                                      <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
                                      <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
                                    </ul>
                                  </div>{/* end flight-timing 
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
                                </div>{/* end flight-info 
                              </a>
                            </div> end flight-block
                          </div> end columns *
                          <div className="col-sm-6 col-md-4">
                            <div className="main-block flight-block">
                              <a href="#">
                                <div className="flight-img">
                                  <img src="../../Dist/images/flight-3.jpg" className="img-responsive" alt="flight-img" />
                                </div>{/* end flight-img *
                                <div className="flight-info">
                                  <div className="flight-title">
                                    <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
                                  </div>{/* end flight-title 
                                  <div className=" flight-timing">
                                    <ul className="list-unstyled">
                                      <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
                                      <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
                                    </ul>
                                  </div>{/* end flight-timing 
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
                                </div>{/* end flight-info 
                              </a>
                            </div>{/* end flight-block 
                          </div>{/* end columns 
                          <div className="col-sm-6 col-md-4">
                            <div className="main-block flight-block">
                              <a href="#">
                                <div className="flight-img">
                                  <img src="../../Dist/images/flight-4.jpg" className="img-responsive" alt="flight-img" />
                                </div>{/* end flight-img 
                                <div className="flight-info">
                                  <div className="flight-title">
                                    <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
                                  </div>{/* end flight-title 
                                  <div className=" flight-timing">
                                    <ul className="list-unstyled">
                                      <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
                                      <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
                                    </ul>
                                  </div>{/* end flight-timing 
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
                                </div>{/* end flight-info 
                              </a>
                            </div>{/* end flight-block 
                          </div>{/* end columns 
                          <div className="col-sm-6 col-md-4">
                            <div className="main-block flight-block">
                              <a href="#">
                                <div className="flight-img">
                                  <img src="../../Dist/images/flight-5.jpg" className="img-responsive" alt="flight-img" />
                                </div>{/* end flight-img *
                                <div className="flight-info">
                                  <div className="flight-title">
                                    <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
                                  </div>{/* end flight-title 
                                  <div className=" flight-timing">
                                    <ul className="list-unstyled">
                                      <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
                                      <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
                                    </ul>
                                  </div>{/* end flight-timing 
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
                                </div>{/* end flight-info
                              </a>
                            </div>{/* end flight-block 
                          </div>{/* end columns *
                          <div className="col-sm-6 col-md-4">
                            <div className="main-block flight-block">
                              <a href="#">
                                <div className="flight-img">
                                  <img src="../../Dist/images/flight-6.jpg" className="img-responsive" alt="flight-img" />
                                </div>{/* end flight-img 
                                <div className="flight-info">
                                  <div className="flight-title">
                                    <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
                                  </div>{/* end flight-title 
                                  <div className=" flight-timing">
                                    <ul className="list-unstyled">
                                      <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
                                      <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
                                    </ul>
                                  </div>{/* end flight-timing 
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
                                </div>{/* end flight-info
                              </a>
                            </div>{/* end flight-block 
                          </div>{/* end columns 
                        </div>{/* end row 
                        <div className="view-all text-center">
                          <a href="#" className="btn btn-orange">View All</a>
                        </div>{/* end view-all 
                      </div>{/* end columns 
                    </div>{/* end row 
                  </div>end container 
                </section>*/}
        {/*==================== HIGHLIGHTS ====================*/}
        <section id="highlights" className="section-padding back-size"> 
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
        {/*================ VEHICLE OFFERS ==============*/}
        <section id="vehicle-offers" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-heading">
                  <h2>Vehicle Offers</h2>
                  <hr className="heading-line" />
                </div>{/* end page-heading */}
                <div className="row">
                  <div className="col-sm-6 col-md-4">
                    <div className="main-block vehicle-block">
                      <div className="main-img vehicle-img">
                        <a href="#">
                          <img src="../../Dist/images/2016_mercedes_benz_sl-wide.jpg" className="img-responsive" alt="tour-img" />
                        </a>
                        <div className="vehicle-time">
                          <p><span><i className="fa fa-clock-o" /></span>26/h</p>
                        </div>{/* end vehicle-time */}
                      </div>{/* end vehicle-img */}
                      <div className="offer-price-2">
                        <ul className="list-unstyled">
                          <li className="price">$89<a href="#"><span className="arrow"><i className="fa fa-angle-right" /></span></a></li>
                        </ul>
                      </div>{/* end offer-price-2 */}
                      <div className="main-info vehicle-info">
                        <div className="main-title vehicle-title">
                          <a href="#">Mercedes Benz</a>
                          <p>Per Day</p>
                          <div className="rating">
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star lightgrey" /></span>
                          </div>
                        </div>{/* end vehicle-title */}
                      </div>{/* end vehicle-info */}
                    </div>{/* end vehicle-block */}
                  </div>{/* end columns */}
                  <div className="col-sm-6 col-md-4">
                    <div className="main-block vehicle-block">
                      <div className="main-img vehicle-img">
                        <a href="#">
                          <img src="../../Dist/images/ferrari-458-spider-wallpapers-32094-3882908.jpg" className="img-responsive" alt="tour-img" />
                        </a>
                        <div className="vehicle-time">
                          <p><span><i className="fa fa-clock-o" /></span>15/h</p>
                        </div>{/* end vehicle-time */}
                      </div>{/* end vehicle-img */}
                      <div className="offer-price-2">
                        <ul className="list-unstyled">
                          <li className="price">$99<a href="#"><span className="arrow"><i className="fa fa-angle-right" /></span></a></li>
                        </ul>
                      </div>{/* end offer-price-2 */}
                      <div className="main-info vehicle-info">
                        <div className="main-title vehicle-title">
                          <a href="#">Ferrari</a>
                          <p>Per Day</p>
                          <div className="rating">
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star lightgrey" /></span>
                          </div>
                        </div>{/* end vehicle-title */}
                      </div>{/* end vehicle-info */}
                    </div>{/* end vehicle-block */}
                  </div>{/* end columns */}
                  <div className="col-sm-6 col-md-4">
                    <div className="main-block vehicle-block">
                      <div className="main-img vehicle-img">
                        <a href="#">
                          <img src="../../Dist/images/range-rover-evoque-1-front-tracking.jpg" className="img-responsive" alt="tour-img" />
                        </a>
                        <div className="vehicle-time">
                          <p><span><i className="fa fa-clock-o" /></span>22/h</p>
                        </div>{/* end vehicle-time */}
                      </div>{/* end vehicle-img */}
                      <div className="offer-price-2">
                        <ul className="list-unstyled">
                          <li className="price">$79<a href="#"><span className="arrow"><i className="fa fa-angle-right" /></span></a></li>
                        </ul>
                      </div>{/* end offer-price-2 */}
                      <div className="main-info vehicle-info">
                        <div className="main-title vehicle-title">
                          <a href="#">Range Rover</a>
                          <p>Per Day</p>
                          <div className="rating">
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star orange" /></span>
                            <span><i className="fa fa-star lightgrey" /></span>
                          </div>
                        </div>{/* end vehicle-title */}
                      </div>{/* end vehicle-info */}
                    </div>{/* end vehicle-block */}
                  </div>{/* end columns */}
                </div>{/* end row */}
                <div className="view-all text-center">
                  <a href="#" className="btn btn-orange">View All</a>
                </div>{/* end view-all */}      
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end vehicle-offers */} 
        {/*==================== TESTIMONIALS ====================*/}
        <Testimonials/>
        {/* end testimonials */} 
        {/*================ LATEST BLOG ==============*/}
        <section id="latest-blog" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-heading">
                  <h2>Our Latest Blogs</h2>
                  <hr className="heading-line" />
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-4">
                    <div className="main-block latest-block">
                      <div className="main-img latest-img">
                        <a href="#">
                          <img src="../../Dist/images/corporate_business_photography_01.jpg" className="img-responsive" alt="blog-img" />
                        </a>
                      </div>{/* end latest-img */}
                      <div className="latest-info">
                        <ul className="list-unstyled">
                          <li><span><i className="fa fa-calendar-minus-o" /></span>29 April,2017<span className="author">by: <a href="#">Jhon Smith</a></span></li>
                        </ul>
                      </div>{/* end latest-info */}
                      <div className="main-info latest-desc">
                        <div className="row">
                          <div className="col-xs-10 col-sm-10 main-title">
                            <a href="#">Travel Insuranve Benefits</a>
                            <p>Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                        <span className="arrow"><a href="#"><i className="fa fa-angle-right" /></a></span>
                      </div>{/* end latest-desc */}
                    </div>{/* end latest-block */}
                  </div>{/* end columns */}
                  <div className="col-sm-6 col-md-4">
                    <div className="main-block latest-block">
                      <div className="main-img latest-img">
                        <a href="#">
                          <img src="../../Dist/images/825082848-612x612.jpg" className="img-responsive" alt="blog-img" />
                        </a>
                      </div>{/* end latest-img */}
                      <div className="latest-info">
                        <ul className="list-unstyled">
                          <li><span><i className="fa fa-calendar-minus-o" /></span>29 April,2017<span className="author">by: <a href="#">Jhon Smith</a></span></li>
                        </ul>
                      </div>{/* end latest-info */}
                      <div className="main-info latest-desc">
                        <div className="row">
                          <div className="col-xs-10 col-sm-10 main-title">
                            <a href="#">Travel Guideline Agents</a>
                            <p>Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                        <span className="arrow"><a href="#"><i className="fa fa-angle-right" /></a></span>
                      </div>{/* end latest-desc */}
                    </div>{/* end latest-block */}
                  </div>{/* end columns */}
                  <div className="col-sm-6 col-md-4">
                    <div className="main-block latest-block">
                      <div className="main-img latest-img">
                        <a href="#">
                          <img src="../../Dist/images/98c80de7.jpg" className="img-responsive" alt="blog-img" />
                        </a>
                      </div>{/* end latest-img */}
                      <div className="latest-info">
                        <ul className="list-unstyled">
                          <li><span><i className="fa fa-calendar-minus-o" /></span>29 April,2017<span className="author">by: <a href="#">Jhon Smith</a></span></li>
                        </ul>
                      </div>{/* end latest-info */}
                      <div className="main-info latest-desc">
                        <div className="row">
                          <div className="col-xs-10 col-sm-10 main-title">
                            <a href="#">Secure Travel Tips</a>
                            <p>Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                        <span className="arrow"><a href="#"><i className="fa fa-angle-right" /></a></span>
                      </div>{/* end latest-desc */}
                    </div>{/* end latest-block */}
                  </div>{/* end columns */}
                </div>{/* end row */}
                <div className="view-all text-center">
                  <a href="#" className="btn btn-orange">View All</a>
                </div>{/* end view-all */}  
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end latest-blog */}         
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
        <div id="popup-ad" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="popup-ad-text">
                      <h4>Get</h4>
                      <h2><span>20%</span> off</h2>
                      <h4>on all hotels booking</h4>
                      <p></p>
                      <a href="#" className="btn btn-orange">Book Now</a>
                    </div>{/* end popup-ad-text */}
                  </div>{/* end columns */}
                  <div className="col-xs-12 col-sm-6">
                    <div className="popup-ad-img">
                      <img src="../../Dist/images/3111.jpg" className="img-responsive" /> 
                    </div>{/* end popup-ad-img */}
                  </div>{/* end columns */}
                </div>{/* end row */}
              </div>{/* end modal-bpdy */}
            </div>{/* end modal-content */}
          </div>{/* end modal-dialog */}
        </div>
        {/* end popup-ad */}
      </div>


        )
    }
}

export default connect(state => state)(Home);