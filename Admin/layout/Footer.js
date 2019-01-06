
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import Footer from '../layout/Footer';




class footer extends Component {

	componentDidMount(){
    document.title = "Dashboard"
  }

render () {

	 return (
	 	
			<footer className="main-footer">
			  <div className="pull-right hidden-xs">
			  {/*  <b>Version</b> 2.4.0*/}
			  </div>
			  <strong>Copyright © 2019 <a href={null}>Bavn Softs</a>.</strong> All rights
			  reserved.
			</footer> 	
    )
  }


}

export default connect(state => state)(footer);