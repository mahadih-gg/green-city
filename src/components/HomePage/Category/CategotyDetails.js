import React from 'react';
import { Link } from 'react-router-dom';

const CategotyDetails = ({ category }) => {
    const { title, type, background } = category


    return (
        <div className="col-md-3 category-box">
            <Link to="/">
                <div class="card text-dark category-box p-0 m-0">
                    <img src={background} class="card-img" alt="..." />
                    <div class="card-img-overlay d-flex align-items-center">
                        <div className="ms-3">
                            <h2 class="card-title">{title}</h2>
                            <h4>{type}</h4>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategotyDetails;