import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import Footer from '../layout/Footer';




class Dashboard extends Component {

	componentDidMount(){
    document.title = "Dashboard"
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
              Dashboard
             {/* <small>Version 2.0</small>*/}
            </h1>
            <ol className="breadcrumb">
              <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
              <li className="active">Dashboard</li>
            </ol>
          </section>
          {/* Main content */}
          <section className="content">
            {/* Info boxes */}
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="info-box">
                  <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline" /></span>
                  <div className="info-box-content">
                    <span className="info-box-text">CPU Traffic</span>
                    <span className="info-box-number">90<small>%</small></span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="info-box">
                  <span className="info-box-icon bg-red"><i className="fa fa-google-plus" /></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Likes</span>
                    <span className="info-box-number">41,410</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              {/* fix for small devices only */}
              <div className="clearfix visible-sm-block" />
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="info-box">
                  <span className="info-box-icon bg-green"><i className="ion ion-ios-cart-outline" /></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Sales</span>
                    <span className="info-box-number">760</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="info-box">
                  <span className="info-box-icon bg-yellow"><i className="ion ion-ios-people-outline" /></span>
                  <div className="info-box-content">
                    <span className="info-box-text">New Members</span>
                    <span className="info-box-number">2,000</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
           
            {/* /.row */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
        <Footer/>
        {/* Control Sidebar */}
        
        {/* /.control-sidebar */}
        {/* Add the sidebar's background. This div must be placed
       immediately after the control sidebar */}
        </div>



 	)
  }


}

export default connect(state => state)(Dashboard);