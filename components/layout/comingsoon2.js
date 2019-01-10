import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';



class comingsoon2 extends Component {

 componentDidMount(){
    document.title = "Coming-soon"
  }
render () {

 return (

 	   <div>
      

          <section id="coming-soon-page-2" className="full-page-body full-page-back">
        <div className="full-page-wrapper">
          <div className="full-page-content">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 text-center" id="coming-soon-page-2-text">
                  <div className="full-page-title">
                    <h3 className="company-name"><span>UBRHUG</span>TUR </h3>
                  </div>{/* end full-page-title */}
                  <h2>We'll be live soon !</h2>
                  <div className="coming-soon-2-timer">
                    <ul className="list-inline list-unstyled">
                      <li><span className="digit">24</span><span>days</span></li>
                      <li><span className="digit">23</span><span>hours</span></li>
                      <li><span className="digit">59</span><span>minutes</span></li>
                      <li><span className="digit">45</span><span>seconds</span></li>
                    </ul>
                  </div>{/* end coming-soon-2-timer */}
                  <form>
                    <div className="form-group">
                      <div className="input-group">
                        <input type="email" className="form-control input-lg" placeholder="your email and get notified" required />
                        <span className="input-group-btn"><button className="btn">Subscribe</button></span>
                      </div>
                    </div>
                  </form>
                  <p className="full-page-copyright">© 2017 UBRHUGTUR . All rights reserved.</p>
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end full-page-content */}
        </div>{/* end full-page-wrapper */}
      </section>{/* end coming-soon-page-2 */}

        {/*======================= FOOTER =======================*/}
      </div>


 	)
  }

}



export default connect(state => state)(comingsoon2);