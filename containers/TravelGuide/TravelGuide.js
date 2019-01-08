import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';



class TravelGuide  extends Component {

  componentDidMount(){
    document.title = "Travel Guide"

  }
render () {



 return (

        <div>

        {/* end SEARCH overlay */}

        {/*============= TOP-BAR ===========*/}
         <TopBar/>
        {/* end top-bar */}

        <Header/>
        {/*================== PAGE-COVER ===============*/}
        <section className="page-cover" id="cover-travel-guide">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">Travel Guide</h1>
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">Travel Guide</li>
                </ul>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end page-cover */}
        {/*===== INNERPAGE-WRAPPER ====*/}
        <section className="innerpage-wrapper">
          <div id="travel-guide" className="innerpage-section-padding">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 content-side">
                  <div className="detail-tabs">
                    <ul className="nav nav-tabs nav-justified">
                      <li className="active"><a href="#tv-guide-overview" data-toggle="tab">Overview</a></li>
                      <li><a href="#tv-guide-attractions" data-toggle="tab">Attractions</a></li>
                      <li><a href="#tv-guide-hotels" data-toggle="tab">Hotels</a></li>
                      <li><a href="#tv-guide-gym" data-toggle="tab">Luxury Gym</a></li>
                      <li><a href="#tv-guide-sports" data-toggle="tab">Sports Club</a></li>
                    </ul>
                    <div className="tab-content">
                      <div id="tv-guide-overview" className="tab-pane in active">
                        <img src="../../Dist/images/vel-metro-guide-app-easier-download.png" className="img-responsive" alt="tour-guide-img" />
                        <div className="tab-text">
                          <h3>Sydney Overview</h3>
                          <div className="table-responsive">
                            <table className="table table-striped">
                              <tbody>
                                <tr>
                                  <td>Country</td>
                                  <td>Australia</td>
                                </tr>
                                <tr>
                                  <td>City</td>
                                  <td>Sydney</td>
                                </tr>
                                <tr>
                                  <td>Area</td>
                                  <td>205.2 KM²</td>
                                </tr>
                                <tr>
                                  <td>Local Time</td>
                                  <td>Thursday 12:34PM</td>
                                </tr>
                                <tr>
                                  <td>Currency</td>
                                  <td>Australian Dollar</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>{/* end table-responsive */}
                          <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                          <p></p>
                        </div>{/* end tab-text */}
                      </div>{/* end tv-guide-overview */}
                      <div id="tv-guide-attractions" className="tab-pane">
                        <div className="row">
                          <div className="owl-carousel owl-theme" id="owl-attractions">
                            <div className="col-xs-12">
                              <div className="item text-center">
                                <a href={null}><img src="../../Dist/images/waverley_Cemetery___073_lg.jpg" className="img-responsive" alt="attraction-img" /></a>
                                <div className="tab-text">
                                  <a href={null}><h3>Sunrise Waverley</h3></a>
                                  <p className="attract-loc"><span><i className="fa fa-map-marker" /></span>Australia</p>
                                  <div className="table-responsive">
                                    <table className="table table-striped">
                                      <tbody>
                                        <tr>
                                          <td>Country</td>
                                          <td>Australia</td>
                                        </tr>
                                        <tr>
                                          <td>City</td>
                                          <td>Sydney</td>
                                        </tr>
                                        <tr>
                                          <td>Area</td>
                                          <td>205.2 KM²</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>{/* end table-responsive */}
                                  <p></p>
                                </div>{/* end tab-text */}
                              </div>{/* end item */}
                            </div>{/* end columns */}
                            <div className="col-xs-12">
                              <div className="item text-center">
                                <a href={null}><img src="../../Dist/images/gettyimages-144761033-612x612.jpg" className="img-responsive" alt="attraction-img" /></a>
                                <div className="tab-text">
                                  <a href={null}><h3>Sydney Harbor Bridge</h3></a>
                                  <p className="attract-loc"><span><i className="fa fa-map-marker" /></span>Sydney</p>
                                  <div className="table-responsive">
                                    <table className="table table-striped">
                                      <tbody>
                                        <tr>
                                          <td>Country</td>
                                          <td>Australia</td>
                                        </tr>
                                        <tr>
                                          <td>City</td>
                                          <td>Sydney</td>
                                        </tr>
                                        <tr>
                                          <td>Area</td>
                                          <td>205.2 KM²</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>{/* end table-responsive */}
                                  <p></p>
                                </div>{/* end tab-text */}
                              </div>{/* end item */}
                            </div>{/* end columns */}
                            <div className="col-xs-12">
                              <div className="item text-center">
                                <a href="#"><img src="../../Dist/images/66092.jpg" className="img-responsive" alt="attraction-img" /></a>
                                <div className="tab-text">
                                  <a href="#"><h3>Sydney Bondibeach</h3></a>
                                  <p className="attract-loc"><span><i className="fa fa-map-marker" /></span>Sydney</p>
                                  <div className="table-responsive">
                                    <table className="table table-striped">
                                      <tbody>
                                        <tr>
                                          <td>Country</td>
                                          <td>Australia</td>
                                        </tr>
                                        <tr>
                                          <td>City</td>
                                          <td>Sydney</td>
                                        </tr>
                                        <tr>
                                          <td>Area</td>
                                          <td>205.2 KM²</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>{/* end table-responsive */}
                                  <p></p>
                                </div>{/* end tab-text */}
                              </div>{/* end item */}
                            </div>{/* end columns */}
                          </div>{/* end owl-attractions */}
                        </div>{/* end row */}
                      </div>{/* end tv-guide-attractions */}
                      <div id="tv-guide-hotels" className="tab-pane">
                        <div className="list-block main-block h-list-block">
                          <div className="list-content">
                            <div className="main-img list-img h-list-img">
                              <a href={null}>
                                <img src="../../Dist/images/7091_ho_00_p_2048x1536.jpg" className="img-responsive" alt="hotel-img" />
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
                            </div>{/* end h-list-img */}
                            <div className="list-info h-list-info">
                              <h3 className="block-title"><a href={null}>Herta Berlin Hotel</a></h3>
                              <p className="block-minor">From: Sydney</p>
                              <p></p>
                              <a href={null} className="btn btn-orange btn-lg">View More</a>
                            </div>{/* end h-list-info */}
                          </div>{/* end list-content */}
                        </div>{/* end h-list-block */}
                        <div className="list-block main-block h-list-block">
                          <div className="list-content">
                            <div className="main-img list-img h-list-img">
                              <a href={null}>
                                <img src="../../Dist/images/0357_ho_00_p_2048x1536.jpg" className="img-responsive" alt="hotel-img" />
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
                            </div>{/* end h-list-img */}
                            <div className="list-info h-list-info">
                              <h3 className="block-title"><a href={null}>Herta Berlin Hotel</a></h3>
                              <p className="block-minor">From: Sydney</p>
                              <p></p>
                              <a href={null} className="btn btn-orange btn-lg">View More</a>
                            </div>{/* end h-list-info */}
                          </div>{/* end list-content */}
                        </div>{/* end h-list-block */}
                        <div className="list-block main-block h-list-block">
                          <div className="list-content">
                            <div className="main-img list-img h-list-img">
                              <a href={null}>
                                <img src="../../Dist/images/8312_ho_00_p_2048x1536.jpg" className="img-responsive" alt="hotel-img" />
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
                            </div>{/* end h-list-img */}
                            <div className="list-info h-list-info">
                              <h3 className="block-title"><a href={null}>Herta Berlin Hotel</a></h3>
                              <p className="block-minor">From: Sydney</p>
                              <p></p>
                              <a href={null} className="btn btn-orange btn-lg">View More</a>
                            </div>{/* end h-list-info */}
                          </div>{/* end list-content */}
                        </div>{/* end h-list-block */}
                        <div className="list-block main-block h-list-block">
                          <div className="list-content">
                            <div className="main-img list-img h-list-img">
                              <a href={null}>
                                <img src="../../Dist/images/2894_ho_00_p_2048x1536.jpg" className="img-responsive" alt="hotel-img" />
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
                            </div>{/* end h-list-img */}
                            <div className="list-info h-list-info">
                              <h3 className="block-title"><a href={null}>Herta Berlin Hotel</a></h3>
                              <p className="block-minor">From: Sydney</p>
                              <p></p>
                              <a href={null} className="btn btn-orange btn-lg">View More</a>
                            </div>{/* end h-list-info */}
                          </div>{/* end list-content */}
                        </div>{/* end h-list-block */}
                      </div>{/* end tv-guide-hotels */}
                      <div id="tv-guide-gym" className="tab-pane">
                        <div className="tv-guide-block">
                          <div className="row">
                            <div className="col-sm-3 col-md-3 tab-img">
                              <a href="#"><img src="../../Dist/images/9b42304651ee57257d0f8a2d6fb49948.jpg" className="img-responsive" alt="gym-img" /></a>
                            </div>{/* end columns */}
                            <div className="col-sm-9 col-md-9 tab-text">
                              <h3><a href="#">Lorem Ipsum</a></h3>
                              <p className="attract-loc"><span><i className="fa fa-map-marker" /></span>Sydney</p>
                              <p></p>
                            </div>{/* end columns */}
                          </div>{/* end row */}
                        </div>{/* end tv-guide-block */}
                        <div className="tv-guide-block right">
                          <div className="row">
                            <div className="col-sm-3 col-sm-push-9 col-md-3 col-md-push-9 tab-img">
                              <a href="#"><img src="../../Dist/images/e1c01c588d51934e3a4de0e4e83e47c5.jpg" className="img-responsive" alt="gym-img" /></a>
                            </div>{/* end columns */}
                            <div className="col-sm-9 col-sm-pull-3 col-md-9 col-md-pull-3 tab-text">
                              <h3><a href="#">Lorem Ipsum</a></h3>
                              <p className="attract-loc"><span><i className="fa fa-map-marker" /></span>Sydney</p>
                              <p></p>
                            </div>{/* end columns */}
                          </div>{/* end row */}
                        </div>{/* end tv-guide-block */}
                        <div className="tv-guide-block">
                          <div className="row">
                            <div className="col-sm-3 col-md-3 tab-img">
                              <a href="#"><img src="../../Dist/images/david-barton-gym1.jpg" className="img-responsive" alt="gym-img" /></a>
                            </div>{/* end columns */}
                            <div className="col-sm-9 col-md-9 tab-text">
                              <h3><a href="#">Lorem Ipsum</a></h3>
                              <p className="attract-loc"><span><i className="fa fa-map-marker" /></span>Sydney</p>
                              <p></p>
                            </div>{/* end columns */}
                          </div>{/* end row */}
                        </div>{/* end tv-guide-block */}
                      </div>{/* end tv-guide-gym */}
                      <div id="tv-guide-sports" className="tab-pane">
                        <div className="tv-guide-block">
                          <div className="row">
                            <div className="col-sm-3 col-md-3 tab-img">
                              <a href="#"><img src="../../Dist/images/d3s0607.jpg" className="img-responsive" alt="sports-img" /></a>
                            </div>{/* end columns */}
                            <div className="col-sm-9 col-md-9 tab-text">
                              <h3><a href="#">Tennis Club</a></h3>
                              <p className="attract-loc"><span><i className="fa fa-map-marker" /></span>Sydney</p>
                              <p></p>
                            </div>{/* end columns */}
                          </div>{/* end row */}
                        </div>{/* end tv-guide-block */}
                        <div className="tv-guide-block">
                          <div className="row">
                            <div className="col-sm-3 col-md-3 tab-img">
                              <a href="#"><img src="../../Dist/images/r0_59_1158_713_w1200_h678_fmax.jpg" className="img-responsive" alt="sports-img" /></a>
                            </div>{/* end columns */}
                            <div className="col-sm-9 col-md-9 tab-text">
                              <h3><a href="#">Swimming Club</a></h3>
                              <p className="attract-loc"><span><i className="fa fa-map-marker" /></span>Sydney</p>
                            </div>{/* end columns */}
                          </div>{/* end row */}
                        </div>{/* end tv-guide-block */}
                        <div className="tv-guide-block">
                          <div className="row">
                            <div className="col-sm-3 col-md-3 tab-img">
                              <a href="#"><img src="../../Dist/images/Warners-Bay-Sports-Club-001.jpg" className="img-responsive" alt="sports-img" /></a>
                            </div>{/* end columns */}
                            <div className="col-sm-9 col-md-9 tab-text">
                              <h3><a href="#">Soccer Club</a></h3>
                              <p className="attract-loc"><span><i className="fa fa-map-marker" /></span>Sydney</p>
                            </div>{/* end columns */}
                          </div>{/* end row */}
                        </div>{/* end tv-guide-block */}
                      </div>{/* end tv-guide-sports */}
                    </div>{/* end tab-content */}
                  </div>{/* end detail-tabs */}
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-12 col-md-3 side-bar right-side-bar">
                  <div className="side-bar-block booking-form-block">
                    <div className="booking-form">
                      <h3>Search Guide</h3>
                      <p>Find your dream country guide</p>
                      <form>
                        <div className="form-group right-icon">
                          <select className="form-control">
                            <option selected>Country</option>
                            <option>Australia</option>
                            <option>Turkey</option>
                            <option>Srilanka</option>
                          </select>
                          <i className="fa fa-angle-down" />
                        </div>
                        <div className="form-group right-icon">
                          <select className="form-control">
                            <option selected>City</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <i className="fa fa-angle-down" />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="By Name (Optional)" required />                                       
                        </div>
                        <button className="btn btn-block btn-orange">Search Guide</button>
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
          </div>{/* end travel-guide */}
        </section>{/* end innerpage-wrapper */}
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

export default connect(state => state)(TravelGuide);