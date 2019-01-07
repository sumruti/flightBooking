import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Testimonials extends Component {

  

render () {


    

    return (
                
            <section id="testimonials" className="section-padding back-size">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-heading white-heading">
                  <h2>Testimonials</h2>
                  <hr className="heading-line" />
                </div>{/* end page-heading */}
                <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                  <div className="carousel-inner text-center">
                    <div className="item active">
                      <blockquote>This is the second trip that I we have booked through UBRHUGTUR and just like the first the second was flawless. The minutest of details were taken care of and we were able to enjoy a guided tour without the hustle of being in a large group. The best part about the team is that they are available 24*7 for any queries that you might have. Siddhanth from the team personally ensured that the tour was customised to our requirements and was patient with multiple iterations that we made</blockquote>
                      <div className="rating">
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star lightgrey" /></span>
                      </div>{/* end rating */}
                      <small>Emma</small>
                    </div>{/* end item */}
                    <div className="item">
                      <blockquote>I have called many travel companies for the same but I got the best response from your company. I am very happy with the way your employees are working and handling all guests. It really gives a very good impression about UBRHUGTUR</blockquote>
                      <div className="rating">
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star lightgrey" /></span>
                      </div>{/* end rating */}
                      <small>Ethan</small>
                    </div>{/* end item */}
                    <div className="item">
                      <blockquote>We had a great time on our trip to Europe in May. Can't wait for the next trip already :-) I highly recommend visiting Amsterdam & Brugges as these are stunning destinations. I want to thank Mr Srijan from UBRHUGTUR for helping us plan the trip</blockquote>
                      <div className="rating">
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star lightgrey" /></span>
                      </div>{/* end rating */}
                      <small>Olivia</small>
                    </div>{/* end item */}
                  </div>{/* end carousel-inner */}
                  <ol className="carousel-indicators">
                    <li data-target="#quote-carousel" data-slide-to={0} className="active"><img src="../../Dist/images/stylish-selfie-photo-for-girls.jpg" className="img-responsive" alt="client-img" />
                    </li>
                    <li data-target="#quote-carousel" data-slide-to={1}><img src="../../Dist/images/outdoor-fashion-photography-08.jpg" className="img-responsive" alt="client-img" />
                    </li>
                    <li data-target="#quote-carousel" data-slide-to={2}><img src="../../Dist/images/W_960_noazeni-fornova-8311.jpg" className="img-responsive" alt="client-img" />
                    </li>
                  </ol>
                </div>{/* end quote-carousel */}
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>
     

        )
    }
}

export default connect(state => state)(Testimonials);