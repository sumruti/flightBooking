import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';



class comingsoon extends Component {

 componentDidMount(){
    document.title = "Coming-soon"
  }
render () {

 return (

 	   <div>
        <TopBar/>
         <Header/>
       {/* end top-bar */}
        {/*===== INNERPAGE-WRAPPER ====*/}
        <section className="innerpage-wrapper">
          <div id="coming-soon-text" className="section-padding back-size">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="company-name"><span>UBRHUG</span>TUR</h3>
                  <h2>Coming Soon</h2>
                  <p>We are still working on it.</p>
                  <form>
                    <div className="form-group">
                      <div className="input-group">
                        <input type="email" className="form-control input-lg" placeholder="your email and get notified" required />
                        <span className="input-group-btn"><button className="btn btn-orange"><i className="fa fa-angle-right" /></button></span>
                      </div>
                    </div>
                  </form>
                  <ul className="list-inline list-unstyled timer">
                                      <li><span className="digit">24</span>days</li>
                                      <li><span className="digit">23</span>hours</li>
                                      <li><span className="digit">59</span>minutes</li>
                                      <li><span className="digit">45</span>seconds</li>
                                    </ul>
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end coming-soon-text */}
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
        {/*======================= FOOTER =======================*/}
        <FooterBottom/>
      </div>


 	)
  }

}



export default connect(state => state)(comingsoon);