import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import Footer from '../layout/Footer';




class AddCar extends Component {

	componentDidMount(){
    document.title = "Add Car"
  }

render () {

 return (


     <div className="wrapper">
        <Header/>
        {/* Left side column. contains the logo and sidebar */}
        <aside className="main-sidebar">
          {/* sidebar: style can be found in sidebar.less */}
          <Sidebar/>
          {/* /.sidebar */}
        </aside>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <h1>
              Manage Car
              {/*<small>Version 2.0</small>*/}
            </h1>
            <ol className="breadcrumb">
              <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
              <li className="active">Dashboard</li>
            </ol>
          </section>
          {/* Main content */}
          <section className="content">
            <div className="row">
              {/* left column */}
              <div className="col-md-12">
                {/* general form elements */}
                <div className="box box-primary">
                  <div className="box-header with-border">
                    <h3 className="box-title">Add Car</h3>
                  </div>
                  {/* /.box-header */}
                  {/* form start */}
                  <form role="form">
                    <div className="box-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Car Name </label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Car Name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Car Address</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Car Address" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1"> Price</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Price" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputFile"> Image</label>
                        <input type="file" id="exampleInputFile" />
                      </div>
                    
                    </div>
                    {/* /.box-body */}
                    <div className="box-footer">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              
              </div>
           
            </div>
          </section>
        </div>
        <Footer/>
        {/* Control Sidebar */}
        
        {/* /.control-sidebar */}
        {/* Add the sidebar's background. This div must be placed
       immediately after the control sidebar */}
        </div>



 	)
  }


}

export default connect(state => state)(AddCar);