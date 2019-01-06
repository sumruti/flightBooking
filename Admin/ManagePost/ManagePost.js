import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Sidebar from '../layout/sidebar';
import Header from '../layout/Header';
import Footer from '../layout/Footer';




class ManagePost extends Component {

	componentDidMount(){
    document.title = "Manage Post"
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
              Manage Post
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
              <div className="col-sm-5">
              </div>
              <div className="col-sm-5">
              </div>
              <div className="col-sm-2">
                <button type="button" className="btn btn-block btn-primary btn-lg"><Link to="/admin/AddPost">Add Post</Link></button>
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

export default connect(state => state)(ManagePost);