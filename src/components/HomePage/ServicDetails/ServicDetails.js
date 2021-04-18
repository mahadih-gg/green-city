import React from 'react';
import { Link } from 'react-router-dom';
import './ServicDetails.css';

const ServicDetails = ({ service }) => {
    const { _id, imgUrl, title, price, description } = service;

    return (
        <div className="col-md-4 mb-4">
            <Link to={`/dashboard/order/${_id}`}>
                <div class="card bg-dark text-white service-box">
                    <img src={imgUrl} class="card-img" alt="..." />
                    <div class="card-img-overlay d-flex justify-content-center align-items-center service-text-box w-75 h-75 my-auto m-auto">
                        <div>
                            <h3 class="card-title">{title}</h3>
                            <h2 className="color-primary service-price">${price}</h2>
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServicDetails;