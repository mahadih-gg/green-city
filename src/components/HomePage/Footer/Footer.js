import React from 'react';
import './Footer.css';
import brandLogo from '../../../images/logo.png'
import { faFacebookSquare, faTwitter, faYoutube, faGooglePlusSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faFax } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-5">
            <div className="container">

                <div className="row">
                    <div className="col-md-3">
                        <div className="brand-logo">
                            <img src={brandLogo} alt="" />
                        </div>
                        <p className="text-white mt-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique assumenda cupiditate eligendi facilis libero inventore omnis.
                    </p>
                        <div className="social-ico-container w-100">
                            <Link to="/"><FontAwesomeIcon className="social-ico" icon={faFacebookSquare} /></Link>
                            <Link to="/"><FontAwesomeIcon className="social-ico" icon={faInstagramSquare} /></Link>
                            <Link to="/"><FontAwesomeIcon className="social-ico" icon={faTwitter} /></Link>
                            <Link to="/"><FontAwesomeIcon className="social-ico" icon={faGooglePlusSquare} /></Link>
                            <Link to="/"><FontAwesomeIcon className="social-ico" icon={faYoutube} /></Link>
                        </div>
                    </div>

                    <div className="col-md-2 text-white">
                        <h4 className="mb-4">CATEGORY</h4>
                        <h6>Indoor Plants</h6>
                        <h6>Outdoor Plants</h6>
                        <h6>Best Selling</h6>
                        <h6>Top Collection</h6>
                        <h6>About Our Shop</h6>
                    </div>

                    <div className="col-md-2 text-white">
                        <h4 className="mb-4">QUICK LINK</h4>
                        <h6>About Us</h6>
                        <h6>Contact Us</h6>
                        <h6>Faq</h6>
                        <h6>Wishlist</h6>
                        <h6>Lookbook</h6>
                    </div>

                    <div className="col-md-2 text-white">
                        <h4 className="mb-4">CATALOG</h4>
                        <h6>Left Sidebar</h6>
                        <h6>Right Sidebar</h6>
                        <h6>Sidebar Popup</h6>
                        <h6>Without Sidebar</h6>
                        <h6>4 Grid</h6>
                    </div>

                    <div className="col-md-3 text-white">
                        <h4 className="mb-4">STORE INFO</h4>

                        <h6><span className="me-2"><FontAwesomeIcon icon={faMapMarkerAlt} /></span> Furniture Shop Demo Store Demo Store USA</h6>

                        <h6><span className="me-2"><FontAwesomeIcon icon={faPhoneAlt} /></span> Call Us: 193-486-7798</h6>

                        <h6><span className="me-2"><FontAwesomeIcon icon={faEnvelope} /></span> Email Us: Support@Pixelstrep.Com</h6>

                        <h6><span className="me-2"><FontAwesomeIcon icon={faFax} /></span> Fax: 123456</h6>


                    </div>

                </div>
                <p className="text-center text-white pb-3">&copy; 2021 made by Mahadi Hasan. </p>
            </div>
        </footer>
    );
};

export default Footer;