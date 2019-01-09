import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class FooterBottom extends Component {

  

    render () {


    

        return (
               
 <section id="footer" className="ftr-heading-o ftr-heading-mgn-1">
          <div id="footer-top" className="banner-padding ftr-top-grey ftr-text-white">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 footer-widget ftr-contact">
                  <h3 className="footer-heading">CONTACT US</h3>
                  <ul className="list-unstyled">
                    <li><span><i className="fa fa-map-marker" /></span> Fevzi Çakmak Mahallesi, Atisalani Cd. No:78, 34220 Esenler/Istanbul</li>
                    <li><span><i className="fa fa-phone" /></span>Mob:+90 212 908 0600 Mob: +90 538 281 1130</li>
                    <li><span><i className="fa fa-envelope" /></span>info@ubrhugtur.com</li>
                  </ul>
                  
                   <ul className="list-unstyled">
                    <li><span><i className="fa fa-map-marker" /></span> 5352 N. Lincoln Ave Chicago, IL 60625, USA </li>
                    <li><span><i className="fa fa-phone" /></span>Phone: 312-460-2460 Mob: +1-312-522-2480</li>
                  </ul>
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2 footer-widget ftr-links">
                  <h3 className="footer-heading">COMPANY</h3>
                  <ul className="list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/flights">Flight</Link></li>
                    <li><Link to="/hotels">Hotel</Link></li>
                    {/*<li><Link to="/aboutus">Tours</Link></li>*/}
                    <li><Link to="/Cruise">Cruise</Link></li>
                    <li><Link to="/car">Cars</Link></li>
                  </ul>
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 footer-widget ftr-links ftr-pad-left">
                  <h3 className="footer-heading">RESOURCES</h3>
                  <ul className="list-unstyled">
                   {/* <li><Link to="#">Blogs</a></li>*/}
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    {/*<li><Link to="#">Site Map</Link></li>*/}
                  </ul>
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 footer-widget ftr-about">
                  <h3 className="footer-heading">ABOUT US</h3>
                  <p>UBRHUGTUR is a travel company that specializes in creating unique adventures to destinations around the world. Our clients include corporate clients planning incentive travel, honeymooners and couples planning a destination wedding and discerning adults looking for the ultimate travel experience</p>
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
             <div id="footer-bottom" className="ftr-bot-black">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="copyright">
                      <p>© 2019 <a href="#">UBRHUGTUR</a>. All rights reserved.</p>
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
        {/* end footer-bottom */}
        </section>
              

      

        )
    }
}

export default connect(state => state)(FooterBottom);