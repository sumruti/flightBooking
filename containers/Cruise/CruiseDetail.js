import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';



class cruiseDetail  extends Component {

  componentDidMount(){
    document.title = "Cruise Detail"

/*      
 $(document).ready(function(){
 $('.feature-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.feature-slider-nav',
  autoplay: true,
  autoplaySpeed: 4000,
  adaptiveHeight: true
});
});*/

  }
render () {



 return (

        <div>

        {/* end SEARCH overlay */}

        {/*============= TOP-BAR ===========*/}
         <TopBar/>
        {/* end top-bar */}

        <Header/>

         <div>
        {/*================== PAGE-COVER ================*/}
        <section className="page-cover" id="cover-cruise-detail">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">Cruise Detail </h1>
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">Cruise Detail </li>
                </ul>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end page-cover */}
        {/*==== INNERPAGE-WRAPPER =====*/}
        <section className="innerpage-wrapper">
          <div id="cruise-details" className="innerpage-section-padding">
            <div className="container">
              <div className="row">         
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 content-side">
                  <div className="detail-slider">
                    <div className="feature-slider">
                      <div><img src="../../Dist/images/Sport-Yacht-Widescreen-Wallpaper.jpg" className="img-responsive" alt="feature-img" /></div>
                      {/*<div><img src="../../Dist/images/crs-feature-2.jpg" className="img-responsive" alt="feature-img" /></div>
                                             <div><img src="../../Dist/images/crs-feature-3.jpg" className="img-responsive" alt="feature-img" /></div>
                                             <div><img src="../../Dist/images/crs-feature-4.jpg" className="img-responsive" alt="feature-img" /></div>
                                             <div><img src="../../Dist/images/crs-feature-5.jpg" className="img-responsive" alt="feature-img" /></div>
                                          */} </div>{/* end feature-slider */}
                    <div className="feature-slider-nav">
                    {/*  <div><img src="../../Dist/images/crs-feature-thumb-1.jpg" className="img-responsive" alt="feature-thumb" /></div>
                                           <div><img src="../../Dist/images/crs-feature-thumb-2.jpg" className="img-responsive" alt="feature-thumb" /></div>
                                           <div><img src="../../Dist/images/crs-feature-thumb-3.jpg" className="img-responsive" alt="feature-thumb" /></div>
                                           <div><img src="../../Dist/images/crs-feature-thumb-4.jpg" className="img-responsive" alt="feature-thumb" /></div>
                                           <div><img src="../../Dist/images/crs-feature-thumb-5.jpg" className="img-responsive" alt="feature-thumb" /></div>
                                        */} </div>{/* end feature-slider-nav */}
                    <ul className="list-unstyled features tour-features">
                      <li><div className="f-icon"><i className="fa fa-wheelchair" /></div><div className="f-text"><p className="f-heading">Seats</p><p className="f-data">25</p></div></li>
                      <li><div className="f-icon"><i className="fa fa-calendar" /></div><div className="f-text"><p className="f-heading">Duration</p><p className="f-data">7 DAYS</p></div></li>
                      <li><div className="f-icon"><i className="fa fa-clock-o" /></div><div className="f-text"><p className="f-heading">Discount</p><p className="f-data">10% OFF</p></div></li>
                    </ul>
                  </div>{/* end detail-slider */}  
                  <div className="detail-tabs">
                    <ul className="nav nav-tabs nav-justified">
                      <li className="active"><a href="#cruise-information" data-toggle="tab">Cruise Information</a></li>
                      <li><a href="#crs-features" data-toggle="tab">Features</a></li>
                      <li><a href="#cabins" data-toggle="tab">Cabins</a></li>
                      <li><a href="#reviews" data-toggle="tab">Reviews</a></li>
                    </ul>
                    <div className="tab-content">
                      <div id="cruise-information" className="tab-pane in active">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src="../../Dist/images/9.jpg" className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Cruise Information</h3>
                            <p></p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end cruise-information */}
                      <div id="crs-features" className="tab-pane">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src="../../Dist/images/9145-62299.jpg" className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Features</h3>
                            <p></p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end crs-features */}
                      <div id="cabins" className="tab-pane">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src="../../Dist/images/inside-cabin-perks-hero.jpg" className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Cabins</h3>
                            <p><br /> </p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end cabins */}
                      <div id="reviews" className="tab-pane">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src="../../Dist/images/dpsak-exterior-0051-hor-feat.jpg" className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Reviews</h3>
                            <p></p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end reviews */}
                    </div>{/* end tab-content */}
                  </div>{/* end detail-tabs */}
                  <div className="available-blocks" id="available-tours">
                    <h2>Available Tours</h2>
                    <div className="list-block main-block crs-list-block">
                      <div className="list-content">
                        <div className="main-img list-img crs-list-img">
                          <a href="cruise-detail-right-sidebar.html">
                            <img src="../../Dist/images/carnival-victory-cruise-ship.jpg" className="img-responsive" alt="cruise-img" />
                          </a>
                          <div className="main-mask">
                            <ul className="list-unstyled list-inline offer-price-1">
                              <li className="price">$1300<span className="divider">|</span><span className="pkg">6 Night, 7 Days</span></li>
                              <li className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star lightgrey" /></span>
                              </li>
                            </ul>
                          </div>{/* end main-mask */}
                        </div>{/* end crs-list-img */}
                        <div className="list-info crs-list-info">
                          <h3 className="block-title"><a href="cruise-detail-right-sidebar.html">Belgium to Greek</a></h3>
                          <p className="block-minor">Include Port Taxes</p>
                          <p> </p>
                          <a href={null} className="btn btn-orange btn-lg">View More</a>
                        </div>{/* end crs-list-info */}
                      </div>{/* end list-content */}
                    </div>{/* end crs-list-block */}
                    <div className="list-block main-block crs-list-block">
                      <div className="list-content">
                        <div className="main-img list-img crs-list-img">
                          <a href={null}>
                            <img src="../../Dist/images/cruise-ship-crowded-lounge-decks-fast-tl-p-hd-0985_ej8wh6wp__F0000.png" className="img-responsive" alt="cruise-img" />
                          </a>
                          <div className="main-mask">
                            <ul className="list-unstyled list-inline offer-price-1">
                              <li className="price">$1400<span className="divider">|</span><span className="pkg">6 Night, 7 Days</span></li>
                              <li className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star lightgrey" /></span>
                              </li>
                            </ul>
                          </div>{/* end main-mask */}
                        </div>{/* end crs-list-img */}
                        <div className="list-info crs-list-info">
                          <h3 className="block-title"><a href={null}>Italy to Spain </a></h3>
                          <p className="block-minor">Include Port Taxes</p>
                          <p> </p>
                          <a href={null} className="btn btn-orange btn-lg">View More</a>
                        </div>{/* end crs-list-info */}
                      </div>{/* end list-content */}
                    </div>{/* end crs-list-block */}
                    <div className="list-block main-block crs-list-block">
                      <div className="list-content">
                        <div className="main-img list-img crs-list-img">
                          <a href={null}>
                            <img src="../../Dist/images/cruise-ship-luxury-interior-atrium-hall-and-promenade-adventure-of-the-seas_rux8q-mue_thumbnail-full01.png" className="img-responsive" alt="cruise-img" />
                          </a>
                          <div className="main-mask">
                            <ul className="list-unstyled list-inline offer-price-1">
                              <li className="price">$1120<span className="divider">|</span><span className="pkg">6 Night, 7 Days</span></li>
                              <li className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star lightgrey" /></span>
                              </li>
                            </ul>
                          </div>{/* end main-mask */}
                        </div>{/* end crs-list-img */}
                        <div className="list-info crs-list-info">
                          <h3 className="block-title"><a href={null}>Alacati to Istanbul </a></h3>
                          <p className="block-minor">Include Port Taxes</p>
                          <p> </p>
                          <a href={null} className="btn btn-orange btn-lg">View More</a>
                        </div>{/* end crs-list-info */}
                      </div>{/* end list-content */}
                    </div>{/* end crs-list-block */}
                    <div className="list-block main-block crs-list-block">
                      <div className="list-content">
                        <div className="main-img list-img crs-list-img">
                          <a href={null}>
                            <img src="../../Dist/images/156-hd-cruise.jpg" className="img-responsive" alt="cruise-img" />
                          </a>
                          <div className="main-mask">
                            <ul className="list-unstyled list-inline offer-price-1">
                              <li className="price">$1250<span className="divider">|</span><span className="pkg">6 Night, 7 Days</span></li>
                              <li className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star lightgrey" /></span>
                              </li>
                            </ul>
                          </div>{/* end main-mask */}
                        </div>{/* end crs-list-img */}
                        <div className="list-info crs-list-info">
                          <h3 className="block-title"><a href={null}>France to Mardin </a></h3>
                          <p className="block-minor">Include Port Taxes</p>
                          <p> </p>
                          <a href={null} className="btn btn-orange btn-lg">View More</a>
                        </div>{/* end crs-list-info */}
                      </div>{/* end list-content */}
                    </div>{/* end crs-list-block */}
                  </div>{/* end available-tours */}
                  <div className="pages">
                    <ol className="pagination">
                      <li><a href="#" aria-label="Previous"><span aria-hidden="true"><i className="fa fa-angle-left" /></span></a></li>
                      <li className="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#" aria-label="Next"><span aria-hidden="true"><i className="fa fa-angle-right" /></span></a></li>
                    </ol>
                  </div>{/* end pages */}
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-12 col-md-3 side-bar right-side-bar">
                  <div className="side-bar-block booking-form-block">
                    <h2 className="selected-price">$98.00 <span>Small Cruise</span></h2>
                    <div className="booking-form">
                      <h3>Book Cruise</h3>
                      <p>Find your dream cruise today</p>
                      <form>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="First Name" required />                                       
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Last Name" required />                                       
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" placeholder="Email" required />                                       
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Phone" required />                                       
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Country" required />                                       
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control dpd1" placeholder="Pick-Up Date" required />                                           <i className="fa fa-calendar" />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control dpd2" placeholder="Drop-Off Date" required />                                          <i className="fa fa-calendar" />
                        </div>
                        <div className="form-group right-icon">
                          <select className="form-control">
                            <option selected>Drop-Off Hour</option>
                            <option>24 hrs</option>
                            <option>35 hrs</option>
                            <option>48 hrs</option>
                          </select>
                          <i className="fa fa-angle-down" />
                        </div>
                        <div className="form-group right-icon">
                          <select className="form-control">
                            <option selected>Drop-Off Mins</option>
                            <option>60 min</option>
                            <option>45 min</option>
                            <option>30 min</option>
                          </select>
                          <i className="fa fa-angle-down" />
                        </div>
                        <div className="form-group right-icon">
                          <select className="form-control">
                            <option selected>Payment Method</option>
                            <option>Credit Card</option>
                            <option>Paypal</option>
                          </select>
                          <i className="fa fa-angle-down" />
                        </div>
                        <div className="checkbox custom-check">
                          <input type="checkbox" id="check01" name="checkbox" />
                          <label htmlFor="check01"><span><i className="fa fa-check" /></span>By continuing, you are agree to the <a href="#">Terms &amp; Conditions.</a></label>
                        </div>
                        <button className="btn btn-block btn-orange">Confirm Booking</button>
                      </form>
                    </div>{/* end booking-form */}
                  </div>{/* end side-bar-block */}
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-12">
                      <div className="side-bar-block main-block ad-block">
                        <div className="main-img ad-img">
                          <a href="#">
                            <img src="../../Dist/images/car-ad.jpg" className="img-responsive" alt="car-ad" />
                            <div className="ad-mask">
                              <div className="ad-text">
                                <span>Luxury</span>
                                <h2>Car</h2>
                                <span>Offer</span>
                              </div>{/* end ad-text */}
                            </div>{/* end columns */}
                          </a>
                        </div>{/* end ad-img */}
                      </div>{/* end side-bar-block */}
                    </div>{/* end columns */}
                    <div className="col-xs-12 col-sm-6 col-md-12">    
                      <div className="side-bar-block support-block">
                        <h3>Need Help</h3>
                        <p> Est atqui timeam mnesarchum.</p>
                        <div className="support-contact">
                          <span><i className="fa fa-phone" /></span>
                          <p>+1 123 1234567</p>
                        </div>{/* end support-contact */}
                      </div>{/* end side-bar-block */}
                    </div>{/* end columns */}
                  </div>{/* end row */}
                </div>{/* end columns */}  
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end cruise-detail */}
        </section>{/* end innerpage-wrapper */}
        {/*======================= BEST FEATURES =====================*/}
        <section id="best-features" className="banner-padding black-features">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-dollar" /></span>
                  <h3>Best Price Guarantee</h3>
                  <p></p>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-lock" /></span>
                  <h3>Safe and Secure</h3>
                  <p></p>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-thumbs-up" /></span>
                  <h3>Best Travel Agents</h3>
                  <p></p>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-bars" /></span>
                  <h3>Travel Guidelines</h3>
                  <p></p>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end best-features */}
      </div>

         
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
        <FooterBottom/>
      </div>


    )
   }

}

export default connect(state => state)(cruiseDetail);