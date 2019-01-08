import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';



class Holiday  extends Component {

  componentDidMount(){
    document.title = "Holiday"

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
        {/*================= PAGE-COVER =================*/}
        <section className="page-cover" id="cover-holiday">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">Beautiful Holiday Trips</h1>
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">Beautiful Holiday Trips</li>
                </ul>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end page-cover */}
        {/*===== INNERPAGE-WRAPPER ====*/}
        <section className="innerpage-wrapper">
          <div id="holiday-trips" className="innerpage-section-padding">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="trip-block mg-bot-60">
                    <div className="page-heading trip-heading">
                      <h2><span><i className="fa fa-map-marker" /></span>Africa Trip</h2>
                      <p>330 Holiday Places</p>
                    </div>{/* end page-heading */}
                    <div className="owl-carousel owl-theme owl-custom-arrow owl-holidays">
                      <div className="item">
                        <div className="main-block tour-block">
                          <div className="main-img">
                            <a href="#">
                              <img src="../../Dist/images/solofemalequestions3.jpg" className="img-responsive" alt="tour-img" />
                            </a>
                          </div>{/* end offer-img */}
                          <div className="offer-price-2">
                            <ul className="list-unstyled">
                              <li className="price">$568.00<a href="#"><span className="arrow"><i className="fa fa-angle-right" /></span></a></li>
                            </ul>
                          </div>{/* end offer-price-2 */}
                          <div className="main-info tour-info">
                            <div className="main-title tour-title">
                              <a href="#">Africa Beach Tour</a>
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
                              <img src="../../Dist/images/travel-trends-2018-the-year-of-luxurious-experiences.jpg" className="img-responsive" alt="tour-img" />
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
                              <img src="../../Dist/images/+at+5.34.29+PM.png" className="img-responsive" alt="tour-img" />
                            </a>
                          </div>{/* end offer-img */}
                          <div className="offer-price-2">
                            <ul className="list-unstyled">
                              <li className="price">$685.00<a href="#"><span className="arrow"><i className="fa fa-angle-right" /></span></a></li>
                            </ul>
                          </div>{/* end offer-price-2 */}
                          <div className="main-info tour-info">
                            <div className="main-title tour-title">
                              <a href="#">Africa Mountains</a>
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
                              <img src="../../Dist/images/Africa-Trip-Wildlife-Conservation-HE-students.jpg" className="img-responsive" alt="tour-img" />
                            </a>
                          </div>{/* end offer-img */}
                          <div className="offer-price-2">
                            <ul className="list-unstyled">
                              <li className="price">$533.00<a href="#"><span className="arrow"><i className="fa fa-angle-right" /></span></a></li>
                            </ul>
                          </div>{/* end offer-price-2 */}
                          <div className="main-info tour-info">
                            <div className="main-title tour-title">
                              <a href="#">Morocco</a>
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
                    </div>{/* end owl-holidays */}
                  </div>{/* end trip-block */}
                  <div className="trip-block">
                    <div className="page-heading trip-heading">
                      <h2><span><i className="fa fa-map-marker" /></span>Malaysia Trip</h2>
                      <p>330 Holiday Places</p>
                    </div>{/* end page-heading */}
                    <div className="owl-carousel owl-theme owl-custom-arrow owl-holidays">
                      <div className="item">
                        <div className="main-block tour-block">
                          <div className="main-img">
                            <a href="#">
                              <img src="../../Dist/images/Malaysia.jpg" className="img-responsive" alt="tour-img" />
                            </a>
                          </div>{/* end offer-img */}
                          <div className="offer-price-2">
                            <ul className="list-unstyled">
                              <li className="price">$888.00<a href="#"><span className="arrow"><i className="fa fa-angle-right" /></span></a></li>
                            </ul>
                          </div>{/* end offer-price-2 */}
                          <div className="main-info tour-info">
                            <div className="main-title tour-title">
                              <a href="#">Putrajaya Mosque</a>
                              <p>From: Malaysia</p>
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
                              <img src="../../Dist/images/deal_image12796-1.jpg" className="img-responsive" alt="tour-img" />
                            </a>
                          </div>{/* end offer-img */}
                          <div className="offer-price-2">
                            <ul className="list-unstyled">
                              <li className="price">$620.00<a href="#"><span className="arrow"><i className="fa fa-angle-right" /></span></a></li>
                            </ul>
                          </div>{/* end offer-price-2 */}
                          <div className="main-info tour-info">
                            <div className="main-title tour-title">
                              <a href="#">Malaysia Hotel</a>
                              <p>From: Malaysia</p>
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
                              <img src="../../Dist/images/malaysia-header.jpg" className="img-responsive" alt="tour-img" />
                            </a>
                          </div>{/* end offer-img */}
                          <div className="offer-price-2">
                            <ul className="list-unstyled">
                              <li className="price">$489.00<a href="#"><span className="arrow"><i className="fa fa-angle-right" /></span></a></li>
                            </ul>
                          </div>{/* end offer-price-2 */}
                          <div className="main-info tour-info">
                            <div className="main-title tour-title">
                              <a href="#">Khoo Kongsi House</a>
                              <p>From: Malaysia</p>
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
                              <img src="../../Dist/images/shutterstock-19404508_destinationMain_1470990353805.jpeg" className="img-responsive" alt="tour-img" />
                            </a>
                          </div>{/* end offer-img */}
                          <div className="offer-price-2">
                            <ul className="list-unstyled">
                              <li className="price">$662.00<a href="#"><span className="arrow"><i className="fa fa-angle-right" /></span></a></li>
                            </ul>
                          </div>{/* end offer-price-2 */}
                          <div className="main-info tour-info">
                            <div className="main-title tour-title">
                              <a href="#">Malaysia Beach</a>
                              <p>From: Malaysia</p>
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
                    </div>{/* end owl-holidays */}
                  </div>{/* end trip-block */}
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}          
          </div>{/* end holidays */}
          <div id="popular-destinations" className="banner-padding">
            <div className="container">
              <div className="big-heading">
                <h2>Popular <br />Destinations<div className="light" /></h2>                       
              </div>{/* end big-heading */}
              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <div className="destination-lists">
                    <div className="col-sm-6 col-md-3">
                      <ul className="list-unstyled">
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                      </ul>
                    </div>{/* end columns */}
                    <div className="col-sm-6 col-md-3">
                      <ul className="list-unstyled">
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                      </ul>
                    </div>{/* end columns */}
                    <div className="col-sm-6 col-md-3">
                      <ul className="list-unstyled">
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                      </ul>
                    </div>{/* end columns */}
                    <div className="col-sm-6 col-md-3">
                      <ul className="list-unstyled">
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                        <li><a href="#">Destination Title</a><p>101 Places</p></li>
                      </ul>
                    </div>{/* end columns */}
                  </div>{/* end destination-lists */}
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}          
          </div>{/* end holiday-trips */}
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

export default connect(state => state)(Holiday);