import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';
import Testimonials from '../../components/layout/Testimonials';



class Register extends Component {

	componentDidMount(){
    document.title = "Register"
  }
  constructor(props) {
    super(); // or super(props) ?
    this.state = {

      Username:'',
      Email:'',
      Pass:'',
      Confirm:'',
    }
  }


  Username(e){
    this.setState({Username:e.target.value})

  }
  Email(e){
     this.setState({Email:e.target.value})
  }
  Pass(e){
      this.setState({Pass:e.target.value})
  }
  ConfirmPass(e){
     this.setState({Confirm:e.target.value})
  }

  submit(e){

        if(!this.state.Username.trim()){
           $('.validation_error h5').show();
           $('.validation_error h5').text('Please enter Username'); 
           setTimeout(function(){$('.validation_error h5').hide();},3000);
           return false;
        }
        if(!this.state.Email.trim()){
          $('.validation_error h5').show();
          $('.validation_error h5').text('Please enter Email');
          setTimeout(function(){$('.validation_error h5').hide();},3000);
          return false
        }
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(this.state.Email)){
            $('.validation_error h5').show();
            $('.validation_error h5').text('Email not valid');
            setTimeout(function(){$('.validation_error h5').hide();},3000);
            return false
        }
        if(!this.state.Pass.trim()){
          $('.validation_error h5').show();
          $('.validation_error h5').text('Please enter password'); 
          setTimeout(function(){$('.validation_error h5').hide();},3000);
          return false
        }
        if(!this.state.Confirm.trim()){
          $('.validation_error h5').show();
          $('.validation_error h5').text('Please enter confirm password');
          setTimeout(function(){$('.validation_error h5').fadeOut();},3000);
          return false
        }
        if(this.state.Confirm.trim() != this.state.Pass.trim()){
          $('.validation_error h5').show();
          $('.validation_error h5').text('Confirm password not match');  
          setTimeout(function(){$('.validation_error h5').hide();},3000);
          return false
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
                      <h3>Registration</h3>
                      <div className="validation_error"><h5></h5></div>
                      <form>        
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Username" onChange={(e)=>this.Username(e)}/>
                          <span><i className="fa fa-user" /></span>
                          
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" placeholder="Email" onChange={(e)=>this.Email(e)} />
                          <span><i className="fa fa-envelope" /></span>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" placeholder="Password" onChange={(e)=>this.Pass(e)}  />
                          <span><i className="fa fa-lock" /></span>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e)=>this.ConfirmPass(e)} />
                          <span><i className="fa fa-lock" /></span>
                        </div>
                        <button type="button" className="btn btn-orange btn-block" onClick={(e)=>this.submit(e)}>Register</button>
                      </form>
                      <div className="other-links">
                        <p className="link-line">Already Have An Account ? <Link to="/login">Login Here</Link></p>
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

export default connect(state => state)(Register);