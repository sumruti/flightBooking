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
       {/* <Search/>*/}
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
                <h1 className="page-title">About Us </h1>
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">About Us </li>
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
                    <h2>Welcome to<span><span><img src="../../Dist/images/logo.jpg" className="aboutLogo" alt="about-img" /> UBRHUG</span>TUR</span></h2>
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
{/*                  <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                  */}                  <a href="https://youtube.com/watch?v=0O2aH4XLbto" className="popup-youtube" id="play-button"><span><i className="fa fa-play" /></span></a>
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end video-banner */}
       
          <div id="why-us" className="innerpage-section-padding">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  
                  <div className="row">
                    
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
          </div>

         {/* end why-us */}

      <div id="team" className="section-paddings"> 
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
                  </div> 

                  <div className="item">
                  <div className="member-block">
                    <div className="member-img">
                      <img src="../../Dist/images/Abdulraheem.png" className="img-responsive img-circle" alt="member-img" />                                 
                      <ul className="list-unstyled list-inline contact-links">
                        <li><a href="#"><span><i className="fa fa-facebook-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-twitter-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-linkedin-square" /></span></a></li>
                      </ul>       
                    </div>{/* end member-img */}
                    <div className="member-name">
                      <h3>Abdulraheem A.</h3>
                      <p>Staff supervisor</p>
                    </div>{/* end member-name */}
                  </div>{/* end member-block */}
                  </div>

                <div className="item">
                  <div className="member-block">
                    <div className="member-img">
                      <img src="../../Dist/images/Abdulhakeem.png" className="img-responsive img-circle" alt="member-img" />                                 
                      <ul className="list-unstyled list-inline contact-links">
                        <li><a href="#"><span><i className="fa fa-facebook-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-twitter-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-linkedin-square" /></span></a></li>
                      </ul>       
                    </div>{/* end member-img */}
                    <div className="member-name">
                      <h3>Hakeem Ahmad</h3>
                      <p>Marketing</p>
                    </div>{/* end member-name */}
                  </div>{/* end member-block */}
                  </div>
                <div className="item">
                  <div className="member-block">
                    <div className="member-img">
                      <img src="../../Dist/images/Hani-Reda.png" className="img-responsive img-circle" alt="member-img" />                                 
                      <ul className="list-unstyled list-inline contact-links">
                        <li><a href="#"><span><i className="fa fa-facebook-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-twitter-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-linkedin-square" /></span></a></li>
                      </ul>       
                    </div>{/* end member-img */}
                    <div className="member-name">
                      <h3>Hani Reda</h3>
                      <p>Public relations and Marketing</p>
                    </div>{/* end member-name */}
                  </div>{/* end member-block */}
                  </div>
               <div className="item">
                  <div className="member-block">
                    <div className="member-img">
                      <img src="../../Dist/images/Loaa.png" className="img-responsive img-circle" alt="member-img" />                                 
                      <ul className="list-unstyled list-inline contact-links">
                        <li><a href="#"><span><i className="fa fa-facebook-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-twitter-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-linkedin-square" /></span></a></li>
                      </ul>       
                    </div>{/* end member-img */}
                    <div className="member-name">
                      <h3>Luaay Jaradah</h3>
                      <p>Digital Marketing</p>
                    </div>{/* end member-name */}
                  </div>{/* end member-block */}
                  </div> 

                <div className="item">
                  <div className="member-block">
                    <div className="member-img">
                      <img src="../../Dist/images/Hamad.png" className="img-responsive img-circle" alt="member-img" />                                 
                      <ul className="list-unstyled list-inline contact-links">
                        <li><a href="#"><span><i className="fa fa-facebook-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-twitter-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-linkedin-square" /></span></a></li>
                      </ul>       
                    </div>{/* end member-img */}
                    <div className="member-name">
                      <h3>Hamad Abass</h3>
                      <p>Marketing</p>
                    </div>{/* end member-name */}
                  </div>{/* end member-block */}
                  </div>
               <div className="item">
                  <div className="member-block">
                    <div className="member-img">
                      <img src="../../Dist/images/team-img-5.jpg" className="img-responsive img-circle" alt="member-img" />                                 
                      <ul className="list-unstyled list-inline contact-links">
                        <li><a href="#"><span><i className="fa fa-facebook-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-twitter-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-linkedin-square" /></span></a></li>
                      </ul>       
                    </div>{/* end member-img */}
                    <div className="member-name">
                      <h3>Hamza Keriti</h3>
                      <p>Digital Marketing</p>
                    </div>{/* end member-name */}
                  </div>{/* end member-block */}
                  </div>

                 <div className="item">
                  <div className="member-block">
                    <div className="member-img">
                      <img src="../../Dist/images/team-img-2.jpg" className="img-responsive img-circle" alt="member-img" />                                 
                      <ul className="list-unstyled list-inline contact-links">
                        <li><a href="#"><span><i className="fa fa-facebook-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-twitter-square" /></span></a></li>
                        <li><a href="#"><span><i className="fa fa-linkedin-square" /></span></a></li>
                      </ul>       
                    </div>{/* end member-img */}
                    <div className="member-name">
                      <h3>Erkan Kurt</h3>
                      <p>Public relations director</p>
                    </div>{/* end member-name */}
                  </div>{/* end member-block */}
                </div>
              {/* end item */}
              
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