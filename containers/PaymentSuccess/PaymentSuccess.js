import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';



class PaymentSuccess  extends Component {

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
        {/*===== INNERPAGE-WRAPPER ====*/}
        <section className="innerpage-wrapper">
          <div id="payment-success" className="section-padding">
            <div className="container text-center">
              <div className="row">
                <div className="col-sm-12 col-md-8 col-md-offset-2">
                  <div className="payment-success-text">
                    <h2>Payment Was Successful!</h2>
                    <p>Your payment of $700 has been processed successfully</p>
                    <span><i className="fa fa-check-circle" /></span>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <td><span><i className="fa fa-clone" /></span>Category</td>
                            <td><span><i className="fa fa-diamond" /></span>Item Name</td>
                            <td><span><i className="fa fa-dollar" /></span>Item Price</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><span><i className="fa fa-plane" /></span>Flight</td>
                            <td>London to Spain<span className="t-date">25-05-2018</span></td>
                            <td>$550</td>
                          </tr>
                          <tr>
                            <td><span><i className="fa fa-building" /></span>Hotel</td>
                            <td>Herta Berlin Hotel<span className="t-date">25-05-2018</span></td>
                            <td>$150</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>Booking details has been send to your email id. Kindly check your email in order to confirm the transaction.</p>
                  </div>
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
      </div>
        <FooterBottom/>
      </div>


    )
   }

}

export default connect(state => state)(PaymentSuccess);