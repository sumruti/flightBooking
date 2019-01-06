import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Sidebar from '../layout/sidebar';
import Header from '../layout/Header';
import Footer from '../layout/Footer';




class AddHotel extends Component {

	componentDidMount(){
    document.title = "Add Hotel"
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
              Manage Hotel
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
                    <h3 className="box-title">Add Hotel</h3>
                  </div>
                  {/* /.box-header */}
                  {/* form start */}
                  <form role="form">
                    <div className="box-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Hotel Name </label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Hotel Name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Hotel Address</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Hotel Address" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Hotel Price</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Hotel Price" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputFile">Hotel Image</label>
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

export default connect(state => state)(AddHotel);