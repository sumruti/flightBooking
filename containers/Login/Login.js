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
  constructor(props) {
    super(); // or super(props) ?
    this.state = {

      Username:'',
      Pass:''
    
    }
  }


  Username(e){
    this.setState({Username:e.target.value})

  }

  Pass(e){
      this.setState({Pass:e.target.value})
  }

  submit(e){
       if(!this.state.Username.trim()){
          $('.validation_error h5').show();
          $('.validation_error h5').text('Please enter Username'); 
          setTimeout(function(){$('.validation_error h5').hide();},3000);
          return false;
        }

       if(!this.state.Pass.trim()){
          $('.validation_error h5').show();
          $('.validation_error h5').text('Please enter password'); 
          setTimeout(function(){$('.validation_error h5').hide();},3000);
          return false;
        } 
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
                      <h3 className="company-name"><span>UBRHUG</span>TUR</h3>
{/*                      <p>Lorem ipsum dolor sit amet, conse adipiscing elit. Curabitur metus felis, venenatis eu ultricies vel, vehicula eu urna. Phasellus eget augue id est fringilla feugiat id a tellus. Sed hendrerit quam sed ante euismod posuere ultricies. </p>
                    */}                    </div>{/* end full-page-title */}
                    <div className="custom-form custom-form-fields">
                      <h3>Login</h3>
                      <div className="validation_error"><h5></h5></div>
                      <form> 
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Username" onChange={(e)=>this.Username(e)} required />
                          <span><i className="fa fa-user" /></span>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" placeholder="Password" onChange={(e)=>this.Pass(e)}  required />
                          <span><i className="fa fa-lock" /></span>
                        </div>
                        <div className="checkbox">
                          <label><input type="checkbox" /> Remember me</label>
                        </div>
                        <button type="button" className="btn btn-orange btn-block" onClick={(e)=>this.submit(e)}>Login</button>
                      </form>
                      <div className="other-links">
                        <p className="link-line">New Here ? <Link to="/register">Signup</Link></p>
                        <a className="simple-link" href="#">Forgot Password ?</a>
                      </div>{/* end other-links */}
                    </div>{/* end custom-form */}
                    <p className="full-page-copyright">© 2017 UBRHUGTUR. All rights reserved.</p>
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