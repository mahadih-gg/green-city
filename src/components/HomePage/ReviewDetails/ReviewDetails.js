import React from 'react';
import './ReviewDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewDetails = ({ review }) => {
    const { name, identity, userProfile, title, description, rating } = review;
    return (
        <div className="col-md-4 mb-4">
            <div className="card review-card">
                <div className="user-img-box">
                    <img src={userProfile} alt="" />
                </div>
                <div className="pt-4 pe-4 user-details ms-auto">
                    <h4>{name}</h4>
                    <p>{identity}</p>
                    <h5 className="rating py-1 text-center">{rating} <FontAwesomeIcon icon={faStar} /> </h5>
                </div>
                <div className="review-details p-5">
                    <h3 className="pb-3">{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;