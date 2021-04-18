import React from 'react';

const ServiceOrderCard = ({ service }) => {

    const { _id, imgUrl, title, price, description } = service;

    return (
        <div className="card text-white order-card-box">
            <img src={imgUrl} className="order-card-img" alt="..." />
            <div className="card-img-overlay d-flex justify-content-center align-items-center order-text-box my-auto m-auto">
                <div>
                    <h3 className="card-title">{title}</h3>
                    <p>
                        {description}
                    </p>
                    <h4 className="order-service-price py-2 px-3 w-50 text-center">${price}</h4>
                </div>
            </div>
        </div>
    );
};

export default ServiceOrderCard;