import React from 'react';
import './OrderList.css';
import image from '../../images/plant-care.jpg';


const OrderList = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3 mb-3">
                    <div class="card text-white order-card-box">
                        <img src={image} class="order-card-img" alt="..." />
                        <div class="card-img-overlay d-flex justify-content-center align-items-center order-text-box my-auto m-auto">
                            <div>
                                <h6 className="w-50 text-center ms-auto status">Pending</h6>
                                <h3 class="card-title">Lorem, ipsum dolor.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magni.
                                </p>

                                <button className="btn btn-danger">Cancel Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrderList;