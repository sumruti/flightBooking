import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';



class UserProfile extends Component {

  componentDidMount(){
    document.title = "Profile"

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
        <section className="page-cover dashboard">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">My Account</h1>
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">My Account</li>
                </ul>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end page-cover */}
        {/*===== INNERPAGE-WRAPPER ====*/}
        <section className="innerpage-wrapper">
          <div id="dashboard" className="innerpage-section-padding">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="dashboard-heading">
                    <h2>Travel <span>Profile</span></h2>
                    <p>Hi Lisa, Welcome to UBRHUGTUR!</p>
                    <p>All your trips booked with us will appear here and you'll be able to manage everything!</p>
                  </div>{/* end dashboard-heading */}
                  <div className="dashboard-wrapper">
                    <div className="row">
                      <div className="col-xs-12 col-sm-2 col-md-2 dashboard-nav">
                        <ul className="nav nav-tabs nav-stacked text-center">
                          <li><a href={null}><span><i className="fa fa-cogs" /></span>Dashboard</a></li>
                          <li className="active"><a href="#"><span><i className="fa fa-user" /></span>Profile</a></li>
                          <li><a href={null}><span><i className="fa fa-briefcase" /></span>Booking</a></li>
                          <li><a href={null}><span><i className="fa fa-heart" /></span>Wishlist</a></li>
                          <li><a href={null}><span><i className="fa fa-credit-card" /></span>My Cards</a></li>
                        </ul>
                      </div>{/* end columns */}
                      <div className="col-xs-12 col-sm-10 col-md-10 dashboard-content user-profile">
                        <h2 className="dash-content-title">My Profile</h2>
                        <div className="panel panel-default">
                          <div className="panel-heading"><h4>Profile Details</h4></div>
                          <div className="panel-body">
                            <div className="row">
                              <div className="col-sm-5 col-md-4 user-img">
                                <img src="../../Dist/images/profile_user.jpg" className="img-responsive" alt="user-img" />
                              </div>{/* end columns */}
                              <div className="col-sm-7 col-md-8  user-detail">
                                <ul className="list-unstyled">
                                  <li><span>Name:</span> Lisa Jorge</li>
                                  <li><span>Date of Birth:</span> 25 Jan 1987</li>
                                  <li><span>Email:</span> youremail@gmail.com</li>
                                  <li><span>Phone:</span> +31 123 456 7890</li>
                                  <li><span>Address:</span> 23 Block, Lorem Ipsum, California.</li>
                                  <li><span>Country:</span> United States of America</li>
                                </ul>
                                <button className="btn" data-toggle="modal" data-target="#edit-profile">Edit Profile</button>
                              </div>{/* end columns */}
                              <div className="col-sm-12 user-desc">
                                <h4>About You</h4>
                                <p>Vestibulum tristique, justo eu sollicitudin sagittis, metus dolor eleifend urna, quis scelerisque purus quam nec ligula. Suspendisse iaculis odio odio, ac vehicula nisi faucibus eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere semper sem ac aliquet. Duis vel bibendum tellus, eu hendrerit sapien. Proin fringilla, enim vel lobortis viverra, augue orci fringilla diam, sed cursus elit mi vel lacus. Nulla facilisi. Fusce sagittis, magna non vehicula gravida, ante arcu pulvinar arcu, aliquet luctus arcu purus sit amet sem. Mauris blandit odio sed nisi porttitor egestas. Mauris in quam interdum purus vehicula rutrum quis in sem. Integer interdum lectus at nulla dictum luctus. Sed risus felis, posuere id condimentum non, egestas pulvinar enim. Praesent pretium risus eget nisi ullamcorper fermentum. Duis lacinia nisi ac rhoncus vestibulum.</p>
                              </div>{/* end columns */}
                            </div>{/* end row */}
                          </div>{/* end panel-body */}
                        </div>{/* end panel-detault */}
                      </div>{/* end columns */}
                    </div>{/* end row */}
                  </div>{/* end dashboard-wrapper */}
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}          
          </div>{/* end dashboard */}
        </section>{/* end innerpage-wrapper */}
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
        </section>
      </div>
  
        <FooterBottom/>
      </div>


    )
   }

}

export default connect(state => state)(UserProfile);