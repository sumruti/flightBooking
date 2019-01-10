import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';



class cardetails  extends Component {

  componentDidMount(){
    document.title = "Car Detail"

     

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
        {/*================ PAGE-COVER ===============*/}
        <section className="page-cover" id="cover-car-detail">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">Car Detail </h1>
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">Car Detail </li>
                </ul>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end page-cover */}
        {/*==== INNERPAGE-WRAPPER =====*/}
        <section className="innerpage-wrapper">
          <div id="car-details" className="innerpage-section-padding">
            <div className="container">
              <div className="row">         
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 content-side">
                  <div className="detail-slider">
                    <div className="feature-slider">
                      <div><img src="../../Dist/images/1447425905-p90144341-highres-rolls-royce-ghost-se (1).jpg" className="img-responsive" alt="feature-img" /></div>
                     {/* <div><img src="../../Dist/images/car-feature-2.jpg" className="img-responsive" alt="feature-img" /></div>
                                           <div><img src="../../Dist/images/car-feature-3.jpg" className="img-responsive" alt="feature-img" /></div>
                                           <div><img src="../../Dist/images/car-feature-4.jpg" className="img-responsive" alt="feature-img" /></div>
                                           <div><img src="../../Dist/images/car-feature-5.jpg" className="img-responsive" alt="feature-img" /></div>
                                         */}</div>{/* end feature-slider */}
                    <div className="feature-slider-nav">
                      {/*<div><img src="../../Dist/images/car-feature-thumb-1.jpg" className="img-responsive" alt="feature-thumb" /></div>
                                            <div><img src="../../Dist/images/car-feature-thumb-2.jpg" className="img-responsive" alt="feature-thumb" /></div>
                                            <div><img src="../../Dist/images/car-feature-thumb-3.jpg" className="img-responsive" alt="feature-thumb" /></div>
                                            <div><img src="../../Dist/images/car-feature-thumb-4.jpg" className="img-responsive" alt="feature-thumb" /></div>
                                            <div><img src="../../Dist/images/car-feature-thumb-5.jpg" className="img-responsive" alt="feature-thumb" /></div>
                                          */}</div>{/* end feature-slider-nav */}
                    <ul className="list-unstyled features tour-features">
                      <li><div className="f-icon"><i className="fa fa-wheelchair" /></div><div className="f-text"><p className="f-heading">Seats</p><p className="f-data">4</p></div></li>
                      <li><div className="f-icon"><i className="fa fa-calendar" /></div><div className="f-text"><p className="f-heading">Duration</p><p className="f-data">7 DAYS</p></div></li>
                      <li><div className="f-icon"><i className="fa fa-clock-o" /></div><div className="f-text"><p className="f-heading">Discount</p><p className="f-data">10% OFF</p></div></li>
                    </ul>
                  </div>  {/* end detail-slider */}
                  <div className="detail-tabs">
                    <ul className="nav nav-tabs nav-justified">
                      <li className="active"><a href="#car-information" data-toggle="tab">Car Information</a></li>
                      <li><a href="#cr-features" data-toggle="tab">Features</a></li>
                      <li><a href="#rental-info" data-toggle="tab">Rental Info</a></li>
                    </ul>
                    <div className="tab-content">
                      <div id="car-information" className="tab-pane in active">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src="../../Dist/images/5fc45bd76dee08affad8e9bf907a1c40.jpg" className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Car Information</h3>
                            <p></p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end car-information */}
                      <div id="cr-features" className="tab-pane">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src="../../Dist/images/ny_lead1.jpg" className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Features</h3>
                            <p><br /> </p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end cr-features */}
                      <div id="rental-info" className="tab-pane">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src="../../Dist/images/1447425905-p90144341-highres-rolls-royce-ghost-se.jpg" className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Rental Info</h3>
                            <p></p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end rental-info */}
                    </div>{/* end tab-content */}
                  </div>{/* end detail-tabs */}
                  <div className="available-blocks" id="available-cars">
                    <h2>Available Cars</h2>
                    <div className="list-block main-block cr-list-block">
                      <div className="list-content">
                        <div className="main-img list-img cr-list-img">
                          <a href="car-detail-right-sidebar.html">
                            <img src="../../Dist/images/Bentley-Mulsanne_EWB-2017-1600-04.jpg" className="img-responsive" alt="car-img" />
                          </a>
                          <div className="main-mask">
                            <ul className="list-unstyled list-inline offer-price-1">
                              <li className="price">$1250.00<span className="divider">|</span><span className="pkg">7 Days Tour</span></li>
                              <li className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star lightgrey" /></span>
                              </li>
                            </ul>
                          </div>{/* end main-mask */}
                        </div>{/* end cr-list-img */}
                        <div className="list-info cr-list-info">
                          <h3 className="block-title"><a href="car-detail-right-sidebar.html">Luxury</a></h3>
                          <p className="block-minor">IWO</p>
                          <ul className="list-unstyled list-inline car-features">
                            <li><span><i className="fa fa-user" /></span>04</li>
                            <li><span><i className="fa fa-briefcase" /></span>04</li>
                            <li><span><i className="fa fa-map-marker" /></span>Gps</li>
                            <li><span><i className="fa fa-tint" /></span>Fuel</li>
                            <li><span><i className="fa fa-music" /></span>Music</li>
                            <li><span><i className="fa fa-tv" /></span>TV</li>
                          </ul>
                          <a href="car-detail-right-sidebar.html" className="btn btn-orange btn-lg">View More</a>
                        </div>{/* end crs-list-info */}
                      </div>{/* end list-content */}
                    </div>{/* end cr-list-block */}
                    <div className="list-block main-block cr-list-block">
                      <div className="list-content">
                        <div className="main-img list-img cr-list-img">
                          <a href="car-detail-right-sidebar.html">
                            <img src="../../Dist/images/Bentley-Continental-GT-new-car-UK-848406.jpg" className="img-responsive" alt="car-img" />
                          </a>
                          <div className="main-mask">
                            <ul className="list-unstyled list-inline offer-price-1">
                              <li className="price">$1250.00<span className="divider">|</span><span className="pkg">7 Days Tour</span></li>
                              <li className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star lightgrey" /></span>
                              </li>
                            </ul>
                          </div>{/* end main-mask */}
                        </div>{/* end cr-list-img */}
                        <div className="list-info cr-list-info">
                          <h3 className="block-title"><a href="car-detail-right-sidebar.html">Luxury</a></h3>
                          <p className="block-minor">BMW</p>
                          <ul className="list-unstyled list-inline car-features">
                            <li><span><i className="fa fa-user" /></span>04</li>
                            <li><span><i className="fa fa-briefcase" /></span>04</li>
                            <li><span><i className="fa fa-map-marker" /></span>Gps</li>
                            <li><span><i className="fa fa-tint" /></span>Fuel</li>
                            <li><span><i className="fa fa-music" /></span>Music</li>
                            <li><span><i className="fa fa-tv" /></span>TV</li>
                          </ul>
                          <a href="car-detail-right-sidebar.html" className="btn btn-orange btn-lg">View More</a>
                        </div>{/* end crs-list-info */}
                      </div>{/* end list-content */}
                    </div>{/* end cr-list-block */}
                    <div className="list-block main-block cr-list-block">
                      <div className="list-content">
                        <div className="main-img list-img cr-list-img">
                          <a href="car-detail-right-sidebar.html">
                            <img src="../../Dist/images/2017-Cadillac-Escalade.jpeg" className="img-responsive" alt="car-img" />
                          </a>
                          <div className="main-mask">
                            <ul className="list-unstyled list-inline offer-price-1">
                              <li className="price">$1250.00<span className="divider">|</span><span className="pkg">7 Days Tour</span></li>
                              <li className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star lightgrey" /></span>
                              </li>
                            </ul>
                          </div>{/* end main-mask */}
                        </div>{/* end cr-list-img */}
                        <div className="list-info cr-list-info">
                          <h3 className="block-title"><a href="car-detail-right-sidebar.html">Luxury</a></h3>
                          <p className="block-minor">AUDI</p>
                          <ul className="list-unstyled list-inline car-features">
                            <li><span><i className="fa fa-user" /></span>04</li>
                            <li><span><i className="fa fa-briefcase" /></span>04</li>
                            <li><span><i className="fa fa-map-marker" /></span>Gps</li>
                            <li><span><i className="fa fa-tint" /></span>Fuel</li>
                            <li><span><i className="fa fa-music" /></span>Music</li>
                            <li><span><i className="fa fa-tv" /></span>TV</li>
                          </ul>
                          <a href="car-detail-right-sidebar.html" className="btn btn-orange btn-lg">View More</a>
                        </div>{/* end crs-list-info */}
                      </div>{/* end list-content */}
                    </div>{/* end cr-list-block */}
                    <div className="list-block main-block cr-list-block">
                      <div className="list-content">
                        <div className="main-img list-img cr-list-img">
                          <a href="car-detail-right-sidebar.html">
                            <img src="../../Dist/images/428c0bd49ee31ba072f9007873d183ea.jpg" className="img-responsive" alt="car-img" />
                          </a>
                          <div className="main-mask">
                            <ul className="list-unstyled list-inline offer-price-1">
                              <li className="price">$1250.00<span className="divider">|</span><span className="pkg">7 Days Tour</span></li>
                              <li className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star lightgrey" /></span>
                              </li>
                            </ul>
                          </div>{/* end main-mask */}
                        </div>{/* end cr-list-img */}
                        <div className="list-info cr-list-info">
                          <h3 className="block-title"><a href="car-detail-right-sidebar.html">Luxury</a></h3>
                          <p className="block-minor">IWO</p>
                          <ul className="list-unstyled list-inline car-features">
                            <li><span><i className="fa fa-user" /></span>04</li>
                            <li><span><i className="fa fa-briefcase" /></span>04</li>
                            <li><span><i className="fa fa-map-marker" /></span>Gps</li>
                            <li><span><i className="fa fa-tint" /></span>Fuel</li>
                            <li><span><i className="fa fa-music" /></span>Music</li>
                            <li><span><i className="fa fa-tv" /></span>TV</li>
                          </ul>
                          <a href="car-detail-right-sidebar.html" className="btn btn-orange btn-lg">View More</a>
                        </div>{/* end crs-list-info */}
                      </div>{/* end list-content */}
                    </div>{/* end cr-list-block */}
                  </div>{/* end available-cars */}
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
                    <h2 className="selected-price">$98.00 <span>BMW</span></h2>
                    <div className="booking-form">
                      <h3>Book A Car</h3>
                      <p>Find your dream car today</p>
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
                        <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum.</p>
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
          </div>{/* end car-detail */}
        </section>{/* end innerpage-wrapper */}
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

export default connect(state => state)(cardetails);