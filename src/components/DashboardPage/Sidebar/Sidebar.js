import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThList, faCalendar, faPlusCircle, faThLarge, faShoppingCart, faUserShield, faClipboardList, faCommentDots, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, useRouteMatch } from 'react-router-dom';
import { UserContext } from '../../../App';


const Sidebar = () => {

    let { path, url } = useRouteMatch();


    return (
        <div className="sidebar d-flex justify-content-center">
            <div className="p2-5 sidebarLink">
                <h5><Link to="/dashboard"><FontAwesomeIcon icon={faThList} className="me-2" />Dashboard</Link></h5>

                <h5><Link to={`${url}/manageOrders`}><FontAwesomeIcon icon={faCalendar} className="me-2" />Manage Orders</Link></h5>

                <h5><Link to={`${url}/addService`}><FontAwesomeIcon icon={faPlusCircle} className="me-2" />Add Service</Link></h5>

                <h5><Link to={`${url}/manageServices`}><FontAwesomeIcon icon={faThLarge} className="me-2" />Manage Services</Link></h5>

                <h5><Link to={`${url}/makeAdmin`}><FontAwesomeIcon icon={faUserShield} className="me-2" />Make Admin</Link></h5>

                <h5><Link to={`${url}/order`}><FontAwesomeIcon icon={faShoppingCart} className="me-2" />Order</Link></h5>

                <h5><Link to={`${url}/orderList`}><FontAwesomeIcon icon={faClipboardList} className="me-2" />Order list</Link></h5>

                <h5><Link to={`${url}/addReview`}><FontAwesomeIcon icon={faCommentDots} className="me-2" />Review</Link></h5>

                <h4 className="mt-5">
                    <Link to=""><FontAwesomeIcon icon={faSignOutAlt} className="me-2" />Log Out</Link>
                </h4>

            </div>
        </div>
    );
};

export default Sidebar;