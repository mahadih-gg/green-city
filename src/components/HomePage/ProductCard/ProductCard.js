import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({ tree }) => {
    const { name, image, price } = tree
    return (
        <div className="col-md-3 mb-4">
            <Link to='/' className="text-dark text-decoration-none">
                <div className="card card-custom">
                    <div className="m-auto">
                        <img height="300px" src={image} alt="" />
                    </div>
                    <h4 className="card-title text-center mt-3">{name}</h4>
                    <h4 className="text-center pb-4">${price}</h4>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;