import React from 'react';
import './ReviewDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewDetails = ({ review }) => {
    const { name, identity, profileImg, reviewHeader, reviewDetails, rating } = review;
    return (
        <div className="col-md-4 mb-4">
            <div className="card review-card">
                <div className="user-img-box">
                    <img src={profileImg} alt="" />
                </div>
                <div className="pt-4 pe-4 user-details ms-auto">
                    <h3>{name}</h3>
                    <p>{identity}</p>
                    <h5 className="rating py-1 text-center">{rating} <FontAwesomeIcon icon={faStar} /> </h5>
                </div>
                <div className="review-details p-5">
                    <h3 className="pb-3">{reviewHeader}</h3>
                    <p>{reviewDetails}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;