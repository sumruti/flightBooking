import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class TopBar extends Component {

	

    render () {


    

        return (
     
                  <div id="top-bar" className="tb-text-white">
                    <div className="container">
                      <div className="row">          
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div id="info">
                            <ul className="list-unstyled list-inline">
                              <li><span><i className="fa fa-map-marker" /></span>29 Land St, Lorem City, CA</li>
                              <li><span><i className="fa fa-phone" /></span>+00 123 4567</li>
                            </ul>
                          </div>{/* end info */}
                        </div>{/* end columns */}
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div id="links">
                            <ul className="list-unstyled list-inline">
                              <li><Link to="/login"><span><i className="fa fa-lock" /></span>Login</Link></li>
                              <li><Link to="/register"><span><i className="fa fa-plus" /></span>Sign Up</Link></li>
                              <li>
                                <form>
                                  <ul className="list-inline">
                                    <li>
                                      <div className="form-group currency">
                                        <span><i className="fa fa-angle-down" /></span>
                                        <select className="form-control">
                                          <option value>$</option>
                                          <option value>£</option>
                                        </select>
                                      </div>{/* end form-group */}
                                    </li>
                                    <li>
                                      <div className="form-group language">
                                        <span><i className="fa fa-angle-down" /></span>
                                        <select className="form-control">
                                          <option value>EN</option>
                                          <option value>UR</option>
                                          <option value>FR</option>
                                          <option value>IT</option>
                                        </select>
                                      </div>{/* end form-group */}
                                    </li>
                                  </ul>
                                </form>
                              </li>
                            </ul>
                          </div>{/* end links */}
                        </div>{/* end columns */}       
                      </div>{/* end row */}
                    </div>{/* end container */}
                  </div>

      

        )
    }
}

export default connect(state => state)(TopBar);