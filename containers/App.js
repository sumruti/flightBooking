import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class App extends Component {


    render () {

    	const {message} = this.props.messageReducer;

        return (
        	<div>
               
            </div>
        )
    }
}

export default connect(state => state)(App);