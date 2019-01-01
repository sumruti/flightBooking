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
                      <blockquote>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</blockquote>
                      <div className="rating">
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star lightgrey" /></span>
                      </div>{/* end rating */}
                      <small>Jhon Smith</small>
                    </div>{/* end item */}
                    <div className="item">
                      <blockquote>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</blockquote>
                      <div className="rating">
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star lightgrey" /></span>
                      </div>{/* end rating */}
                      <small>Jhon Smith</small>
                    </div>{/* end item */}
                    <div className="item">
                      <blockquote>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</blockquote>
                      <div className="rating">
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star lightgrey" /></span>
                      </div>{/* end rating */}
                      <small>Jhon Smith</small>
                    </div>{/* end item */}
                  </div>{/* end carousel-inner */}
                  <ol className="carousel-indicators">
                    <li data-target="#quote-carousel" data-slide-to={0} className="active"><img src="../../Dist/images/client-1.jpg" className="img-responsive" alt="client-img" />
                    </li>
                    <li data-target="#quote-carousel" data-slide-to={1}><img src="../../Dist/images/client-2.jpg" className="img-responsive" alt="client-img" />
                    </li>
                    <li data-target="#quote-carousel" data-slide-to={2}><img src="../../Dist/images/client-3.jpg" className="img-responsive" alt="client-img" />
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