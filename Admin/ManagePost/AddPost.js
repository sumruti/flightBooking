import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import Footer from '../layout/Footer';




class AddPost extends Component {

	componentDidMount(){
    document.title = "Add Post"
  }

render () {

  $(document).ready(function(){
      CKEDITOR.replace('editor1')
      //bootstrap WYSIHTML5 - text editor
      //$('.textarea').wysihtml5()
  })

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
              {/* left column */}
              <div className="col-md-12">
                {/* general form elements */}
                <div className="box box-primary">
                  <div className="box-header with-border">
                    <h3 className="box-title">Add Post</h3>
                  </div>
                  {/* /.box-header */}
                  {/* form start */}
                  <form role="form">
                    <div className="box-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Post Title </label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Post Title" />
                      </div>
                      <div className="form-group">
                        <label>Date:</label>

                        <div className="input-group date">
                          <div className="input-group-addon">
                            <i className="fa fa-calendar"></i>
                          </div>
                          <input type="text" className="form-control pull-right" id="datepicker" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputFile">Description</label>
                        <div className="box box-info">
                          <div className="box-header">
                            
                            {/* tools box */}
                            
                            {/* /. tools */}
                          </div>
                          {/* /.box-header */}
                          <div className="box-body pad">
                            <form>
                              <textarea id="editor1" name="editor1" rows={10} cols={80} defaultValue={"                                            This is my textarea to be replaced with CKEditor.\n                    "} />
                            </form>
                        </div>
                         <div className="form-group">
                        <label htmlFor="exampleInputFile">Image</label>
                        <input type="file" id="exampleInputFile" />
                      </div>
                        {/* /.box */}
                     
        </div>
        {/* /.col*/}
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

export default connect(state => state)(AddPost);