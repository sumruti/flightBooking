import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';




class Header extends Component {

	componentDidMount(){
    document.title = "Dashboard"
  }

  shoHide(e){
    $('#logout').toggle();
  }

render () {

 return (


        <header className="main-header">
          {/* Logo */}
          <Link to="/admin/dashboard" className="logo">
            {/* mini logo for sidebar mini 50x50 pixels */}
            <span className="logo-mini"><b>Admin</b></span>
            {/* logo for regular state and mobile devices */}
            <span className="logo-lg"><b>Admin</b></span>
          </Link>
          {/* Header Navbar: style can be found in header.less */}
          <nav className="navbar navbar-static-top">
            {/* Sidebar toggle button*/}
            <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
              <span className="sr-only">Toggle navigation</span>
            </a>
            {/* Navbar Right Menu */}
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                {/* Messages: style can be found in dropdown.less*/}
              
                {/* Notifications: style can be found in dropdown.less */}
             
                {/* Tasks: style can be found in dropdown.less */}
              
                {/* User Account: style can be found in dropdown.less */}
                <li className="dropdown user user-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={(e)=>this.shoHide(e)}>
                    <img src="../../Dist/images/avatar5.png" className="user-image" alt="User Image" />
                    <span className="hidden-xs">Admin</span>
                  </a>
                  <ul className="dropdown-menu" id="logout">
                    {/* User image */}
                    <li className="user-header">
                      <img src="../../Dist/images/avatar5.png" className="img-circle" alt="User Image" />
                      <p>
                        Admin
                        {/*<small>Member since Nov. 2012</small>*/}
                      </p>
                    </li>
                    {/* Menu Body */}
                    {/*<li className="user-body">
                                          <div className="row">
                                            <div className="col-xs-4 text-center">
                                              <a href="#">Followers</a>
                                            </div>
                                            <div className="col-xs-4 text-center">
                                              <a href="#">Sales</a>
                                            </div>
                                            <div className="col-xs-4 text-center">
                                              <a href="#">Friends</a>
                                            </div>
                                          </div>
                                          {/* /.row 
                                        </li>*/}
                    {/* Menu Footer*/}
                    <li className="user-footer">
                      <div className="pull-left">
                        <a href="#" className="btn btn-default btn-flat">Profile</a>
                      </div>
                      <div className="pull-right">
                        <a href="#" className="btn btn-default btn-flat">Sign out</a>
                      </div>
                    </li>
                  </ul>
                </li>
                {/* Control Sidebar Toggle Button */}
               
              </ul>
            </div>
          </nav>
        </header>
   
       
     



 	)
  }


}

export default connect(state => state)(Header);