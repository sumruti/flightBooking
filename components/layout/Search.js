import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Search extends Component {



    render () {


    

        return (
                  <div className="overlay">
                    <a href="javascript:void(0)" id="close-button" className="closebtn">×</a>
                    <div className="overlay-content">
                      <div className="form-center">
                        <form>
                          <div className="form-group">
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="Search..." required />
                              <span className="input-group-btn"><button type="submit" className="btn"><span><i className="fa fa-search" /></span></button></span>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
       
        )
    }
}

export default connect(state => state)(Search);