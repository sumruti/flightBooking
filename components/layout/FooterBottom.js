import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class FooterBottom extends Component {

	

    render () {


    

        return (
               

               <div id="footer-bottom" className="ftr-bot-black">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="copyright">
                      <p>© 2017 <a href="#">StarTravel</a>. All rights reserved.</p>
                    </div>{/* end columns */}
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="terms">
                      <ul className="list-unstyled list-inline">
                        <li><a href="#">Terms &amp; Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                      </ul>
                    </div>{/* end columns */}
                  </div>{/* end row */}
                </div>{/* end container */}
              </div>
              

      

        )
    }
}

export default connect(state => state)(FooterBottom);