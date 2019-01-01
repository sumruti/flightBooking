import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Sidebar extends Component {

	

render () {


    

    return (
                
        <div className="sidenav-content">
          <div id="mySidenav" className="sidenav">
            <h2 id="web-name"><span><i className="fa fa-plane" /></span>Star Travel</h2>
            <div id="main-menu">
              <div className="closebtn">
                <button className="btn btn-default" id="closebtn">×</button>
              </div>{/* end close-btn */}
              <div className="list-group panel">
                <Link to="/" className="list-group-item active" ><span><i className="fa fa-home link-icon" /></span>Home<span>{/*<i className="fa fa-chevron-down arrow" />*/}</span></Link>
                {/*<div className="collapse sub-menu" id="home-links">
                  <a href="#" className="list-group-item active">Main Homepage</a>
                  <a href="flight-homepage.html" className="list-group-item">Flight Homepage</a>
                  <a href="hotel-homepage.html" className="list-group-item">Hotel Homepage</a>
                  <a href="tour-homepage.html" className="list-group-item">Tour Homepage</a>
                  <a href="cruise-homepage.html" className="list-group-item">Cruise Homepage</a>
                  <a href="car-homepage.html" className="list-group-item">Car Homepage</a>
                  <a href="landing-page.html" className="list-group-item">Landing Page</a>
                  <a href="travel-agency-homepage.html" className="list-group-item">Travel Agency Page</a>
                </div> end sub-menu */}
                <Link to="/flights" className="list-group-item" ><span><i className="fa fa-plane link-icon" /></span>Flights<span>{/*<i className="fa fa-chevron-down arrow" />*/}</span></Link>
                {/*<div className="collapse sub-menu" id="flights-links">
                  <a href="flight-homepage.html" className="list-group-item">Flight Homepage</a>
                  <a href="flight-listing-left-sidebar.html" className="list-group-item">List View Left Sidebar</a>
                  <a href="flight-listing-right-sidebar.html" className="list-group-item">List View Right Sidebar</a>
                  <a href="flight-grid-left-sidebar.html" className="list-group-item">Grid View Left Sidebar</a>
                  <a href="flight-grid-right-sidebar.html" className="list-group-item">Grid View Right Sidebar</a>
                  <a href="flight-detail-left-sidebar.html" className="list-group-item">Detail Left Sidebar</a>
                  <a href="flight-detail-right-sidebar.html" className="list-group-item">Detail Right Sidebar</a>
                  <a href="flight-booking-left-sidebar.html" className="list-group-item">Booking Left Sidebar</a>
                  <a href="flight-booking-right-sidebar.html" className="list-group-item">Booking Right Sidebar</a>
                  <a href="flight-search-result.html" className="list-group-item">Search Result</a>
                  <a href="flight-offers.html" className="list-group-item">Hot Offers</a>
                </div>x end sub-menu */}
                <Link to="/hotels" className="list-group-item" ><span><i className="fa fa-building link-icon" /></span>Hotels<span>{/*<i className="fa fa-chevron-down arrow" />*/}</span></Link>
                <Link to="/aboutus" className="list-group-item" ><span><i className="fa fa-building link-icon" /></span>About us<span>{/*<i className="fa fa-chevron-down arrow" />*/}</span></Link>
                <Link to="/contact" className="list-group-item" ><span><i className="fa fa-building link-icon" /></span>Contact us<span>{/*<i className="fa fa-chevron-down arrow" />*/}</span></Link>

                {/*<div className="collapse sub-menu" id="hotels-links">
                  <a href="hotel-homepage.html" className="list-group-item">Hotel Homepage</a>
                  <a href="hotel-listing-left-sidebar.html" className="list-group-item">List View Left Sidebar</a>
                  <a href="hotel-listing-right-sidebar.html" className="list-group-item">List View Right Sidebar</a>
                  <a href="hotel-grid-left-sidebar.html" className="list-group-item">Grid View Left Sidebar</a>
                  <a href="hotel-grid-right-sidebar.html" className="list-group-item">Grid View Right Sidebar</a>
                  <a href="hotel-detail-left-sidebar.html" className="list-group-item">Detail Left Sidebar</a>
                  <a href="hotel-detail-right-sidebar.html" className="list-group-item">Detail Right Sidebar</a>
                  <a href="hotel-booking-left-sidebar.html" className="list-group-item">Booking Left Sidebar</a>
                  <a href="hotel-booking-right-sidebar.html" className="list-group-item">Booking Right Sidebar</a>
                  <a href="hotel-search-result.html" className="list-group-item">Search Result</a>
                  <a href="hotel-offers.html" className="list-group-item">Hot Offers</a>
                </div> end sub-menu 
                <a href="#tours-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-globe link-icon" /></span>Tours<span><i className="fa fa-chevron-down arrow" /></span></a>
                <div className="collapse sub-menu" id="tours-links">
                  <a href="tour-homepage.html" className="list-group-item">Tour Homepage</a>
                  <a href="tour-listing-left-sidebar.html" className="list-group-item">List View Left Sidebar</a>
                  <a href="tour-listing-right-sidebar.html" className="list-group-item">List View Right Sidebar</a>
                  <a href="tour-grid-left-sidebar.html" className="list-group-item">Grid View Left Sidebar</a>
                  <a href="tour-grid-right-sidebar.html" className="list-group-item">Grid View Right Sidebar</a>
                  <a href="tour-detail-left-sidebar.html" className="list-group-item">Detail Left Sidebar</a>
                  <a href="tour-detail-right-sidebar.html" className="list-group-item">Detail Right Sidebar</a>
                  <a href="tour-booking-left-sidebar.html" className="list-group-item">Booking Left Sidebar</a>
                  <a href="tour-booking-right-sidebar.html" className="list-group-item">Booking Right Sidebar</a>
                  <a href="tour-search-result.html" className="list-group-item">Search Result</a>
                  <a href="tour-offers.html" className="list-group-item">Hot Offers</a>
                </div> end sub-menu 
                <a href="#cruise-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-ship link-icon" /></span>Cruise<span><i className="fa fa-chevron-down arrow" /></span></a>
                <div className="collapse sub-menu" id="cruise-links">
                  <a href="cruise-homepage.html" className="list-group-item">Cruise Homepage</a>
                  <a href="cruise-listing-left-sidebar.html" className="list-group-item">List View Left Sidebar</a>
                  <a href="cruise-listing-right-sidebar.html" className="list-group-item">List View Right Sidebar</a>
                  <a href="cruise-grid-left-sidebar.html" className="list-group-item">Grid View Left Sidebar</a>
                  <a href="cruise-grid-right-sidebar.html" className="list-group-item">Grid View Right Sidebar</a>
                  <a href="cruise-detail-left-sidebar.html" className="list-group-item">Detail Left Sidebar</a>
                  <a href="cruise-detail-right-sidebar.html" className="list-group-item">Detail Right Sidebar</a>
                  <a href="cruise-booking-left-sidebar.html" className="list-group-item">Booking Left Sidebar</a>
                  <a href="cruise-booking-right-sidebar.html" className="list-group-item">Booking Right Sidebar</a>
                  <a href="cruise-search-result.html" className="list-group-item">Search Result</a>
                  <a href="cruise-offers.html" className="list-group-item">Hot Offers</a>
                </div> end sub-menu x
                <a href="#cars-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-car link-icon" /></span>Cars<span><i className="fa fa-chevron-down arrow" /></span></a>
                <div className="collapse sub-menu" id="cars-links">
                  <a href="car-homepage.html" className="list-group-item">Car Homepage</a>
                  <a href="car-listing-left-sidebar.html" className="list-group-item">List View Left Sidebar</a>
                  <a href="car-listing-right-sidebar.html" className="list-group-item">List View Right Sidebar</a>
                  <a href="car-grid-left-sidebar.html" className="list-group-item">Grid View Left Sidebar</a>
                  <a href="car-grid-right-sidebar.html" className="list-group-item">Grid View Right Sidebar</a>
                  <a href="car-detail-left-sidebar.html" className="list-group-item">Detail Left Sidebar</a>
                  <a href="car-detail-right-sidebar.html" className="list-group-item">Detail Right Sidebar</a>
                  <a href="car-booking-left-sidebar.html" className="list-group-item">Booking Left Sidebar</a>
                  <a href="car-booking-right-sidebar.html" className="list-group-item">Booking Right Sidebar</a>
                  <a href="car-search-result.html" className="list-group-item">Search Result</a>
                  <a href="car-offers.html" className="list-group-item">Hot Offers</a>
                </div> end sub-menu
                <a href="#features-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-puzzle-piece link-icon" /></span>Features<span><i className="fa fa-chevron-down arrow" /></span></a>
                <div className="collapse sub-menu mega-sub-menu" id="features-links">
                  <a href="#header-style-links" className="list-group-item" data-toggle="collapse">Header<span><i className="fa fa-caret-down arrow" /></span></a>
                  <div className="collapse sub-menu mega-sub-menu-links" id="header-style-links">
                    <a href="feature-header-style-1.html" className="list-group-item">Header Style 1</a>
                    <a href="feature-header-style-2.html" className="list-group-item">Header Style 2</a>
                    <a href="feature-header-style-3.html" className="list-group-item">Header Style 3</a>
                    <a href="feature-header-style-4.html" className="list-group-item">Header Style 4</a>
                    <a href="feature-header-style-5.html" className="list-group-item">Header Style 5</a>
                    <a href="feature-header-style-6.html" className="list-group-item">Header Style 6</a>
                  </div>
                  <a href="#page-title-style-links" className="list-group-item" data-toggle="collapse">Page Title<span><i className="fa fa-caret-down arrow" /></span></a>
                  <div className="collapse sub-menu mega-sub-menu-links" id="page-title-style-links">
                    <a href="feature-page-title-style-1.html" className="list-group-item">Page Title Style 1</a>
                    <a href="feature-page-title-style-2.html" className="list-group-item">Page Title Style 2</a>
                    <a href="feature-page-title-style-3.html" className="list-group-item">Page Title Style 3</a>
                    <a href="feature-page-title-style-4.html" className="list-group-item">Page Title Style 4</a>
                    <a href="feature-page-title-style-5.html" className="list-group-item">Page Title Style 5</a>
                    <a href="feature-page-title-style-6.html" className="list-group-item">Page Title Style 6</a>
                  </div>
                  <a href="#footer-style-links" className="list-group-item" data-toggle="collapse">Footer<span><i className="fa fa-caret-down arrow" /></span></a>
                  <div className="collapse sub-menu mega-sub-menu-links" id="footer-style-links">
                    <a href="feature-footer-style-1.html" className="list-group-item">Footer Style 1</a>
                    <a href="feature-footer-style-2.html" className="list-group-item">Footer Style 2</a>
                    <a href="feature-footer-style-3.html" className="list-group-item">Footer Style 3</a>
                    <a href="feature-footer-style-4.html" className="list-group-item">Footer Style 4</a>
                    <a href="feature-footer-style-5.html" className="list-group-item">Footer Style 5</a>
                  </div>
                  <a href="#f-blog-links" className="list-group-item" data-toggle="collapse">Blog<span><i className="fa fa-caret-down arrow" /></span></a>
                  <div className="collapse sub-menu mega-sub-menu-links" id="f-blog-links">
                    <a href="blog-listing-left-sidebar.html" className="list-group-item">Blog Listing Left Sidebar</a>
                    <a href="blog-listing-right-sidebar.html" className="list-group-item">Blog Listing Right Sidebar</a>
                    <a href="blog-detail-left-sidebar.html" className="list-group-item">Blog Detail Left Sidebar</a>
                    <a href="blog-detail-right-sidebar.html" className="list-group-item">Blog Detail Right Sidebar</a>
                  </div>
                  <a href="#f-gallery-links" className="list-group-item" data-toggle="collapse">Gallery<span><i className="fa fa-caret-down arrow" /></span></a>
                  <div className="collapse sub-menu mega-sub-menu-links" id="f-gallery-links">
                    <a href="gallery-masonry.html" className="list-group-item">Gallery Masonry</a>
                    <a href="gallery-2-columns.html" className="list-group-item">Gallery 2 Columns</a>
                    <a href="gallery-3-columns.html" className="list-group-item">Gallery 3 Columns</a>
                    <a href="gallery-4-columns.html" className="list-group-item">Gallery 4 Columns</a>
                  </div>
                  <a href="#f-forms-links" className="list-group-item" data-toggle="collapse">Forms<span><i className="fa fa-caret-down arrow" /></span></a>
                  <div className="collapse sub-menu mega-sub-menu-links" id="f-forms-links">
                    <a href="login-1.html" className="list-group-item">Login 1</a>
                    <a href="login-2.html" className="list-group-item">Login 2</a>
                    <a href="registration-1.html" className="list-group-item">Registration 1</a>
                    <a href="registration-2.html" className="list-group-item">Registration 2</a>
                    <a href="forgot-password-1.html" className="list-group-item">Forgot Password 1</a>
                    <a href="forgot-password-2.html" className="list-group-item">Forgot Password 2</a>
                  </div>
                </div>
                <a href="#pages-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-clone link-icon" /></span>Pages<span><i className="fa fa-chevron-down arrow" /></span></a>
                <div className="collapse sub-menu" id="pages-links">
                  <div className="list-group-heading list-group-item">Standard <span>Pages</span></div>
                  <a href="about-us-1.html" className="list-group-item">About Us 1</a>
                  <a href="about-us-2.html" className="list-group-item">About Us 2</a>
                  <a href="services-1.html" className="list-group-item">Services 1</a>
                  <a href="services-2.html" className="list-group-item">Services 2</a>
                  <a href="team-1.html" className="list-group-item">Our Team 1</a>
                  <a href="team-2.html" className="list-group-item">Our Team 2</a>
                  <a href="contact-us-1.html" className="list-group-item">Contact Us 1</a>
                  <a href="contact-us-2.html" className="list-group-item">Contact Us 2</a>
                  <div className="list-group-heading list-group-item">User <span>Dashboard</span></div>
                  <a href="dashboard-1.html" className="list-group-item">Dashboard 1</a>
                  <a href="dashboard-2.html" className="list-group-item">Dashboard 2</a>
                  <a href="user-profile.html" className="list-group-item">User Profile</a>
                  <a href="booking.html" className="list-group-item">Booking</a>
                  <a href="wishlist.html" className="list-group-item">Wishlist</a>
                  <a href="cards.html" className="list-group-item">Cards</a>
                  <div className="list-group-heading list-group-item">Special <span>Pages</span></div>
                  <a href="error-page-1.html" className="list-group-item">404 Page 1</a>
                  <a href="error-page-2.html" className="list-group-item">404 Page 2</a>
                  <a href="coming-soon-1.html" className="list-group-item">Coming Soon 1</a>
                  <a href="coming-soon-2.html" className="list-group-item">Coming Soon 2</a>  
                  <a href="faq-left-sidebar.html" className="list-group-item">FAQ Left Sidebar</a>
                  <a href="faq-right-sidebar.html" className="list-group-item">FAQ Right Sidebar</a> 
                  <a href="testimonials-1.html" className="list-group-item">Testimonials 1</a>
                  <a href="testimonials-2.html" className="list-group-item">Testimonials 2</a>
                  <div className="list-group-heading list-group-item">Extra <span>Pages</span></div>
                  <a href="before-you-fly.html" className="list-group-item">Before Fly</a>
                  <a href="travel-insurance.html" className="list-group-item">Travel Insurance</a>
                  <a href="travel-guide.html" className="list-group-item">Travel Guide</a>
                  <a href="holidays.html" className="list-group-item">Holidays</a>
                  <a href="thank-you.html" className="list-group-item">Thank You</a>
                  <a href="payment-success.html" className="list-group-item">Payment Success</a>
                  <a href="pricing-table-1.html" className="list-group-item">Pricing Table 1</a> 
                  <a href="pricing-table-2.html" className="list-group-item">Pricing Table 2</a>
                  <a href="popup-ad.html" className="list-group-item">Popup Ad</a>
                </div> end sub-menu */}
              </div>{/* end list-group */}
            </div>{/* end main-menu */}
          </div>{/* end mySidenav */}
        </div>
     

        )
    }
}

export default connect(state => state)(Sidebar);