import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import user from '../../../images/user.png';
import logo from '../../../images/logo.png';

const Header = () => {
    const [searchBox, setSearchBox] = useState(false);
    const [profileBox, setProfileBox] = useState(false);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-5" to="/"><img src={logo} height="70px" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <Link className="nav-link active me-5" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-5" to="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-5" to="/">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-5" to="/">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-5" to="/">Admin</Link>
                            </li>
                        </ul>
                        <div className="">
                            <button onClick={() => {
                                setSearchBox(!searchBox)
                                setProfileBox(false)
                            }} className="btn-search"><span><FontAwesomeIcon icon={faSearch} /></span></button>
                            <Link to="/logIn"><button className="btn btn-link ps-3">Log In</button></Link>
                        </div>
                        <div className="btn-profile px-4">
                            <button onClick={() => {
                                setProfileBox(!profileBox)
                                setSearchBox(false)
                            }} >
                                <img src={user} height="40px" alt="" />
                            </button>
                        </div>
                        <div>
                        </div>
                    </div>

                </div>
            </nav>

            {
                searchBox &&
                <div className="input-group w-25 position-absolute end-0 search-box">
                    <input type="text" className="form-control" placeholder="Search here" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><span><FontAwesomeIcon icon={faSearch} /></span></button>
                </div>
            }
            {
                profileBox &&
                <div className="profile-box position-absolute end-0">
                    <div>
                        <h4>mahadi.hasan.937524.mh@gmail.com</h4>
                    </div>
                </div>
            }
        </div>
    );
};

export default Header;