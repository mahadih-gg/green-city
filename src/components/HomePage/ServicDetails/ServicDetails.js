import React from 'react';
import { Link } from 'react-router-dom';
import './ServicDetails.css';

const ServicDetails = ({ service }) => {
    return (
        <div className="col-md-4 mb-4">
            <Link to="/">
                <div class="card bg-dark text-white service-box">
                    <img src={service.imgUrl} class="card-img" alt="..." />
                    <div class="card-img-overlay d-flex justify-content-center align-items-center service-text-box w-75 h-50 my-auto m-auto">
                        <h2 class="card-title">{service.name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServicDetails;