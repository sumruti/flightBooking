import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';





class Cruise extends Component {

 componentDidMount(){
    document.title = "Cruise"
     $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider){
          $('body').removeClass('loading');
      },
      flexDirectionNav: false,
      controlNav: false,
    });
  }
	


render () {


    

 return (
      <div>
 	     <TopBar/>
       {/* end overlay */}
        {/*========================= FLEX SLIDER =====================*/}
        <section className="flexslider-container" id="flexslider-container-5">
         
          <Header/>
         {/* end sidenav-content */}
          <div className="flexslider slider" id="slider-5">
            <ul className="slides">
              <li className="item-1 back-size cruise_banner_img">
                <div className="meta">         
                  <div className="container">
                    <h2>Dubai Boat Tour</h2>
{/*                    <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                    */}                    <span className="highlight-price">STARTING FROM 900$ ONLY</span>
                  </div>{/* end container */}  
                </div>{/* end meta */}
              </li>{/* end item-1 */}
              <li className="item-2 back-size cruise_banner_img1" >
                <div className=" meta">         
                  <div className="container">
                    <h2>Dubai Boat Tour</h2>
{/*                    <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                    */}                    <span className="highlight-price">STARTING FROM 1200$ ONLY</span>
                  </div>{/* end container */}  
                </div>{/* end meta */}
              </li>{/* end item-2 */}
            </ul>
          </div>{/* end slider */}
          <div className="search-tabs" id="search-tabs-5">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="tab-content">
                    <div id="cruise" className="tab-pane active">
                      <form>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                            <div className="row">
                              <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control" placeholder="From" />
                                  <i className="fa fa-map-marker" />
                                </div>
                              </div>{/* end columns */}
                              <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control" placeholder="To" />
                                  <i className="fa fa-map-marker" />
                                </div>
                              </div>{/* end columns */}
                            </div>{/* end row */}               
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                            <div className="row">
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control dpd1" placeholder="Check In" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>{/* end columns */}
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control dpd2" placeholder="Check Out" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>{/* end columns */}
                            </div>{/* end row */}               
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                            <div className="form-group right-icon">
                              <select className="form-control">
                                <option defaultValue>Adults</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                              <i className="fa fa-angle-down" />
                            </div>
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                            <button className="btn btn-orange">Search</button>
                          </div>{/* end columns */}
                        </div>{/* end columns */}
                      </form>
                    </div>{/* end cruises */}
                  </div>{/* end tab-content */}
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end search-tabs */}
        </section>{/* end flexslider-container */}
        {/*=============== CRUISE OFFERS ===============*/}
          <section id="cruise-offers" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-heading">
                  <h2>Cruise Offers</h2>
                  <hr className="heading-line" />
                </div>{/* end page-heading */}
                <div className="row">
                  <div className="col-sm-6 col-md-6">
                    <div className="main-block cruise-block">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                          <div className="main-img cruise-img">
                            <a href='/cruiseDetail'>
                              <img src="../../Dist/images/The-Top-Five-Australia-and-Asian-Cruise-Holidays.jpg" className="img-responsive" alt="cruise-img" />
                              <div className="cruise-mask">
                                <p>7 Nights, 6 Days</p>
                              </div>{/* end cruise-mask */}
                            </a>
                          </div>{/* end cruise-img */}
                        </div>{/* end columns */}
                        <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                          <div className=" main-info cruise-info">
                            <div className="main-title cruise-title">
                              <a href="#">Spain Boat Tour</a>
                              <p>From: Italy to Spain</p>
                              <div className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star grey" /></span>
                              </div>{/* end rating */}
                              <span className="cruise-price">$950.00</span>
                            </div>{/* end cruise-title */}
                          </div>{/* end cruise-info */}
                        </div>{/* end columns */}
                      </div>{/* end row */} 
                    </div>{/* end cruise-block */}
                  </div>{/* end columns */}
                  <div className="col-sm-6 col-md-6">
                    <div className="main-block cruise-block">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                          <div className="main-img cruise-img">
                            <a href='/cruiseDetail'>
                              <img src="../../Dist/images/thumb-1920-542931.jpg" className="img-responsive" alt="cruise-img" />
                              <div className="cruise-mask">
                                <p>7 Nights, 6 Days</p>
                              </div>{/* end cruise-mask */}
                            </a>
                          </div>{/* end cruise-img */}
                        </div>{/* end columns */}
                        <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                          <div className=" main-info cruise-info">
                            <div className="main-title cruise-title">
                              <a href="#">Spain Boat Tour</a>
                              <p>From: Italy to Spain</p>
                              <div className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star grey" /></span>
                              </div>{/* end rating */}
                              <span className="cruise-price">$950.00</span>
                            </div>{/* end cruise-title */}
                          </div>{/* end cruise-info */}
                        </div>{/* end columns */}
                      </div>{/* end row */} 
                    </div>{/* end cruise-block */}
                  </div>{/* end columns */}
                  <div className="col-sm-6 col-md-6">
                    <div className="main-block cruise-block">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                          <div className="main-img cruise-img">
                            <a href='/cruiseDetail'>
                              <img src="../../Dist/images/Outdoor-deck-party-2-.jpg" className="img-responsive" alt="cruise-img" />
                              <div className="cruise-mask">
                                <p>7 Nights, 6 Days</p>
                              </div>{/* end cruise-mask */}
                            </a>
                          </div>{/* end cruise-img */}
                        </div>{/* end columns */}
                        <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                          <div className=" main-info cruise-info">
                            <div className="main-title cruise-title">
                              <a href="#">Spain Boat Tour</a>
                              <p>From: Italy to Spain</p>
                              <div className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star grey" /></span>
                              </div>{/* end rating */}
                              <span className="cruise-price">$950.00</span>
                            </div>{/* end cruise-title */}
                          </div>{/* end cruise-info */}
                        </div>{/* end columns */}
                      </div>{/* end row */} 
                    </div>{/* end cruise-block */}
                  </div>{/* end columns */}
                  <div className="col-sm-6 col-md-6">
                    <div className="main-block cruise-block">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                          <div className="main-img cruise-img">
                            <a href='/cruiseDetail'>
                              <img src="../../Dist/images/bateaux.jpg" className="img-responsive" alt="cruise-img" />
                              <div className="cruise-mask">
                                <p>7 Nights, 6 Days</p>
                              </div>{/* end cruise-mask */}
                            </a>
                          </div>{/* end cruise-img */}
                        </div>{/* end columns */}
                        <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                          <div className=" main-info cruise-info">
                            <div className="main-title cruise-title">
                              <a href="#">Spain Boat Tour</a>
                              <p>From: Italy to Spain</p>
                              <div className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star grey" /></span>
                              </div>{/* end rating */}
                              <span className="cruise-price">$950.00</span>
                            </div>{/* end cruise-title */}
                          </div>{/* end cruise-info */}
                        </div>{/* end columns */}
                      </div>{/* end row */} 
                    </div>{/* end cruise-block */}
                  </div>{/* end columns */}
                </div>{/* end row */}
                <div className="view-all text-center">
                  <a href="#" className="btn btn-orange">View All</a>
                </div>{/* end view-all */}
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>
        {/* end cruise-offers */}
        {/*============== HIGHLIGHTS =============*/}
        <section id="highlights" className="highlights-2 highlights-grey"> 
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row">
                  <div id="boxes">
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">  
                      <div className="highlight-box">
                        <div className="h-icon">
                          <span><i className="fa fa-plane" /></span>
                        </div>{/* end h-icon */}
                        <div className="h-text">
                          <span className="numbers">2496</span>
                          <p>Outstanding Tours</p>
                        </div>{/* end h-text */}                           
                      </div>{/* end highlight-box */}                       
                    </div>{/* end columns */}
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">  
                      <div className="highlight-box">
                        <div className="h-icon">
                          <span><i className="fa fa-ship" /></span>
                        </div>{/* end h-icon */}
                        <div className="h-text cruise">
                          <span className="numbers">1906</span>
                          <p>Worldwide Cruise</p> 
                        </div>{/* end h-text */}                           
                      </div>{/* end highlight-box */}                       
                    </div>{/* end columns */}
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">  
                      <div className="highlight-box">
                        <div className="h-icon">
                          <span><i className="fa fa-taxi" /></span>
                        </div>{/* end h-icon */}
                        <div className="h-text taxi">
                          <span className="numbers">2033</span>
                          <p>Luxury Car Booking</p>   
                        </div>{/* end h-text */}                           
                      </div>{/* end highlight-box */}                       
                    </div>{/* end columns */}
                  </div>{/* end boxes */}
                </div>{/* end row */}
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end highlights */}
        {/*======= OFFER BANNER ======*/}
        <section id="cruise-offer-banner"> 
          <div className="container">
            <div className="row">
              <div className="col-sm-6 cruise-offer-img text-center">
                <img src="../../Dist/images/Budapest-boat-party-.jpg" className="img-responsive" alt="offer-img" />
              </div>{/* end columns */}
              <div className="col-sm-6 cruise-offer-text">
                <h2>Best Offer</h2>
                <h3 className="cruise-tour">Bodrum Alacati To Istanbul Tour</h3>
                <p className="cruise-offer-dur">7 Nights, 6 Days</p>
                <p className="cruise-offer-price">From $1,441</p>
                <a href="#" className="btn btn-black">Click to View</a>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end offer-banner */}
        {/*=============== TESTIMONIALS ===============*/}
        <Testimonials/>
       {/* end testimonials */} 
        {/*======================= FOOTER =======================*/}
        <FooterBottom/>
      </div>
 
 	)
  }


}

export default connect(state => state)(Cruise);