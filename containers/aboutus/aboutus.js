import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';




class aboutus extends Component {

	  componentDidMount(){
     document.title = "About us"
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
        {/*================ PAGE-COVER =============*/}
        <section className="page-cover" id="cover-about-us">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">About Us 2</h1>
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">About Us 2</li>
                </ul>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end page-cover */}
        {/*===== INNERPAGE-WRAPPER ====*/}
        <section className="innerpage-wrapper">
          <div id="about-content-2" className="innerpage-section-padding">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                  <div id="abt-cnt-2-img">
                    <img src="../../Dist/images/about-content-2.png" className="img-responsive" alt="about-img" />
                  </div>{/* end abt-cnt-2-img */}
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8">
                  <div id="abt-cnt-2-text">
                    <h2>Welcome to<span><span><i className="fa fa-plane" /> Star</span>Travels</span></h2>
                    <p>Lorem ipsum dolor sit amet, conse adipiscing elit. Curabitur metus felis, venenatis eu ultricies vel, vehicula eu urna. Phasellus eget augue id est fringilla feugiat id a tellus. Sed hendrerit quam sed ante euismod posuere ultricies. Vestibulum suscipit convallis purus ut mattis. In eget turpis eget urna molestie ultricies in sagittis nunc. Sed accumsan leo in mauris rhoncus volutpat. In eget turpis eget urna molestie ultricies in sagittis nunc. Sed accumsan leo in mauris rhoncus volutpat.</p>
                    <div className="row">
                      <div className="col-xs-4 col-sm-4 col-md-4">
                        <div className="abt-cnt-2-ftr">
                          <span><i className="fa fa-diamond" /></span>
                          <h4>Best Service</h4>
                        </div>{/* end abt-cnt-2-ftr */}
                      </div>{/* end columns */}
                      <div className="col-xs-4 col-sm-4 col-md-4">
                        <div className="abt-cnt-2-ftr">
                          <span><i className="fa fa-clock-o" /></span>
                          <h4>24/7 Availability</h4>
                        </div>{/* end abt-cnt-2-ftr */}
                      </div>{/* end columns */}
                      <div className="col-xs-4 col-sm-4 col-md-4">
                        <div className="abt-cnt-2-ftr">
                          <span><i className="fa fa-star" /></span>
                          <h4>5 Star Rating</h4>
                        </div>{/* end abt-cnt-2-ftr */}
                      </div>{/* end columns */}
                    </div>{/* end row */}
                  </div>{/* end abt-cnt-2-text */}
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end about-content-2 */}
          <div id="video-banner" className="banner-padding back-size"> 
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2>Take a Video Tour</h2>
                  <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                  <a href="https://youtube.com/watch?v=0O2aH4XLbto" className="popup-youtube" id="play-button"><span><i className="fa fa-play" /></span></a>
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end video-banner */}
          <div id="why-us" className="innerpage-section-padding">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="page-heading innerpage-heading">
                    <h2>Why Choose Us</h2>
                    <hr className="heading-line" />
                  </div>{/* end page-heading */}
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7" id="why-us-tabs">
                      <ul className="nav nav-tabs">
                        <li className="active"><a href="#tb-happy-client" data-toggle="tab"><span><i className="fa fa-smile-o" /></span>Happy Clients</a></li>
                        <li><a href="#tb-satisfaction" data-toggle="tab"><span><i className="fa fa-thumbs-o-up" /></span>Satisfaction</a></li>
                        <li><a href="#tb-daily-tours" data-toggle="tab"><span><i className="fa fa-plane" /></span>Daily Tours</a></li>
                      </ul>{/* end nav-tabs */}
                      <div className="tab-content">
                        <div id="tb-happy-client" className="tab-pane fade in active">
                          <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, pro an eros perpetua ullamcorper. Iuvaret detraxit disputando vel ea, ut virtute per.Lorem ipsum dolor si Iuvaret detraxit disputando velr.Lorem ipsum dolor si.  Ad duo fugit aeque fabulas, pro an eros perpetua ullamcorper.</p>
                          <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, an eros perpetua ullamcorper. Iuvaret detraxit disputando vel ea, ut virtute per. Lorem ipsum dolor si Iuvaret detraxit disputando velr.Lorem ipsum dolor si.</p>
                          <a href="#">Discover More<span><i className="fa fa-angle-double-right" /></span></a>											
                        </div>{/* end tb-happy-client */}
                        <div id="tb-satisfaction" className="tab-pane fade">
                          <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, pro an eros perpetua ullamcorper. Iuvaret detraxit disputando vel ea, ut virtute per.Lorem ipsum dolor si Iuvaret detraxit disputando velr.Lorem ipsum dolor si.Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, an eros perpetua ullamcorper.</p>
                          <p> Lorem ipsum dolor si Iuvaret detraxit disputando velr.Lorem ipsum dolor si. Ad duo fugit aeque fabulas, pro an eros perpetua ullamcorper. Iuvaret detraxit disputando vel ea, ut virtute per.</p>
                          <a href="#">Discover More<span><i className="fa fa-angle-double-right" /></span></a>											
                        </div>{/* end tb-satisfaction */}
                        <div id="tb-daily-tours" className="tab-pane fade">
                          <p> Lorem ipsum dolor si Iuvaret detraxit disputando velr.Lorem ipsum dolor si. Ad duo fugit aeque fabulas, pro an eros perpetua ullamcorper. Iuvaret detraxit disputando vel ea, ut virtute per.</p>
                          <p>Lorem ipsum dolor si Iuvaret detraxit disputando velr.Lorem ipsum dolor si.Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, an eros perpetua ullamcorper.</p>
                          <a href="#">Discover More<span><i className="fa fa-angle-double-right" /></span></a>											
                        </div>{/* end b-daily-tours */}
                      </div>{/* end tab-content */}
                    </div>{/* end columns */}
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5" id="progress-bars">
                      <div className="bar">
                        <h4>Satisfied Clients</h4>
                        <div className="progress">
                          <div className="progress-bar progress_percent" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}><span>90%</span></div>
                        </div>{/* end progress */}
                      </div>{/* end bar */}
                      <div className="bar">
                        <h4>Packages</h4>
                        <div className="progress">
                          <div className="progress-bar progress_percent" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{width: '86%'}}><span>86%</span></div>
                        </div>{/* end progress */}
                      </div>{/* end bar */}
                      <div className="bar">
                        <h4>Accomodation</h4>
                        <div className="progress">
                          <div className="progress-bar progress_percent" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}><span>75%</span></div>
                        </div>{/* end progress */}
                      </div>{/* end bar */}
                      <div className="bar">
                        <h4>Price Guarantee</h4>
                        <div className="progress">
                          <div className="progress-bar progress_percent" role="progressbar" aria-valuenow={83} aria-valuemin={0} aria-valuemax={100} style={{width: '83%'}}><span>83%</span></div>
                        </div>{/* end progress */}
                      </div>{/* end bar */}
                    </div>{/* end columns */}
                    <div className="col-xs-12 col-sm-12" id="company-logos">
                      <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                          <h3>We Have Investor Relations.</h3>
                          <p>Don't take our words for granted. See what all this hipe about.</p>
                        </div>{/* end columns */}
                        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                          <div className="row">
                            <div className="owl-carousel owl-theme" id="owl-company-logo">
                              <div className="col-xs-12">
                                <div className="item">
                                  <div className="company-img">
                                    <img src="../../Dist/images/company-1.png" alt="logo" />
                                  </div>{/* company-img */}
                                </div>{/* item */}
                              </div>{/* end columns */}
                              <div className="col-xs-12">                       
                                <div className="item">
                                  <div className="company-img">
                                    <img src="../../Dist/images/company-2.png" alt="logo" />
                                  </div>{/* company-img */}
                                </div>{/* item */}
                              </div>{/* end columns */}
                              <div className="col-xs-12">
                                <div className="item">
                                  <div className="company-img">
                                    <img src="../../Dist/images/company-3.png" alt="logo" />
                                  </div>{/* company-img */}
                                </div>{/* item */}
                              </div>{/* end columns */}
                              <div className="col-xs-12">
                                <div className="item">
                                  <div className="company-img">
                                    <img src="../../Dist/images/company-4.png" alt="logo" />
                                  </div>{/* company-img */}
                                </div>{/* item */}
                              </div>{/* end columns */}
                              <div className="col-xs-12">
                                <div className="item">
                                  <div className="company-img">
                                    <img src="../../Dist/images/company-5.png" alt="logo" />
                                  </div>{/* company-img */}
                                </div>{/* item */}
                              </div>{/* end columns */}
                            </div>{/* owl-company */}
                          </div>{/* end row */}
                        </div>{/* end columns */}
                      </div>{/* end row */}
                    </div>{/* end columns */}
                  </div>{/* end row */}
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end why-us */}
        </section>{/* end innerpage-wrapper */}
        {/*======================= BEST FEATURES =====================*/}
        <section id="best-features" className="banner-padding black-features">
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
        <section id="footer" className="ftr-heading-o ftr-heading-mgn-1">
          <div id="footer-top" className="banner-padding ftr-top-black ftr-text-white">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 footer-widget ftr-contact">
                  <h3 className="footer-heading">CONTACT US</h3>
                  <ul className="list-unstyled">
                    <li><span><i className="fa fa-map-marker" /></span>29 Land St, Lorem City, CA</li>
                    <li><span><i className="fa fa-phone" /></span>+00 123 4567</li>
                    <li><span><i className="fa fa-envelope" /></span>info@starhotel.com</li>
                  </ul>
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2 footer-widget ftr-links">
                  <h3 className="footer-heading">COMPANY</h3>
                  <ul className="list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Flight</a></li>
                    <li><a href="#">Hotel</a></li>
                    <li><a href="#">Tours</a></li>
                    <li><a href="#">Cruise</a></li>
                    <li><a href="#">Cars</a></li>
                  </ul>
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 footer-widget ftr-links ftr-pad-left">
                  <h3 className="footer-heading">RESOURCES</h3>
                  <ul className="list-unstyled">
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Site Map</a></li>
                  </ul>
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 footer-widget ftr-about">
                  <h3 className="footer-heading">ABOUT US</h3>
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
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end footer-top */}
         <FooterBottom/>
        </section>{/* end footer */}
      </div>
 	       

 	)
  }


}

export default connect(state => state)(aboutus);