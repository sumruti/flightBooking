import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';



class Login extends Component {

	componentDidMount(){
    document.title = "Login"
  }

render () {


    

 return (
           <section>
            <div className="colored-border" />
            <div id="full-page-form">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="full-page-title">
                      <h3 className="company-name"><span><i className="fa fa-plane" />Star</span>Travels</h3>
                      <p>Lorem ipsum dolor sit amet, conse adipiscing elit. Curabitur metus felis, venenatis eu ultricies vel, vehicula eu urna. Phasellus eget augue id est fringilla feugiat id a tellus. Sed hendrerit quam sed ante euismod posuere ultricies. </p>
                    </div>{/* end full-page-title */}
                    <div className="custom-form custom-form-fields">
                      <h3>Login</h3>
                      <form> 
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Username" required />
                          <span><i className="fa fa-user" /></span>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" placeholder="Password" required />
                          <span><i className="fa fa-lock" /></span>
                        </div>
                        <div className="checkbox">
                          <label><input type="checkbox" /> Remember me</label>
                        </div>
                        <button className="btn btn-orange btn-block">Login</button>
                      </form>
                      <div className="other-links">
                        <p className="link-line">New Here ? <Link to="/register">Signup</Link></p>
                        <a className="simple-link" href="#">Forgot Password ?</a>
                      </div>{/* end other-links */}
                    </div>{/* end custom-form */}
                    <p className="full-page-copyright">© 2017 StarTravel. All rights reserved.</p>
                  </div>{/* end columns */}
                </div>{/* end row */}
              </div>{/* end container */}
            </div>{/* end full-page-form */}
            <div className="colored-border" />
          </section>
   

        )
    }
}

export default connect(state => state)(Login);