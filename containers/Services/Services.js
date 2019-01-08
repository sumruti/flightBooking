import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';



class services  extends Component {

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
        <div>
        {/*=============== PAGE-COVER ==============*/}
        <section className="page-cover" id="cover-services">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">Services </h1>
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">Services </li>
                </ul>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end page-cover */}
        {/*===== INNERPAGE-WRAPPER ====*/}
        <section className="innerpage-wrapper">
          <div id="process-flow" className="innerpage-banner-padding"> 
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                  <ul className="list-unstyled process">
                    <li>
                      <div className="process-block">
                        <span><i className="fa fa-search" /></span>
                        <h3>Search</h3>
                        <p> </p>
                      </div>{/* end process-block */}
                    </li>
                    <li>
                      <div className="process-block">
                        <span><i className="fa fa-book" /></span>
                        <h3>Booking</h3>
                        <p> </p>
                      </div>{/* end process-block */}
                    </li>
                    <li>
                      <div className="process-block">
                        <span><i className="fa fa-dollar" /></span>
                        <h3>Payment</h3>
                        <p> </p>
                      </div>{/* end process-block */}
                    </li>
                  </ul>
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end process-flow */}
          <div id="service-intro" className="innerpage-section-padding">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-5 text-center">
                  <div className="service-intro-img">
                    <img src="../../Dist/images/Holiday.jpeg" className="img-responsive" alt="about-img" />
                  </div>{/* end service-intro-img */}
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-12 col-md-7">
                  <div className="service-intro-text">
                    <h4>Welcome to UBRHUGTUR</h4>
                    <h2>Provide the best quality services in Travel</h2>
                    <p>Whether you are traveling for pleasure or business, we offer travel and tourism services that work with your needs. We want you to enjoy your stay anywhere you chose to go.</p>
                    <a href="#" className="btn btn-orange btn-lg">Learn More</a>
                  </div>{/* end service-intro-text */}
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end service-intro */}
          <div id="search-banner" className="innerpage-103-pd-tb back-size"> 
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-7">
                  <p>A perfect place for searching your</p>
                  <h2>Desired Tour &amp; Flight</h2>
                  <p>Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                  <a href="#" className="btn btn-black btn-lg">Search Now</a>
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end search-banner */}
          <div id="services-section">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="page-heading innerpage-heading">
                    <h2>Our Services</h2>
                    <hr className="heading-line" />
                  </div>{/* end page-heading */}
                </div>{/* end columns */}
                <div className="col-md-4 col-md-push-4 services-list-img text-center">
                  <img src="../../Dist/images/Services.jpeg" alt="what-we-provide" className="img-responsive" />
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-6 col-md-4 col-md-pull-4 services-list">
                  <div className="service-block-1"> 
                    <div className="service-icon-1">
                      <span><i className="fa fa-globe" /></span>
                    </div>{/* end service-icon-1 */}
                    <div className="service-text-1">
                      <h3>Holiday Package</h3>
                      <p>Whether you are frequent traveler or just taking a break a way for few days. You could try our holiday packages. Contact us for details..</p>
                    </div>{/* end service-text-1 */}
                  </div>{/* end service-block-1 */}
                  <div className="service-block-1"> 
                    <div className="service-icon-1">
                      <span><i className="fa fa-building" /></span>
                    </div>{/* end service-icon-1 */}
                    <div className="service-text-1">
                      <h3>Taxi Service</h3>
                      <p>Pre-book Your Private Transportation Now. Best Prices & Professional Service. UBRHUG transportation provides Luxury Taxi Service, Private Limousine Reservation, SUV, Minivan, Tour. www.ubrhug.com </p>
                    </div>{/* end service-text-1 */}
                  </div>{/* end service-block-1 */}
                  <div className="service-block-1"> 
                    <div className="service-icon-1">
                      <span><i className="fa fa-dollar" /></span>
                    </div>{/* end service-icon-1 */}
                    <div className="service-text-1">
                      <h3>Hotel Booking</h3>
                      <p>When it comes to having an incredible vacation, where you choose to stay can make all of the difference. high-end hotels around the world, independent luxury hotels in different countries to chose from.</p>
                    </div>{/* end service-text-1 */}
                  </div>{/* end service-block-1 */}
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-6 col-md-4 services-list">
                  <div className="service-block-1"> 
                    <div className="service-icon-1">
                      <span><i className="fa fa-book" /></span>
                    </div>{/* end service-icon-1 */}
                    <div className="service-text-1">
                      <h3>Medical Tourism</h3>
                      <p>Health care for every budget. We make sure you return home safely. For all your medical needs contact our specialist to guide you and find the appropriate medical facility that is suitable for your needs.</p>
                    </div>{/* end service-text-1 */}
                  </div>{/* end service-block-1 */}
                  <div className="service-block-1"> 
                    <div className="service-icon-1">
                      <span><i className="fa fa-map-marker" /></span>
                    </div>{/* end service-icon-1 */}
                    <div className="service-text-1">
                      <h3>Restaurant & Bars</h3>
                      <p>Whether you having a formal dinner or want to enjoy the evening, we will take you to the top restaurants the region has to offer in service. Varity of great restaurants and traditional food for all</p>
                    </div>{/* end service-text-1 */}
                  </div>{/* end service-block-1 */}
                  <div className="service-block-1"> 
                    <div className="service-icon-1">
                      <span><i className="fa fa-users" /></span>
                    </div>{/* end service-icon-1 */}
                    <div className="service-text-1">
                      <h3>Private Tour</h3>
                      <p>Every Tour Is Private. In each destination we will provide you with an experienced tour guide with a deep knowledge and passion for his/her region, who are talent for creating memorable travel experiences for our guests.</p>
                    </div>{/* end service-text-1 */}
                  </div>{/* end service-block-1 */}
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end services-section */}
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
      </div>
        <FooterBottom/>
      </div>


    )
   }

}

export default connect(state => state)(services);