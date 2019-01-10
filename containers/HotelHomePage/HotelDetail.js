import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';



class HotelDetail  extends Component {

  componentDidMount(){
    document.title = "Hotel Detail"

     

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
       
        {/*================== PAGE-COVER ===============*/}
        <section className="page-cover" id="cover-hotel-detail">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">Hotel Detail </h1>
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">Hotel Detail </li>
                </ul>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end page-cover */}
        {/*===== INNERPAGE-WRAPPER ====*/}
        <section className="innerpage-wrapper">
          <div id="hotel-details" className="innerpage-section-padding">
            <div className="container">
              <div className="row">         
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 content-side">
                  <div className="detail-slider">
                    <div className="feature-slider">
                      <div><img src="../../Dist/images/1871_sw_01_p_1024x768.jpg" className="img-responsive" alt="feature-img" /></div>
                       </div>{/* end feature-slider */}
                    <div className="feature-slider-nav">
                     {/* <div><img src="../../Dist/images/h-feature-thumb-1.jpg" className="img-responsive" alt="feature-thumb" /></div>
                                            <div><img src="../../Dist/images/h-feature-thumb-2.jpg" className="img-responsive" alt="feature-thumb" /></div>
                                            <div><img src="../../Dist/images/h-feature-thumb-3.jpg" className="img-responsive" alt="feature-thumb" /></div>
                                            <div><img src="../../Dist/images/h-feature-thumb-4.jpg" className="img-responsive" alt="feature-thumb" /></div>
                                            <div><img src="../../Dist/images/h-feature-thumb-5.jpg" className="img-responsive" alt="feature-thumb" /></div>
                                         */} </div>{/* end feature-slider-nav */}
                  </div>  {/* end detail-slider */}
                  <div className="detail-tabs">
                    <ul className="nav nav-tabs nav-justified">
                      <li className="active"><a href="#hotel-overview" data-toggle="tab">Hotel Overview</a></li>
                      <li><a href="#restaurant" data-toggle="tab">Restaurant</a></li>
                      <li><a href="#pick-up" data-toggle="tab">Pick Up Services</a></li>
                      <li><a href="#luxury-gym" data-toggle="tab">Luxury Gym</a></li>
                      <li><a href="#sports-club" data-toggle="tab">Sports Club</a></li>
                    </ul>
                    <div className="tab-content">
                      <div id="hotel-overview" className="tab-pane in active">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src="../../Dist/images/hotel-contessa.jpg" className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Hotel Overview</h3>
                            <p></p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end hotel-overview */}
                      <div id="restaurant" className="tab-pane">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src="../../Dist/images/3.jpg" className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Restaurant</h3>
                            <p></p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end restaurant */}
                      <div id="pick-up" className="tab-pane">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src="../../Dist/images/1.jpg" className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Pick Up Services</h3>
                            <p> <br /> </p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end pick-up */}
                      <div id="luxury-gym" className="tab-pane">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src="../../Dist/images/e1c01c588d51934e3a4de0e4e83e47c5.jpg" className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Luxury Gym</h3>
                            <p></p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end luxury-gym */}
                      <div id="sports-club" className="tab-pane">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src="../../Dist/images/r0_59_1158_713_w1200_h678_fmax.jpg" className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Sports Club</h3>
                            <p><br /> </p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end sports-club */}
                    </div>{/* end tab-content */}
                  </div>{/* end detail-tabs */}
                  <div className="available-blocks" id="available-rooms">
                    <h2>Available Rooms</h2>
                    <div className="list-block main-block room-block">
                      <div className="list-content">
                        <div className="main-img list-img room-img">
                          <a href="#">
                            <img src="../../Dist/images/1-hotel-central-parkmanhattan-nyc-ericlaignel__large.jpg" className="img-responsive" alt="room-img" />
                          </a>
                          <div className="main-mask">
                            <ul className="list-unstyled list-inline offer-price-1">
                              <li className="price">$150.00<span className="divider">|</span><span className="pkg">7 Nights</span></li>
                              <li className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star lightgrey" /></span>
                              </li>
                            </ul>
                          </div>{/* end main-mask */}
                        </div>{/* end room-img */}
                        <div className="list-info room-info">
                          <h3 className="block-title"><a href="#">Single Room</a></h3>
                          <p className="block-minor">Max Guests:02</p>
                          <p></p>
                          <a href="#" className="btn btn-orange btn-lg">View More</a>
                        </div>{/* end room-info */}
                      </div>{/* end list-content */}
                    </div>{/* end room-block */}
                    <div className="list-block main-block room-block">
                      <div className="list-content">
                        <div className="main-img list-img room-img">
                          <a href="#">
                            <img src="../../Dist/images/jeju-oriental-hotel.jpg" className="img-responsive" alt="room-img" />
                          </a>
                          <div className="main-mask">
                            <ul className="list-unstyled list-inline offer-price-1">
                              <li className="price">$250.00<span className="divider">|</span><span className="pkg">7 Nights</span></li>
                              <li className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star lightgrey" /></span>
                              </li>
                            </ul>
                          </div>{/* end main-mask */}
                        </div>{/* end room-img */}
                        <div className="list-info room-info">
                          <h3 className="block-title"><a href="#">Double Room</a></h3>
                          <p className="block-minor">Max Guest:03</p>
                          <p></p>
                          <a href="#" className="btn btn-orange btn-lg">View More</a>
                        </div>{/* end room-info */}
                      </div>{/* end list-content */}
                    </div>{/* end room-block */}
                    <div className="list-block main-block room-block">
                      <div className="list-content">
                        <div className="main-img list-img room-img">
                          <a href="#">
                            <img src="../../Dist/images/crown-astana-villas-seminyak.jpg" className="img-responsive" alt="room-img" />
                          </a>
                          <div className="main-mask">
                            <ul className="list-unstyled list-inline offer-price-1">
                              <li className="price">$350.00<span className="divider">|</span><span className="pkg">7 Nights</span></li>
                              <li className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star lightgrey" /></span>
                              </li>
                            </ul>
                          </div>{/* end main-mask */}
                        </div>{/* end room-img */}
                        <div className="list-info room-info">
                          <h3 className="block-title"><a href="#">Twin Room</a></h3>
                          <p className="block-minor">Max Guest:04</p>
                          <p></p>
                          <a href="#" className="btn btn-orange btn-lg">View More</a>
                        </div>{/* end room-info */}
                      </div>{/* end list-content */}
                    </div>{/* end room-block */}
                    <div className="list-block main-block room-block">
                      <div className="list-content">
                        <div className="main-img list-img room-img">
                          <a href="#">
                            <img src="../../Dist/images/aria-hotel-deluxe-room.tif" className="img-responsive" alt="room-img" />
                          </a>
                          <div className="main-mask">
                            <ul className="list-unstyled list-inline offer-price-1">
                              <li className="price">$558.00<span className="divider">|</span><span className="pkg">7 Nights</span></li>
                              <li className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star lightgrey" /></span>
                              </li>
                            </ul>
                          </div>{/* end main-mask */}
                        </div>{/* end room-img */}
                        <div className="list-info room-info">
                          <h3 className="block-title"><a href="#">Deluxe Room</a></h3>
                          <p className="block-minor">Max Guest:05</p>
                          <p></p>
                          <a href="#" className="btn btn-orange btn-lg">View More</a>
                        </div>{/* end room-info */}
                      </div>{/* end list-content */}
                    </div>{/* end room-block */}
                  </div>{/* end available-rooms */}
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
                    <h2 className="selected-price">$568.00 <span>De Forte</span></h2>
                    <div className="booking-form">
                      <h3>Book Hotel</h3>
                      <p>Find your dream hotel today</p>
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
                          <input type="text" className="form-control dpd1" placeholder="Arrival Date" required />                                           <i className="fa fa-calendar" />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control dpd2" placeholder="Departure Date" required />                                           <i className="fa fa-calendar" />
                        </div>
                        <div className="row">
                          <div className="col-sm-6 col-md-12 col-lg-6 no-sp-r">
                            <div className="form-group right-icon">
                              <select className="form-control">
                                <option selected>Rooms</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                              <i className="fa fa-angle-down" />
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-12 col-lg-6 no-sp-l">    
                            <div className="form-group right-icon">
                              <select className="form-control">
                                <option selected>Beds</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                              <i className="fa fa-angle-down" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 col-md-12 col-lg-6 no-sp-r">
                            <div className="form-group right-icon">
                              <select className="form-control">
                                <option selected>Adults</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                              <i className="fa fa-angle-down" />
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-12 col-lg-6 no-sp-l">    
                            <div className="form-group right-icon">
                              <select className="form-control">
                                <option selected>Childs</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                              <i className="fa fa-angle-down" />
                            </div>
                          </div>
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
          </div>{/* end hotel-details */}
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

export default connect(state => state)(HotelDetail);