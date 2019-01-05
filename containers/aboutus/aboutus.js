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

     $("#owl-team").owlCarousel({
      items : 4,
      itemsCustom : false,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [991,2],
      itemsTablet: [768,2],
      itemsTabletSmall: [600,2],
      itemsMobile : [479,1],
      singleItem : false,
      itemsScaleUp : false,
    
      //Autoplay
      autoPlay : true,
      stopOnHover : true,
     
      // Navigation
      navigation : false,
      rewindNav : true,
      scrollPerPage : false,
     
      //Pagination
      pagination : true,
      paginationNumbers: false,
     
      // Responsive 
      responsive: true,
      responsiveRefreshRate : 200,
      responsiveBaseWidth: window,    
    });

     $("#owl-company-logo").owlCarousel({
      items : 4,
      itemsCustom : false,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [991,2],
      itemsTablet: [767,3],
      itemsTabletSmall: [600,3],
      itemsMobile : [479,2],
      singleItem : false,
      itemsScaleUp : false,
     
      //Autoplay
      autoPlay : true,
      stopOnHover : true,
     
      // Navigation
      navigation : false,
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
                    <img src="../../Dist/images/banner2australia.jpg" className="img-responsive" alt="about-img" />
                  </div>{/* end abt-cnt-2-img */}
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8">
                  <div id="abt-cnt-2-text">
                    <h2>Welcome to<span><span><i className="fa fa-plane" /> Star</span>Travels</span></h2>
                    <p>UBRHUGTUR is a travel company that specializes in creating unique adventures to destinations around the world. Our clients include corporate clients planning incentive travel, honeymooners and couples planning a destination wedding and discerning adults looking for the ultimate travel experience.
                         Our connections to the world’s top travel suppliers, including hotels, resorts and cruise lines, gives us privileged access to many perks not directly available online. Our goal is to choreograph the most spectacular journey you will ever take.</p>
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
                                    <img src="../../Dist/images/about-banner-1.png" alt="logo" />
                                  </div>{/* company-img */}
                                </div>{/* item */}
                              </div>{/* end columns */}
                              <div className="col-xs-12">                       
                                <div className="item">
                                  <div className="company-img">
                                    <img src="../../Dist/images/MED-LOGO-1.jpg" alt="logo" />
                                  </div>{/* company-img */}
                                </div>{/* item */}
                              </div>{/* end columns */}
                              <div className="col-xs-12">
                                <div className="item">
                                  <div className="company-img">
                                    <img src="../../Dist/images/about-banner-3.png" alt="logo" />
                                  </div>{/* company-img */}
                                </div>{/* item */}
                              </div>{/* end columns */}
                              <div className="col-xs-12">
                                <div className="item">
                                  <div className="company-img">
                                    <img src="../../Dist/images/about-banner-6.png" alt="logo" />
                                  </div>{/* company-img */}
                                </div>{/* item */}
                              </div>{/* end columns */}
                              <div className="col-xs-12">
                                <div className="item">
                                  <div className="company-img">
                                    <img src="../../Dist/images/about-banner-4.png" alt="logo" />
                                  </div>{/* company-img */}
                                </div>{/* item */}
                              </div>
                              <div className="col-xs-12">
                                <div className="item">
                                  <div className="company-img">
                                    <img src="../../Dist/images/about-banner-5.png" alt="logo" />
                                  </div>{/* company-img */}
                                </div>{/* item */}
                              </div>
                              <div className="col-xs-12">
                                <div className="item">
                                  <div className="company-img">
                                    <img src="../../Dist/images/about-banner-2.png" alt="logo" />
                                  </div>{/* company-img */}
                                </div>{/* item */}
                              </div>
                              <div className="col-xs-12">
                                <div className="item">
                                  <div className="company-img">
                                    <img src="../../Dist/images/about-banner-1 (1).png" alt="logo" />
                                  </div>{/* company-img */}
                                </div>{/* item */}
                              </div>
                              <div className="col-xs-12">
                                <div className="item">
                                  <div className="company-img">
                                    <img src="../../Dist/images/150x150bb-1.jpg" alt="logo" />
                                  </div>{/* company-img */}
                                </div>{/* item */}
                              </div>
                             {/* end columns */}
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

      <div id="team" className="section-padding"> 
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="page-heading">
                <h2>Meet Our Team</h2>
                <hr className="heading-line" />
              </div>{/* end page-heading */}
              <div className="owl-carousel owl-theme" id="owl-team">
                <div className="item">
                  <div className="member-block">
                    <div className="member-img">
                      <img src="../../Dist/images/Zoriana-Hrabova.jpg" className="img-responsive img-circle" alt="member-img" />                                 
                      <ul className="list-unstyled list-inline contact-links">
                        <li><a href="#"><span><i className="fa fa-facebook-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-twitter-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-linkedin-square" /></span></a></li>
                      </ul>       
                    </div>{/* end member-img */}
                    <div className="member-name">
                      <h3>ZORIANA HRABOVA</h3>
                      <p>CEO,company</p>
                    </div>{/* end member-name */}
                  </div>{/* end member-block */}
                </div>{/* end item */}
                <div className="item">
                  <div className="member-block">
                    <div className="member-img">
                      <img src="../../Dist/images/EDITA.png" className="img-responsive img-circle" alt="member-img" />                                 
                      <ul className="list-unstyled list-inline contact-links">
                        <li><a href="#"><span><i className="fa fa-facebook-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-twitter-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-linkedin-square" /></span></a></li>
                      </ul>       
                    </div>{/* end member-img */}
                    <div className="member-name">
                      <h3>EDITA K.</h3>
                      <p>Director of finance</p>
                    </div>{/* end member-name */}
                  </div>{/* end member-block */}
                </div>{/* end item */}
                <div className="item">
                  <div className="member-block">
                    <div className="member-img">
                      <img src="../../Dist/images/image1.png" className="img-responsive img-circle" alt="member-img" />                                 
                      <ul className="list-unstyled list-inline contact-links">
                        <li><a href="#"><span><i className="fa fa-facebook-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-twitter-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-linkedin-square" /></span></a></li>
                      </ul>       
                    </div>{/* end member-img */}
                    <div className="member-name">
                      <h3>LIDJA TOBAKOVIC</h3>
                      <p>Public relations and Marketing</p>
                    </div>{/* end member-name */}
                  </div>{/* end member-block */}
                </div>{/* end item */}
                <div className="item">
                  <div className="member-block">
                    <div className="member-img">
                      <img src="../../Dist/images/image1-1.png" className="img-responsive img-circle" alt="member-img" />                                 
                      <ul className="list-unstyled list-inline contact-links">
                        <li><a href="#"><span><i className="fa fa-facebook-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-twitter-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-linkedin-square" /></span></a></li>
                      </ul>       
                    </div>{/* end member-img */}
                    <div className="member-name">
                      <h3>SONJA PERIC</h3>
                      <p>Marketing</p>
                    </div>{/* end member-name */}
                  </div>{/* end member-block */}
                </div>{/* end item */}
              
               {/* end item */}
              </div>{/* end owl-team */}
            </div>{/* end columns */}
          </div>{/* end row */}
        </div>{/* end container */}
      </div>

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
          </div>
        {/* end container */}
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
        <FooterBottom/>
      </div>
         

  )
  }


}

export default connect(state => state)(aboutus);