import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';



class TravelInsurance  extends Component {

  componentDidMount(){
    document.title = "Travel Insurance"

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
        {/*================= PAGE-COVER ================*/}
        <section className="page-cover" id="cover-travel-insurance">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">Travel Insurance</h1>
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">Travel Insurance</li>
                </ul>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end page-cover */}
        {/*==== INNERPAGE-WRAPPER =====*/}
        <section className="innerpage-wrapper">
          <div id="travel-insurance" className="innerpage-section-padding">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 content-side tvl-insurance-info">
                  <div className="space-right">
                    <div className="insurance-desc mg-bot-60">
                      <div className="innerpage-heading">
                        <h1>Why Travel Insurance</h1>
                        <p></p>
                        <img src="../../Dist/images/why-you-need-travel-insurance.jpg" className="img-responsive" alt="travel-insurance" />
                      </div>{/* end innerpage-heading */}
                      <ul className="list-unstyled">
                        <li>Veniam delectus ei vis st atqui timeam mnesarchum at.</li>
                        <li>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri.</li>
                        <li>Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</li>
                        <li>Ad duo fugit aeque fabulas, in lucilius prodesset pri.</li>
                        <li>Veniam delectus ei vis st atqui timeam mnesarchum at.</li>
                      </ul>
                    </div>{/* end insurance-desc */}
                    <div className="insurance-features">
                      <div className="innerpage-heading">
                        <h1>Insurance Features</h1>
                      </div>{/* end innerpage-heading */}
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                          <div className="in-feature-block text-center">
                            <span><i className="fa fa-user" /></span>
                            <div className="in-frature-text">
                              <h4>Feature Title 1</h4>
                              <p></p>
                            </div>{/* end in-feature-text */}
                          </div>{/* end in-feature-block */}
                        </div>{/* end columns */}
                        <div className="col-xs-12 col-sm-6 col-md-6">
                          <div className="in-feature-block text-center">
                            <span><i className="fa fa-shield" /></span>
                            <div className="in-frature-text">
                              <h4>Feature Title 2</h4>
                              <p></p>
                            </div>{/* end in-feature-text */}
                          </div>{/* end in-feature-block */}
                        </div>{/* end columns */}
                        <div className="col-xs-12 col-sm-6 col-md-6">
                          <div className="in-feature-block text-center">
                            <span><i className="fa fa-cogs" /></span>
                            <div className="in-frature-text">
                              <h4>Feature Title 3</h4>
                              <p></p>
                            </div>{/* end in-feature-text */}
                          </div>{/* end in-feature-block */}
                        </div>{/* end columns */}
                        <div className="col-xs-12 col-sm-6 col-md-6">
                          <div className="in-feature-block text-center">
                            <span><i className="fa fa-diamond" /></span>
                            <div className="in-frature-text">
                              <h4>Feature Title 4</h4>
                              <p></p>
                            </div>{/* end in-feature-text */}
                          </div>{/* end in-feature-block */}
                        </div>{/* end columns */}
                      </div>
                    </div>{/* end insurance-features */}
                  </div>{/* end space-right */}
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 side-bar blog-sidebar right-side-bar">                    
                  <div className="row">    
                    <div className="col-xs-12 col-sm-6 col-md-12">
                      <div className="side-bar-block categories">
                        <h2 className="side-bar-heading">Useful Links</h2>
                        <ul className="nav nav-pills nav-stacked">
                          <li><a href="#"><span><i className="fa fa-angle-right" /></span>Online Insurance</a></li>
                          <li><a href="#"><span><i className="fa fa-angle-right" /></span>Full Guarnateed</a></li>
                          <li><a href="#"><span><i className="fa fa-angle-right" /></span>Medical Expense</a></li>
                          <li><a href="#"><span><i className="fa fa-angle-right" /></span>Accidents &amp; Failures</a></li>
                          <li><a href="#"><span><i className="fa fa-angle-right" /></span>Sports &amp; Acitivites</a></li>
                          <li><a href="#"><span><i className="fa fa-angle-right" /></span>Airline Faliure Cover</a></li>
                        </ul>
                      </div>{/* end side-bar-block */}
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-12">
                      <div className="side-bar-block contact">
                        <h2 className="side-bar-heading">Contact Us</h2>
                        <div className="c-list">
                          <div className="icon"><span><i className="fa fa-envelope" /></span></div>
                          <div className="text"><p>info@ubrhugtur.com</p></div>
                        </div>{/* end c-list */}
                        <div className="c-list">
                          <div className="icon"><span><i className="fa fa-phone" /></span></div>
                          <div className="text"><p>+90 538 281 1130</p></div>
                        </div>{/* end c-list */}
                        <div className="c-list">
                          <div className="icon"><span><i className="fa fa-map-marker" /></span></div>
                          <div className="text"><p>Fevzi Çakmak Mahallesi, Atisalani Cd. No:78, 34220 Esenler/Istanbul, Turkey</p></div>
                        </div>{/* end c-list */}
                      </div>{/* end side-bar-block */}
                    </div>{/* end columns */}
                  </div>{/* end row */}
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end travel-insurance */} 
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

export default connect(state => state)(TravelInsurance);