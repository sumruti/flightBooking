
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';




class sidebar extends Component {

  componentDidMount(){
    document.title = "Sidebar"
    
  }

render () {

 return (

      <section className="sidebar">
            {/* Sidebar user panel */}
            <div className="user-panel">
              <div className="pull-left image">
                <img src="../../Dist/images/avatar5.png" className="img-circle" alt="User Image" />
              </div>
              <div className="pull-left info">
                <p>Admin</p>
                <a href="#"><i className="fa fa-circle text-success" /> Online</a>
              </div>
            </div>
            {/* search form */}
            <form action="#" method="get" className="sidebar-form">
              <div className="input-group">
                <input type="text" name="q" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </form>
            {/* /.search form */}
            {/* sidebar menu: : style can be found in sidebar.less */}
            <ul className="sidebar-menu" data-widget="tree">
              <li className="header">MAIN NAVIGATION</li>
              <li className=" menu-open">
                <Link to="/admin/dashboard">
                  <i className="fa fa-dashboard" /> <span>Dashboard</span>
                  {/*<span className="pull-right-container">
                                      <i className="fa fa-angle-left pull-right" />
                                    </span>*/}
                </Link>
                {/*<ul className="-menu">
                                  <li><a href="index.html"><i className="fa fa-circle-o" /> Dashboard v1</a></li>
                                  <li className="active"><a href="index2.html"><i className="fa fa-circle-o" /> Dashboard v2</a></li>
                                </ul>*/}
              </li>
             
              <li className=" menu-open">
                <Link to="/admin/managehotel/">
                  <i className="fa fa-hotel" /> <span>Manage Hotel</span>
                  <span className="pull-right-container">
                    {/*<small className="label pull-right bg-green">new</small>*/}
                  </span>
                </Link>
              </li>
              <li className=" menu-open">
                <Link to="/admin/managecar">
                  <i className="fa fa-car" /> <span>Manage Car</span>
                  <span className="pull-right-container">
                    {/*<small className="label pull-right bg-green">new</small>*/}
                  </span>
                </Link>
              </li>
              <li className=" menu-open">
                <Link to="/admin/managepost">
                  <i className="fa fa-sticky-note-o" /> <span>Manage Post</span>
                  <span className="pull-right-container">
                    {/*<small className="label pull-right bg-green">new</small>*/}
                  </span>
                </Link>
              </li>
              
              
            </ul>
          </section>	


          )
  }


}

export default connect(state => state)(sidebar);